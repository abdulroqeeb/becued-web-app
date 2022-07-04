import React from 'react'
import Header from '../../includes/Header'

function BookSession() {
    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>


                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <div className="row mt-5">

                            <div className="col-md-12">

                                <h5 className="text-white" style={{ fontSize: '25px', fontWeight: '600' }}><i class="fa fa-arrow-left" aria-hidden="true" style={{ color: '#FD9B8A' }}></i> Book A Session</h5>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookSession;
