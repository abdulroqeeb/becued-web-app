import React from "react";
import { Link } from "react-router-dom";

function ReviewFeeds() {
    return (
        <div className="row mb-5">
            <div className="col-md-2">
                <img className="becuedReviews px-2 py-2" alt="becuedreviews" src="https://res.cloudinary.com/becued-technologies/image/upload/v1654719726/becued/assets/WhatsApp_Image_2022-06-07_at_11.20_1_gbzswy.svg" />
            </div>
            <div className="col-md-10 p-3">
                <p><i className="fa fa-star active"></i><i className="fa fa-star active"></i><i className="fa fa-star active"></i><i className="fa fa-star active"></i><i className="fa fa-star"></i></p>
                <p>Trevor Noah is a South African comedian, television host, producer, writer, political commentator, and actor. He is the host of The Daily Show, an American satirical news program on Comedy Central. Born in Johannesburg, Noah began his career as a comedian, television host, and actor in South Africa in 2002.</p>

                <Link to={""} style={{ color: "#FD9B8A", textDecoration: "underline", fontSize: "12px" }}>Read more</Link>

            </div>
        </div>
    );
}

export default ReviewFeeds;