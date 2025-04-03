
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

const IntroductionDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-6 bg-gray-800 border-gray-700 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-100">Daily Quiz Challenge</DialogTitle>
          <div className="text-center text-sm text-gray-400 mt-1">Test your knowledge every day!</div>
        </DialogHeader>
        
        <div className="space-y-4 my-2">
          <DialogDescription className="text-gray-300 text-base">
            Welcome to the Daily Quiz Challenge! Each day, you'll get a new question to test your knowledge.
          </DialogDescription>
          
          <div className="space-y-4 text-sm">
            <div className="bg-gray-700 p-3 rounded-md">
              <h3 className="font-bold mb-1 text-gray-200">How to Play</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>You have 6 attempts to answer each daily question</li>
                <li>Type your answer in the input box and press enter</li>
                <li>Use hints if you get stuck (but they affect your score)</li>
                <li>Build a streak by answering correctly each day</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-gray-700 p-3 rounded-md">
                <p className="font-bold text-yellow-400">Hints</p>
                <p className="text-gray-300 text-xs mt-1">Click the "Hint" button if you need help, but remember using hints will affect your streak.</p>
              </div>
              
              <div className="bg-gray-700 p-3 rounded-md">
                <p className="font-bold text-blue-400">Current Streak: <span>0</span></p>
                <p className="text-gray-300 text-xs mt-1">Come back daily to build your knowledge streak!</p>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            onClick={handleClose} 
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Start Playing
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IntroductionDialog;
