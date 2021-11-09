import axios from 'axios';

// making a baseURL to use elsewhere
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});