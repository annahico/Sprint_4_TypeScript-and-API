import { getJoke, getWeather } from './scripts/api.js';
import { setupEvents } from './scripts/events.js';

document.addEventListener('DOMContentLoaded', () => {
  setupEvents();
  getJoke();
  getWeather();
});