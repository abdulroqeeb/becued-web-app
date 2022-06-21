import React from "react";

function CategoryList() {
    return (
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
    );
}


export default CategoryList;