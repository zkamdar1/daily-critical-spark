import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Question } from '../types/game';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';

interface RevealAnswerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  question: Question | null;
  gameEnded: boolean;
  onRevealAnswer: (claimCorrect: boolean) => void;
}

const RevealAnswerDialog: React.FC<RevealAnswerDialogProps> = ({
  open,
  onOpenChange,
  question,
  gameEnded,
  onRevealAnswer,
}) => {
  const [claimsCorrect, setClaimsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  React.useEffect(() => {
    if (!open) {
      setShowAnswer(false);
      setClaimsCorrect(false);
    }
  }, [open]);

  if (!question || gameEnded) return null;

  const handleConfirm = () => {
    onRevealAnswer(claimsCorrect);
    onOpenChange(false);
    setShowAnswer(false);
    setClaimsCorrect(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
    setShowAnswer(false);
    setClaimsCorrect(false);
  };

  const answerDisplay = question.type === 'numerical' 
    ? question.answer.toString() 
    : (question.answer as string[]).join(' or ');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-4 bg-gray-800 border-gray-700 text-gray-200">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-gray-100">Think Your Answer Was Correct?</DialogTitle>
          <DialogDescription className="text-gray-400">
            {!showAnswer ? 
              "Use this if your text answer was close but didn't match exactly. Revealing the answer will end the game."
              : 
              "Confirm below if your answer was essentially correct."
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-2">
          {showAnswer ? (
            <>
              <p className="mb-2 font-semibold text-center text-sm text-gray-300">The official answer is:</p>
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
                  My answer was essentially correct, just phrased differently.
                </label>
              </div>
            </>
          ) : (
            <p className="text-center text-amber-400 text-sm">
              This will reveal the answer and end your current game.
              Only use if your text answer was close.
            </p>
          )}
        </div>
        
        <DialogFooter className="mt-2">
          <Button variant="outline" onClick={handleCancel} size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            Cancel
          </Button>
          {!showAnswer ? (
            <Button onClick={() => setShowAnswer(true)} size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              Show Answer
            </Button>
          ) : (
            <Button onClick={handleConfirm} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Confirm & End Game
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RevealAnswerDialog;
