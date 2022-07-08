import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from '../../helpers/axios';
import truncate from '../../helpers/truncate';



const TRENDING_CELEB_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/trending' : 'https://api-v2-staging.becued.com/api/v2/fan/trending'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}


function LatestCelebs() {


    const [celebs, setCelebs] = useState([]);

    useEffect(() => {
        async function getCelebrity() {
            try {

                var config = {
                    method: 'get',
                    url: TRENDING_CELEB_URL,
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
        <div>
            <div className="row">

                {celebs.map(celeb => {
                    return <div className="col-md-2">
                        <Link to={`/artiste?id=${celeb.info._id}`} style={{ color: "#fff", textDecoration: "none" }}>
                            <img className="becuedDiscoverImages" alt="becuedcelebs" src={celeb.info.avatar} />
                            <p className="mt-2" style={{ fontSize: "16px", fontWeight: "600" }} title={celeb.info.stageName !== "NULL" ? celeb.info.stageName : celeb.info.fullname}>{celeb.info.stageName !== "NULL" ? truncate(celeb.info.stageName, 20) : truncate(celeb.info.fullname, 20)}</p>
                            <small style={{ position: "relative", bottom: "7%", fontSize: "10px", color: "#f3f3f3" }} title={(celeb.info.industry + "").split(",").join(" • ")}>{truncate((celeb.info.industry + "").split(",").join(" • "))}</small>

                            <p style={{ position: "relative", bottom: "7%", fontSize: "16px", fontWeight: "600" }}> ₦{celeb.pricing != null ? Number(celeb.pricing.bookingAmount).toLocaleString() : 0.00}</p>
                        </Link>
                    </div>
                })}



            </div>
        </div >
    );
}


export default LatestCelebs;