import React, { useState } from 'react'
import { Button, Switch } from '@mui/material'
import Header from '../../includes/Header'
import { Link, useLocation, useNavigate } from "react-router-dom"


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BookPayment() {

    const { state } = useLocation();
    const navigate = useNavigate();

    console.log(state);

    const handleBack = (e) => {

        e.preventDefault();

        navigate(-1, { state: state.celebs })
    }


    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>


                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <div className="row mt-5">

                            <div className="col-md-12 mb-5">

                                <h5 className="text-white" style={{ fontSize: '25px', fontWeight: '600' }}><button onClick={handleBack} style={{ background: 'transparent', border: 'none' }}><i className="fa fa-arrow-left" aria-hidden="true" style={{ color: '#FD9B8A' }}></i></button> Book A Session For Me</h5>
                            </div>

                            <div className="col-md-8 mx-auto mb-5 itemBooked">
                                <div className="row mt-5">
                                    <div className="col-md-9">
                                        <p className="mx-auto">
                                            <img className="bookImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044349/becued/assets/unsplash_UFlO384euRI_ef94fi.png" alt="celeb" />
                                            <img style={{ width: '53px', marginLeft: "7px", marginRight: "7px" }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                            <img className="bookImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044680/becued/assets/unsplash_2V4Qhq55maY_evvrcc.png" alt="receiver" />
                                        </p>
                                    </div>
                                    <div className="col-md-3">
                                        <Button variant="outlined">EDIT</Button>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-9">
                                        <p style={{ fontSize: '16px' }}>“I hope I get inspired by you”</p>
                                        <p style={{ fontSize: '12px' }}>
                                            <span className="bookedCategory"><i class="fa fa-search catSearch" aria-hidden="true"></i> Ask a question</span>
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="row mx-auto col-md-8">

                                <p>Session Detail</p>

                                <div className="row mb-4">
                                    <div className="col-md-9">
                                        <p>Make public on my profile</p>
                                        <small style={{
                                            fontSize: '12px', color: '#A3A4B2', position: "relative", bottom: "30%"
                                        }}>This won’t appear untill session completed</small>
                                    </div>
                                    <div className="col-md-3">
                                        <Switch {...label} />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-9">
                                        <p>Text me when session is accepted</p>
                                        <small style={{
                                            fontSize: '12px', color: '#A3A4B2', position: "relative", bottom: "30%"
                                        }}>This won’t appear untill session completed</small>
                                    </div>
                                    <div className="col-md-3">
                                        <Switch {...label} defaultChecked />
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-md-9">
                                        <p>Booking Details</p>
                                        <small style={{
                                            fontSize: '12px', color: '#A3A4B2', position: "relative", bottom: "30%"
                                        }}>December 15, 2020, 11:00am</small>
                                    </div>
                                    <div className="col-md-3">
                                        <Switch {...label} defaultChecked />
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

export default BookPayment;
