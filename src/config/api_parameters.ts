export const API_PARAMS = {
  DAD_JOKE: {
    url: 'https://icanhazdadjoke.com/',
    headers: {
      'Accept': 'application/json'
    }
  },
  CHUCK_NORRIS: {
    url: 'https://api.chucknorris.io/jokes/random',
    headers: {
      'Accept': 'application/json'
    }
  },
  WEATHER: {
    url: 'https://api.open-meteo.com/v1/forecast',
    params: {
      latitude: 41.3888, // Barcelona
      longitude: 2.159,
      current_weather: true
    }
  }
};

export type JokeAPI = 'DAD_JOKE' | 'CHUCK_NORRIS';