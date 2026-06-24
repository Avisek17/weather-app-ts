import { Weather } from '../types/weather';

export async function getWeather(lat:latitude , lon: longitude ): Promise <Weather> {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`);

    if(!response.ok){
        throw new Error('Failed to fetch weather data');
    }
    const data : Weather = await response.json();
        return data;
}