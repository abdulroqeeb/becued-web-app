import React from "react";

function AllCategories() {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <img className="becuedDiscoverImages" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/artandculture_mw0spc.png" />
                    <p style={{ fontSize: "12px" }}>Art & Culture</p>
                </div>
                <div className="col-md-2">
                    <img className="becuedDiscoverImages" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/nature_f4ikhu.png" />
                    <p style={{ fontSize: "12px" }}>Nature</p>
                </div>
                <div className="col-md-2">
                    <img className="becuedDiscoverImages" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159921/becued/assets/fashion_hv060p.png" />
                    <p style={{ fontSize: "12px" }}>Fashion</p>
                </div>
                <div className="col-md-2">
                    <img className="becuedDiscoverImages" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640160120/becued/assets/technology_pwzxe2.png" />
                    <p style={{ fontSize: "12px" }}>Technology</p>
                </div>
                <div className="col-md-2">
                    <img className="becuedDiscoverImages" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/music_rvygek.png" />
                    <p style={{ fontSize: "12px" }}>Music</p>
                </div>
                <div className="col-md-2">
                    <img className="becuedDiscoverImages" alt="becuedcategories" src="https://res.cloudinary.com/becued-technologies/image/upload/v1640159684/becued/assets/comedy_arujtw.png" />
                    <p style={{ fontSize: "12px" }}>Comedy</p>
                </div>
            </div>
        </div>
    );
}


export default AllCategories;