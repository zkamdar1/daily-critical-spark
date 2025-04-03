
import React from 'react';
import GameContainer from '../components/GameContainer';

const Index: React.FC = () => {
  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
      <GameContainer />
    </div>
  );
};

export default Index;
