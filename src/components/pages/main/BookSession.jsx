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

                            <div className="col-md-12 mb-5">

                                <h5 className="text-white" style={{ fontSize: '25px', fontWeight: '600' }}><i class="fa fa-arrow-left" aria-hidden="true" style={{ color: '#FD9B8A' }}></i> Book A Session</h5>
                            </div>

                            <center>
                                <div className="imageHouse">
                                    <img className="bookImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044680/becued/assets/unsplash_2V4Qhq55maY_evvrcc.png" alt="celebimage" />
                                </div>

                                <p className="mt-2" style={{ fontSize: "20px", fontWeight: "600" }}>Starvia</p>
                                <p style={{ fontSize: "10px", fontWeight: "400", position: "relative", bottom: "4%" }}>Africans • Comedy • TV Show</p>


                                <div className="buttonSpace">
                                    <p>
                                        <button className="btn bookTypeBtn">
                                            <img className="bookTypeImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1642375277/becued/assets/Group_ctpkz5.svg" alt="celebimage" /> <span style={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}>It's all for me</span> <span className="float-end"><i class="fa fa-angle-right" aria-hidden="true" style={{ fontSize: "16px", textAlign: "center" }}></i></span>
                                        </button>
                                        <button className="btn bookTypeBtn">
                                            <img className="bookTypeImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656962855/becued/assets/friend_p1nt98.jpg" alt="celebimage" /> <span style={{ fontSize: "16px", fontWeight: "500", textAlign: "center" }}>Book for a friend</span> <span className="float-end"><i class="fa fa-angle-right" aria-hidden="true" style={{ fontSize: "16px", textAlign: "center" }}></i></span>
                                        </button>
                                    </p>
                                </div>


                                <div className="buttonSpace">
                                    <button className="btn bookTypeInfo">
                                        <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1656964389/becued/assets/calendar_1_bjwhnr.png" alt="imageItem" /><span> How does session booking work?</span>
                                    </button>
                                </div>


                            </center>

                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookSession;
