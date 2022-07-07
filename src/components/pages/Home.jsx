import React from 'react';
import CategoryList from '../CategoryList';
import Header from '../includes/Header';
import LatestCelebs from '../LatestCelebs';
import MyDetails from '../MyDetails';
import WhoToFollow from '../WhoToFollow';
import PostFeeds from '../PostFeeds';


function Home() {


    return (

        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="row">
                    <div className="col-md-3 disp-large">
                        <MyDetails />

                        <CategoryList />

                    </div>
                    <div className="col-md-6">
                        <PostFeeds />
                    </div>
                    <div className="col-md-3">
                        <LatestCelebs />
                        <WhoToFollow />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;