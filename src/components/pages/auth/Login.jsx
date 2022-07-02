import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Wallpaper from "../../Wallpaper";
import AuthContext from "../../../services/AuthProvider";
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';

// const LOGIN_URL = '/fan/login';
const LOGIN_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/login' : 'https://api-v2-staging.becued.com/api/v2/fan/login'}`;

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btnText, setBtnText] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
        setBtnText('Login');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setBtnText('Please wait ...');

        try {
            const data = {
                email, password,
            };
            const response = await axios.post(LOGIN_URL, data,);

            const token = response.data?.token;

            setAuth({ user: response.data?.data, token, password, email });

            setEmail('');
            setPassword('');
            setBtnText('Login');
            setSuccess(true);
            showMessage('Great!', `Welcome back ${response.data?.data.fullname}`, '#291743');

            setTimeout(() => {
                window.location.href = '/home';
            }, 1000);

        } catch (error) {
            console.log(error.response);
            setBtnText('Login');
            if (!error.response.data) {
                showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
            }
            else {
                showMessage('Oops!', error.response?.data.message, '#a10b96');
            }
            errRef.current.focus();
        }


    }

    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6 disp-large">
                    <Wallpaper />
                </div>
                <div className="col-md-6">

                    <div className="createAccount mt-3">
                        <h1>Login your account</h1>
                        <p style={{ fontSize: "18px", color: "#CACBD3" }}>Login to discover all amazing celebrities and enjoy our features.</p>

                        <br />

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-white">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control inputField"
                                    ref={userRef}
                                    placeholder="Enter your email address"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input
                                    type="password"
                                    className="form-control inputField"
                                    id="password"
                                    placeholder="************"
                                    autoComplete="off"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required

                                />

                            </div>

                            <div className="mb-4">

                                <div className="row">
                                    <div className="col-md-6 pb-3">
                                        <button style={{ width: "100%", fontSize: "14px", color: "white" }} type="button" className="btn btn-outline-secondary btn-block btn-lg socialSignInBtn"><img src="https://img.icons8.com/color/25/000000/google-logo.png" alt='googlesignin' /> Sign in with Google</button>
                                    </div>
                                    <div className="col-md-6 pb-3">
                                        <button style={{ width: "100%", fontSize: "14px", color: "white" }} type="button" className="btn btn-outline-secondary btn-block btn-lg socialSignInBtn"><i className="fa fa-apple signinIcon" aria-hidden="true"></i> Sign in with Apple</button>
                                    </div>
                                </div>




                            </div>

                            <div className="mt-5 mb-4">
                                <button className="btn btn-block buttonStyles"
                                >{btnText}</button>

                            </div>



                        </form>


                        <div className="text-center mt-5">
                            <p className="text-center" style={{ color: "#A3A4B2", fontSize: "16px", fontWeight: "400" }}>Don't have a Becued account yet?</p>
                            <Link to="/register" style={{ color: "#F960F9", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>Sign up on Becued</Link>
                        </div>
                        <div className="text-center mt-5">
                            <Link to={"/forgot-password"} style={{ color: "#A3A4B2", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}>Forgot Password ?</Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;