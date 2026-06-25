import {getCurrentLocation} from "./services/location.js";
import {getWeather} from "./api/weather.js";
import {renderWeather} from "./ui/weatherUi.js";
import { initializeTheme , toggleTheme} from "./services/theme.js";
import { reverseGeocode } from "./api/geocode.js";
import { renderLocation } from "./ui/locationUi.js";


async function init() {
    initializeTheme();
    const themeBtn =
    document.querySelector(
    "#themeBtn"
);

    themeBtn?.addEventListener(
    "click",
    toggleTheme
);
    try {

        const coords =
            await getCurrentLocation();

            // console.log(coords);

        const locaton = await reverseGeocode(
            coords.lat,
            coords.lon
        );

        renderLocation(locaton);
        console.log(locaton);
      
        const weather = await getWeather(
            coords.lat,
            coords.lon
        );
        
        renderWeather(weather);
        console.log(weather);


}
catch (error) {
        console.error(
            "Error initializing app:",
            error
        );
    }
}
init();

