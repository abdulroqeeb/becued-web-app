import React from 'react';
import { useNavigate } from 'react-router-dom';


function NoRecord() {

    const navigate = useNavigate();


    return (
        <div className="formBox">
            <div className="row">

                <div className="col-md-5 mx-auto">
                    <div className="accountCreated text-center mt-3">

                        <center className="mt-5 mb-5">
                            <img className="createdImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1658225181/becued/assets/Bell_perspective_matte_s_1_if0exy.png" alt="created" />
                        </center>

                        <p className="text-center">No celebrity here yet</p>

                        <br />
                        <br />
                        <div className="mb-4">
                            <button onClick={() => navigate(-1)} type="button" className="btn btn-block buttonStyles"
                            >Back to Previous</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoRecord;