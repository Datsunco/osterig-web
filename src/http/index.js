import axios from "axios";

const $api = axios.create({
    baseURL: "https://osterrig-electronics.vercel.app/api/",
    withCredentials: true,

})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api