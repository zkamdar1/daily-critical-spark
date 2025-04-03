
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
import { HelpCircle, CheckCircle, AlertCircle, Info } from 'lucide-react';

const IntroductionDialog: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);
  
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleClose = () => {
    setShowIntro(false);
    localStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <Dialog open={showIntro} onOpenChange={(open) => {
      if (!open) handleClose();
      else setShowIntro(open);
    }}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2 text-green-600">
            <HelpCircle className="h-5 w-5" />
            How to Play
          </DialogTitle>
          <DialogDescription>
            Welcome to Daily Critical Spark!
          </DialogDescription>
        </DialogHeader>

        <div className="py-2 space-y-6 text-left">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <p className="text-sm leading-relaxed text-gray-700">
              This game tests your critical thinking with one challenging question each day.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 text-blue-500 flex-shrink-0">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Basic Rules</h3>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-700">
                  <li>You have <span className="font-medium">6 attempts</span> to answer each daily question</li>
                  <li>For <span className="font-medium">text questions</span>, spelling matters but not capitalization</li>
                  <li>For <span className="font-medium">numerical questions</span>, you'll see how close your guess is</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 text-amber-500 flex-shrink-0">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-700">Special Features</h3>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-700">
                  <li><span className="font-medium">Hint Button</span>: Gives you a clue but counts as one attempt</li>
                  <li><span className="font-medium">"I Think I'm Right" Button</span>: If your answer isn't recognized but you believe it's correct</li>
                  <li><span className="font-medium">Share Results</span>: Challenge friends with your score!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="pt-2">
          <Button onClick={handleClose} className="w-full bg-green-600 hover:bg-green-700">
            <CheckCircle className="mr-2 h-4 w-4" />
            Start Playing
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IntroductionDialog;
