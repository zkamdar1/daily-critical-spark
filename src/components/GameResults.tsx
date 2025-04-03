import React from 'react';
import { Button } from './ui/button';
import { useGame } from '../hooks/useGame';
import { Share2 } from 'lucide-react';

const GameResults: React.FC = () => {
  const { gameState, shareResults } = useGame();
  
  if (!gameState.gameEnded && !gameState.answerRevealed) return null;

  const { attempts, question, streak, answerRevealed } = gameState;
  const isCorrect = attempts.length > 0 && attempts[attempts.length - 1].isCorrect;
  const claimedCorrect = answerRevealed && attempts.length < 6;
  
  return (
    <div className="w-full max-w-md mx-auto px-2 text-center">
      <div className="bg-gray-800 rounded-lg p-3 shadow-sm animate-fade-in border border-gray-700">
        <h3 className="text-lg font-bold mb-1 text-gray-100">
          {isCorrect ? '🎉 Well done!' : claimedCorrect ? '🤔 Your call!' : '😔 Better luck next time!'}
        </h3>
        
        <p className="text-sm mb-1 text-gray-300">
          {isCorrect 
            ? `You solved it in ${attempts.length} ${attempts.length === 1 ? 'attempt' : 'attempts'}`
            : claimedCorrect
              ? "You've revealed the answer"
              : 'You used all 6 attempts'
          }
        </p>
        
        <p className="text-xs text-gray-400 mb-2">
          Current streak: {streak} {streak === 1 ? 'day' : 'days'}
        </p>
        
        {(!isCorrect && !claimedCorrect) && question && (
          <div className="mb-3 p-2 bg-gray-700 rounded text-sm">
            <p className="font-semibold text-gray-300">The answer was:</p>
            <p className="font-bold text-gray-100">
              {question.type === 'numerical' 
                ? question.answer
                : (question.answer as string[]).join(' or ')
              }
            </p>
          </div>
        )}
        
        <Button 
          onClick={shareResults}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-transform"
        >
          <Share2 className="mr-1 h-3 w-3" />
          Share Results
        </Button>
      </div>
    </div>
  );
};

export default GameResults;
