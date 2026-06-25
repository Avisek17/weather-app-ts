
import {coordinates} from "../types/location.js";
export async function reverseGeocode(
    lat: number,
    lon: number
) {

    const response =
    await fetch(

`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`

    );

    if (!response.ok) {

        throw new Error(
            "Error fetching Location"
        );

    }

    const data =
    await response.json();

    return {

        city:
            data.address.city
            ??
            data.address.town
            ??
            data.address.village
            ??
            "Unknown",

        country:
            data.address.country
            ??
            "Unknown"

    };

}