import React from 'react'
import Header from '../../includes/Header'
import { Link } from 'react-router-dom'
import UpcomingSession from '../../UpcomingSession';
import PastSession from '../../PastSession';
function MyProfile() {

    const user = JSON.parse(localStorage.user);

    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <h5 className="text-white mb-5 pt-4" style={{ fontSize: '25px', fontWeight: '600' }}>My Profile</h5>

                <div className="card mb-5">

                    <div className="card-body pt-4" style={{ paddingBottom: '100px' }}>

                        <div className="row">

                            <div className="col-md-2">
                                <p>
                                    <img className="becuedProfileAvatar" alt="becuedProfileAvatar" src={user.avatar} />
                                </p>
                            </div>
                            <div className="col-md-8 mt-2 mb-2">
                                <p style={{ position: "relative", fontSize: '24px', fontWeight: '600' }}>{user.fullname}</p>
                                <small style={{ position: "relative", bottom: "15%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}>@{user.username}</small>
                            </div>
                            <div className="col-md-2">
                                <Link to={"/profile/edit"} type="button" className="btn btn-primary text-center" style={{ padding: '10px 50px', background: 'linear-gradient(128.56deg, #FEAD67 -23.19%, #F960F9 114.09%)', border: 'none' }}>Edit</Link>
                            </div>
                        </div>


                        <div className="mt-5 px-3 py-3">
                            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                                <li className="nav-item tablisting" role="presentation">
                                    <a className="nav-link active" id="upcoming-tab" data-bs-toggle="tab" data-bs-target="#upcoming" type="button" role="tab" aria-controls="upcoming" aria-selected="true" href="#upcoming">Upcoming</a>

                                </li>
                                <li className="nav-item tablisting" role="presentation">
                                    <a className="nav-link" id="pastSession-tab" data-bs-toggle="tab" data-bs-target="#pastSession" type="button" role="tab" aria-controls="pastSession" aria-selected="false" href="#pastSession">Past sessions</a>
                                </li>

                            </ul>
                            <div className="tab-content" id="myTabContent">


                                <UpcomingSession />


                                <PastSession />


                            </div>
                        </div>




                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyProfile;
