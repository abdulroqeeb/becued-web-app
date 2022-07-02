import React from 'react';
import Header from '../../includes/Header'
import Videos from '../../shoutouts/Videos';

function ShoutOut() {


    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <h5 className="card-title mb-3 pt-4">Shout-out Videos</h5>

                        <Videos />

                    </div>

                </div>
            </div>
        </div>
    );
}


export default ShoutOut;