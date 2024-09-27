import axios from 'axios';

const http = axios.create ( {
    baseURL: import.meta.env.VITE_JOKE_URL
});

let header = {
    headers: {
        'Accept': 'text/plain'
    }
};

export default {
    getRandomJoke(){
        return http.get('', header);

    }
}