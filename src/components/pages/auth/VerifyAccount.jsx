import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import Wallpaper from '../../Wallpaper';
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2' : 'https://api-v2-staging.becued.com/api/v2'}`;

const REGISTER_URL = `${BASE_URL}/fan/web-register`;


const VerifyAccount = () => {

    const { state } = useLocation();
    const navigate = useNavigate();


    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [otpValue, setOtpValue] = useState(0);


    useEffect(() => {

        if (otp.join("").length === 6) {
            async function verifyMyOTP() {

                try {

                    const data = {
                        code: Number(otp.join(""))
                    }

                    var config = {
                        method: 'get',
                        url: `${BASE_URL}/verify/code?otp=${data.code}&userId=${state._id}&email=true&phone=false`,
                    };


                    const response = await axios(config);

                    showMessage('Great!', `OTP ${response.data?.message}`, '#291743');

                    navigate('/set-password', { state });

                } catch (error) {
                    if (error.response.data) {
                        showMessage(`${error.response?.status}`, error.response?.statusText, '#a10b96');
                    }
                    else {
                        showMessage('Oops!', error.message, '#a10b96');
                    }
                }



            }

            verifyMyOTP();
        }

    }, [otp, otpValue])

    const handleChange = async (element, index) => {


        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        setOtpValue(element.value);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }



    };

    async function handleClick(e) {
        e.preventDefault();

        try {

            const data = {
                fullname: state.fullname, email: state.email, username: state.username
            };
            const response = await axios.post(REGISTER_URL, data);

            showMessage('Great!', `Code sent to: ${response.data?.data.email}`, '#291743');


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
