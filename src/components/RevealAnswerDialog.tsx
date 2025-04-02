
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

  if (!question || gameEnded) return null;

  const handleReveal = () => {
    onRevealAnswer(claimsCorrect);
    setOpen(false);
  };

  const answerDisplay = question.type === 'numerical' 
    ? question.answer.toString() 
    : (question.answer as string[]).join(' or ');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="text-gray-500 border-gray-200 hover:bg-gray-50"
        >
          I Think I'm Right
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reveal Answer</DialogTitle>
          <DialogDescription>
            Are you sure you want to reveal the answer? This will end your game.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="mb-4 font-semibold text-center">The answer is:</p>
          <div className="p-3 bg-gray-100 rounded-md text-center font-bold">
            {answerDisplay}
          </div>
          
          <div className="flex items-center space-x-2 mt-6">
            <Checkbox 
              id="claim-correct" 
              checked={claimsCorrect}
              onCheckedChange={(checked) => setClaimsCorrect(checked as boolean)}
            />
            <label htmlFor="claim-correct" className="text-sm">
              My answer was essentially correct, but wasn't matching the text
            </label>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleReveal}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RevealAnswerDialog;
