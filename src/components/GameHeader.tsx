
import React from 'react';
import { useGame } from '../contexts/GameContext';

const GameHeader: React.FC = () => {
  const { gameState } = useGame();
  
  return (
    <header className="w-full text-center p-6 border-b bg-gradient-to-r from-green-50 to-blue-50">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 inline-block text-transparent bg-clip-text">
        #CriticalThinker
      </h1>
      <p className="text-sm text-muted-foreground mt-2">
        Solve today's critical thinking puzzle in 6 attempts
      </p>
      {gameState.streak > 0 && (
        <div className="mt-2 text-sm inline-flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded">
          <span className="font-semibold">Streak:</span> 
          <span className="ml-1">{gameState.streak} {gameState.streak === 1 ? 'day' : 'days'}</span>
        </div>
      )}
    </header>
  );
};

export default GameHeader;
