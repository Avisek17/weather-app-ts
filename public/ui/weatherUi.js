export function displayWeather(weather) {
    const weatherContainer = document.getElementById('weather-container');
    if (!weatherContainer)
        return;
    weatherContainer.innerHTML = `
            <h2>🌤 Weather</h2>

        <p>
            Temperature:
            ${weather.current.temperature} °C
        </p>

        <p>
            Humidity:
            ${weather.current.relativeHumidity} %
        </p>

        <p>
            Wind:
            ${weather.current.windSpeed} km/h
        </p>`;
}
