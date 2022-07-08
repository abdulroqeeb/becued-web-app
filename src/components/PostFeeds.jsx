import React, { useEffect, useState } from "react";
import axios from '../helpers/axios';
import formatTime from '../helpers/timeago';
import truncate from '../helpers/truncate';

const FEEDS_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/feeds' : 'https://api-v2-staging.becued.com/api/v2/feeds'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function PostFeeds() {

    const [items, setItems] = useState([]);

    useEffect(() => {

        async function fetchFeeds() {
            try {
                const response = await axios.get(FEEDS_URL, headers);

                setItems(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchFeeds();

    }, []);

    return (
        <>
            {items.map((item) => {

                return <div className="card mb-3" key={item.feeds._id}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <img className="becueddetailImage" alt="becueddetailImage" src={item.userInfo.avatar} />
                            </div>
                            <div className="col-md-10">
                                <p style={{ position: "relative", right: "3%", fontSize: "16px", fontWeight: "500", cursor: "pointer" }} data-bs-toggle="tooltip" data-bs-placement="top" title={item.userInfo.fullname}>{truncate(item.userInfo.fullname)}</p>
                                <small style={{ position: "relative", bottom: "25%", right: "3%", fontSize: "14px", color: "#5F5B65" }}>{formatTime(item.feeds.created_at)}</small>
                            </div>
                        </div>

                        <div className="feedContent mt-4">
                            <p>{item.feeds.description}</p>

                            {item.feeds.thumbnail !== '' ? <div className="card">
                                <img src={item.feeds.thumbnail} className="card-img-top" alt="itemFile" style={{ height: '300px', objectFit: 'cover' }} />
                            </div> : ''}


                        </div>


                        <div className="feedContentReaction mt-3">
                            <i className={`fa fa-heart px-2 py-1 ${item.feeds.likes > 0 ? `active` : ``}`} aria-hidden="true"></i><span className={`badge ${item.feeds.likes > 0 ? `active` : ``}`}>{item.feeds.likes}</span>
                            <i className={`fa fa-comment-o px-2 py-1 ${item.feeds.comments > 0 ? `active` : ``}`} aria-hidden="true"></i><span className={`badge ${item.feeds.comments > 0 ? `active` : ``}`}>{item.feeds.comments}</span>
                            <i className={`fa fa-share px-2 py-1 ${item.feeds.shares > 0 ? `active` : ``}`} aria-hidden="true"></i><span className={`badge ${item.feeds.shares > 0 ? `active` : ``}`}>{item.feeds.shares}</span>
                        </div>

                    </div>
                </div>
            })}
        </>
    );

}


export default PostFeeds;