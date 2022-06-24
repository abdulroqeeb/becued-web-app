import React from 'react';
import AllCategories from '../../discovery/AllCategories';
import LatestCelebs from '../../discovery/LatestCelebs';
import Header from '../../includes/Header'

function Discover() {


    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <h5 className="card-title mb-3 pt-4">Trending Celebrities</h5>

                        <LatestCelebs />


                        <h5 className="card-title mt-2 mb-4">Celebrity by Interests</h5>

                        <AllCategories />

                        <h5 className="card-title mt-5 mb-4">Most Popular Celebrities</h5>

                        <LatestCelebs />

                    </div>

                </div>
            </div>
        </div>
    );
}


export default Discover;