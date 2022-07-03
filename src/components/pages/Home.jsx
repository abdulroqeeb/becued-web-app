import React, { useContext } from 'react';
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
                        <PostFeeds avatar="https://res.cloudinary.com/becued-technologies/image/upload/v1646326097/becued/assets/sydney_rqqpdm.svg" fullname="Nwankwo Syvdney" time="4 hours ago" description="Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money." feedFile="https://res.cloudinary.com/becued-technologies/image/upload/v1655832357/becued/assets/Frame_4589_xoar1f.png" />
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