import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from '../helpers/axios';
import truncate from '../helpers/truncate';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LATEST_CELEB_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/allcelebrities' : 'https://api-v2-staging.becued.com/api/v2/fan/allcelebrities'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
};

function LatestCelebs() {

    const [celebs, setCelebs] = useState([]);

    useEffect(() => {
        async function getCelebrity() {
            try {

                var config = {
                    method: 'get',
                    url: LATEST_CELEB_URL,
                    headers
                };

                const response = await axios(config);

                setCelebs(response.data.data);

            } catch (error) {
                console.log(error);
            }
        }
        getCelebrity();
    }, [])


    return (
        <div className="card mb-5">

            <div className="card-body">
                <h5 className="card-title mb-5">Latest Celebrities</h5>


                <div className="row">



                    {

                        celebs.map(celeb => {
                            return <div className="col-md-6" key={celeb._id}>

                                <Link to={`/artiste?id=${celeb._id}`} style={{ color: "#fff", textDecoration: "none" }}>

                                    <img className="becuedCelebs" alt="becuedcelebs" src={celeb.avatar} />
                                    <p className="mt-2" style={{ fontSize: "16px", fontWeight: "600" }} title={celeb.stageName !== "NULL" ? celeb.stageName : celeb.fullname}>{celeb.stageName !== "NULL" ? truncate(celeb.stageName, 20) : truncate(celeb.fullname, 20)}</p>
                                    <small style={{ position: "relative", bottom: "10%", fontSize: "10px", color: "#f3f3f3" }} title={(celeb.industry + "").split(",").join(" • ")}>{truncate((celeb.industry + "").split(",").join(" • "))}</small>
                                </Link>
                            </div>
                        })

                        /* celeb.industry.split("").join(" • ") */
                    }



                </div>

                <Link to="/discover" style={{ color: "#FD9B8A", textDecoration: "underline", fontSize: "12px" }}>See All</Link>


            </div>
        </div>
    );
}

export default LatestCelebs;