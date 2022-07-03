import React from 'react'
import Header from '../../includes/Header'
import { Link } from "react-router-dom"
function Payment() {
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
                            <div className="col-md-4">
                                <div className="card payment">
                                    <div className="card-body paymentBank">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5>OBIAJULU ANAYO</h5>
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
                                                <span style={{ fontSize: '10px', fontWeight: '400' }}>First City Monument Bank</span>
                                                <h5>04047420864</h5>
                                            </div>
                                            <div className="col-md-3" >
                                                <img src="https://nigerianbanks.xyz/logo/first-city-monument-bank.png" className="rounded mx-auto d-block" alt="bank" style={{ width: '53px', height: '53px', borderRadius: '100%', background: '#f2f2f2', objectFit: 'cover' }} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="card payment">
                                    <div className="card-body paymentBank">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5>OBIAJULU ANAYO</h5>
                                            </div>
                                            <div className="col-md-3" >

                                            </div>
                                        </div>

                                        <br />
                                        <br />
                                        <br />


                                        <div className="row">
                                            <div className="col-md-9">
                                                <span style={{ fontSize: '10px', fontWeight: '400' }}>Guarantee Trust Bank</span>
                                                <h5>00212424953</h5>
                                            </div>
                                            <div className="col-md-3" >
                                                <img src="https://nigerianbanks.xyz/logo/guaranty-trust-bank.png" className="rounded mx-auto d-block" alt="bank" style={{ width: '53px', height: '53px', borderRadius: '100%', background: '#f2f2f2', objectFit: 'cover' }} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="card payment">
                                    <div className="card-body paymentBank">

                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5>OBIAJULU ANAYO</h5>
                                            </div>
                                            <div className="col-md-3" >

                                            </div>
                                        </div>

                                        <br />
                                        <br />
                                        <br />


                                        <div className="row">
                                            <div className="col-md-9">
                                                <span style={{ fontSize: '10px', fontWeight: '400' }}>Kuda Bank</span>
                                                <h5>28901293843</h5>
                                            </div>
                                            <div className="col-md-3" >
                                                <img src="https://nigerianbanks.xyz/logo/kuda-bank.png" className="rounded mx-auto d-block" alt="bank" style={{ width: '53px', height: '53px', borderRadius: '100%', background: '#f2f2f2', objectFit: 'cover' }} />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Payment;
