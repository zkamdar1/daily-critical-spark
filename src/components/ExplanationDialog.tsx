import React from 'react';
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

interface ExplanationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  question: Question | null;
}

const ExplanationDialog: React.FC<ExplanationDialogProps> = ({ 
  open, 
  onOpenChange, 
  question 
}) => {
  if (!question?.explanation) return null; // Don't render if no explanation

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-4 bg-gray-800 border-gray-700 text-gray-200">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-gray-100">Explanation</DialogTitle>
          <DialogDescription className="text-gray-400">
            Here's a bit more context about the answer.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-3 text-sm text-gray-300 my-2 max-h-[60vh] overflow-y-auto">
          {question.explanation}
        </div>
        
        <DialogFooter className="mt-2">
          <Button onClick={() => onOpenChange(false)} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExplanationDialog; 