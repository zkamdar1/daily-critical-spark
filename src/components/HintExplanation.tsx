
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
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
    <div className="w-full max-w-md mx-auto px-2">
      <div className="flex flex-col gap-1">
        {/* Hint Button/Content */}
        {!hintUsed ? (
          <Button 
            onClick={handleUseHint} 
            variant="outline"
            size="sm"
            className="text-amber-600 border-amber-200 hover:bg-amber-50"
          >
            <LightbulbIcon className="mr-1 h-3 w-3" />
            Get a Hint
          </Button>
        ) : (
          <div className="space-y-1">
            <Button 
              onClick={handleUseHint}
              variant="outline"
              size="sm"
              className="w-full text-amber-600 border-amber-200 hover:bg-amber-50"
            >
              <LightbulbIcon className="mr-1 h-3 w-3" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>
            
            {showHint && (
              <div className="rounded-md border p-2 text-xs bg-amber-50 animate-fade-in">
                {question.hint || "No hint available for this question."}
              </div>
            )}
          </div>
        )}
        
        {/* Explanation (only shown when game is ended) */}
        {(gameEnded || answerRevealed) && question.explanation && (
          <div className="space-y-1">
            <Button 
              onClick={handleToggleExplanation}
              variant="outline"
              size="sm"
              className="w-full text-indigo-600 border-indigo-200 hover:bg-indigo-50"
            >
              <BookOpen className="mr-1 h-3 w-3" />
              {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
            </Button>
            
            {showExplanation && (
              <div className="rounded-md border p-2 text-xs bg-indigo-50 animate-fade-in">
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
