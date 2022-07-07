import React from 'react'

function PastSession() {
    return (
        <div className="tab-pane fade" id="pastSession" role="tabpanel" aria-labelledby="pastSession-tab">
            <div className='row mt-5 itemBookedRow'>
                <div className="col-md-12 mb-5 itemBooked">
                    <div className="row mt-5">
                        <div className="col-md-9">
                            <p className="mx-auto">
                                <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044349/becued/assets/unsplash_UFlO384euRI_ef94fi.png" alt="celeb" />
                                <img style={{ width: '53px', marginLeft: "7px", marginRight: "7px" }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044680/becued/assets/unsplash_2V4Qhq55maY_evvrcc.png" alt="receiver" />
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ color: '#F960F9', fontSize: '13px' }}>Booked</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-9">
                            <p style={{ fontSize: '30px' }}>“I hope I get inspired by you”</p>
                            <p style={{ fontSize: '12px' }}>
                                <span className="bookedCategory"><i class="fa fa-search catSearch" aria-hidden="true"></i> Ask a question</span> {new Date().toLocaleDateString()} - 10am EST
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col-md-12 itemBooked">
                    <div className="row mt-5">
                        <div className="col-md-9">
                            <p className="mx-auto">
                                <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044349/becued/assets/unsplash_UFlO384euRI_ef94fi.png" alt="celeb" />
                                <img style={{ width: '53px', marginLeft: "7px", marginRight: "7px" }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656886978/becued/assets/Union_zaaorr.png" alt="conector" />
                                <img style={{ width: '45px', height: '45px', borderRadius: '100%' }} src="https://res.cloudinary.com/becued-technologies/image/upload/v1656044680/becued/assets/unsplash_2V4Qhq55maY_evvrcc.png" alt="receiver" />
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ color: '#F960F9', fontSize: '13px' }}>Booked</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-9">
                            <p style={{ fontSize: '30px' }}>“I hope I get inspired by you”</p>
                            <p style={{ fontSize: '12px' }}>
                                <span className="bookedCategory"><i class="fa fa-search catSearch" aria-hidden="true"></i> Ask a question</span> {new Date().toLocaleDateString()} - 10am EST
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastSession
