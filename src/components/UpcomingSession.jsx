import React, { useState, useEffect } from 'react'
import axios from '../helpers/axios';

const UPCOMING_SESSION_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/upcomingsessions' : 'https://api-v2-staging.becued.com/api/v2/fan/upcomingsessions'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function UpcomingSession() {

    const user = JSON.parse(localStorage.user);

    const [sessions, setSessions] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        async function fetchReviews() {
            try {

                var config = {
                    method: 'get',
                    url: UPCOMING_SESSION_URL,
                    headers
                };

                const response = await axios(config);

                setSessions(response.data.data);
                setStatus(true);

            } catch (error) {
                console.log(error);
            }
        }

        fetchReviews();
    }, []);

    return (
        <div className="tab-pane fade show active" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">

            {
                sessions.map(session => {
                    return <div className='row mt-5'>
                        <div className="col-md-12 itemBooked">
                            <div className="row mt-5">
                                <div className="col-md-9">
                                    <p className="mx-auto">
                                        <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src={session.celebrity.avatar} alt="celeb" />
                                        <img style={{ width: '53px', marginLeft: "7px", marginRight: "7px" }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                        <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src={session.bookings.bookingFor === 'Book for a friend' ? 'https://res.cloudinary.com/becued-technologies/image/upload/v1649492127/becued/assets/defaultavatar_hvnbmv_htscte.png' : user.avatar} alt="receiver" />
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p style={{ color: '#F960F9', fontSize: '13px' }}>{(session.bookings.sessionStatus).toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-9">
                                    <p style={{ fontSize: '18px' }}>{session.bookings.description}</p>
                                    <p style={{ fontSize: '12px' }}>
                                        <span className="bookedCategory"><i className="fa fa-search catSearch" aria-hidden="true"></i> {session.bookings.event}</span> {new Date(session.bookings.sessionAvailability[0].sessionDate).toLocaleString()}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                })
            }



        </div>
    )
}

export default UpcomingSession
