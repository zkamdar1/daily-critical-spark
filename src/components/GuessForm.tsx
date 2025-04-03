
import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { SendIcon } from 'lucide-react';

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
    !gameState.question ||
    gameState.answerRevealed;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-2 animate-fade-in">
      <div className="flex space-x-2 relative">
        <Input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder={gameState.question?.type === 'numerical' ? 'Enter a number' : 'Enter your answer'}
          disabled={isDisabled}
          className="flex-1 pl-3 pr-10 py-4 text-base shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
          maxLength={50}
        />
        <Button 
          type="submit" 
          disabled={isDisabled || !guess.trim()} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
          size="sm"
        >
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default GuessForm;
