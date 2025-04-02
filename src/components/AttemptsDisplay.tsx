
import React from 'react';
import { Attempt, Question } from '../types/game';
import { cn } from '@/lib/utils';

interface AttemptsDisplayProps {
  attempts: Attempt[];
  question: Question | null;
  maxAttempts?: number;
}

const AttemptsDisplay: React.FC<AttemptsDisplayProps> = ({ 
  attempts, 
  question, 
  maxAttempts = 6 
}) => {
  if (!question) return null;

  const getColorClass = (attempt: Attempt) => {
    if (question.type === 'numerical') {
      const score = attempt.closenessScore || 0;
      if (score < 33) return 'bg-game-blue';
      if (score < 66) return 'bg-game-yellow';
      return 'bg-game-green';
    } else {
      return attempt.isCorrect ? 'bg-game-green' : 'bg-game-red';
    }
  };

  const emptyRows = Math.max(0, maxAttempts - attempts.length);

  return (
    <div className="w-full max-w-md mx-auto mt-6 px-4">
      <div className="space-y-2">
        {attempts.map((attempt, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-8 text-right text-sm">{index + 1}.</div>
            <div className="flex-1 border rounded-md p-2 flex justify-between items-center">
              <span className="font-medium">{attempt.guess}</span>
              <div className="flex space-x-1">
                <div 
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-white",
                    getColorClass(attempt)
                  )}
                >
                  {question.type === 'numerical' ? 
                    Math.round(attempt.closenessScore || 0) + '%' : 
                    (attempt.isCorrect ? '✓' : '✗')
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty slots for remaining attempts */}
        {Array.from({ length: emptyRows }).map((_, index) => (
          <div key={`empty-${index}`} className="flex items-center space-x-2">
            <div className="w-8 text-right text-sm">{attempts.length + index + 1}.</div>
            <div className="flex-1 border border-dashed rounded-md p-2 text-gray-300 flex justify-center">
              -
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttemptsDisplay;
