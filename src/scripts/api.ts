import { API_PARAMS, JokeAPI } from '../config/api_parameters.js';

export interface Joke {
  id: string;
  joke: string;
  rating?: number;
  date?: string;
}

export interface WeatherData {
  temperature: number;
  weathercode: number;
  time: string;
}

export async function fetchJoke(apiType: JokeAPI): Promise<Joke> {
  try {
    const apiConfig = API_PARAMS[apiType];
    const response = await fetch(apiType === 'DAD_JOKE' ? apiConfig.url : `${apiConfig.url}`, {
      headers: apiConfig.headers
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching joke: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      id: data.id || Math.random().toString(36).substring(7),
      joke: data.joke || data.value
    };
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
}

export async function fetchWeather(): Promise<WeatherData> {
  try {
    const apiConfig = API_PARAMS.WEATHER;
    const url = `${apiConfig.url}?${new URLSearchParams(apiConfig.params as any).toString()}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error fetching weather: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      temperature: data.current_weather.temperature,
      weathercode: data.current_weather.weathercode,
      time: data.current_weather.time
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}