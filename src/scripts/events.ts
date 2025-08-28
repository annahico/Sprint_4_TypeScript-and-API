import { fetchJoke, Joke } from './api';
import { updateJokeElement, updateScoreButtons, showNotification } from './dom';
import { 
  setCurrentScore, 
  setCurrentJoke, 
  addToReport, 
  getCurrentJoke, 
  getCurrentScore,
  getReportAcudits 
} from './main';
import { JokeAPI } from '../config/api_parameters.js';

export function initializeEventListeners(): void {
  // Next joke button
  const nextJokeBtn = document.getElementById('next-joke-btn');
  if (nextJokeBtn) {
    nextJokeBtn.addEventListener('click', handleNextJoke);
  }
  
  // Score buttons
  for (let i = 1; i <= 3; i++) {
    const scoreBtn = document.getElementById(`score-${i}`);
    if (scoreBtn) {
      scoreBtn.addEventListener('click', () => handleScoreClick(i));
    }
  }
  
  // Show report button
  const showReportBtn = document.getElementById('show-report-btn');
  if (showReportBtn) {
    showReportBtn.addEventListener('click', handleShowReport);
  }
}

export async function handleNextJoke(): Promise<void> {
  try {
    const currentJoke = getCurrentJoke();
    const currentScore = getCurrentScore();
    
    // Save current joke with rating if exists
    if (currentJoke && currentScore !== null) {
      const jokeWithRating = {
        ...currentJoke,
        score: currentScore,
        date: new Date().toISOString()
      };
      addToReport(jokeWithRating);
      console.log('Report updated:', getReportAcudits());
      showNotification('Rating saved!');
    }
    
    // comença sense puntuació
    setCurrentScore(null);
    updateScoreButtons(null);
    
    // Alterna entre les dues APIs d'acudits
    const apiType: JokeAPI = Math.random() > 0.5 ? 'DAD_JOKE' : 'CHUCK_NORRIS';
    
    // Carrega un nou acudit
    const newJoke = await fetchJoke(apiType);
    setCurrentJoke(newJoke);
    updateJokeElement(newJoke);
    
  } catch (error) {
    console.error('Error getting next joke:', error);
    showNotification('Error fetching joke. Please try again.', true);
  }
}

export function handleScoreClick(score: number): void {
  setCurrentScore(score);
  updateScoreButtons(score);
  showNotification(`Rated ${score} stars!`);
}

export function handleShowReport(): void {
  const report = getReportAcudits();
  console.log('Current report:', report);
  alert(`Total jokes rated: ${report.length}\nView full report in console.`);
}