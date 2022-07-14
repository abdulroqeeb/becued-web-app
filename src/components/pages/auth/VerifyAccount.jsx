import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import Wallpaper from '../../Wallpaper';
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const REGISTER_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/fan/web-register' : 'https://api-v2-staging.becued.com/api/v2/fan/web-register'}`;

const VerifyAccount = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [otp, setOtp] = useState(new Array(6).fill(''));


    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus on next input element

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
        else {
            window.location.href = '/set-password';

            //TODO:: Verify the OTP and Send data to next page...
        }


    };

    async function handleClick(e) {
        e.preventDefault();

        try {

            const data = {
                fullname: state.fullname, email: state.email, username: state.username
            };
            const response = await axios.post(REGISTER_URL, data);

            console.log(response);

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
        <div className="formBox">
            <div className="row">
                <div className="col-md-6 disp-large">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Verify Your Account</h1>
                        <p>We have just sent a code to:({state.email})</p>

                        <form action="#" method="post">
                            <div className="pin-input color-black mt-5 mb-2">
                                {otp.map((data, index) => {
                                    return (
                                        <input
                                            type="tel"
                                            autoCapitalize="off"
                                            name={"pin" + index}
                                            maxLength="1"
                                            pattern="\d{1}"
                                            autoCorrect="off"
                                            autoComplete={"new-password" + index}
                                            key={index}
                                            onChange={(e) => handleChange(e.target, index)}
                                            onFocus={(e) => e.target.select()}
                                        />
                                    );

                                })}
                            </div>



                            <input type="hidden" name="verifyOtp" id="verifyOtp" value={otp.join("")} />

                            <br />
                            <div className="mb-4">
                                <p>
                                    I didn’t receive code.
                                    <span className="resendcode" onClick={handleClick}>
                                        Resend Code
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyAccount;
