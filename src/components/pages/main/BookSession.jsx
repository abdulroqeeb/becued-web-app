import React, { useState } from 'react'
import Header from '../../includes/Header'
import { useLocation, useNavigate } from "react-router-dom";

function BookSession() {


    const { state } = useLocation();
    const [celebs, setCelebs] = useState(state);
    const navigate = useNavigate();


    const handleForMe = (e) => {
        e.preventDefault();

        navigate('/booking/for-me', { state: { celebs, user: JSON.parse(localStorage.user) } });
    }
    const handleForFriend = (e) => {
        e.preventDefault();

        navigate('/booking/for-friend', { state: celebs });
    }


    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>


                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <div className="row mt-5">

                            <div className="col-md-12 mb-5">

                                <h5 className="text-white" style={{ fontSize: '25px', fontWeight: '600' }}><i className="fa fa-arrow-left" aria-hidden="true" style={{ color: '#FD9B8A' }}></i> Book A Session</h5>
                            </div>

                            <center>
                                <div className="imageHouse">
                                    <img className="bookImage" src={celebs.info.avatar} alt="celebimage" />
                                </div>

                                <p className="mt-2" style={{ fontSize: "20px", fontWeight: "600" }}>{celebs.info.stageName !== "NULL" ? celebs.info.stageName : celebs.info.fullname}</p>
                                <p style={{ fontSize: "10px", fontWeight: "400", position: "relative", bottom: "3%" }}>{(celebs.info.industry + "").split(",").join(" • ")}</p>


                                <div className="buttonSpace">
                                    <p>
                                        <button className="btn bookTypeBtn" onClick={handleForMe}>
                                            <div className="mt-2">
                                                <img className="bookTypeImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1642375277/becued/assets/Group_ctpkz5.svg" alt="celebimage" /> <span style={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px" }}>It's all for me</span> <span className="float-end"><i className="fa fa-angle-right" aria-hidden="true" style={{ fontSize: "16px", textAlign: "center", marginTop: "10px" }}></i></span>
                                            </div>
                                        </button>
                                        <button className="btn bookTypeBtn" onClick={handleForFriend}>
                                            <div className="mt-2">
                                                <img className="bookTypeImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656962855/becued/assets/friend_p1nt98.jpg" alt="celebimage" /> <span style={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px" }}>Book for a friend</span> <span className="float-end"><i className="fa fa-angle-right" aria-hidden="true" style={{ fontSize: "16px", textAlign: "center", marginTop: "10px" }}></i></span>
                                            </div>
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
