
import React from 'react';
import { Question } from '../types/game';

interface QuestionDisplayProps {
  question: Question | null;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  if (!question) return null;
  
  return (
    <div className="py-3 text-center px-2 animate-fade-in flex-shrink-0">
      <h2 className="text-xl font-bold mb-2">Today's Question</h2>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto border border-gray-100">
        <p className="text-base font-medium">{question.text}</p>
        <p className="text-xs text-muted-foreground mt-2">
          {question.type === 'numerical' ? 'Enter a number' : 'Enter your answer'}
        </p>
      </div>
    </div>
  );
};

export default QuestionDisplay;
