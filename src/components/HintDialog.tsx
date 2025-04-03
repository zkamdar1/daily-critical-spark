import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Question } from '../types/game';

interface HintDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  question: Question | null;
  hintUsed: boolean;
  onConfirmHint: () => void; // Callback to call useHint in context
}

const HintDialog: React.FC<HintDialogProps> = ({ 
  open, 
  onOpenChange, 
  question, 
  hintUsed,
  onConfirmHint 
}) => {
  const [showHintContent, setShowHintContent] = useState(false);

  useEffect(() => {
    if (open) {
      setShowHintContent(false);
    }
  }, [open]);

  if (!question?.hint) return null; // Don't render if no hint

  const handleConfirm = () => {
    setShowHintContent(true);
    if (!hintUsed) {
      onConfirmHint();
    }
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-4 bg-gray-800 border-gray-700 text-gray-200">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-gray-100">Hint</DialogTitle>
          <DialogDescription className="text-gray-400">
            {showHintContent || hintUsed 
              ? "You have used the hint for today."
              : "Using this hint will prevent your streak from increasing today."}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 text-center text-gray-100 bg-gray-700 rounded my-2 min-h-[50px] flex items-center justify-center">
          {showHintContent ? (
            question.hint
          ) : (
            <span className="italic text-gray-400">Click below to reveal hint</span>
          )}
        </div>
        
        <DialogFooter className="mt-2">
          {!showHintContent && (
            <Button variant="outline" onClick={handleClose} size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Cancel
            </Button>
          )}
          <Button onClick={showHintContent ? handleClose : handleConfirm} size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
            {showHintContent ? "Close" : (hintUsed ? "Show Hint Anyway" : "Got it, Use Hint")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HintDialog; 