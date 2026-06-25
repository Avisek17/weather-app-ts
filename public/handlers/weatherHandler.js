import { setContent } from "../ui/contentUi.js";
import { getCurrentLocation } from "../services/location.js";
import { getWeather } from "../api/weather.js";
export async function handleWeatherClick() {
    const coords = await getCurrentLocation();
    const weather = await getWeather(coords.lat, coords.lon);
    setContent(`

        <p>
            Temperature:
            ${weather.current.temperature_2m}°C
        </p>

        <p>
            Humidity:
            ${weather.current.relative_humidity_2m}%
        </p>

        <p>
            Wind:
            ${weather.current.wind_speed_10m} km/h
        </p>

    `);
}
