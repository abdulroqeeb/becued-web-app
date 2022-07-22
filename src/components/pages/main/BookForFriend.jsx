import React, { useState } from 'react'
import Header from '../../includes/Header'
import { useLocation, useNavigate } from "react-router-dom"

import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function BookForFriend() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [friend, setFriend] = useState('A Friend');
    const [event, setEvent] = useState('');
    const [title, setTitle] = useState('');
    const [relationship, setRelationship] = useState('');
    const [description, setDescription] = useState('');
    const [bookingFor, setbookingFor] = useState("Book for a friend");

    const [value, setValue] = useState(new Date());


    const handleBack = (e) => {

        e.preventDefault();

        navigate("/booking", { state: state.celebs })
    }

    const handleNexMove = (e) => {
        e.preventDefault();

        let formResult = [];
        let userPeriod = '';
        var curHr = value.getHours()

        if (curHr < 12) {
            userPeriod = 'Morning';
        } else if (curHr < 18) {
            userPeriod = 'Afternoon';
        } else {
            userPeriod = 'Evening';
        }

        formResult.push({
            title, description, sessionAvailability: { sessionDate: value.toISOString(), sessionPeriod: userPeriod, sessionTime: value.toLocaleTimeString(), sessionDuration: "2:30 hr" }, event, bookingFor, nickName: friend, relationship
        });

        navigate("/booking/payment", { state: { celebs: state.celebs, user: state.user, body: Object.assign(...formResult) } })
    }


    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>


                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <div className="row mt-5">

                            <div className="col-md-12 mb-5">

                                <h5 className="text-white" style={{ fontSize: '25px', fontWeight: '600' }}><button onClick={handleBack} style={{ background: 'transparent', border: 'none' }}><i className="fa fa-arrow-left" aria-hidden="true" style={{ color: '#FD9B8A' }}></i></button> Book For A Friend</h5>
                            </div>

                            <div className="row mx-auto col-md-8">
                                <form>
                                    <center>
                                        <div className="row">
                                            <div className="col-md-6 mx-auto mb-5">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img className="bookImage" src={state.celebs.info.avatar} alt="celebimage" />
                                                        <p className="mt-4" style={{ fontSize: "14px", fontWeight: "600" }}>{state.celebs.info.stageName !== "NULL" ? state.celebs.info.stageName : state.celebs.info.fullname}</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <img className="mt-5" src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                                    </div>
                                                    <div className="col-4">
                                                        <img className="bookImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1648834845/becued/assets/defaultavatar_hvnbmv.svg" alt="celebimage" />
                                                        <p className="mt-4" style={{ fontSize: "14px", fontWeight: "600" }}>{friend}</p>
                                                    </div>
                                                </div>


                                            </div>
                                            <p className="mt-2 mb-3 text-center" style={{ fontSize: "14px", fontWeight: "400" }}>Fill the following details</p>

                                        </div>

                                    </center>


                                    {/* Main Form Here... */}

                                    <div className="mb-4">
                                        <label htmlFor="nameOfFriend" className="form-label text-white">Name of Friend</label>
                                        <input
                                            type="text"
                                            className="form-control inputField"
                                            name="nameOfFriend"
                                            onChange={(e) => setFriend(e.target.value)}
                                            required />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="relationship" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Relationship</label>
                                        <select className="form-control form-select inputField" id="relationship" onChange={(e) => setRelationship(e.target.value)} value={relationship} required>
                                            <option value="">Select</option>
                                            <option value="friend">Friend</option>
                                            <option value="relative">Relative</option>
                                        </select>

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="title" className="form-label text-white">What’s your  friends title?</label>
                                        <input type="text"
                                            className="form-control inputField"
                                            name="title"
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                            required />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="event" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Please select the purpose of the event</label>
                                        <select className="form-control form-select inputField" id="event" onChange={(e) => setEvent(e.target.value)} value={event} required>
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
                                        <label htmlFor="introduction" className="form-label text-white">Enter introduction message</label>
                                        <textarea type="text"
                                            className="form-control inputField"
                                            name="title"
                                            onChange={(e) => setDescription(e.target.value)}
                                            value={description}
                                            required></textarea>
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="sessionDate" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Select Session Date</label>


                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                renderInput={(props) => <TextField fullWidth {...props} />}
                                                label="DateTimePicker"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </LocalizationProvider>

                                    </div>


                                    <div className="mt-5 mb-4">
                                        <button
                                            className="btn btn-block buttonStyles"
                                            onClick={handleNexMove}
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

export default BookForFriend;
