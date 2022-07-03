import React from 'react'
import Header from '../../includes/Header'

function BookSession() {
    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>


                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <div className="col-md-2">
                            <i className="fa fa-arrow"></i>
                        </div>
                        <div className="col-md-10">
                            <h5 className="text-white mb-5 pt-4" style={{ fontSize: '25px', fontWeight: '600' }}>Book A Session</h5>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookSession;
