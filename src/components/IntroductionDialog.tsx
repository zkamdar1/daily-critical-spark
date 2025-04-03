
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
import { useGame } from '../contexts/GameContext';

const IntroductionDialog: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);
  const { gameState } = useGame();
  
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

  const handleOpenManually = () => {
    setShowIntro(true);
  };

  return (
    <>
      {/* Adding app title and streak at the top of the game now that header is removed */}
      <div className="w-full text-center pt-4 pb-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 inline-block text-transparent bg-clip-text">
          #CriticalThinker
        </h1>
        {gameState.streak > 0 && (
          <div className="mt-2 text-sm inline-flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded">
            <span className="font-semibold">Streak:</span> 
            <span className="ml-1">{gameState.streak} {gameState.streak === 1 ? 'day' : 'days'}</span>
          </div>
        )}
      </div>

      <Dialog open={showIntro} onOpenChange={(open) => {
        if (!open) handleClose();
        else setShowIntro(open);
      }}>
        <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-auto">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 inline-block text-transparent bg-clip-text mb-2">
              #CriticalThinker
            </DialogTitle>
            <DialogDescription className="text-base">
              Solve today's critical thinking puzzle in 6 attempts
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-sm leading-relaxed text-gray-700">
                This game tests your critical thinking with one challenging question each day.
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
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

              <div className="flex gap-3 bg-amber-50 p-3 rounded-lg border border-amber-100">
                <div className="mt-1 text-amber-500 flex-shrink-0">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-700">Special Features</h3>
                  <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-700">
                    <li><span className="font-medium">Hint Button</span>: Gives you a clue but counts as one attempt</li>
                    <li><span className="font-medium">"I Think I'm Right" Button</span>: Use if your answer isn't recognized but you believe it's correct</li>
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
    </>
  );
};

export default IntroductionDialog;
