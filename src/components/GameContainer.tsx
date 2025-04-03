import React, { useState, useEffect } from 'react';
import { GameProvider } from '../contexts/GameContext';
import QuestionDisplay from './QuestionDisplay';
import GuessForm from './GuessForm';
import AttemptsDisplay from './AttemptsDisplay';
import { useGame } from '../hooks/useGame';
import IntroductionDialog from './IntroductionDialog';
import GameHeader from './GameHeader';
import { Heart } from 'lucide-react';
import GameResultsDialog from './GameResultsDialog';

const GameContent: React.FC = () => {
  const { gameState, useHint, revealAnswer } = useGame();
  const [showIntro, setShowIntro] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const handleToggleIntro = () => {
    setShowIntro(true);
  };
  
  useEffect(() => {
    if (gameState.gameEnded || gameState.answerRevealed) {
      setShowResults(true);
    }
  }, [gameState.gameEnded, gameState.answerRevealed]);
  
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden">
      <GameHeader 
        gameState={gameState}
        useHint={useHint}
        onToggleIntro={handleToggleIntro}
        revealAnswer={revealAnswer}
        onShowResults={() => setShowResults(true)}
      />
      
      <main className="flex-1 flex flex-col p-2 overflow-hidden bg-gray-900">
        <div className="space-y-2 flex-1 flex flex-col">
          <QuestionDisplay question={gameState.question} />
          
          <div className="flex-grow flex flex-col overflow-hidden min-h-0">
            <AttemptsDisplay 
              attempts={gameState.attempts} 
              question={gameState.question}
              compact={true}
            />
          </div>
          
          <div className="flex-shrink-0 mb-2">
            <GuessForm />
          </div>
        </div>
      </main>
      
      <footer className="text-center p-2 text-xs text-gray-500 border-t border-gray-700 flex-shrink-0">
        Made with <Heart className="inline h-3 w-3 text-red-500 mx-0.5"/> by the #CriticalThinking team.
        Questions update daily at midnight.
      </footer>

      <IntroductionDialog open={showIntro} onOpenChange={setShowIntro} />
      <GameResultsDialog open={showResults} onOpenChange={setShowResults} />
    </div>
  );
};

const GameContainer: React.FC = () => {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
};

export default GameContainer;
