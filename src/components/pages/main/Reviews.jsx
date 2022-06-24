import React from 'react';
import Header from '../../includes/Header'
import ReviewFeeds from '../../ReviewFeeds';

function Reviews() {

    return (

        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <h5 className="card-title mb-3">Reviews</h5>

                        <ReviewFeeds />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Reviews;