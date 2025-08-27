import { Joke } from './api';

export function updateJokeElement(joke: Joke): void {
  const jokeElement = document.getElementById('joke-text');
  if (jokeElement) {
    jokeElement.textContent = joke.joke;
  }
}

export function updateWeatherElement(weather: { temperature: number, weathercode: number }): void {
  const weatherElement = document.getElementById('weather-info');
  if (weatherElement) {
    const weatherText = getWeatherDescription(weather.weathercode);
    weatherElement.innerHTML = `
      <div>Temperature: ${weather.temperature}°C</div>
      <div>Condition: ${weatherText}</div>
    `;
  }
}

export function getWeatherDescription(weathercode: number): string {
  const weatherMap: { [key: number]: string } = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
  };
  
  return weatherMap[weathercode] || 'Unknown';
}

export function updateScoreButtons(selectedScore: number | null): void {
  const buttons = document.querySelectorAll('.score-btn');
  buttons.forEach((btn, index) => {
    if (selectedScore === index + 1) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

export function showNotification(message: string, isError: boolean = false): void {
  const notification = document.createElement('div');
  notification.className = `notification ${isError ? 'error' : 'success'}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px;
    background: ${isError ? '#fc0000ff' : '#00ff08ff'};
    color: white;
    border-radius: 5px;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s;
  `;
  
  document.body.appendChild(notification);
  
  // mostra  notificació
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10);
  
  // amaga després de 3 segons
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}