import { fetchJoke, fetchWeather, Joke } from './api';
import { JokeAPI } from '../config/api_parameters.js';
import { updateWeatherElement, updateJokeElement } from './dom';
import { initializeEventListeners } from './events';

// estat global
let reportAcudits: Array<Joke & { score: number; date: string }> = [];
let currentJoke: Joke | null = null;
let currentScore: number | null = null;

// funcions per gestionar l'estat global
export function setCurrentScore(score: number | null): void {
  currentScore = score;
}

export function setCurrentJoke(joke: Joke | null): void {
  currentJoke = joke;
}

export function addToReport(joke: Joke & { score: number; date: string }): void {
  reportAcudits.push(joke);
}

export function getReportAcudits(): Array<Joke & { score: number; date: string }> {
  return [...reportAcudits]; // torna una còpia per evitar manipulacions externes
}

export function getCurrentJoke(): Joke | null {
  return currentJoke;
}

export function getCurrentScore(): number | null {
  return currentScore;
}

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
    setCurrentJoke(joke);
    updateJokeElement(joke);
    
  } catch (error) {
    console.error('Error initializing app:', error);
    alert('Error initializing application. Please check console for details.');
  }
}

// inicia l'aplicació quan el DOM està carregat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}