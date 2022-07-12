import React, { useEffect, useState } from 'react';
import axios from '../helpers/axios';
import timeago from '../helpers/timeago';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const NOTIFY_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/notification/fan' : 'https://api-v2-staging.becued.com/api/v2/notification/fan'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}


function NotifyFeeds() {

    const [notification, setNotifications] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        async function fetchNotifications() {
            try {

                var config = {
                    method: 'get',
                    url: NOTIFY_URL,
                    headers
                };

                const response = await axios(config);

                setNotifications(response.data.data);
                setStatus(true);

            } catch (error) {
                console.log(error);
            }
        }

        fetchNotifications();
    }, []);

    return (
        <div>

            {status ? notification.map(notifications => {
                return <div className="row mt-5 mb-3">
                    <div className="col-md-2">
                        <p><img className="becueddetailImage" alt="becueddetailImage" src={notifications.image} /></p>
                    </div>
                    <div className="col-md-6">
                        <p>{notifications.activity}</p>
                    </div>
                    <div className="col-md-2 mx-auto"></div>
                    <div className="col-md-2">
                        <p style={{ color: '#8E8EA1' }}>{timeago.dateFormat(notifications.created_at)}</p>
                    </div>

                </div>
            }) : <SkeletonTheme baseColor="#71767a" highlightColor="#444" height="300px"><Skeleton /></SkeletonTheme>}



            <hr />
        </div>
    );
}


export default NotifyFeeds;