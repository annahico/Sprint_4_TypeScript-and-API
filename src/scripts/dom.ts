export const btn = document.querySelector('.btnNext');
export const jokeElement = document.getElementById('joke') as HTMLParagraphElement;
export const scoreButtons = document.querySelectorAll('.score-btn');

export function showJoke(joke: string): void {
  if (jokeElement) {
    jokeElement.textContent = joke;
  }
}

export function showError(message: string): void {
  if (jokeElement) {
    jokeElement.textContent = message;
  }
}

export function showWeather(iconUrl: string, temperature: string): void {
  const weatherElement = document.getElementById('weather');

  if(weatherElement) {
    const img = weatherElement.querySelector('img');
    const temp = weatherElement.querySelector('.temperature');

    if (img) img.src = iconUrl;
    if (temp) temp.textContent = `| ${temperature} °C`;
  }
}