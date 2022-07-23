import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Wallpaper from "../../Wallpaper";


function AccountCreated() {

    const { state } = useLocation();
    const navigate = useNavigate();


    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6 disp-large">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="accountCreated text-center mt-3">

                        <center className="mt-5 mb-5">
                            <img className="createdImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655797266/becued/assets/drum_a_rerl1p.png" alt="created" />
                        </center>



                        <h1>Account Created</h1>
                        <p className="text-center">Welcome to Becued.
                            Connect with your favourite personalities.
                            Plus you get to explore our awesome features</p>


                        <br />
                        <br />
                        <br />
                        <div className="mb-4">
                            <button onClick={(e) => navigate('/add-interest', {state})} type="button" className="btn btn-block buttonStyles"
                            >Add your interests</button>

                        </div>

                        <p className="text-center"><Link style={{ color: 'white', textDecoration: 'none', fontSize: '16px', lineHeight: '10.36' }} to={'/home'}>Skip for now</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountCreated;