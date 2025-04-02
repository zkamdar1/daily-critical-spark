
import React from 'react';
import { Attempt, Question } from '../types/game';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';

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

  const getProgressColor = (attempt: Attempt) => {
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
      <div className="space-y-3">
        {attempts.map((attempt, index) => (
          <div key={index} className="flex items-center space-x-2 animate-fade-in">
            <div className="w-8 text-right text-sm">{index + 1}.</div>
            <div className="flex-1 border rounded-md p-3 flex flex-col bg-white shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{attempt.guess}</span>
                <div className="flex space-x-1">
                  {question.type === 'numerical' ? (
                    <span className={cn(
                      "text-xs font-semibold px-2 py-1 rounded-full text-white",
                      getColorClass(attempt)
                    )}>
                      {Math.round(attempt.closenessScore || 0)}%
                    </span>
                  ) : (
                    <span className={cn(
                      "text-xs font-semibold px-2 py-1 rounded-full text-white",
                      getColorClass(attempt)
                    )}>
                      {attempt.isCorrect ? '✓' : '✗'}
                    </span>
                  )}
                </div>
              </div>
              
              {question.type === 'numerical' && (
                <div className="w-full mt-1">
                  <Progress 
                    value={attempt.closenessScore} 
                    max={100}
                    className={cn("h-2 bg-gray-100")}
                    indicatorClassName={getProgressColor(attempt)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Empty slots for remaining attempts */}
        {Array.from({ length: emptyRows }).map((_, index) => (
          <div key={`empty-${index}`} className="flex items-center space-x-2">
            <div className="w-8 text-right text-sm">{attempts.length + index + 1}.</div>
            <div className="flex-1 border border-dashed rounded-md p-3 text-gray-300 flex justify-center">
              -
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttemptsDisplay;
