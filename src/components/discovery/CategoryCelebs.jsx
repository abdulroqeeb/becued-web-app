import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from '../../helpers/axios';
import truncate from '../../helpers/truncate';
import NoRecord from "../pages/NoRecord";


let CELEB_BY_CATEGORY_URL;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}


function CategoryCelebs(props) {

    console.log((props.name).trim());

    const [celebs, setCelebs] = useState([]);

    CELEB_BY_CATEGORY_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/getceleb?category=' + props.name : 'https://api-v2-staging.becued.com/api/v2/fan/getceleb?category=' + props.name}`;


    useEffect(() => {
        async function getCelebrity() {
            try {

                var config = {
                    method: 'get',
                    url: CELEB_BY_CATEGORY_URL,
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
        <div className="row">

            {celebs.length > 0 ? celebs.map(celeb => {
                return <div className="col-md-2">
                    <Link to={`/artiste?id=${celeb._id}`} style={{ color: "#fff", textDecoration: "none" }}>
                        <img className="becuedDiscoverImages" alt="becuedcelebs" src={celeb.avatar} />
                        <p className="mt-2" style={{ fontSize: "16px", fontWeight: "600" }} title={celeb.stageName !== "NULL" ? celeb.stageName : celeb.fullname}>{celeb.stageName !== "NULL" ? truncate(celeb.stageName, 20) : truncate(celeb.fullname, 20)}</p>
                        <small style={{ position: "relative", bottom: "7%", fontSize: "10px", color: "#f3f3f3" }} title={(celeb.industry + "").split(",").join(" • ")}>{truncate((celeb.industry + "").split(",").join(" • "))}</small>

                        <p style={{ position: "relative", bottom: "7%", fontSize: "16px", fontWeight: "600" }}> ₦{celeb.pricing != null ? Number(celeb.pricing.bookingAmount).toLocaleString() : 0.00}</p>
                    </Link>
                </div>
            }) : <NoRecord />}

        </div>
    );
}


export default CategoryCelebs;