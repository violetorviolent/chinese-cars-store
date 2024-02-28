import axios from 'axios';
const BASE_URL = 'https://dummyjson.com/image/150';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});