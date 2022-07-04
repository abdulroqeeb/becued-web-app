import React from 'react'
import Header from '../../includes/Header'
import { Link } from 'react-router-dom'
function MyProfile() {
    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <h5 className="text-white mb-5 pt-4" style={{ fontSize: '25px', fontWeight: '600' }}>My Profile</h5>

                <div className="card mb-5">

                    <div className="card-body pt-4" style={{ paddingBottom: '100px' }}>

                        <div className="row">
                            <div className="col-md-2">
                                <img className="becuedProfileAvatar" alt="becuedProfileAvatar" src="https://res.cloudinary.com/becued-technologies/image/upload/v1651787521/becued/assets/Group_7420_b8qczo.svg" />
                            </div>
                            <div className="col-md-8 mt-2 mb-2">
                                <p style={{ position: "relative", fontSize: '24px', fontWeight: '600' }}>Anayo Obiajulu</p>
                                <small style={{ position: "relative", bottom: "15%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}>@anayo</small>
                            </div>
                            <div className="col-md-2">
                                <Link to={"/profile/edit"} type="button" className="btn btn-primary text-center" style={{ width: '140px', height: '48px', background: 'linear-gradient(128.56deg, #FEAD67 -23.19%, #F960F9 114.09%)', border: 'none' }}>Edit</Link>
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
                                <div className="tab-pane fade show active" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">
                                    <div className="row mt-5">
                                        <div className="col-md-12">
                                            <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1656805021/becued/assets/upcoming_nhcnnj.png" alt="bookedsession" style={{ width: "100%", height: "300px", objectFit: 'cover' }} />
                                        </div>
                                        <div className="col-md-12">
                                            <p className="mt-3" style={{ fontSize: "20px", fontWeight: "600" }}>Trevor Noah and Usman Abiola</p>
                                            <p className="text-white" style={{ position: "relative", bottom: "20%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}><small><span>
                                                <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652566139/becued/assets/Mask_zkov5e.svg" alt="" /></span>
                                                <span> 4 hours</span> - Session Time</small>
                                            </p>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1656805021/becued/assets/upcoming_nhcnnj.png" alt="bookedsession" style={{ width: "100%", height: "300px", objectFit: 'cover' }} />
                                        </div>
                                        <div className="col-md-12">
                                            <p className="mt-3" style={{ fontSize: "20px", fontWeight: "600" }}>Trevor Noah and Usman Abiola</p>
                                            <p className="text-white" style={{ position: "relative", bottom: "20%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}><small><span>
                                                <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652566139/becued/assets/Mask_zkov5e.svg" alt="" /></span>
                                                <span> 4 hours</span> - Session Time</small>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pastSession" role="tabpanel" aria-labelledby="pastSession-tab">
                                    <div className='row mt-5 itemBookedRow'>
                                        <div className="col-md-12 mb-5 itemBooked">
                                            <div className="row mt-5">
                                                <div className="col-md-9">
                                                    <p className="mx-auto">
                                                        <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044349/becued/assets/unsplash_UFlO384euRI_ef94fi.png" alt="celeb" />
                                                        <img style={{ width: '53px', marginLeft: "7px", marginRight: "7px" }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                                        <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044680/becued/assets/unsplash_2V4Qhq55maY_evvrcc.png" alt="receiver" />
                                                    </p>
                                                </div>
                                                <div className="col-md-3">
                                                    <p style={{ color: '#F960F9', fontSize: '13px' }}>Booked</p>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col-md-9">
                                                    <p style={{ fontSize: '30px' }}>“I hope I get inspired by you”</p>
                                                    <p style={{ fontSize: '12px' }}>
                                                        <span className="bookedCategory"><i class="fa fa-search catSearch" aria-hidden="true"></i> Ask a question</span> {new Date().toLocaleDateString()} - 10am EST
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-12 itemBooked">
                                            <div className="row mt-5">
                                                <div className="col-md-9">
                                                    <p className="mx-auto">
                                                        <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044349/becued/assets/unsplash_UFlO384euRI_ef94fi.png" alt="celeb" />
                                                        <img style={{ width: '53px', marginLeft: "7px", marginRight: "7px" }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                                        <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044680/becued/assets/unsplash_2V4Qhq55maY_evvrcc.png" alt="receiver" />
                                                    </p>
                                                </div>
                                                <div className="col-md-3">
                                                    <p style={{ color: '#F960F9', fontSize: '13px' }}>Booked</p>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col-md-9">
                                                    <p style={{ fontSize: '30px' }}>“I hope I get inspired by you”</p>
                                                    <p style={{ fontSize: '12px' }}>
                                                        <span className="bookedCategory"><i class="fa fa-search catSearch" aria-hidden="true"></i> Ask a question</span> {new Date().toLocaleDateString()} - 10am EST
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyProfile;
