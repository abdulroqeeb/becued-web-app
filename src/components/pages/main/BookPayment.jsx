import React, { useState } from 'react'
import { Button, Switch } from '@mui/material'
import Header from '../../includes/Header'
import { useLocation, useNavigate } from "react-router-dom"
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

let BOOKING_URL;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function BookPayment() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [makePublic, setMakePublic] = useState(false);
    const [whenSessionAccepted, setwhenSessionAccepted] = useState(true);
    const [sessionAvailability, setsessionAvailability] = useState(true);

    console.log(state);

    let celebUrlId = state.celebs.info._id

    BOOKING_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/makeabooking/' + celebUrlId : 'https://api-v2-staging.becued.com/api/v2/fan/makeabooking/' + celebUrlId}`;

    const handleBack = (e) => {

        e.preventDefault();

        navigate(-1, { state: state.celebs })
    }


    const handleBookingPayment = async (e) => {
        e.preventDefault();

        try {

            const data = {
                title: state.body.title,
                description: state.body.description,
                makePublic: makePublic,
                phoneNumber: state.user.phoneNumber,
                whenSessionAccepted: whenSessionAccepted,
                sessionAvailability: JSON.stringify(state.body.sessionAvailability),
                event: state.body.event,
                paymentMethod: state.celebs.pricing.bookingType,
                bookingFor: state.body.bookingFor,
                nickName: state.body.nickName,
                relationship: state.body.relationship
            }

            var config = {
                method: 'post',
                url: BOOKING_URL,
                headers,
                data
            };

            const response = await axios(config);

            if (response.status === 200) {

                if (state.celebs.pricing.bookingType !== "Paid") {
                    showMessage('Great!', 'Booking successfully created', '#291743');
                    navigate('/booking-success');
                }
                else {
                    // Initialize Payment...
                    let INITBOOKING_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/initbookingpayment/' + celebUrlId + '?bookingId=' + response.data.data._id : 'https://api-v2-staging.becued.com/api/v2/fan/initbookingpayment/' + celebUrlId + '?bookingId=' + response.data.data._id}`;


                    var config = {
                        method: 'get',
                        url: INITBOOKING_URL,
                        headers
                    };

                    const result = await axios(config);

                    if (result.status === 200) {
                        window.location.replace(result.data.data.data.authorization_url);
                        // window.open(result.data.data.data.authorization_url, '_blank', 'noopener,noreferrer');
                    }

                }

            }

        } catch (error) {

            if (!error.response.data) {
                showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
            }
            else {
                showMessage('Oops!', error.response?.data.message, '#a10b96');
            }
        }



    }


    const handlePublicSwitch = (e) => {
        setMakePublic(e.target.checked);
    }
    const handleSessionSwitch = (e) => {
        setwhenSessionAccepted(e.target.checked);
    }

    const handleAvailabilitySwitch = (e) => {
        setsessionAvailability(e.target.checked);
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
                                            <img className="bookImage" src={state.celebs.info.avatar} alt="celeb" />
                                            <img style={{ width: '53px', marginLeft: "7px", marginRight: "7px" }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                            <img className="bookImage" src={state.user.avatar} alt="receiver" />
                                        </p>
                                    </div>
                                    <div className="col-md-3">
                                        <Button variant="outlined">EDIT</Button>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-9">
                                        <p style={{ fontSize: '16px' }}>{state.body.description}</p>
                                        <p style={{ fontSize: '12px' }}>
                                            <span className="bookedCategory"><i className="fa fa-search catSearch" aria-hidden="true"></i> {state.body.event}</span>
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
                                        <Switch {...label} onChange={handlePublicSwitch} name="makePublic" checked={makePublic} />
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
                                        <Switch {...label} onChange={handleSessionSwitch} name="whenSessionAccepted" checked={whenSessionAccepted} />
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-md-9">
                                        <p>Booking Details</p>
                                        <small style={{
                                            fontSize: '12px', color: '#A3A4B2', position: "relative", bottom: "30%"
                                        }}>{new Date(state.body.sessionAvailability.sessionDate).toDateString() + ' | ' + new Date(state.body.sessionAvailability.sessionDate).toLocaleTimeString()}</small>
                                    </div>
                                    <div className="col-md-3">
                                        <Switch {...label} onChange={handleAvailabilitySwitch} name="sessionAvailability" checked={sessionAvailability} />
                                    </div>
                                </div>


                                <div className="mt-5 mb-4">
                                    <button
                                        className="btn btn-block buttonStyles"
                                        onClick={handleBookingPayment}
                                    >Make Payment</button>

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
