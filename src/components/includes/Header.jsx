import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from '../../helpers/axios';
import { Badge } from '@mui/material'
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const NOTIFY_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/notification/fan' : 'https://api-v2-staging.becued.com/api/v2/notification/fan'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function Header() {

    const user = JSON.parse(localStorage.user);

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
            <nav className="navbar navbar-expand-lg fixed-top" style={{ background: "#150829" }}>
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1655308151/becued/assets/Group_274_xds6j2.svg" alt="" width="30" height="24" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <input type="text" className="form-control inputSearch" placeholder="Search celebrity..." aria-label="Search celebrity..." />
                                <span className="input-group-text"><img src='https://res.cloudinary.com/becued-technologies/image/upload/v1655802887/becued/assets/Filter_vqahjl.png' alt='filter' /></span>
                            </div>
                        </form>

                        <div className="mx-auto"></div>

                        <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white position-relative" aria-current="page" to="/notification">

                                    <Badge badgeContent={notification.length} color="error">
                                        <NotificationsNoneTwoToneIcon color="default" sx={{ fontSize: '35px' }} />
                                    </Badge>

                                </Link>


                            </li>
                            <li className="nav-item">
                                <Stack className="nav-link text-white" direction="row" spacing={2}>
                                    <Avatar alt={user.fullname} src={user.avatar} />
                                </Stack>

                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-white mt-1" to={""} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '16px', fontWeight: '600' }}>
                                    {user.fullname} <i className="fa fa-chevron-down px-2" aria-hidden="true" style={{ fontSize: '13px', fontWeight: '600' }}></i>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ background: "#150829" }}>
                                    <li><Link className="dropdown-item" to={"/profile"}><img alt="profile" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/Profile_pzhqsj.png" /> Profile Information</Link></li>
                                    <li><Link className="dropdown-item" to={"/videos"}><img alt="video" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/videos_ikm088.png" /> My Videos</Link></li>
                                    <li><Link className="dropdown-item" to={"/change-password"}><img alt="password" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/password_rnj6jj.png" /> Change Password</Link></li>
                                    <li><Link className="dropdown-item" to={""}><img alt="ref_promo" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/ref_promo_efs6ao.png" /> Referral and Promotions</Link></li>
                                    <li><Link className="dropdown-item" to={""}><img alt="promo" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/promo_gt7q8i.png" /> Promotions</Link></li>
                                    <li><Link className="dropdown-item" to="/reviews"><img alt="reviews" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/review_o26fzu.png" /> Reviews</Link></li>
                                    <li><Link className="dropdown-item" to={"/payment"}><img alt="payment" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/payment_cslexd.png" /> Payment</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" onClick={() => { localStorage.clear() }} to={"/login"}><img alt="logout" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/logout_rhteoc.png" /> Logout</Link></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;