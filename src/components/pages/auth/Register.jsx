import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Wallpaper from "../../Wallpaper";
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';

const REGISTER_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/web-register' : 'https://api-v2-staging.becued.com/api/v2/fan/web-register'}`;
const VERIFY_USERNAME_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/settings/verify-username' : 'https://api-v2-staging.becued.com/api/v2/settings/verify-username'}`;


function Register() {
    const userRef = useRef();
    const errRef = useRef();
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState([]);
    const navigate = useNavigate();

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
                errRef.current.focus();
            }
        }

        verifyUsername();

    }, [username])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const data = {
                fullname, email, username
            };
            const response = await axios.post(REGISTER_URL, data);

            navigate('/verify-account', { state: response.data.data });

        } catch (error) {


            if (!error.response.data) {
                showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
            }
            else {
                showMessage('Oops!', error.response?.data.message, '#a10b96');
            }
            errRef.current.focus();
        }
    }

    return (



        <div className="formBox">
            <div className="row">
                <div className="col-md-6 disp-large">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Create an account</h1>
                        <p>Sign up to discover all amazing celebrities and enjoy our features.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullname" className="form-label text-white">Full Name</label>

                                <input
                                    type="text"
                                    className="form-control inputField"
                                    ref={userRef}
                                    placeholder="Enter your name"
                                    autoComplete="off"
                                    onChange={(e) => setFullname(e.target.value)}
                                    value={fullname}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="username" className="form-label text-white">Username</label>

                                <input
                                    ref={errRef}
                                    type="text"
                                    className="form-control inputField"
                                    placeholder="Enter your username"
                                    autoComplete="off"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                />



                                <span className={status.data ? `text-info` : `text-danger`}>{status.message}</span>
                            </div>




                            <div className="mb-4">
                                <label htmlFor="email" className="form-label text-white">Email</label>


                                <input
                                    type="email"
                                    className="form-control inputField"
                                    placeholder="Enter your email"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />

                            </div>


                            <br />
                            <br />
                            <div className="mb-4">

                                <button className="btn btn-block buttonStyles"
                                >Next</button>


                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;