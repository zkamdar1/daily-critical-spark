import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import type { GameContextProps } from '../contexts/GameContext'; // Import the type if needed

export const useGame = (): GameContextProps => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}; 