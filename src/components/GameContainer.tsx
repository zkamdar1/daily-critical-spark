
import React, { useState, useEffect } from 'react';
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
import { ScrollArea } from './ui/scroll-area';
import IntroductionDialog from './IntroductionDialog';
import { useIsMobile } from '../hooks/use-mobile';

const GameContent: React.FC = () => {
  const { gameState, useHint, revealAnswer } = useGame();
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden">
      <GameHeader />
      <main className="flex-1 flex flex-col p-2 overflow-hidden">
        <ScrollArea className="flex-1">
          <div className="space-y-3 px-1">
            <QuestionDisplay question={gameState.question} />
            
            <HintExplanation 
              question={gameState.question}
              hintUsed={gameState.hintUsed}
              onUseHint={useHint}
              gameEnded={gameState.gameEnded}
              answerRevealed={gameState.answerRevealed}
            />
            
            <GuessForm />
            
            <AttemptsDisplay 
              attempts={gameState.attempts} 
              question={gameState.question} 
            />
            
            <div className="w-full max-w-md mx-auto my-2 px-2 flex justify-center">
              <RevealAnswerDialog 
                question={gameState.question} 
                gameEnded={gameState.gameEnded}
                onRevealAnswer={revealAnswer}
              />
            </div>
            
            <GameResults />
          </div>
        </ScrollArea>
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
