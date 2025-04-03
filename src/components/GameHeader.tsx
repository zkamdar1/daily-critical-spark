import React from 'react';
import { Settings, LightbulbIcon, BookOpen, HelpCircle, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { GameState } from '../types/game';
import RevealAnswerDialog from './RevealAnswerDialog';
import HintDialog from './HintDialog';
import ExplanationDialog from './ExplanationDialog';
import { useGame } from '../hooks/useGame';

interface GameHeaderProps {
  gameState: GameState;
  useHint: () => void;
  onToggleIntro: () => void;
  revealAnswer: (claimCorrect: boolean) => void;
  onShowResults: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({ gameState, useHint, onToggleIntro, revealAnswer, onShowResults }) => {
  const [isRevealDialogOpen, setIsRevealDialogOpen] = React.useState(false);
  const [isHintDialogOpen, setIsHintDialogOpen] = React.useState(false);
  const [isExplanationDialogOpen, setIsExplanationDialogOpen] = React.useState(false);
  const { shareResults } = useGame();

  const showExplanationButton = gameState.question && (gameState.gameEnded || gameState.answerRevealed) && gameState.question.explanation;
  const showShareButton = gameState.gameEnded || gameState.answerRevealed;

  return (
    <header className="bg-gray-800 p-3 flex items-center justify-between border-b border-gray-700">
      <div className="flex-shrink-0">
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost" 
            size="sm"
            className="p-2 text-gray-300 hover:text-gray-100"
            onClick={onToggleIntro}
            aria-label="Show Instructions"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 text-center px-2">
        <h1 className="text-base font-bold bg-gradient-to-r from-green-600 to-blue-600 inline-block text-transparent bg-clip-text">
          #CriticalThinker
        </h1>
      </div>
      
      <div className="flex-shrink-0 flex justify-end items-center space-x-1">
        {gameState.question && !gameState.gameEnded && !gameState.answerRevealed && gameState.question.hint && (
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 ${gameState.hintUsed ? 'text-amber-500' : 'text-gray-300 hover:text-amber-500'}`}
            onClick={() => setIsHintDialogOpen(true)}
            aria-label={gameState.hintUsed ? "Hint Used" : "Show Hint"}
          >
            <LightbulbIcon className="h-5 w-5" />
          </Button>
        )}
        
        {gameState.question && !gameState.gameEnded && !gameState.answerRevealed && (
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-gray-300 hover:text-blue-400"
            onClick={() => setIsRevealDialogOpen(true)}
            aria-label="Think answer is correct but not matching text"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
        )}
        
        {showExplanationButton && (
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-gray-300 hover:text-indigo-400"
            onClick={() => setIsExplanationDialogOpen(true)}
            aria-label="Show Explanation"
          >
            <BookOpen className="h-5 w-5" />
          </Button>
        )}

        {showShareButton && (
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-gray-300 hover:text-green-400"
            onClick={() => {
              shareResults();
              onShowResults();
            }}
            aria-label="Share Results"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        )}
      </div>

      <RevealAnswerDialog 
        open={isRevealDialogOpen} 
        onOpenChange={setIsRevealDialogOpen} 
        question={gameState.question} 
        gameEnded={gameState.gameEnded}
        onRevealAnswer={revealAnswer} 
      />
      <HintDialog
        open={isHintDialogOpen}
        onOpenChange={setIsHintDialogOpen}
        question={gameState.question}
        onConfirmHint={useHint}
        hintUsed={gameState.hintUsed}
      />
      <ExplanationDialog
        open={isExplanationDialogOpen}
        onOpenChange={setIsExplanationDialogOpen}
        question={gameState.question}
      />
    </header>
  );
};

export default GameHeader;
