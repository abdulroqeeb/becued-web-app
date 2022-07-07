import React, { useEffect, useState } from "react";
import axios from '../helpers/axios';

const CATEGORY_LIST_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/industry' : 'https://api-v2-staging.becued.com/api/v2/industry'}`;

function CategoryList() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        async function fetchCategoryList() {
            try {
                const response = await axios.get(CATEGORY_LIST_URL);

                setCategory(response.data.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchCategoryList();
    }, []);



    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title mb-5">Categories</h5>
                <div className="row">
                    {category.map(categories => {
                        return <div className="col-md-6" key={categories._id}>
                            <img className="becuedCategories" alt="becuedcategories" src={categories.image} />
                            <p>{categories.name}</p>
                        </div>
                    })}
                </div>

            </div>

        </div>
    );


}


export default CategoryList;