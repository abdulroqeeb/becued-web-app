import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AllInterests from './AllInterests';

function AddInterest() {


    return (
        <div>

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <div style={{ paddingBottom: '100px' }}>
                    <h1 className="card-title mb-5" style={{ fontWeight: '700', fontSize: '32px', color: 'white' }}>Add Interest</h1>
                    <AllInterests />
                </div>

            </div>
        </div>
    );
}


export default AddInterest;