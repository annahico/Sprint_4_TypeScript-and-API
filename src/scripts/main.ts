import { fetchJoke, fetchWeather, Joke } from './api';
import { JokeAPI } from '../config/api_parameters.js';
import { updateWeatherElement } from './dom';
import { initializeEventListeners } from './events';

export let reportAcudits: Array<Joke & { score: number; date: string }> = [];
export let currentJoke: Joke | null = null;
export let currentScore: number | null = null;

export async function initializeApp(): Promise<void> {
  try {
    // inicialitza els esdeveniments
    initializeEventListeners();
    // Mostra la informació meteorològica
    const weather = await fetchWeather();
    updateWeatherElement(weather);
    // Carrega el primer acudit
    const apiType: JokeAPI = 'DAD_JOKE'; // comença amb els acudits
    const joke = await fetchJoke(apiType);
    currentJoke = joke;
    updateJokeElement(joke);
    
  } catch (error) {
    console.error('Error initializing app:', error);
    alert('Error initializing application. Please check console for details.');
  }
}

//inicia l'aplicació quan el DOM està carregat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function updateJokeElement(joke: Joke) {
    throw new Error('Function not implemented.');
}
