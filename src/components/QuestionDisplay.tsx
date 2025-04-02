
import React from 'react';
import { Question } from '../types/game';

interface QuestionDisplayProps {
  question: Question | null;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  if (!question) return null;
  
  return (
    <div className="my-8 text-center px-4 animate-fade-in">
      <h2 className="text-2xl font-bold mb-3">Today's Question</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto border border-gray-100">
        <p className="text-lg font-medium">{question.text}</p>
        <p className="text-sm text-muted-foreground mt-3">
          {question.type === 'numerical' ? 'Enter a number' : 'Enter your answer'}
        </p>
      </div>
    </div>
  );
};

export default QuestionDisplay;
