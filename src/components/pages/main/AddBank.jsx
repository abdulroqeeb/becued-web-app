import React from 'react'
import Header from '../../includes/Header'
import { Link } from 'react-router-dom'
function AddBank() {
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

                                <form action="#" method="post">
                                    <div className="mb-4">
                                        <label htmlFor="bankName" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Bank Name</label>
                                        <select className="form-control form-select inputField" id="bankName" required>
                                            <option value="">Select</option>
                                            <option value="058">Guarantee Trust Bank</option>
                                            <option value="50819">Kuda Bank</option>
                                        </select>

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accountNumber" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Account Number</label>
                                        <input type="text"
                                            className="form-control inputField" name="accountNumber" id="accountNumber" required />

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accountName" className="form-label text-white" style={{ fontSize: '16px', fontWeight: '600' }}>Account Name</label>
                                        <input type="text"
                                            className="form-control inputField" name="accountName" id="accountName" value="ANAYO OBIAJULU OGECHUKWU" readonly />

                                    </div>



                                    <br />
                                    <br />
                                    <div className="mb-4">
                                        <Link to={'/payment'} type="button" className="btn btn-block buttonStyles"
                                        >Confirm</Link>

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
