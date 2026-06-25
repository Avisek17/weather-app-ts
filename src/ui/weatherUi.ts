import type { Weather } from '../types/weather.js';

export function renderWeather(weather : Weather) : void{
    const weatherContainer = document.getElementById('weather');

    if(!weatherContainer) return;
        weatherContainer.innerHTML = `

        <p>
            Temperature:
            ${weather.current.temperature_2m} °C
        </p>

        <p>
            Humidity:
            ${weather.current.relative_humidity_2m} %
        </p>

        <p>
            Wind Speed:
            ${weather.current.wind_speed_10m} km/h
        </p>`
}