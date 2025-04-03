
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Question } from '../types/game';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Checkbox } from './ui/checkbox';
import { useIsMobile } from '../hooks/use-mobile';

interface RevealAnswerDialogProps {
  question: Question | null;
  gameEnded: boolean;
  onRevealAnswer: (claimCorrect: boolean) => void;
}

const RevealAnswerDialog: React.FC<RevealAnswerDialogProps> = ({
  question,
  gameEnded,
  onRevealAnswer,
}) => {
  const [open, setOpen] = useState(false);
  const [claimsCorrect, setClaimsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const isMobile = useIsMobile();

  if (!question || gameEnded) return null;

  const handleReveal = () => {
    if (!showAnswer) {
      setShowAnswer(true);
      return;
    }
    
    onRevealAnswer(claimsCorrect);
    setOpen(false);
    setShowAnswer(false);  // Reset for next time
  };

  const handleCancel = () => {
    setOpen(false);
    setShowAnswer(false);  // Reset the state when canceling
  };

  const answerDisplay = question.type === 'numerical' 
    ? question.answer.toString() 
    : (question.answer as string[]).join(' or ');

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) setShowAnswer(false); // Reset when dialog closes
    }}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="text-gray-500 border-gray-200 hover:bg-gray-50"
          size="sm"
        >
          I Think I'm Right
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-4">
        <DialogHeader className="space-y-1">
          <DialogTitle>Reveal Answer</DialogTitle>
          <DialogDescription>
            {!showAnswer ? 
              "Are you sure you want to reveal the answer? This will end your game."
              : 
              "Please confirm after seeing the answer."
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-2">
          {showAnswer ? (
            <>
              <p className="mb-2 font-semibold text-center text-sm">The answer is:</p>
              <div className="p-2 bg-gray-100 rounded-md text-center font-bold">
                {answerDisplay}
              </div>
              
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox 
                  id="claim-correct" 
                  checked={claimsCorrect}
                  onCheckedChange={(checked) => setClaimsCorrect(checked as boolean)}
                />
                <label htmlFor="claim-correct" className="text-xs sm:text-sm">
                  My answer was essentially correct, but wasn't matching the text
                </label>
              </div>
            </>
          ) : (
            <p className="text-center text-amber-600 text-sm">
              This action will reveal the answer and end your current game.
            </p>
          )}
        </div>
        
        <DialogFooter className="mt-2">
          <Button variant="outline" onClick={handleCancel} size="sm">
            Cancel
          </Button>
          <Button onClick={handleReveal} size="sm">
            {!showAnswer ? "Show Answer" : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RevealAnswerDialog;
