import React, { useEffect, useState } from "react";
import axios from "../helpers/axios";


const TOFOLLOW_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/celeb-to-follow' : 'https://api-v2-staging.becued.com/api/v2/fan/celeb-to-follow'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}



function WhoToFollow() {


    const [item, setItems] = useState([]);

    useEffect(() => {

        async function fetchWhoToFollow() {

            try {


                var config = {
                    method: 'get',
                    url: TOFOLLOW_URL,
                    headers
                };

                const response = await axios(config);

                setItems(response.data.data);




            } catch (error) {
                console.log(error.response.data);

            }
        }

        fetchWhoToFollow();

    }, []);

    return (

        <div className="card mt-5">

            <div div className="card-body" >
                <h5 className="card-title mb-5">Who to Follow</h5>


                {
                    item.map(items => {
                        return <div className="row mb-3" key={items._id}>
                            <div className="col-md-3">
                                <img className="becuedtoFollow" src={items.avatar} alt="celebimage" />
                            </div>
                            <div className="col-md-6">
                                <p style={{ fontSize: "16px", fontWeight: "500" }}>{items.stageName !== "NULL" ? items.stageName : items.fullname}</p>
                                <p style={{ fontSize: "12px", fontWeight: "400", position: "relative", bottom: "20%" }}>{items.stageRole !== "NULL" ? items.stageRole : items.industry}</p>
                            </div>
                            <div className="col-md-3">
                                <img className="becuedtoFollowicon" alt="becuedtofollowicon" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655829897/becued/assets/plus-circle_lqdzxv.png" />
                            </div>


                        </div>
                    })
                }


            </div>
        </div>








    );
}

export default WhoToFollow;