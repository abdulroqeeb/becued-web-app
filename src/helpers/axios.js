import axios from "axios";

let baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2' : 'https://api-v2-staging.becued.com/api/v2';
const instance = axios.create({
    baseUrl
});

export default instance;
