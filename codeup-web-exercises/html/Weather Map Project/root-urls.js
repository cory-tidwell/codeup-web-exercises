const ROOT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/';

export default {
    getWeatherByCityName: (city, key) => {
        return `${ROOT_WEATHER_URL}weather?q=${city}&units=imperial&appid=${key}`;
    }
}
