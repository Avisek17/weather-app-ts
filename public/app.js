import { getCurrentLocation } from "./services/location.js";
import { getWeather } from "./api/weather.js";
import { displayWeather } from "./ui/weatherUi.js";
import { initializeTheme, toggleTheme } from "./services/theme.js";
async function init() {
    initializeTheme();
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn?.addEventListener("click", toggleTheme);
    try {
        const coords = await getCurrentLocation();
        console.log(coords);
        const weather = await getWeather(coords.latitude, coords.longitude);
        console.log(weather);
        displayWeather(weather);
    }
    catch (error) {
        console.error(error);
    }
}
init();
