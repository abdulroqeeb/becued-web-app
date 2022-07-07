import React from 'react'
import Header from '../../includes/Header'
import { Link } from 'react-router-dom'
function EditProfile() {

    const user = JSON.parse(localStorage.user);

    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>

                <h5 className="text-white mb-5 pt-4" style={{ fontSize: '25px', fontWeight: '600' }}>My Profile</h5>

                <div className="card mb-5">

                    <div className="card-body pt-4" style={{ paddingBottom: '100px' }}>

                        <div className="row">
                            <div className="col-md-2">
                                <img className="becuedProfileAvatar" alt="becuedProfileAvatar" src={user.avatar} />
                            </div>
                            <div className="col-md-10 mt-2 mb-2">
                                <p style={{ position: "relative", fontSize: '24px', fontWeight: '600' }}>{user.fullname}</p>
                                <small style={{ position: "relative", bottom: "15%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}>@{user.username}</small>
                            </div>

                        </div>


                        <div className="mt-5 px-3 py-3">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label htmlFor="fullname" className="form-label text-white">Full Name</label>
                                            <input type="text"
                                                className="form-control inputField" name="fullname" value={user.fullname} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label text-white">Email</label>
                                            <input type="email"
                                                className="form-control inputField" name="fullname" value={user.email} readonly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label htmlFor="username" className="form-label text-white">Username</label>
                                            <input type="text"
                                                className="form-control inputField" name="fullname" value={user.username} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Link to="/profile" type="button" className="btn btn-block buttonStyles"
                                        >Save Changes</Link>
                                    </div>
                                </div>
                            </form>
                        </div>




                    </div>

                </div>
            </div>
        </div>
    );
}

export default EditProfile;
