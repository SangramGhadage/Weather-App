import axios from 'axios';
 
const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '619c78344f72d27310330b9747eba7e0'

export const getData = async(city, country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}