import React from 'react';
import { Link } from 'react-router-dom';
import Wallpaper from "../../Wallpaper";

function Login() {


    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Login your account</h1>
                        <p style={{ fontSize: "18px", color: "#CACBD3" }}>Login to discover all amazing celebrities and enjoy our features.</p>

                        <br />

                        <form action="#" method="post">
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-white">Email Address</label>
                                <input type="email"
                                    className="form-control inputField" name="email" placeholder="Enter your email address" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input type="password"
                                    className="form-control inputField" name="password" id="password" placeholder="************" autoComplete="false" />

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
                                <Link to="/home" type="button" className="btn btn-block buttonStyles"
                                >Login</Link>

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