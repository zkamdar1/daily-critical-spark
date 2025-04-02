
import React from 'react';
import { Question } from '../types/game';

interface QuestionDisplayProps {
  question: Question | null;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  if (!question) return null;
  
  return (
    <div className="my-6 text-center px-4">
      <h2 className="text-xl font-bold mb-1">Today's Question</h2>
      <p className="text-lg">{question.text}</p>
      <p className="text-sm text-muted-foreground mt-2">
        {question.type === 'numerical' ? 'Enter a number' : 'Enter your answer'}
      </p>
    </div>
  );
};

export default QuestionDisplay;
