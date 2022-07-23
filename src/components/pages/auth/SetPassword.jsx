import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import Wallpaper from '../../Wallpaper';
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2' : 'https://api-v2-staging.becued.com/api/v2'}`;

const ACCOUNT_URL = `${BASE_URL}/settings/account-profile`;

function SetPassword() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [iconSpecialChar, seticonSpecialChar] = useState('fa fa-circle-thin');
    const [iconWithUpper, seticonWithUpper] = useState('fa fa-circle-thin');
    const [iconWithLower, seticonWithLower] = useState('fa fa-circle-thin');

    const [password, setPassword] = useState('');
    const [btnAction, setBtnAction] = useState('');


    useEffect(() => {

        if (password !== '') {
            if (password.match(/[A-Z]/)) {
                seticonWithUpper('fa fa-check-square-o');
            }
            else {
                seticonWithUpper('fa fa-circle-thin');
            }
            if (password.match(/[a-z]/)) {
                seticonWithLower('fa fa-check-square-o');
            }
            else {
                seticonWithLower('fa fa-circle-thin');

            }
            if (password.match(/[!\@\#\$\%\^\&\*\(\)\-\+\=\?\/\<\>\,\.\;\:\'\"\{\}\[\]]/)) {
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


    }, [password, iconSpecialChar, iconWithUpper, iconWithLower])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const data = {
                password, _id: state._id
            }

            var config = {
                method: 'patch',
                url: ACCOUNT_URL,
                data
            };

            const response = await axios(config);


            setPassword('');

            showMessage('Great!', response.data.message, '#291743');

            navigate('/add-birthday', { state });
            
        } catch (error) {

            if (error.response.data) {
                showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
            }
            else {
                showMessage('Oops!', error.message, '#a10b96');
            }
        }

       
    }


    function toggleEye() {
        document.getElementById('password').setAttribute('type', 'text');
        document.getElementById('eye').classList.add('d-none');
        document.getElementById('eyeSlash').classList.remove('d-none');
    }

    function untoggleEye() {
        document.getElementById('password').setAttribute('type', 'password');
        document.getElementById('eye').classList.remove('d-none');
        document.getElementById('eyeSlash').classList.add('d-none');
    }


    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6 disp-large">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Set Password</h1>
                        <p>This is the password you will use to access your account</p>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input type="password"
                                    className="form-control inputField" 
                                    name="password" 
                                    id="password" 
                                    placeholder="************" 
                                    autoComplete="false"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}

                                     />
                                <span className="fontEye">
                                    <i className="fa fa-eye" aria-hidden="true" id='eye' onClick={toggleEye}></i>
                                    <i className="fa fa-eye-slash d-none" aria-hidden="true" id='eyeSlash' onClick={untoggleEye}></i>
                                </span>
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
                                >Next</button>

                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetPassword;