import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_URL
});
const KEY = import.meta.env.VITE_API_KEY;

export default {
    getWeather(zipCode) {
        return http.get(`current.json?key=${KEY}&q=${zipCode}&aqi=no`);
    }
}