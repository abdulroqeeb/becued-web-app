import React from 'react'
import Header from '../../includes/Header'
import { Link } from "react-router-dom"
function BookForMe() {
    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>


                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <div className="row mt-5">

                            <div className="col-md-12 mb-5">

                                <h5 className="text-white" style={{ fontSize: '25px', fontWeight: '600' }}><Link to={"/booking"}><i class="fa fa-arrow-left" aria-hidden="true" style={{ color: '#FD9B8A' }}></i></Link> Book A Session For Me</h5>
                            </div>

                            <div className="row mx-auto col-md-8">
                                <form>
                                    <center>
                                        <div className="row">
                                            <div className="col-md-6 mx-auto mb-5">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="bookImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044680/becued/assets/unsplash_2V4Qhq55maY_evvrcc.png" alt="celebimage" />
                                                        <p className="mt-4" style={{ fontSize: "14px", fontWeight: "600" }}>Starvia</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <img className="mt-5" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img className="bookImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044800/becued/assets/unsplash_cruUfe5g1Zk_e0ibmm.png" alt="celebimage" />
                                                        <p className="mt-4" style={{ fontSize: "14px", fontWeight: "600" }}>Kunle Shokunbi</p>
                                                    </div>
                                                </div>


                                            </div>
                                            <p className="mt-2 mb-3 text-center" style={{ fontSize: "14px", fontWeight: "400" }}>Fill the following details</p>

                                        </div>

                                    </center>


                                    {/* Main Form Here... */}




                                    <div className="mb-4">
                                        <label htmlFor="purpose" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Please select the purpose of the event</label>
                                        <select className="form-control form-select inputField" id="purpose" required>
                                            <option value="">Select title</option>
                                            <option value="Get Advice">Get Advice</option>
                                            <option value="Ask a question">Ask a question</option>
                                            <option value="Get a question">Get a question</option>
                                            <option value="Just gist">Just gist</option>
                                            <option value="Book a Linkup">Book a Linkup</option>
                                            <option value="Birthday">Birthday</option>
                                        </select>

                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="title" className="form-label text-white">What’s your title?</label>
                                        <input type="text"
                                            className="form-control inputField" name="title" required />
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="introduction" className="form-label text-white">Enter introduction message</label>
                                        <textarea type="text"
                                            className="form-control inputField" name="title" required></textarea>
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="sessionDate" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Select Session Date</label>
                                        <input type="date"
                                            className="form-control inputField" name="sessionDate" required />
                                    </div>


                                    <div className="mt-5 mb-4">
                                        <button className="btn btn-block buttonStyles"
                                        >Continue</button>

                                    </div>

                                </form>
                            </div>




                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookForMe;
