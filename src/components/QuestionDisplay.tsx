
import React from 'react';
import { Question } from '../types/game';

interface QuestionDisplayProps {
  question: Question | null;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  if (!question) return null;
  
  return (
    <div className="py-2 text-center px-2 animate-fade-in flex-shrink-0">
      <h2 className="text-lg font-bold mb-1 text-gray-200">Today's Question</h2>
      <div className="bg-gray-800 p-3 rounded-lg shadow-md max-w-md mx-auto border border-gray-700">
        <p className="text-base font-medium text-gray-200">{question.text}</p>
        <p className="text-xs text-gray-400 mt-1">
          {question.type === 'numerical' ? 'Enter a number' : 'Enter your answer'}
        </p>
      </div>
    </div>
  );
};

export default QuestionDisplay;
