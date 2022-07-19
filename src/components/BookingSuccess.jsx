import React from 'react';
import { Link } from 'react-router-dom';


function BookingSucceess() {


    return (
        <div className="formBox">
            <div className="row">

                <div className="col-md-5 mx-auto">
                    <div className="accountCreated text-center mt-3">

                        <center className="mt-5 mb-5">
                            <img className="createdImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1658187511/becued/assets/Check_perspective_matte_s_1_uja5bp.png" alt="created" />
                        </center>

                        <h1>Booking Successfully Created</h1>
                        <p className="text-center">You will receive the shoutout video once the artiste accepts it or get a refund if the request is declined</p>


                        <br />
                        <br />
                        <br />
                        <div className="mb-4">
                            <Link to={'/home'} type="button" className="btn btn-block buttonStyles"
                            >Back to Home</Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingSucceess;