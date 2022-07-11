import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from '../helpers/axios';
import MyLoader from '../components/MyLoader';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import truncate from '../helpers/truncate';


const REVIEWS_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/myreviews' : 'https://api-v2-staging.becued.com/api/v2/fan/myreviews'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function ReviewFeeds() {


    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        async function fetchReviews() {
            try {

                var config = {
                    method: 'get',
                    url: REVIEWS_URL,
                    headers
                };

                const response = await axios(config);

                setReviews(response.data.data);
                setStatus(true);

            } catch (error) {
                console.log(error);
            }
        }

        fetchReviews();
    }, []);

    return (

        <>
            {status ? reviews.map(review => {
                return <div className="row mb-5">
                    <div className="col-md-2">
                        <img className="becuedReviews px-2 py-2" alt="becuedreviews" src={review.celeb.avatar} />
                    </div>
                    <div className="col-md-10 p-3">
                        <p>
                            {(() => {
                                let stars = [];
                                for (let i = 0; i < review.info.rating; i++) {
                                    stars.push(<i className="fa fa-star active"></i>)
                                }
                                return stars;
                            })()}

                        </p>
                        <p>{review.info.review}</p>

                        <Link to={""} style={{ color: "#FD9B8A", textDecoration: "underline", fontSize: "12px" }}>Read more</Link>

                    </div>
                </div>
            }) : <SkeletonTheme baseColor="#71767a" highlightColor="#444" height="300px"><Skeleton /></SkeletonTheme>}
        </>



    );
}

export default ReviewFeeds;