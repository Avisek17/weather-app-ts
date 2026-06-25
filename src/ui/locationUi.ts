import { LocationInfo } from "../types/locationInfo.js";

export function renderLocation(
    location: LocationInfo
): void {
    const locationElement = document.querySelector('#location');

    if(!locationElement) return;

    locationElement.innerHTML = `
    <p> City: ${location.city} </p>
    <p> Country: ${location.country} </p>
    <p>Date & Time: ${new Date().toLocaleString()}</p>`;
}
