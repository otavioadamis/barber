import axios from 'axios';

const localMachineIp = "";

const axiosInstance = axios.create({
    baseURL: `http://${localMachineIp}:8080/api/`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;