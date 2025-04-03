
import React from 'react';
import { GameProvider } from '../contexts/GameContext';
import GameHeader from './GameHeader';
import QuestionDisplay from './QuestionDisplay';
import GuessForm from './GuessForm';
import AttemptsDisplay from './AttemptsDisplay';
import GameResults from './GameResults';
import GameFooter from './GameFooter';
import HintExplanation from './HintExplanation';
import RevealAnswerDialog from './RevealAnswerDialog';
import { useGame } from '../contexts/GameContext';
import IntroductionDialog from './IntroductionDialog';
import { useIsMobile } from '../hooks/use-mobile';

const GameContent: React.FC = () => {
  const { gameState, useHint, revealAnswer } = useGame();
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden">
      <GameHeader />
      <main className="flex-1 flex flex-col p-2 overflow-hidden">
        <div className="space-y-2 flex-1 flex flex-col">
          <QuestionDisplay question={gameState.question} />
          
          <div className="flex-shrink-0">
            <HintExplanation 
              question={gameState.question}
              hintUsed={gameState.hintUsed}
              onUseHint={useHint}
              gameEnded={gameState.gameEnded}
              answerRevealed={gameState.answerRevealed}
            />
          </div>
          
          <div className="flex-shrink-0">
            <GuessForm />
          </div>
          
          <div className="flex-1 overflow-hidden">
            <AttemptsDisplay 
              attempts={gameState.attempts} 
              question={gameState.question}
              compact={true}
            />
          </div>
          
          <div className="w-full max-w-md mx-auto flex justify-center flex-shrink-0">
            <RevealAnswerDialog 
              question={gameState.question} 
              gameEnded={gameState.gameEnded}
              onRevealAnswer={revealAnswer}
            />
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
