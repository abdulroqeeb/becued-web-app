import React from 'react';

function Home() {

    return (
        <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
            <div className="row">
                <div className="col-md-3">
                    <div className="card text-center mb-5">
                        <div className="card-header">
                            &nbsp;
                        </div>
                        <div className="card-body">

                            <img className="becuedAvatar" alt="becuedLogo" src="https://res.cloudinary.com/becued-technologies/image/upload/v1642077248/becued/assets/kunle_l6t7bi.svg" />

                            <h5 className="card-title">Anayo Obiajulu</h5>
                            <p className="card-text">@anayodesigns</p>
                        </div>

                    </div>




                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title mb-5">Categories</h5>

                            <div className="row">
                                <div className="col-md-6">
                                    <img className="becuedCategories" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/nature_f4ikhu.png" />
                                    <p>Nature</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="becuedCategories" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/artandculture_mw0spc.png" />
                                    <p>Art & Culture</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="becuedCategories" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/music_rvygek.png" />
                                    <p>Music</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="becuedCategories" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/technology_ue8onh.png" />
                                    <p>Technology</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-5">

                        <div className="card-body">
                            <h5 className="card-title mb-5">Latest Celebrities</h5>

                            <div className="row">
                                <div className="col-md-6">
                                    <img className="becuedCelebs" alt="becuedcelebs" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655816054/becued/assets/unsplash_pleAbnSa77g_fpvaff.svg" />
                                    <p className="mt-2" style={{ fontSize: "16px", fontWeight: "600" }}>Valay B</p>
                                    <small style={{ position: "relative", bottom: "10%", fontSize: "10px", color: "#f3f3f3" }}>Rap • Music</small>
                                </div>
                                <div className="col-md-6">
                                    <img className="becuedCelebs" alt="becuedcelebs" src="https://res.cloudinary.com/becued-technologies/image/upload/v1654719726/becued/assets/WhatsApp_Image_2022-06-07_at_11.20_1_gbzswy.svg" />
                                    <p className="mt-2" style={{ fontSize: "16px", fontWeight: "600" }}>Zora Mendy</p>
                                    <small style={{ position: "relative", bottom: "10%", fontSize: "10px", color: "#f3f3f3" }}>Music • Celebrities</small>
                                </div>

                                <a href="#" style={{ color: "#FD9B8A", textDecoration: "underline", fontSize: "12px" }}>See All</a>

                            </div>

                        </div>
                    </div>
                    <div className="card mt-5">

                        <div className="card-body">
                            <h5 className="card-title mb-5">Latest Celebrities</h5>

                            <div className="row">
                                <div className="col-md-6">
                                    <img className="becuedCelebs" alt="becuedcelebs" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655816054/becued/assets/unsplash_pleAbnSa77g_fpvaff.svg" />
                                    <p className="mt-2" style={{ fontSize: "16px", fontWeight: "600" }}>Valay B</p>
                                    <small style={{ position: "relative", bottom: "10%", fontSize: "10px", color: "#f3f3f3" }}>Rap • Music</small>
                                </div>
                                <div className="col-md-6">
                                    <img className="becuedCelebs" alt="becuedcelebs" src="https://res.cloudinary.com/becued-technologies/image/upload/v1654719726/becued/assets/WhatsApp_Image_2022-06-07_at_11.20_1_gbzswy.svg" />
                                    <p className="mt-2" style={{ fontSize: "16px", fontWeight: "600" }}>Zora Mendy</p>
                                    <small style={{ position: "relative", bottom: "10%", fontSize: "10px", color: "#f3f3f3" }}>Music • Celebrities</small>
                                </div>

                                <a href="#" style={{ color: "#FD9B8A", textDecoration: "underline", fontSize: "12px" }}>See All</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;