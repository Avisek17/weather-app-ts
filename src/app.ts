import { initializeTheme , toggleTheme} from "./services/theme.js";
import { handleLocationClick } from "./handlers/locationHandler.js";
import { handleWeatherClick } from "./handlers/weatherHandler.js";
import { handleNewsClick } from "./handlers/newsHandler.js";

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
document
    .getElementById(
        "location-btn"
    )
    ?.addEventListener(
        "click",
        handleLocationClick
    );

document
    .getElementById(
        "weather-btn"
    )
    ?.addEventListener(
        "click",
        handleWeatherClick
    );

document
    .getElementById(
        "news-btn"
    )
    ?.addEventListener(
        "click",
        handleNewsClick
    );

}
catch (error) {
        console.error(
            "Error initializing app:",
            error
        );
    }
}
init();
