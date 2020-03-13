import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID SJPf2Nb31XZmJWhHSMxpednoVjCVm3AlDlSGCBNAYo4'
    }
})