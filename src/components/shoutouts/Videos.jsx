import React, { useEffect, useState } from 'react';
import axios from '../../helpers/axios';
import MyLoader from '../../components/MyLoader';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import truncate from '../../helpers/truncate';

const SHOUTOUT_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/myshoutout' : 'https://api-v2-staging.becued.com/api/v2/fan/myshoutout'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function Videos() {

    const [videos, setVideos] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        async function fetchShoutOut() {
            try {


                var config = {
                    method: 'get',
                    url: SHOUTOUT_URL,
                    headers
                };

                const response = await axios(config);

                setVideos(response.data.data);
                setStatus(true);

            } catch (error) {
                console.log(error);
            }
        }

        fetchShoutOut();
    }, []);



    return (
        <div className="row">

            {
                status ? videos.map(video => {
                    return <div className="col-md-3" key={video._id}>

                        <img className="becuedShoutOut" alt="becuedcelebs" src={video.shoutout.thumbnail} />

                        <div className="row">
                            <div className="col-md-8">
                                <p className="mt-2" style={{ fontSize: "24px", fontWeight: "600" }}>{truncate(video.celeb.fullname, 10)}</p>
                                <small style={{ position: "relative", bottom: "20%", fontSize: "10px", color: "#f3f3f3" }}>{video.bookings.event}</small>
                                <p style={{ position: "relative", bottom: "20%", fontSize: "10px", color: "#f3f3f3" }}><small>{video.shoutout.created_at}</small></p>
                            </div>
                            <div className="col-md-4">
                                <div className="row mt-3">
                                    <div className="col-4">
                                        <i className="fa fa-share-alt" aria-hidden="true" style={{ fontSize: "18px", color: "#CACBD3" }}></i>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-file-video-o" aria-hidden="true" style={{ fontSize: "18px", color: "#CACBD3" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                }) : <div className="col-md-3"><SkeletonTheme baseColor="#71767a" highlightColor="#444" height="300px"><Skeleton /></SkeletonTheme></div>
            }

        </div>
    );
}

export default Videos;
