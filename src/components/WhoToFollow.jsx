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

                <div className="row">

                    {
                        item.map((items) => {
                            return <p>
                                <button className="btn bookTypeBtn" key={items._id} style={{ paddingTop: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                                    <div className="mt-2">
                                        <img className="becuedtoFollow" src={items.avatar} alt="celebimage" /> <span style={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px" }}>{items.stageName || items.username} <small style={{ fontSize: "12px", fontWeight: "400", position: "relative", textAlign: 'center' }}>{items.stageRole || items.industry}</small> </span> <span className="float-end"><img className="becuedtoFollowicon float-end" alt="becuedtofollowicon" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655829897/becued/assets/plus-circle_lqdzxv.png" /></span>
                                    </div>
                                </button>

                            </p>;


                        })
                    }

                </div>

            </div>
        </div>








    );
}

export default WhoToFollow;