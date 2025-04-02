import React, { createContext, useContext, useEffect, useState } from 'react';
import { Attempt, GameState, Question } from '../types/game';
import { getTodaysQuestion } from '../data/questions';
import { toast } from '../components/ui/use-toast';

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

const GameContext = createContext<GameContextProps | undefined>(undefined);

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
    
    if (attempts.length > 0 && attempts[attempts.length - 1].isCorrect) {
      shareText += `${attempts.length}/6`;
    } else if (answerRevealed) {
      shareText += 'X/6*';
    } else {
      shareText += 'X/6';
    }
    
    if (hintUsed) {
      shareText += '💡';
    }
    
    shareText += '\n\n';

    if (question.type === 'numerical') {
      for (const attempt of attempts) {
        const score = attempt.closenessScore || 0;
        if (score === 100) {
          shareText += '🟢🟢🟢\n';
        } else if (score >= 66) {
          shareText += '🟢🟡🟡\n';
        } else if (score >= 33) {
          shareText += '🟡🟡🔵\n';
        } else {
          shareText += '🔵🔵🔵\n';
        }
      }
    } else {
      for (const attempt of attempts) {
        if (attempt.isCorrect) {
          shareText += '🟢🟢🟢\n';
        } else {
          shareText += '🔴🔴🔴\n';
        }
      }
    }
    
    if (answerRevealed && attempts.length < 6) {
      shareText += '⚪⚪⚪\n';
    }

    shareText += '\ncriticalthinker.app';

    navigator.clipboard.writeText(shareText)
      .then(() => {
        toast({
          title: "Copied to clipboard!",
          description: "Share your results with friends",
        });
      })
      .catch(() => {
        toast({
          title: "Couldn't copy to clipboard",
          description: "Please copy the text manually",
          variant: "destructive"
        });
      });
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

export const useGame = (): GameContextProps => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
