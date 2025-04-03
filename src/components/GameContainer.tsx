
import React from 'react';
import { GameProvider } from '../contexts/GameContext';
import QuestionDisplay from './QuestionDisplay';
import GuessForm from './GuessForm';
import AttemptsDisplay from './AttemptsDisplay';
import GameResults from './GameResults';
import GameFooter from './GameFooter';
import HintExplanation from './HintExplanation';
import RevealAnswerDialog from './RevealAnswerDialog';
import { useGame } from '../contexts/GameContext';
import IntroductionDialog from './IntroductionDialog';

const GameContent: React.FC = () => {
  const { gameState, useHint, revealAnswer } = useGame();
  
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden">
      <header className="bg-gray-800 p-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
          <div className="flex items-center space-x-3">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
        <div>
          <button className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-xs">
            Subscribe to Games
          </button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col p-2 overflow-hidden bg-gray-900">
        <div className="space-y-2 flex-1 flex flex-col">
          <QuestionDisplay question={gameState.question} />
          
          <div className="flex-1 overflow-hidden">
            <AttemptsDisplay 
              attempts={gameState.attempts} 
              question={gameState.question}
              compact={true}
            />
          </div>
          
          <div className="flex-shrink-0 mb-1">
            <div className="w-full max-w-md mx-auto flex justify-between px-2 gap-2">
              <HintExplanation 
                question={gameState.question}
                hintUsed={gameState.hintUsed}
                onUseHint={useHint}
                gameEnded={gameState.gameEnded}
                answerRevealed={gameState.answerRevealed}
              />
              <RevealAnswerDialog 
                question={gameState.question} 
                gameEnded={gameState.gameEnded}
                onRevealAnswer={revealAnswer}
              />
            </div>
          </div>
          
          <div className="flex-shrink-0 mb-2">
            <GuessForm />
          </div>
          
          {(gameState.gameEnded || gameState.answerRevealed) && (
            <div className="flex-shrink-0">
              <GameResults />
            </div>
          )}
        </div>
      </main>
      
      <GameFooter />
      <IntroductionDialog />
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
