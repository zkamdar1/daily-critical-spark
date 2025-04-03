import React, { createContext, useContext, useEffect, useState } from 'react';
import { Attempt, GameState, Question } from '../types/game';
import { getTodaysQuestion } from '../data/questions';
import { toast } from '../hooks/use-toast';

interface GameContextProps {
  gameState: GameState;
  submitGuess: (guess: string) => void;
  resetGame: () => void;
  shareResults: () => void;
  useHint: () => void;
  revealAnswer: (claimCorrect: boolean) => void;
}

const initialGameState: GameState = {
  currentDay: 0,
  question: null,
  attempts: [],
  gameEnded: false,
  streak: 0,
  lastPlayedDate: null,
  hintUsed: false,
  answerRevealed: false,
};

// Export the context itself
export const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  useEffect(() => {
    const storedState = localStorage.getItem('criticalThinkerState');
    
    if (storedState) {
      const parsedState: GameState = JSON.parse(storedState);
      
      const today = new Date().toISOString().split('T')[0];
      
      if (parsedState.lastPlayedDate !== today) {
        const todaysQuestion = getTodaysQuestion();
        setGameState({
          currentDay: todaysQuestion.day,
          question: todaysQuestion,
          attempts: [],
          gameEnded: false,
          streak: parsedState.streak,
          lastPlayedDate: today,
          hintUsed: false,
          answerRevealed: false,
        });
      } else {
        setGameState(parsedState);
      }
    } else {
      const todaysQuestion = getTodaysQuestion();
      const today = new Date().toISOString().split('T')[0];
      
      setGameState({
        currentDay: todaysQuestion.day,
        question: todaysQuestion,
        attempts: [],
        gameEnded: false,
        streak: 0,
        lastPlayedDate: today,
        hintUsed: false,
        answerRevealed: false,
      });
    }
  }, []);

  useEffect(() => {
    if (gameState.question) {
      localStorage.setItem('criticalThinkerState', JSON.stringify(gameState));
    }
  }, [gameState]);

  const calculateCloseness = (guess: number, answer: number, min: number, max: number): number => {
    if (guess === answer) return 100;
    
    const closeness = 100 * (1 - Math.abs(guess - answer) / Math.max(answer, 1));
    return Math.max(0, Math.min(100, closeness));
  };

  const isTextCorrect = (guess: string, answers: string[]): boolean => {
    const normalizedGuess = guess.trim().toLowerCase();
    return answers.some(answer => 
      normalizedGuess === answer.toLowerCase().trim()
    );
  };

  const submitGuess = (guessInput: string) => {
    if (gameState.gameEnded || !gameState.question || gameState.attempts.length >= 6) {
      return;
    }

    const { question } = gameState;
    let attempt: Attempt;

    if (question.type === 'numerical') {
      const guessNumber = parseInt(guessInput);
      
      if (isNaN(guessNumber)) {
        toast({
          title: "Invalid input",
          description: "Please enter a valid number",
          variant: "destructive"
        });
        return;
      }

      const answer = question.answer as number;
      const min = question.min || 0;
      const max = question.max || answer * 2;
      const closenessScore = calculateCloseness(guessNumber, answer, min, max);
      const isCorrect = guessNumber === answer;

      attempt = {
        guess: guessInput,
        feedback: closenessScore,
        closenessScore,
        isCorrect
      };
    } else {
      const answers = question.answer as string[];
      const isCorrect = isTextCorrect(guessInput, answers);

      attempt = {
        guess: guessInput,
        feedback: isCorrect,
        isCorrect
      };
    }

    const newAttempts = [...gameState.attempts, attempt];
    const gameEnded = attempt.isCorrect || newAttempts.length >= 6;
    let streak = gameState.streak;

    if (gameEnded) {
      if (attempt.isCorrect) {
        streak += 1;
        toast({
          title: "Correct!",
          description: `You got it in ${newAttempts.length} ${newAttempts.length === 1 ? 'attempt' : 'attempts'}!`,
          variant: "default"
        });
      } else {
        streak = 0;
        const answer = question.type === 'numerical' 
          ? question.answer.toString()
          : (question.answer as string[])[0];
        
        toast({
          title: "Game Over",
          description: `The answer was: ${answer}`,
          variant: "destructive"
        });
      }
    }

    setGameState({
      ...gameState,
      attempts: newAttempts,
      gameEnded,
      streak,
    });
  };

  const resetGame = () => {
    const todaysQuestion = getTodaysQuestion();
    const today = new Date().toISOString().split('T')[0];
    
    setGameState({
      currentDay: todaysQuestion.day,
      question: todaysQuestion,
      attempts: [],
      gameEnded: false,
      streak: 0,
      lastPlayedDate: today,
      hintUsed: false,
      answerRevealed: false,
    });
  };

  const useHint = () => {
    if (!gameState.hintUsed) {
      setGameState({
        ...gameState,
        hintUsed: true
      });
    }
  };

  const revealAnswer = (claimCorrect: boolean) => {
    if (gameState.gameEnded || !gameState.question) return;
    
    let streak = gameState.streak;
    const attempts = [...gameState.attempts];
    
    if (attempts.length > 0) {
      const lastAttemptIndex = attempts.length - 1;
      attempts[lastAttemptIndex] = {
        ...attempts[lastAttemptIndex],
        revealedAnswer: true,
        isCorrect: claimCorrect
      };
    }
    
    if (claimCorrect) {
      streak += 1;
      toast({
        title: "Answer Verified",
        description: "You've marked your answer as correct"
      });
    } else {
      streak = 0;
      toast({
        title: "Answer Revealed",
        description: "Better luck next time!"
      });
    }

    setGameState({
      ...gameState,
      attempts,
      gameEnded: true,
      answerRevealed: true,
      streak
    });
  };

  const shareResults = () => {
    if (!gameState.question) return;

    const { attempts, question, hintUsed, answerRevealed } = gameState;
    let shareText = `#CriticalThinker #Day${question.day}\n`;
    
    const lastAttempt = attempts.length > 0 ? attempts[attempts.length - 1] : null;

    if (lastAttempt && lastAttempt.isCorrect) {
      if (lastAttempt.revealedAnswer) { // Was correct *because* it was revealed and claimed
        shareText += `${attempts.length}/6*`; 
      } else { // Naturally correct
        shareText += `${attempts.length}/6`;
      }
    } else if (answerRevealed) { // Revealed but *not* claimed correct (gave up)
      shareText += 'X/6*';
    } else { // Failed without revealing
      shareText += 'X/6';
    }
    
    if (hintUsed) {
      shareText += '💡';
    }
    
    shareText += '\n\n';
    
    // Add attempt summary
    attempts.forEach(attempt => {
      if (question.type === 'numerical') {
        const closeness = attempt.closenessScore || 0;
        if (closeness >= 90) {
          shareText += '🟩'; // Very close or correct
        } else if (closeness >= 70) {
          shareText += '🟨'; // Close
        } else if (closeness >= 40) {
          shareText += '🟧'; // Somewhat close
        } else {
          shareText += '🟥'; // Not close
        }
      } else {
        if (attempt.isCorrect) {
          shareText += '🟩'; // Correct
        } else {
          shareText += '🟥'; // Incorrect
        }
      }
    });
    
    // Dynamically use the current window's origin for the share link
    const shareUrl = window.location.origin;
    shareText += `\n\n${shareUrl}`;
    
    try {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Results Copied",
        description: "Share your results with friends!",
      });
    } catch (err) {
      console.error('Failed to copy results', err);
      toast({
        title: "Couldn't copy results",
        description: "Please try again or copy manually",
        variant: "destructive",
      });
    }
  };

  return (
    <GameContext.Provider value={{ 
      gameState, 
      submitGuess, 
      resetGame, 
      shareResults,
      useHint,
      revealAnswer
    }}>
      {children}
    </GameContext.Provider>
  );
};
