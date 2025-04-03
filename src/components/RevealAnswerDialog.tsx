
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
          className="text-gray-400 border-gray-700 hover:bg-gray-800 bg-gray-800"
          size="sm"
        >
          Give Up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-4 bg-gray-800 border-gray-700 text-gray-200">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-gray-100">Reveal Answer</DialogTitle>
          <DialogDescription className="text-gray-400">
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
              <p className="mb-2 font-semibold text-center text-sm text-gray-300">The answer is:</p>
              <div className="p-2 bg-gray-700 rounded-md text-center font-bold text-gray-100">
                {answerDisplay}
              </div>
              
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox 
                  id="claim-correct" 
                  checked={claimsCorrect}
                  onCheckedChange={(checked) => setClaimsCorrect(checked as boolean)}
                  className="border-gray-500"
                />
                <label htmlFor="claim-correct" className="text-xs sm:text-sm text-gray-300">
                  My answer was essentially correct, but wasn't matching the text
                </label>
              </div>
            </>
          ) : (
            <p className="text-center text-amber-400 text-sm">
              This action will reveal the answer and end your current game.
            </p>
          )}
        </div>
        
        <DialogFooter className="mt-2">
          <Button variant="outline" onClick={handleCancel} size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            Cancel
          </Button>
          <Button onClick={handleReveal} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            {!showAnswer ? "Show Answer" : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RevealAnswerDialog;
