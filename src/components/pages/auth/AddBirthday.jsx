import React from 'react';
import Wallpaper from "../../Wallpaper";




function AddBirthday() {


    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Add Your Birthday</h1>
                        <p className="mt-3">Enter your birthday</p>

                        <form action="#" method="post">
                            <div className="mt-4 mb-4">
                                <label htmlFor="dob" className="form-label text-white" style={{ fontWeight: '600', fontSize: '16px' }}>Date of Birth</label>
                                <input type="text"
                                    className="form-control inputField" name="dob" id="dob" placeholder="Set date" autoComplete="false" />
                                <span className="fontDate">
                                    <i className="fa fa-calendar" aria-hidden="true" id='date'></i>
                                </span>
                            </div>

                            <div className="mb-4">
                                <p>By signing up I accept <span><a className="links" href="https://www.becued.com/terms" target="_blank" rel="noreferrer">terms of use</a></span> and <span><a className="links" href="https://www.becued.com/privacy" target="_blank" rel="noreferrer">privacy policy</a></span></p>
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
                            <div className="mt-5 mb-4">
                                <button type="button" className="btn btn-block buttonStyles"
                                >Save</button>

                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBirthday;