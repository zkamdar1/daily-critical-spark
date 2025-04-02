
import React from 'react';
import { Button } from './ui/button';
import { useGame } from '../contexts/GameContext';
import { Share2 } from 'lucide-react';

const GameResults: React.FC = () => {
  const { gameState, shareResults } = useGame();
  
  if (!gameState.gameEnded && !gameState.answerRevealed) return null;

  const { attempts, question, streak, answerRevealed } = gameState;
  const isCorrect = attempts.length > 0 && attempts[attempts.length - 1].isCorrect;
  const claimedCorrect = answerRevealed && attempts.length < 6;
  
  return (
    <div className="w-full max-w-md mx-auto mt-8 px-4 text-center">
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm animate-fade-in">
        <h3 className="text-2xl font-bold mb-2">
          {isCorrect ? '🎉 Well done!' : claimedCorrect ? '🤔 Your call!' : '😔 Better luck next time!'}
        </h3>
        
        <p className="text-lg mb-1">
          {isCorrect 
            ? `You solved it in ${attempts.length} ${attempts.length === 1 ? 'attempt' : 'attempts'}`
            : claimedCorrect
              ? "You've revealed the answer"
              : 'You used all 6 attempts'
          }
        </p>
        
        <p className="text-sm text-muted-foreground mb-4">
          Current streak: {streak} {streak === 1 ? 'day' : 'days'}
        </p>
        
        {(!isCorrect && !claimedCorrect) && question && (
          <div className="mb-6 p-3 bg-gray-100 rounded">
            <p className="font-semibold">The answer was:</p>
            <p className="font-bold text-lg">
              {question.type === 'numerical' 
                ? question.answer
                : (question.answer as string[]).join(' or ')
              }
            </p>
          </div>
        )}
        
        <Button 
          onClick={shareResults} 
          className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-transform"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
      </div>
    </div>
  );
};

export default GameResults;
