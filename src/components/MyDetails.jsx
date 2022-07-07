import React from "react";

function MyDetails() {

    const user = JSON.parse(localStorage.user);


    return (
        <div className="card text-center mb-5">
            <div className="card-header">
                &nbsp;
            </div>
            <div className="card-body">

                <img className="becuedAvatar" alt="becuedLogo" src={user.avatar} />

                <h5 className="card-title">{user.fullname}</h5>
                <p className="card-text">@{user.username}</p>
            </div>

        </div>
    );
}


export default MyDetails;