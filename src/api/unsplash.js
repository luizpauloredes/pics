import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vHmnQLkaFejSdnlpKH__DX1Fc1YTqfrtt9d-UTygAoQ'
    }

})