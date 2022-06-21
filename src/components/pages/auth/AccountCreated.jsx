import React from 'react';
import Wallpaper from "../../Wallpaper";




function AccountCreated() {


    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="accountCreated text-center mt-3">

                        <center className="mt-5 mb-5">
                            <img className="createdImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655797266/becued/assets/drum_a_rerl1p.png" alt="created" />
                        </center>



                        <h1>Account Created</h1>
                        <p className="text-center" style={{ paddingLeft: '100px', paddingRight: '100px' }}>Welcome to Becued.
                            Connect with your favourite personalities.
                            Plus you get to explore our awesome features</p>


                        <br />
                        <br />
                        <br />
                        <div className="mb-4">
                            <button type="button" className="btn btn-block buttonStyles"
                            >Add your interests</button>

                        </div>

                        <p className="text-center"><a style={{ color: 'white', textDecoration: 'none', fontSize: '16px', lineHeight: '10.36' }} href="http://">Skip for now</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountCreated;