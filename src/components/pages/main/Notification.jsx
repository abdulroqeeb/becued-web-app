import React from 'react';

import Header from '../../includes/Header'
import NotifyFeeds from '../../NotifyFeeds';

function Notification() {

    return (

        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <h5 className="card-title mb-3">Notifications</h5>

                        <p className="mt-5 mb-5">Today</p>
                        <NotifyFeeds />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Notification;