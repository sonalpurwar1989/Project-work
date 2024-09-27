<template>
    <div id="header">
        <div id="zipcode">
            <label for="zipCode">Zipcode: </label>
            <input type="text" v-model="zipCode">
            <button @click="getWeatherByZip">Get Weather!</button>
        </div>
        <div v-show="isLoaded" id="weather">
            <h1>Today's weather for {{ location.name }}, {{ location.region }}!</h1>
            <p>Temperature: {{ current.temp_f }}F - feels like {{ current.feelslike_f }}F </p>
            <p>{{ text }}</p>
            <img :src="icon" alt="">
        </div>
    </div>
</template>

<script>
import weatherService from '../services/WeatherService';

export default {

    data() {
        return {
            zipCode: '',
            current: {},
            text: '',
            icon: '',
            location: {},
            isLoaded: false
        }
    },
    methods: {
        getWeatherByZip() {
            weatherService.getWeather(this.zipCode)
                .then((response) => {
                    console.log(response.data);
                    this.current = response.data.current;
                    this.text = response.data.current.condition.text;
                    this.icon = response.data.current.condition.icon;
                    this.location = response.data.location;
                    this.isLoaded = true;
                })
        }
    }
}
</script>

<style scoped>
button {
    margin: 5px;
    font-family: 'Nerko One', cursive;   
    font-size: 15px;
}
</style>