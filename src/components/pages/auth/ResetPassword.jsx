import React from 'react';
import { Link } from 'react-router-dom';
import Wallpaper from "../../Wallpaper";

function ResetPassword() {



    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Reset Password</h1>
                        <p style={{ fontSize: "18px", color: "#CACBD3" }}>How do you want to receive the password reset code?</p>

                        <br />

                        <form action="#" method="post">
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-white">Enter Password</label>
                                <input type="password"
                                    className="form-control inputField" name="newPassword" id="newpassword" placeholder="************" autoComplete="false" />

                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-white">Confirm Password</label>
                                <input type="password"
                                    className="form-control inputField" name="confirmPassword" id="confirmpassword" placeholder="************" autoComplete="false" />

                            </div>

                            <div className="mb-4">
                                <p className="passInfo">Passswords should contain the following</p>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <i className="fa fa-circle-thin" aria-hidden="true"></i> At least a special character
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <i className="fa fa-circle-thin" aria-hidden="true"></i> One uppercase letter
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <i className="fa fa-circle-thin" aria-hidden="true"></i> One lowercase letter
                                    </div>
                                </div>

                            </div>


                            <br />
                            <br />
                            <div className="mb-4">
                                <Link to={'/login'} type="button" className="btn btn-block buttonStyles"
                                >Reset</Link>

                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;