import axios from 'axios';

let axiosCreate = axios.create({ baseURL: 'http://localhost:3000/api', crossdomain: true })

axiosCreate.interceptors.request.use(config => {
    return config;
});

axiosCreate.interceptors.response.use(
    response => response,
    error => {
        console.log(error.response)
        const { status, data } = error.response || {};
        return Promise.reject(data);
    }
);

export default axiosCreate