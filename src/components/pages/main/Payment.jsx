import React, {useState, useEffect} from 'react'
import Header from '../../includes/Header'
import { Link } from 'react-router-dom';
import axios from '../../../helpers/axios';


const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2' : 'https://api-v2-staging.becued.com/api/v2'}`;

const GETALL_BANKS = `${BASE_URL}/bank/fangetbanks`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function Payment() {

    const [banks, setBanks] = useState([]);

    const user = JSON.parse(localStorage.user);

    useEffect(() =>{

        async function fetchAllBanks(){

            try {

                const config = {
                    method: 'GET',
                    url: GETALL_BANKS,
                    headers
                }

                const response = await axios(config);

                setBanks(response.data.data);
                
            } catch (error) {
                console.log(error);
            }

        }

        fetchAllBanks();
    }, [])


    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <div className="row">
                            <div className="col-md-10">
                                <h5 className="card-title mb-3 pt-4">My Banks</h5>
                            </div>
                            <div className="col-md-2">
                                <Link to={"/add-bank"} type="button" className="btn btn-primary text-center" style={{ background: 'linear-gradient(128.56deg, #FEAD67 -23.19%, #F960F9 114.09%)', border: 'none' }}>Add bank</Link>
                            </div>
                        </div>

                        <div className="row mt-5 mb-5">


                    {
                        banks.length > 0 ? banks.map(bank => {
                            return <div className="col-md-4" key={bank._id}>
                                <div className="card payment">
                                    <div className="card-body paymentBank">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5>{user.fullname.toUpperCase()}</h5>
                                            </div>
                                            <div className="col-md-3" >
                                                <span className="p-2" style={{ background: '#1B0A34', border: 'none', fontSize: '12px', fontWeight: '500' }}>
                                                    Default
                                                </span>
                                            </div>
                                        </div>

                                        <br />
                                        <br />
                                        <br />


                                        <div className="row">
                                            <div className="col-md-9">
                                                <span style={{ fontSize: '10px', fontWeight: '400' }}>{bank.bankName}</span>
                                                <h5>{bank.accountNumber}</h5>
                                            </div>
                                            <div className="col-md-3" >
                                                <img src={bank.bankLogo} className="rounded mx-auto d-block" alt="bank" style={{ width: '53px', height: '53px', borderRadius: '100%', background: '#f2f2f2', objectFit: 'cover' }} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        }) : <div className="row ">
                                        <div className="col-md-6 mx-auto">
                                            <div className="imageIcon text-center">
                                                <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1658564424/becued/assets/Card_Payment_-_3D_Ecommerce_Icon_Pack_front_1_yzifs5.svg" alt="bankIcon" style={{ width: '250px', height: '250px' }} />
                                            </div>
                                            <div className="textContent text-center">You have no added banks</div>
                                            <div className="mb-4">
                                                <Link to={"/add-bank"} className="btn btn-block buttonStyles"
                                                >Add bank</Link>

                                            </div>
                            </div>
                        </div>
                    }

                            
                           
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Payment;
