import React, { useEffect, useState } from "react";
import Header from '../../includes/Header';
import { Link } from 'react-router-dom';
import axios from '../../../helpers/axios';




const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

let THIS_CELEB_URL;


function ArtisteProfile() {

    const urlParams = new URLSearchParams(window.location.search);
    const celebUrlId = urlParams.get('id');

    THIS_CELEB_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/getthisceleb/' + celebUrlId : 'https://api-v2-staging.becued.com/api/v2/fan/getthisceleb/' + celebUrlId}`;

    const [celebs, setCelebs] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        async function getCelebrity() {
            try {


                var config = {
                    method: 'get',
                    url: THIS_CELEB_URL,
                    headers
                };

                const response = await axios(config);

                setCelebs(response.data.data);
                setState(true);


            } catch (error) {
                console.log(error);
            }
        }
        getCelebrity();

        return () => {
            console.log('I have returned');
        }
    }, [])


    return (

        <div>


            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                {state ? <div className="boxItem mx-auto">


                    <div className="formInfo">

                        <div className="row">

                            <div className="col-md-6 disp-large">

                                <div className="swiper mySwiper">
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">
                                            {celebs.introVideo.length > 0 ? <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652658918/becued/assets/Group_36048_v1fplp.png"
                                                alt="play_icon" className="play-btn" style={{ width: "40px", height: "40px" }}
                                                data-bs-toggle="modal" data-bs-target="#exampleModal" /> : ''}

                                            <img src={celebs.info.avatar}
                                                className="d-block w-100 swiper-slide" alt="..." />

                                            <input type="hidden" value="1" id="videoItem1" />

                                        </div>

                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>


                            </div>


                            <div className="col-md-6">

                                <div className="row myInfo">
                                    <div className="col-md-2">
                                        <div className="imageCeleb">
                                            <img src={celebs.info.avatar}
                                                className="rounded celebImage" alt="John Doe" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">



                                        <div className="celebInfo">



                                            <p className="celebName text-white">
                                                {celebs.info.stageName !== "NULL" ? celebs.info.stageName : celebs.info.fullname}
                                            </p>
                                            <small className="text-white" style={{ fontSize: "10px", color: "#fff" }}>{(celebs.info.industry + "").split(",").join(" • ")}</small>
                                            <p className="text-white"><small><span>
                                                <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652566139/becued/assets/Mask_zkov5e.svg" alt="" /></span>
                                                <span> 4 hours</span> - Response Time</small>
                                            </p>
                                            <small className="star">

                                                {(() => {
                                                    let stars = [];
                                                    for (let i = 0; i < parseInt(celebs.info.ratings); i++) {
                                                        stars.push(<img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651783696/becued/assets/Shape_ieko6c.svg" alt="" />)
                                                    }
                                                    return stars;
                                                })()}

                                                <span style={{ fontSize: "13px", color: "#fff" }}> {celebs.info.ratings}
                                                </span></small>
                                            <br />
                                            <Link to={"/reviews"} className="mt-3" style={{ fontSize: "12px", color: "#CACBD3" }}>See All Reviews</Link>
                                        </div>



                                    </div>

                                    <div className="col-md-4">
                                        <div className="celebFollowers">
                                            <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651784277/becued/assets/Movie_Detail_Year_Age_Genre_izbagv.svg"
                                                className="rounded" alt="..." /> <small className="text-white"> {celebs.info.followers}
                                                <span style={{ fontSize: "9px", color: "#CACBD3" }}> Fans</span></small>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-12">
                                        <p className="mt-3 text-white">
                                            {celebs.info.description}
                                        </p>
                                        <div className="row">

                                            <div className="col-md-6">
                                                <Link to={"/booking"} className="btn btn-sm btnBook buttonStyles">
                                                    Book for
                                                    NGN {celebs.pricing != null ? Number(celebs.pricing.bookingAmount).toLocaleString() : 0.00}

                                                </Link>
                                            </div>

                                            <div className="col-md-6">
                                                {celebs.follow === 'not following' ? <button className="btn btn-sm btnFollow buttonStyles">
                                                    Follow
                                                </button> : <button className="btn btn-sm btnFollow buttonStyles" style={{ cursor: 'not-allowed' }}>
                                                    Already following
                                                </button>}

                                            </div>



                                        </div>
                                    </div>
                                </div>






                            </div>
                        </div>

                    </div>



                </div> : 'Loading...'}



            </div>
        </div>
    );
}

export default ArtisteProfile;