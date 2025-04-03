import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useGame } from '../contexts/GameContext';
import { LightbulbIcon, HelpCircle, BookOpen, Award, ListChecks } from 'lucide-react';

interface IntroductionDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const IntroductionDialog: React.FC<IntroductionDialogProps> = ({ 
  open: controlledOpen,
  onOpenChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { gameState } = useGame();

  // Handle controlled vs uncontrolled state
  const isControlled = controlledOpen !== undefined;
  const isDialogOpen = isControlled ? controlledOpen : isOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setIsOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro && !isControlled) {
      setIsOpen(true);
    }
  }, [isControlled]);

  const handleClose = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    handleOpenChange(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-gray-800 border-gray-700 text-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 text-center">
          <DialogTitle className="text-2xl font-bold text-gray-100">
            #CriticalThinker
          </DialogTitle>
          <DialogDescription className="text-gray-400 mt-1">
            Sharpen your thinking skills daily!
          </DialogDescription>
        </DialogHeader>

        {/* Content Area - Scrollable */}
        <div className="px-6 pb-4 space-y-4 overflow-y-auto flex-1">
          <p className="text-gray-300 text-center text-base">
            Welcome! Tackle a daily challenge designed to boost your logical reasoning.
          </p>

          {/* Core Features Grid */}
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/50 flex flex-col items-center justify-center">
              <ListChecks className="h-6 w-6 mb-1 text-blue-400" />
              <p className="font-semibold text-sm text-gray-200">6 Attempts</p>
              <p className="text-xs text-gray-400">Solve the puzzle</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/50 flex flex-col items-center justify-center">
              <LightbulbIcon className="h-6 w-6 mb-1 text-amber-400" />
              <p className="font-semibold text-sm text-gray-200">Use Hints</p>
              <p className="text-xs text-gray-400">If you get stuck</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/50 flex flex-col items-center justify-center">
              <BookOpen className="h-6 w-6 mb-1 text-indigo-400" />
              <p className="font-semibold text-sm text-gray-200">Explanations</p>
              <p className="text-xs text-gray-400">Learn after</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/50 flex flex-col items-center justify-center">
              <Award className="h-6 w-6 mb-1 text-green-400" />
              <p className="font-semibold text-sm text-gray-200">Build Streaks</p>
              <p className="text-xs text-gray-400">Play daily</p>
            </div>
          </div>
          
          {/* Text Answer Caveat Section */}
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50 space-y-2">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0" />
              <h4 className="font-semibold text-gray-100">Handling Text Answers</h4>
            </div>
            <p className="text-sm text-gray-300 pl-7">
              Text answers require a close match. If you think your answer is right but not accepted, use the <span className="font-medium text-gray-100">Reveal Answer</span> button (<HelpCircle className="inline h-3 w-3"/> icon). This lets you check the solution and confirm if your reasoning was sound, even if the wording differed. We're working on improving this!
            </p>
          </div>

          {/* Current Streak Display */}
          <div className="text-center bg-gray-700/50 p-3 rounded-lg border border-gray-600/50">
            <p className="font-semibold text-blue-400">Current Streak: <span className="text-xl font-bold text-gray-100">{gameState.streak}</span></p>
            <p className="text-xs text-gray-400 mt-1">Keep sharpening that mind daily!</p>
          </div>
        </div>

        {/* Footer Button */}
        <DialogFooter className="p-6 pt-0 mt-auto">
          <Button 
            onClick={handleClose} 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Start Playing
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IntroductionDialog;
