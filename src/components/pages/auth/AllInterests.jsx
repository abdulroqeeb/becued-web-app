import React, { useEffect, useState } from "react";
import axios from '../../../helpers/axios';
import { useNavigate } from "react-router-dom";

const CATEGORY_LIST_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/industry' : 'https://api-v2-staging.becued.com/api/v2/industry'}`;


function AllInterests() {

    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

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
        <div>
            <div className="row">

                {category.map(categories => {

                    return <div className="col-md-2" key={categories._id}>
                        <img className="becuedaddInterest" alt="becuedaddInterest" src={categories.image} />
                        <p className="text-white fw-bold">{categories.name}</p>
                    </div>
                })}



            </div>
        </div>
    );
}


export default AllInterests;