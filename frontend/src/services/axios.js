import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    //withCredentials: true,
    //credentials: "include"
});

export default api;
