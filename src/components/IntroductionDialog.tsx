
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';

const IntroductionDialog: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);
  
  // Show introduction dialog when the component mounts
  useEffect(() => {
    // Check if the user has seen the intro before
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleClose = () => {
    setShowIntro(false);
    // Save to localStorage so we don't show it again
    localStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <Dialog open={showIntro} onOpenChange={setShowIntro}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">How to Play</DialogTitle>
          <DialogDescription>
            Welcome to Daily Critical Spark!
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4 text-left">
          <p>
            This game challenges your knowledge with daily critical thinking questions.
          </p>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Basic Rules:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>You get 3 attempts to answer each question.</li>
              <li>Questions can be numerical or text-based.</li>
              <li>For text questions, spelling matters, but not capitalization.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Hint:</span> Use it if you're stuck, but it counts as one attempt.</li>
              <li><span className="font-medium">"I Think I'm Right" button:</span> If you believe your answer is correct but not recognized, use this to review the answer.</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleClose} className="w-full">
            Start Playing
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IntroductionDialog;
