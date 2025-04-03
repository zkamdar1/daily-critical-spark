
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Question } from '../types/game';
import { useToast } from '../components/ui/use-toast';
import { LightbulbIcon, BookOpen } from 'lucide-react';

interface HintExplanationProps {
  question: Question | null;
  hintUsed: boolean;
  onUseHint: () => void;
  gameEnded: boolean;
  answerRevealed: boolean;
}

const HintExplanation: React.FC<HintExplanationProps> = ({ 
  question, 
  hintUsed, 
  onUseHint, 
  gameEnded,
  answerRevealed
}) => {
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  if (!question) return null;

  const handleUseHint = () => {
    if (!hintUsed) {
      onUseHint();
      setShowHint(true);
      toast({
        title: "Hint revealed",
        description: "Using a hint may affect your sharing results"
      });
    } else {
      setShowHint(!showHint);
    }
  };

  const handleToggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        {/* Hint Button/Content */}
        {!hintUsed ? (
          <Button 
            onClick={handleUseHint} 
            variant="outline"
            size="sm"
            className="text-amber-500 border-gray-700 hover:bg-gray-800 bg-gray-800"
          >
            <LightbulbIcon className="mr-1 h-3 w-3" />
            Hint
          </Button>
        ) : (
          <div className="space-y-1">
            <Button 
              onClick={handleUseHint}
              variant="outline"
              size="sm"
              className="w-full text-amber-500 border-gray-700 hover:bg-gray-800 bg-gray-800"
            >
              <LightbulbIcon className="mr-1 h-3 w-3" />
              {showHint ? 'Hide' : 'Hint'}
            </Button>
            
            {showHint && (
              <div className="rounded-md border border-gray-700 p-2 text-xs bg-gray-800 animate-fade-in text-gray-300">
                {question.hint || "No hint available for this question."}
              </div>
            )}
          </div>
        )}
        
        {/* Explanation (only shown when game is ended) */}
        {(gameEnded || answerRevealed) && question.explanation && (
          <div className="space-y-1">
            <Button 
              id="explanation-toggle"
              onClick={handleToggleExplanation}
              variant="outline"
              size="sm"
              className="w-full text-indigo-400 border-gray-700 hover:bg-gray-800 bg-gray-800"
            >
              <BookOpen className="mr-1 h-3 w-3" />
              {showExplanation ? 'Hide' : 'Explain'}
            </Button>
            
            {showExplanation && (
              <div className="rounded-md border border-gray-700 p-2 text-xs bg-gray-800 animate-fade-in text-gray-300">
                {question.explanation}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HintExplanation;
