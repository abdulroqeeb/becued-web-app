import React from 'react'

function UpcomingSession() {
    return (
        <div className="tab-pane fade show active" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">
            <div className="row mt-5">
                <div className="col-md-12">
                    <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1656805021/becued/assets/upcoming_nhcnnj.png" alt="bookedsession" style={{ width: "100%", height: "300px", objectFit: 'cover' }} />
                </div>
                <div className="col-md-12">
                    <p className="mt-3" style={{ fontSize: "20px", fontWeight: "600" }}>Trevor Noah and Usman Abiola</p>
                    <p className="text-white" style={{ position: "relative", bottom: "20%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}><small><span>
                        <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652566139/becued/assets/Mask_zkov5e.svg" alt="" /></span>
                        <span> 4 hours</span> - Session Time</small>
                    </p>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1656805021/becued/assets/upcoming_nhcnnj.png" alt="bookedsession" style={{ width: "100%", height: "300px", objectFit: 'cover' }} />
                </div>
                <div className="col-md-12">
                    <p className="mt-3" style={{ fontSize: "20px", fontWeight: "600" }}>Trevor Noah and Usman Abiola</p>
                    <p className="text-white" style={{ position: "relative", bottom: "20%", color: "#F960F9", textDecoration: "none", fontSize: "14px", fontWeight: "400" }}><small><span>
                        <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1652566139/becued/assets/Mask_zkov5e.svg" alt="" /></span>
                        <span> 4 hours</span> - Session Time</small>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default UpcomingSession
