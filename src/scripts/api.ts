
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




