
import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Button } from './ui/button';
import { Input } from './ui/input';

const GuessForm: React.FC = () => {
  const [guess, setGuess] = useState('');
  const { gameState, submitGuess } = useGame();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess.trim()) return;
    
    submitGuess(guess);
    setGuess('');
  };

  const isDisabled = 
    gameState.gameEnded || 
    gameState.attempts.length >= 6 || 
    !gameState.question;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder={gameState.question?.type === 'numerical' ? 'Enter a number' : 'Enter your answer'}
          disabled={isDisabled}
          className="flex-1"
          maxLength={50}
        />
        <Button 
          type="submit" 
          disabled={isDisabled || !guess.trim()} 
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Guess
        </Button>
      </div>
    </form>
  );
};

export default GuessForm;
