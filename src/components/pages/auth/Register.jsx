import React from 'react';
import Wallpaper from "../../Wallpaper";

function Register() {
    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Create an account</h1>
                        <p>Sign up to discover all amazing celebrities and enjoy our features.</p>

                        <form action="#" method="post">
                            <div className="mb-4">
                                <label htmlFor="fullname" className="form-label text-white">Full Name</label>
                                <input type="text"
                                    className="form-control inputField" name="fullname" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="username" className="form-label text-white">Username</label>
                                <input type="text"
                                    className="form-control inputField" name="username" placeholder="Enter your username" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-white">Email</label>
                                <input

                                    type="email" className="form-control inputField" name="email" id="talentemail"
                                    placeholder="Enter your email" />
                            </div>


                            <br />
                            <br />
                            <div className="mb-4">
                                <button type="button" className="btn btn-block buttonStyles"
                                >Next</button>

                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;