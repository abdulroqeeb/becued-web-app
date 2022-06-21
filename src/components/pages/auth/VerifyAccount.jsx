import React, { useState } from 'react';
import Wallpaper from '../../Wallpaper';

const VerifyAccount = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus on next input element

        if (element.nextSibling) {
            element.nextSibling.focus();

        }

    };

    function handleClick(e) {
        e.preventDefault();
        alert('Resend code successfully sent');
    }

    return (
        <div className="formBox">
            <div className="row">
                <div className="col-md-6">
                    <Wallpaper />
                </div>
                <div className="col-md-6">
                    <div className="createAccount mt-3">
                        <h1>Verify Your Account</h1>
                        <p>We have just sent a code to:(adenugaadebambo41@gmail.com)</p>

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
