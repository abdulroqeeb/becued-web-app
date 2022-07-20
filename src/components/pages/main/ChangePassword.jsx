import React, { useState, useEffect } from 'react'
import Header from '../../includes/Header'
import { Link } from 'react-router-dom'


function ChangePassword() {

    const [iconSpecialChar, seticonSpecialChar] = useState('fa fa-circle-thin');
    const [iconWithUpper, seticonWithUpper] = useState('fa fa-circle-thin');
    const [iconWithLower, seticonWithLower] = useState('fa fa-circle-thin');
    // const iconChecked = 'fa fa-check-square-o';

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    useEffect(() => {
        if (iconWithUpper.match(/[A-Z]/)) {
            seticonWithUpper('fa fa-check-square-o');
        }
        if (iconWithUpper.match(/[a-z]/)) {
            seticonWithLower('fa fa-check-square-o');
        }
        if (iconSpecialChar.match(/[!\@\#\$\%\^\&\*\(\)\-\+\=\?\/\<\>\,\.\;\:\'\"\{\}\[\]]/)) {
            seticonSpecialChar('fa fa-check-square-o');
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                                            autoComplete="false" />

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
                                        <Link to={'/add-birthday'} type="button" className="btn btn-block buttonStyles"
                                        >Confirm</Link>

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
