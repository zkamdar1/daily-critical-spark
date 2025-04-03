import React from 'react';
import { Attempt, Question } from '../types/game';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

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

  const emptyRows = Math.max(0, maxAttempts - attempts.length);

  return (
    <div className={cn(
      "w-full max-w-md mx-auto px-2 flex flex-col h-full",
      compact ? "mt-1" : "mt-4"
    )}>
      <div className={cn(
        "h-full flex flex-col gap-1",
        compact && "pr-1"
      )}>
        {attempts.map((attempt, index) => (
          <div key={index} className="flex items-center space-x-2 animate-fade-in flex-1">
            <div className={cn(
              "text-center text-sm font-medium text-gray-400 flex-shrink-0",
              compact ? "w-5 text-sm" : "w-8 text-base"
            )}>
              {index + 1}
            </div>
            <div className={cn(
              "flex-1 border rounded-md shadow-sm flex items-center justify-between h-full",
              "bg-gray-800 border-gray-700",
              compact ? "p-1.5" : "p-3"
            )}>
              <div className={cn(
                "truncate flex-shrink mr-2",
                compact ? "text-sm max-w-[calc(100%-110px)]" : "text-base max-w-[calc(100%-180px)]"
              )}>
                {attempt.guess}
              </div>
              <div className="flex items-center space-x-1 flex-shrink-0">
                {question.type === 'numerical' ? (
                  <>
                    <div className="w-16 sm:w-24">
                      <Progress 
                        value={attempt.closenessScore} 
                        max={100}
                        className={cn("bg-gray-600 rounded-full", compact ? "h-1.5" : "h-2")}
                      />
                    </div>
                    <span className={cn(
                      "font-semibold px-1.5 py-0.5 rounded-full text-white w-12 text-center",
                      compact ? "text-xs" : "text-sm",
                      getColorClass(attempt)
                    )}>
                      {Math.round(attempt.closenessScore || 0)}%
                    </span>
                  </>
                ) : (
                  <span className={cn(
                    "font-bold px-2 py-0.5 rounded-full text-white",
                    compact ? "text-xs" : "text-sm",
                    getColorClass(attempt)
                  )}>
                    {attempt.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Restore the rendering of empty placeholder rows */}
        {Array.from({ length: emptyRows }).map((_, index) => (
          <div key={`empty-${index}`} className="flex items-center space-x-2 flex-1">
            <div className={cn(
              "text-center text-sm font-medium text-gray-600 flex-shrink-0",
              compact ? "w-5 text-sm" : "w-8 text-base"
            )}>
              {attempts.length + index + 1}
            </div>
            <div className={cn(
              "flex-1 border-2 border-dashed rounded-md border-gray-700 h-full",
              compact ? "" : ""
            )}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttemptsDisplay;
