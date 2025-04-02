
import React from 'react';
import { GameProvider } from '../contexts/GameContext';
import GameHeader from './GameHeader';
import QuestionDisplay from './QuestionDisplay';
import GuessForm from './GuessForm';
import AttemptsDisplay from './AttemptsDisplay';
import GameResults from './GameResults';
import GameFooter from './GameFooter';
import { useGame } from '../contexts/GameContext';

const GameContent: React.FC = () => {
  const { gameState } = useGame();
  
  return (
    <div className="flex flex-col min-h-screen">
      <GameHeader />
      <main className="flex-1 flex flex-col">
        <QuestionDisplay question={gameState.question} />
        <GuessForm />
        <AttemptsDisplay 
          attempts={gameState.attempts} 
          question={gameState.question} 
        />
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
