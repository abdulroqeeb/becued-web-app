import React from 'react';
import Wallpaper from "../../Wallpaper";




function SetPassword() {


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
                <div className="col-md-6">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Set Password</h1>
                        <p>This is the password you will use to access your account</p>

                        <form action="#" method="post">
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label text-white">Password</label>
                                <input type="password"
                                    className="form-control inputField" name="password" id="password" placeholder="************" autoComplete="false" />
                                <span className="fontEye">
                                    <i className="fa fa-eye" aria-hidden="true" id='eye' onClick={toggleEye}></i>
                                    <i className="fa fa-eye-slash d-none" aria-hidden="true" id='eyeSlash' onClick={untoggleEye}></i>
                                </span>
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

export default SetPassword;