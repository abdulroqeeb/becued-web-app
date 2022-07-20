import React, { useState, useEffect } from 'react'
import Header from '../../includes/Header'
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const CHANGEPASSWORD_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/changepassword' : 'https://api-v2-staging.becued.com/api/v2/fan/changepassword'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function ChangePassword() {

    const [iconSpecialChar, seticonSpecialChar] = useState('fa fa-circle-thin');
    const [iconWithUpper, seticonWithUpper] = useState('fa fa-circle-thin');
    const [iconWithLower, seticonWithLower] = useState('fa fa-circle-thin');
    // const iconChecked = 'fa fa-check-square-o';

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [btnAction, setBtnAction] = useState('');


    useEffect(() => {

        if (newPassword !== '') {
            if (newPassword.match(/[A-Z]/)) {
                seticonWithUpper('fa fa-check-square-o');
            }
            else {
                seticonWithUpper('fa fa-circle-thin');
            }
            if (newPassword.match(/[a-z]/)) {
                seticonWithLower('fa fa-check-square-o');
            }
            else {
                seticonWithLower('fa fa-circle-thin');

            }
            if (newPassword.match(/[!\@\#\$\%\^\&\*\(\)\-\+\=\?\/\<\>\,\.\;\:\'\"\{\}\[\]]/)) {
                seticonSpecialChar('fa fa-check-square-o');
            }
            else {
                seticonSpecialChar('fa fa-circle-thin');

            }

            if (iconSpecialChar === 'fa fa-check-square-o' && iconWithUpper === 'fa fa-check-square-o' && iconWithLower === 'fa fa-check-square-o') {
                setBtnAction('');
            }



        }
        else {
            seticonWithUpper('fa fa-circle-thin');
            seticonWithLower('fa fa-circle-thin');
            seticonSpecialChar('fa fa-circle-thin');
            setBtnAction('disabled');
        }


    }, [newPassword, iconSpecialChar, iconWithUpper, iconWithLower])

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {


            if (newPassword !== confirmPassword) {
                return showMessage('Oops!', 'Confirm Password does not match', '#a10b96');
            }

            const data = {
                old_password: oldPassword,
                new_password: newPassword,
                confirm_password: confirmPassword
            }

            var config = {
                method: 'post',
                url: CHANGEPASSWORD_URL,
                headers,
                data
            };

            const response = await axios(config);

            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');

            showMessage('Great!', response.data.message, '#291743');

        } catch (error) {

            if (!error.response.data) {
                showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
            }
            else {
                showMessage('Oops!', error.response?.data.message, '#a10b96');
            }
        }


    }

    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <h5 className="text-white mb-5 pt-4" style={{ fontSize: '25px', fontWeight: '600' }}>Change Password</h5>

                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>

                        <div className="col-md-6">
                            <div className="createAccount">
                                <p className="mb-5" style={{ fontSize: '16px', fontWeight: '400', color: '#CACBD3' }}>Please enter the correct information to reset your password</p>

                                <form action="#" method="post">
                                    <div className="mb-4">
                                        <label htmlFor="oldPassword" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Old Password</label>
                                        <input
                                            type="password"
                                            className="form-control inputField"
                                            name="password"
                                            id="oldPassword"
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            value={oldPassword}
                                            placeholder="************"
                                            autoComplete="false"
                                            required />

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="newPassword" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>New Password</label>
                                        <input
                                            type="password"
                                            className="form-control inputField"
                                            name="password"
                                            id="newPassword"
                                            placeholder="************"
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            value={newPassword}
                                            autoComplete="false"
                                            required
                                        />

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="confirmPassword" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control inputField"
                                            name="password"
                                            id="confirmPassword"
                                            placeholder="************"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            value={confirmPassword}
                                            autoComplete="false"
                                            required
                                        />

                                    </div>

                                    <div className="mb-4">
                                        <p className="passInfo">Passswords should contain the following</p>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <i className={iconSpecialChar} aria-hidden="true"></i> At least a special character
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <i className={iconWithUpper} aria-hidden="true"></i> One uppercase letter
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <i className={iconWithLower} aria-hidden="true"></i> One lowercase letter
                                            </div>
                                        </div>

                                    </div>


                                    <br />
                                    <br />
                                    <div className="mb-4">
                                        <button onClick={handleSubmit} type="button" className="btn btn-block buttonStyles" disabled={btnAction}
                                        >Confirm</button>

                                    </div>

                                </form>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
