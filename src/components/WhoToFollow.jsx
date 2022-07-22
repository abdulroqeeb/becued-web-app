import React, { useEffect, useState } from "react";
import axios from "../helpers/axios";
import truncate from '../helpers/truncate';
import showMessage from '../helpers/responses';
import { Link } from "react-router-dom";
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Typography, Avatar } from '@mui/material';

const TOFOLLOW_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/celeb-to-follow' : 'https://api-v2-staging.becued.com/api/v2/fan/celeb-to-follow'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

let FOLLOW_CELEB_URL;



function WhoToFollow() {

    const [item, setItems] = useState([]);
    const [status, setStatus] = useState('');


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


    const handleFollow = async (celebUrlId, name) => {


        FOLLOW_CELEB_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/follow/' + celebUrlId : 'https://api-v2-staging.becued.com/api/v2/fan/follow/' + celebUrlId}`;

        try {
            var config = {
                method: 'post',
                url: FOLLOW_CELEB_URL,
                headers,
            };

            await axios(config);
            setStatus('following');
            showMessage('Great!', `You now follow ${name}`, '#291743');





        } catch (error) {

            if (!error.response.data) {
                showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
            }
            else {
                showMessage('Oops!', error.response?.data.message, '#a10b96');
            }
        }

    }

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
                                <Link to={`/artiste?id=${items._id}`} style={{ color: "#fff", textDecoration: "none" }}>
                                    <p style={{ fontSize: "16px", fontWeight: "500" }} title={items.stageName !== "NULL" ? items.stageName : items.fullname}>{items.stageName !== "NULL" ? truncate(items.stageName) : truncate(items.fullname)}</p>
                                    <p style={{ fontSize: "12px", fontWeight: "400", position: "relative", bottom: "20%" }} title={items.stageRole !== "NULL" ? items.stageRole : (items.industry + "").split(",").join(" • ")}>{items.stageRole !== "NULL" ? truncate(items.stageRole) : truncate((items.industry + "").split(",").join(" • "))}</p>
                                </Link>

                            </div>
                            <div className="col-md-3">
                                <img className="becuedtoFollowicon" alt="becuedtofollowicon" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655829897/becued/assets/plus-circle_lqdzxv.png" onClick={() => { handleFollow(items._id, items.stageName !== "NULL" ? items.stageName : items.fullname) }} />
                            </div>


                        </div>
                    })
                }


            </div>
        </div>








    );
}

export default WhoToFollow;