import { showJoke, showError, showWeather } from "./dom.js";
const WEATHER_API_KEY = '2beaf4e1b7064d41a3484535251905'

interface ApiConfig {
  url: string;
  header: Record<string, string>;
}
export interface Report {
  joke: string;
  score: number;
  date: string;
}

export const joke: ApiConfig = {
  url: 'https://icanhazdadjoke.com/',
  header: { Accept: 'application/json' },
};

export let currentJoke: string
export async function getJoke(): Promise<void> {
  try {
    const response = await fetch(joke.url, {
      headers: joke.header
    });
    const data = await response.json();

    console.log("Received joke:", data.joke);
    currentJoke = data.joke;
    showJoke(currentJoke);
    
  } catch (error) {
    console.error('Error getting joke:', error);
    showError('Error loading joke');
  }
}

export async function getWeather(): Promise<void> {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Barcelona&aqi=no`)
  const data = await response.json();
  const icon = 'https:' + data.current.condition.icon;
  const temperature = data.current.temp_c;

  console.log("Weather received:", data.current);
  showWeather(icon, temperature.toString())
}