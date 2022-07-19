import React from 'react';
import CategoryCelebs from '../../discovery/CategoryCelebs';
import Header from '../../includes/Header'




function CelebbyCategory() {

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');




    return (
        <div>

            <Header />

            <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
                <div className="card mb-5">

                    <div className="card-body" style={{ paddingBottom: '100px' }}>
                        <h5 className="card-title mb-3 pt-4">Celebrities</h5>
                        <CategoryCelebs name={category} />
                    </div>

                </div>
            </div>
        </div>
    );
}


export default CelebbyCategory;