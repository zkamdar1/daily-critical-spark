
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
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  if (!question) return null;

  const handleUseHint = () => {
    if (!hintUsed) {
      onUseHint();
      toast({
        title: "Hint revealed",
        description: "Using a hint may affect your sharing results"
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-2">
      <div className="flex flex-col gap-2">
        {/* Hint Button/Content */}
        <Collapsible open={hintUsed} className="w-full">
          <div className="flex justify-center">
            {!hintUsed ? (
              <Button 
                onClick={handleUseHint} 
                variant="outline"
                className="mb-2 text-amber-600 border-amber-200 hover:bg-amber-50"
              >
                <LightbulbIcon className="mr-2 h-4 w-4" />
                Get a Hint
              </Button>
            ) : (
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline"
                  className="mb-2 text-amber-600 border-amber-200 hover:bg-amber-50 w-full"
                >
                  <LightbulbIcon className="mr-2 h-4 w-4" />
                  {showExplanation ? 'Hide Hint' : 'Show Hint'}
                </Button>
              </CollapsibleTrigger>
            )}
          </div>
          
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border p-4 text-sm bg-amber-50 animate-fade-in">
              {question.hint || "No hint available for this question."}
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Explanation (only shown when game is ended) */}
        {(gameEnded || answerRevealed) && question.explanation && (
          <Collapsible className="w-full">
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline"
                className="mb-2 w-full text-indigo-600 border-indigo-200 hover:bg-indigo-50"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border p-4 text-sm bg-indigo-50 animate-fade-in">
                {question.explanation}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  );
};

export default HintExplanation;
