import React, { useState, useEffect, useRef } from 'react'
import Header from '../../includes/Header'
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const PROFILE_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/edit-profile' : 'https://api-v2-staging.becued.com/api/v2/fan/edit-profile'}`;
const VERIFY_USERNAME_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/settings/verify-username' : 'https://api-v2-staging.becued.com/api/v2/settings/verify-username'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function EditProfile() {

    const [user, setUser] = useState(JSON.parse(localStorage.user));

    const [fullname, setFullname] = useState(user.fullname);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState(user.avatar);
    const [username, setUsername] = useState(user.username);
    const [success, setSuccess] = useState({});
    const [status, setStatus] = useState({});
    const imgRef = useRef();



    useEffect(() => {

        async function verifyUsername() {


            try {

                if (username !== "") {

                    const data = {
                        username
                    };
                    const response = await axios.post(VERIFY_USERNAME_URL, data);

                    setStatus({
                        data: response.data.data,
                        message: response.data.message
                    });


                }
                else {
                    setStatus({});
                }





            } catch (error) {

                if (!error.response.data) {
                    showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
                }
                else {
                    showMessage('Oops!', error.response?.data.message, '#a10b96');
                }
            }
        }

        verifyUsername();

    }, [username])

    const handleSubmit = async (e) => {
        e.preventDefault();

        async function updateProfile() {
            try {

                const data = {
                    fullname, username
                }

                var config = {
                    method: 'post',
                    url: PROFILE_URL,
                    headers,
                    data
                };

                const response = await axios(config);

                setSuccess(response.data.data);

                localStorage.setItem('user', JSON.stringify(response.data?.data));

                setUser({ fullname: response.data.data.fullname, username: response.data.data.username, email: response.data.data.email, avatar: response.data.data.avatar });

                showMessage('Great!', response.data.message, '#291743');

            } catch (error) {

                if (!error.response.data) {
                    showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
                }
                else {
                    showMessage('Oops!', error.response?.data.message, '#a10b96');
                }
            }
        }

        updateProfile();

    }



    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <h5 className="text-white mb-5 pt-4" style={{ fontSize: '25px', fontWeight: '600' }}>My Profile</h5>

                <div className="card mb-5">
                    <form>

                        <div className="card-body pt-4" style={{ paddingBottom: '100px' }}>

                            <div className="row">
                                <div className="col-md-2">
                                    <img
                                        className="becuedProfileAvatar"
                                        alt="becuedProfileAvatar"
                                        src={avatar}

                                    />

                                </div>
                                <div className="col-md-10 mt-2 mb-2">
                                    <p style={{ position: "relative", fontSize: '24px', fontWeight: '600' }}>{user.fullname}</p>
                                    <small style={{ position: "relative", bottom: "15%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}>@{user.username}</small>
                                </div>

                            </div>


                            <div className="mt-5 px-3 py-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label htmlFor="fullname" className="form-label text-white">Full Name</label>

                                            <input
                                                type="text"
                                                className="form-control inputField"
                                                name="fullname"
                                                onChange={(e) => setFullname(e.target.value)}
                                                value={fullname}

                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label text-white">Email</label>
                                            <input type="email"
                                                className="form-control inputField"
                                                name="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={user.email} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label htmlFor="username" className="form-label text-white">Username</label>
                                            <input
                                                type="text"
                                                className="form-control inputField"
                                                name="username"
                                                onChange={(e) => setUsername(e.target.value)}
                                                value={username}
                                            />

                                            {username !== user.username ? <span className={status.data ? `text-info` : `text-danger`}>{status.message}</span> : null}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <button
                                            type="button"
                                            className="btn btn-block buttonStyles"
                                            onClick={handleSubmit}
                                        >Save Changes</button>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default EditProfile;
