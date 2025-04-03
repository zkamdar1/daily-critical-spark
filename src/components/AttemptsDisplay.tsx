
import React from 'react';
import { Attempt, Question } from '../types/game';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';

interface AttemptsDisplayProps {
  attempts: Attempt[];
  question: Question | null;
  maxAttempts?: number;
  compact?: boolean;
}

const AttemptsDisplay: React.FC<AttemptsDisplayProps> = ({ 
  attempts, 
  question, 
  maxAttempts = 6,
  compact = false
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
    <div className={cn(
      "w-full max-w-md mx-auto px-2",
      compact ? "mt-1" : "mt-6"
    )}>
      <div className={cn(
        "space-y-1", 
        compact && "overflow-auto max-h-[30vh] pr-1"
      )}>
        {attempts.map((attempt, index) => (
          <div key={index} className="flex items-center space-x-2 animate-fade-in">
            <div className={cn(
              "text-right text-sm",
              compact ? "w-5" : "w-8"
            )}>
              {index + 1}.
            </div>
            <div className={cn(
              "flex-1 border rounded-md bg-white shadow-sm",
              compact ? "p-2" : "p-3"
            )}>
              <div className="flex justify-between items-center">
                <span className={cn(
                  "font-medium",
                  compact ? "text-sm" : ""
                )}>
                  {attempt.guess}
                </span>
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
                    className="h-1.5 bg-gray-100"
                    indicatorClassName={getProgressColor(attempt)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Empty slots for remaining attempts */}
        {emptyRows > 0 && (
          <div className={cn(
            "grid gap-1",
            compact ? "grid-cols-3" : ""
          )}>
            {Array.from({ length: emptyRows }).map((_, index) => (
              <div key={`empty-${index}`} className={cn(
                "flex items-center space-x-2",
                compact && "col-span-1"
              )}>
                <div className={cn(
                  "text-right text-sm",
                  compact ? "w-5" : "w-8"
                )}>
                  {attempts.length + index + 1}.
                </div>
                <div className={cn(
                  "flex-1 border border-dashed rounded-md text-gray-300 flex justify-center",
                  compact ? "py-1 text-xs" : "p-3"
                )}>
                  -
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AttemptsDisplay;
