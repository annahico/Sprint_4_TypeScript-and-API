import { fetchJoke } from '../scripts/api';
import { getWeatherDescription } from '../scripts/dom';

// Mock global fetch
global.fetch = jest.fn();

describe('Jokes App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('getWeatherDescription returns correct description', () => {
    expect(getWeatherDescription(0)).toBe('Clear sky');
    expect(getWeatherDescription(95)).toBe('Thunderstorm');
    expect(getWeatherDescription(999)).toBe('Unknown');
  });
  
  test('fetchJoke handles API response correctly', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: '123', joke: 'Test joke' })
    });
    
    const joke = await fetchJoke('DAD_JOKE');
    
    expect(joke).toEqual({
      id: '123',
      joke: 'Test joke'
    });
  });
  
  test('fetchJoke handles API error', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404
    });
    
    await expect(fetchJoke('DAD_JOKE')).rejects.toThrow('Error fetching joke: 404');
  });
});