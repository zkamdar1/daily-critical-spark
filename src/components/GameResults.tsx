
import React from 'react';
import { Button } from './ui/button';
import { useGame } from '../contexts/GameContext';

const GameResults: React.FC = () => {
  const { gameState, shareResults } = useGame();
  
  if (!gameState.gameEnded) return null;

  const { attempts, question, streak } = gameState;
  const isCorrect = attempts.length > 0 && attempts[attempts.length - 1].isCorrect;
  
  return (
    <div className="w-full max-w-md mx-auto mt-8 px-4 text-center">
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-2">
          {isCorrect ? 'Well done!' : 'Better luck next time!'}
        </h3>
        
        <p className="text-lg mb-1">
          {isCorrect 
            ? `You solved it in ${attempts.length}/${gameState.attempts.length > 1 ? 'attempts' : 'attempt'}`
            : 'You used all 6 attempts'
          }
        </p>
        
        <p className="text-sm text-muted-foreground mb-4">
          Current streak: {streak} {streak === 1 ? 'day' : 'days'}
        </p>
        
        {!isCorrect && question && (
          <div className="mb-4 p-2 bg-gray-100 rounded">
            <p className="font-semibold">The answer was:</p>
            <p>
              {question.type === 'numerical' 
                ? question.answer
                : (question.answer as string[])[0]
              }
            </p>
          </div>
        )}
        
        <Button 
          onClick={shareResults} 
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Share Results
        </Button>
      </div>
    </div>
  );
};

export default GameResults;
