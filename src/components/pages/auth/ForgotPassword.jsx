import React from 'react';
import { Link } from 'react-router-dom';
import Wallpaper from "../../Wallpaper";

function ForgotPassword() {
    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6 disp-large">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Forgot Password</h1>
                        <p style={{ fontSize: "18px", color: "#CACBD3", marginTop: '15px' }}>How do you want to receive the password reset code?</p>

                        <br />
                        <br />

                        <form action="#" method="post">
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-white">Choose method</label>
                                <select className="form-control form-select inputField">
                                    <option value="">Select</option>
                                    <option value="Email">Email</option>
                                    <option value="SMS">SMS</option>
                                </select>
                            </div>

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="mt-5 mb-4">
                                <Link to={"/reset-password"} type="button" className="btn btn-block buttonStyles"
                                >Reset</Link>

                            </div>



                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;