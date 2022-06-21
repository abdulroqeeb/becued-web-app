import React from 'react';
import CategoryList from '../CategoryList';
import Header from '../includes/Header';
import LatestCelebs from '../LatestCelebs';
import MyDetails from '../MyDetails';
import WhoToFollow from '../WhoToFollow';

function Home() {

    return (

        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="row">
                    <div className="col-md-3">
                        <MyDetails />

                        <CategoryList />

                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="becueddetailImage" alt="becueddetailImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1646326097/becued/assets/sydney_rqqpdm.svg" />
                                    </div>
                                    <div className="col-md-10">
                                        <p style={{ position: "relative", right: "7%", fontSize: "16px", fontWeight: "500" }}>Nwankwo Syvdney</p>
                                        <small style={{ position: "relative", bottom: "25%", right: "7%", fontSize: "14px", color: "#5F5B65" }}>4 hours ago</small>
                                    </div>
                                </div>

                                <div className="feedContent mt-4">
                                    <p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money.</p>

                                    <div className="card">
                                        <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1655832357/becued/assets/Frame_4589_xoar1f.png" className="card-img-top" alt="itemFile" />
                                    </div>

                                </div>


                                <div className="feedContentReaction mt-3">
                                    <i class="fa fa-heart px-2 py-1 active" aria-hidden="true"></i><span class="badge active">533</span>
                                    <i class="fa fa-comment-o px-2 py-1" aria-hidden="true"></i><span class="badge">42</span>
                                    <i class="fa fa-share px-2 py-1" aria-hidden="true"></i><span class="badge">9</span>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="becueddetailImage" alt="becueddetailImage" src="https://res.cloudinary.com/becued-technologies/image/upload/v1646326097/becued/assets/sydney_rqqpdm.svg" />
                                    </div>
                                    <div className="col-md-10">
                                        <p style={{ position: "relative", right: "7%", fontSize: "16px", fontWeight: "500" }}>Nwankwo Syvdney</p>
                                        <small style={{ position: "relative", bottom: "25%", right: "7%", fontSize: "14px", color: "#5F5B65" }}>4 hours ago</small>
                                    </div>
                                </div>

                                <div className="feedContent mt-4">
                                    <p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money.</p>

                                    <div className="card">
                                        <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1655832357/becued/assets/Frame_4589_xoar1f.png" className="card-img-top" alt="itemFile" />
                                    </div>

                                </div>


                                <div className="feedContentReaction mt-3">
                                    <i class="fa fa-heart px-2 py-1 active" aria-hidden="true"></i><span class="badge active">533</span>
                                    <i class="fa fa-comment-o px-2 py-1" aria-hidden="true"></i><span class="badge">42</span>
                                    <i class="fa fa-share px-2 py-1" aria-hidden="true"></i><span class="badge">9</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <LatestCelebs />
                        <WhoToFollow />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;