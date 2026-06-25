// import { getCurrentLocation } from "../services/location.js";
// import { reverseGeocode } from "../api/geocode.js";
// import { renderLocation } from "../ui/locationUi.js";
// let locationLoaded = false;
// export async function handleLocationClick(): Promise<void> {
//     const card =
//         document.querySelector(
//             "#location-card .card-content"
//         );
//     if (!card) return;
//     card.classList.toggle("hidden");
//     if (locationLoaded) return;
//     card.innerHTML = "Loading location...";
//     try {
//         const coords =
//             await getCurrentLocation();
//         const location =
//             await reverseGeocode(
//                 coords.lat,
//                 coords.lon
//             );
//         renderLocation(location);
//         locationLoaded = true;
//     } catch (error) {
//         card.innerHTML =
//             "Failed to load location";
//         console.error(error);
//     }
// }
import { setContent } from "../ui/contentUi.js";
import { getCurrentLocation } from "../services/location.js";
import { reverseGeocode } from "../api/geocode.js";
export async function handleLocationClick() {
    const coords = await getCurrentLocation();
    const location = await reverseGeocode(coords.lat, coords.lon);
    setContent(`

        <p>
            City:
            ${location.city}
        </p>

        <p>
            Country:
            ${location.country}
        </p>
        <p>
            Date & Time:
            ${new Date().toLocaleString()}
        </p>

    `);
}
