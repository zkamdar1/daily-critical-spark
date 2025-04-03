
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
          className="flex-1 pl-3 pr-10 py-4 text-base shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-800 border-gray-700 text-gray-100"
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
      <div className="mt-1 flex justify-center">
        <div className="grid grid-cols-10 gap-1">
          <KeyboardButton>Q</KeyboardButton>
          <KeyboardButton>W</KeyboardButton>
          <KeyboardButton>E</KeyboardButton>
          <KeyboardButton>R</KeyboardButton>
          <KeyboardButton>T</KeyboardButton>
          <KeyboardButton>Y</KeyboardButton>
          <KeyboardButton>U</KeyboardButton>
          <KeyboardButton>I</KeyboardButton>
          <KeyboardButton>O</KeyboardButton>
          <KeyboardButton>P</KeyboardButton>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-9 gap-1">
          <KeyboardButton>A</KeyboardButton>
          <KeyboardButton>S</KeyboardButton>
          <KeyboardButton>D</KeyboardButton>
          <KeyboardButton>F</KeyboardButton>
          <KeyboardButton>G</KeyboardButton>
          <KeyboardButton>H</KeyboardButton>
          <KeyboardButton>J</KeyboardButton>
          <KeyboardButton>K</KeyboardButton>
          <KeyboardButton>L</KeyboardButton>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-9 gap-1">
          <KeyboardButton className="col-span-2">ENTER</KeyboardButton>
          <KeyboardButton>Z</KeyboardButton>
          <KeyboardButton>X</KeyboardButton>
          <KeyboardButton>C</KeyboardButton>
          <KeyboardButton>V</KeyboardButton>
          <KeyboardButton>B</KeyboardButton>
          <KeyboardButton>N</KeyboardButton>
          <KeyboardButton>M</KeyboardButton>
          <KeyboardButton>⌫</KeyboardButton>
        </div>
      </div>
    </form>
  );
};

interface KeyboardButtonProps {
  children: React.ReactNode;
  className?: string;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ children, className = "" }) => {
  return (
    <button 
      type="button"
      className={`bg-gray-600 hover:bg-gray-500 text-gray-200 rounded text-xs sm:text-sm py-2 px-1 ${className}`}
    >
      {children}
    </button>
  );
};

export default GuessForm;
