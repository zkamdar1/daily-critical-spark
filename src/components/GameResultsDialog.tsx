import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import GameResults from './GameResults';
// Remove unused import
// import { useGame } from '../contexts/GameContext';

// Add props for open state
interface GameResultsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GameResultsDialog: React.FC<GameResultsDialogProps> = ({ open, onOpenChange }) => {
  const descriptionId = "game-results-description";

  // Remove internal state and effect
  // const { gameState } = useGame();
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (gameState.gameEnded || gameState.answerRevealed) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false);
  //   }
  // }, [gameState.gameEnded, gameState.answerRevealed]);

  // const handleOpenChange = (open: boolean) => {
  //   // Prevent closing the dialog manually for now, 
  //   // could be enhanced later with a close button if needed.
  //   if (!open) {
  //      // Optional: Could add logic here if manual closing is allowed
  //   }
  //   setIsOpen(open);
  // };

  return (
    // Use props for open state and handler
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        aria-describedby={descriptionId} 
        className="sm:max-w-[425px] bg-gray-900 border-gray-700 text-gray-100"
      >
        <DialogHeader className="hidden"> {/* Hide default header, GameResults provides its own */} 
          <DialogTitle>Game Over</DialogTitle> 
          <DialogDescription id={descriptionId} className="sr-only">
            Your game results summary.
          </DialogDescription>
        </DialogHeader>
        <GameResults />
      </DialogContent>
    </Dialog>
  );
};

export default GameResultsDialog; 