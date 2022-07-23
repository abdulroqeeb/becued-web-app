import React, { useState, useEffect } from 'react'
import Header from '../../includes/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from '../../../helpers/axios';
import showMessage from '../../../helpers/responses';


const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2' : 'https://api-v2-staging.becued.com/api/v2'}`;

const BANKFETCH_URL = `${BASE_URL}/bank/fetch`;
const ADDBANK_URL = `${BASE_URL}/bank/fanaddbank`;
const VERIFYBANK_URL = `${BASE_URL}/payment/verify-bank`;


const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function AddBank() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.user);
    const [bank, setBanks] = useState([]);
    const [selectedBank, setSelectedBank] = useState();
    const [accountNumber, setaccountNumber] = useState('');
    const [error, setError] = useState('');
    const [accountName, setaccountName] = useState(user.fullname.toUpperCase());

    useEffect(() => {
        async function getAllBanks() {

            try {

                const response = await axios.get(BANKFETCH_URL);

                setBanks(response.data.data);

            } catch (error) {
                console.log(error);
            }
        }
        getAllBanks();
    }, [])

    useEffect(() => {

        if (accountNumber != "" && accountNumber.length >= 10) {
            async function resolveAccountNumber() {
                setError('');

                try {
                    const { code } = JSON.parse(selectedBank);

                    const data = {
                        bankCode: code,
                        accountNumber
                    }

                    const response = await axios.post(VERIFYBANK_URL, data);

                    setaccountName(response.data.data.data.account_name);

                } catch (error) {
                    setaccountName('');
                    setError(error.response.data.message);
                }
            }

            resolveAccountNumber();
        }


    }, [accountNumber])


    const handleSubmit = async (e) => {
        try {

            const { name, code, logo } = JSON.parse(selectedBank);

            const data = {
                bankName: name,
                bankCode: code,
                bankLogo: logo,
                accountNumber
            }

            var config = {
                method: 'post',
                url: ADDBANK_URL,
                headers,
                data
            };

            // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQwYTU5NzljMWZhODJmYTg0ZmUxNGEiLCJpYXQiOjE2NTg1NTc3NTh9.IHX_28p-hLheUw-cwFNc8HmnvtXuoUPUr7sGgdt4vLs"

            console.log(config);

            const response = await axios(config);

            console.log(response);

            showMessage('Great!', response.data.message, '#291743');

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
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <h5 className="text-white mb-5 pt-4" style={{ fontSize: '25px', fontWeight: '600' }}>Add Bank</h5>

                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>

                        <div className="col-md-6">
                            <div className="createAccount">
                                <p className="mb-5" style={{ fontSize: '16px', fontWeight: '400', color: '#CACBD3' }}>Please add your correct bank information</p>

                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="bankName" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Bank Name</label>
                                        <select className="form-control form-select inputField" id="bankName" onChange={(e) => setSelectedBank(e.target.value)} value={selectedBank} required>
                                            <option value="">Select</option>
                                            {
                                                bank.map(banks => {
                                                    return <option key={banks._id} value={JSON.stringify({ code: banks.code, name: banks.name, logo: banks.logo })}>{banks.name}</option>
                                                })
                                            }

                                        </select>

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accountNumber" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Account Number</label>
                                        <input type="text"
                                            className={error !== '' ? "form-control inputField is-invalid" : "form-control inputField"} 
                                            name="accountNumber"
                                            id="validationServerUsername"
                                            onChange={(e) => setaccountNumber(e.target.value)}
                                            value={accountNumber}
                                            required />

                                        <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                            {error}
                                        </div>

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accountName" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Account Name</label>
                                        <input type="text"
                                            className="form-control inputField"
                                            name="accountName"
                                            id="accountName"
                                            readOnly
                                            onChange={(e) => setaccountName(e.target.value)}
                                            value={accountName}
                                        />

                                    </div>
                                    


                                    <br />
                                    <br />
                                    <div className="mb-4">
                                        <button onClick={handleSubmit} type="button" className="btn btn-block buttonStyles"
                                        >Confirm</button>

                                    </div>

                                </form>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddBank;
