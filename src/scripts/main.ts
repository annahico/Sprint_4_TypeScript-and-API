import { getJoke, getWeather } from './api.js';
import { setupEvents } from './events.js';

document.addEventListener('DOMContentLoaded', () => {
  setupEvents();
  getJoke();
  getWeather();
});