import React from "react";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ background: "#150829" }}>
                <div className="container">
                    <a className="navbar-brand" href="/home">
                        <img src="https://res.cloudinary.com/becued-technologies/image/upload/v1655308151/becued/assets/Group_274_xds6j2.svg" alt="" width="30" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <input type="text" className="form-control inputSearch" placeholder="Search celebrity..." aria-label="Search celebrity..." />
                                <span className="input-group-text"><img src='https://res.cloudinary.com/becued-technologies/image/upload/v1655802887/becued/assets/Filter_vqahjl.png' /></span>
                            </div>
                        </form>

                        <div className="mx-auto"></div>

                        <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white position-relative" aria-current="page" href=""><i className="fa fa-bell-o" aria-hidden="true" style={{ fontSize: '30px' }}></i><span className="position-absolute badge translate-middle notified">
                                    3
                                </span> </a>


                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="">
                                    <center><img className="becuedLogo" alt="becuedLogo" src="https://res.cloudinary.com/becued-technologies/image/upload/v1648834845/becued/assets/defaultavatar_hvnbmv.svg" /></center>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white mt-1" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '16px', fontWeight: '600' }}>
                                    Anayo Obiajulu <i className="fa fa-chevron-down px-2" aria-hidden="true" style={{ fontSize: '13px', fontWeight: '600' }}></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ background: "#150829" }}>
                                    <li><a className="dropdown-item" href=""><img alt="profile" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/Profile_pzhqsj.png" /> Profile Information</a></li>
                                    <li><a className="dropdown-item" href=""><img alt="video" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/videos_ikm088.png" /> My Videos</a></li>
                                    <li><a className="dropdown-item" href=""><img alt="password" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/password_rnj6jj.png" /> Change Password</a></li>
                                    <li><a className="dropdown-item" href=""><img alt="ref_promo" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/ref_promo_efs6ao.png" /> Referral and Promotions</a></li>
                                    <li><a className="dropdown-item" href=""><img alt="promo" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/promo_gt7q8i.png" /> Promotions</a></li>
                                    <li><a className="dropdown-item" href=""><img alt="reviews" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/review_o26fzu.png" /> Reviews</a></li>
                                    <li><a className="dropdown-item" href=""><img alt="payment" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/payment_cslexd.png" /> Payment</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href=""><img alt="logout" src="https://res.cloudinary.com/becued-technologies/image/upload/v1655810707/becued/assets/logout_rhteoc.png" /> Logout</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;