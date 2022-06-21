import React from "react";

function LatestCelebs() {
    return (
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
    );
}

export default LatestCelebs;