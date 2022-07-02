import React from 'react';
import Header from '../../includes/Header';
import { Link } from 'react-router-dom';

function ArtisteProfile() {

    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <div className="boxItem mx-auto">


                    <div className="formInfo">

                        <div className="row">

                            <div className="col-md-6 disp-large">

                                <div className="swiper mySwiper">
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">
                                            <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652658918/becued/assets/Group_36048_v1fplp.png"
                                                alt="play_icon" className="play-btn" style={{ width: "40px", height: "40px" }}
                                                data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                            <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651786178/becued/assets/unsplash_2EGNqazbAMk_fmkc8k.svg"
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
                                            <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651787521/becued/assets/Group_7420_b8qczo.svg"
                                                className="rounded celebImage" alt="John Doe" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">



                                        <div className="celebInfo">



                                            <p className="celebName text-white">
                                                Bravo Kurda
                                            </p>
                                            <small className="text-white" style={{ fontSize: "10px", color: "#fff" }}>Africans • Comedy • TV Show</small>
                                            <p className="text-white"><small><span>
                                                <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652566139/becued/assets/Mask_zkov5e.svg" alt="" /></span>
                                                <span> 4 hours</span> - Response Time</small>
                                            </p>
                                            <small className="star">
                                                <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651783696/becued/assets/Shape_ieko6c.svg"
                                                    alt="" /><img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651783696/becued/assets/Shape_ieko6c.svg"
                                                        alt="" /><img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651783696/becued/assets/Shape_ieko6c.svg"
                                                            alt="" />
                                                <span style={{ fontSize: "13px", color: "#fff" }}> 5.0
                                                </span></small>
                                            <br />
                                            <Link className="mt-3" to="" style={{ fontSize: "12px", color: "#CACBD3" }}>See All Reviews</Link>
                                        </div>



                                    </div>

                                    <div className="col-md-4">
                                        <div className="celebFollowers">
                                            <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1651784277/becued/assets/Movie_Detail_Year_Age_Genre_izbagv.svg"
                                                className="rounded" alt="..." /> <small className="text-white"> +10
                                                <span style={{ fontSize: "9px", color: "#CACBD3" }}> Fans</span></small>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-12">
                                        <p className="mt-3 text-white">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <div className="row">

                                            <div className="col-md-6">
                                                <button className="btn btn-sm btnBook buttonStyles">
                                                    Book for
                                                    NGN39000
                                                </button>
                                            </div>

                                            <div className="col-md-6">
                                                <button className="btn btn-sm btnFollow buttonStyles">
                                                    Follow
                                                </button>
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

export default ArtisteProfile;