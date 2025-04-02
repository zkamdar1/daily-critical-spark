
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

const GameContent: React.FC = () => {
  const { gameState, useHint, revealAnswer } = useGame();
  
  return (
    <div className="flex flex-col min-h-screen">
      <GameHeader />
      <main className="flex-1 flex flex-col">
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
        
        <div className="w-full max-w-md mx-auto my-4 px-4 flex justify-center">
          <RevealAnswerDialog 
            question={gameState.question} 
            gameEnded={gameState.gameEnded}
            onRevealAnswer={revealAnswer}
          />
        </div>
        
        <GameResults />
      </main>
      <GameFooter />
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
