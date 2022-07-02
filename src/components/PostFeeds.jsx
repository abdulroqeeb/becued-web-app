import React from "react";

function PostFeeds(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img className="becueddetailImage" alt="becueddetailImage" src={props.avatar} />
                    </div>
                    <div className="col-md-10">
                        <p style={{ position: "relative", right: "7%", fontSize: "16px", fontWeight: "500" }}>{props.fullname}</p>
                        <small style={{ position: "relative", bottom: "25%", right: "7%", fontSize: "14px", color: "#5F5B65" }}>{props.time}</small>
                    </div>
                </div>

                <div className="feedContent mt-4">
                    <p>{props.description}</p>

                    <div className="card">
                        <img src={props.feedFile} className="card-img-top" alt="itemFile" />
                    </div>

                </div>


                <div className="feedContentReaction mt-3">
                    <i className="fa fa-heart px-2 py-1 active" aria-hidden="true"></i><span className="badge active">533</span>
                    <i className="fa fa-comment-o px-2 py-1" aria-hidden="true"></i><span className="badge">42</span>
                    <i className="fa fa-share px-2 py-1" aria-hidden="true"></i><span className="badge">9</span>
                </div>

            </div>
        </div>
    );
}


export default PostFeeds;