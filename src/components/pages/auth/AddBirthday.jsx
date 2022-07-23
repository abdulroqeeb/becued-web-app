import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import Wallpaper from '../../Wallpaper';
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2' : 'https://api-v2-staging.becued.com/api/v2'}`;

const ACCOUNT_URL = `${BASE_URL}/settings/account-profile`;

function AddBirthday() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [birthday, setBirthDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const data = {
                birthday, _id: state._id
            }

            var config = {
                method: 'patch',
                url: ACCOUNT_URL,
                data
            };


            const response = await axios(config);

            setBirthDate('');

            showMessage('Great!', response.data.message, '#291743');

            navigate('/account-created', { state });

        } catch (error) {

            if (error.response.data) {
                showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
            }
            else {
                showMessage('Oops!', error.message, '#a10b96');
            }
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
                        <h1>Add Your Birthday</h1>
                        <p className="mt-3">Enter your birthday</p>

                        <form>
                            <div className="mt-4 mb-4">
                                <label htmlFor="dob" className="form-label text-white" style={{ fontWeight: '600', fontSize: '16px' }}>Date of Birth</label>
                                <input type="date"
                                    className="form-control inputField" 
                                    name="dob" 
                                    id="dob" 
                                    placeholder="Set date" 
                                    autoComplete="false" 
onChange={(e) => setBirthDate(e.target.value)}
value={birthday}


                                    />
                                <span className="fontDate">
                                    <i className="fa fa-calendar" aria-hidden="true" id='date'></i>
                                </span>
                            </div>

                            <div className="mb-4">
                                <p>By signing up I accept <span><a className="links" href="https://www.becued.com/terms" target="_blank" rel="noreferrer">terms of use</a></span> and <span><a className="links" href="https://www.becued.com/privacy" target="_blank" rel="noreferrer">privacy policy</a></span></p>
                            </div>


                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="mt-5 mb-4">
                                <button onClick={handleSubmit} type="button" className="btn btn-block buttonStyles"
                                >Save</button>

                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBirthday;