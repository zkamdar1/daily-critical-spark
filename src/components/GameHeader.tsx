
import React from 'react';

const GameHeader: React.FC = () => {
  return (
    <header className="w-full text-center p-4 border-b">
      <h1 className="text-3xl font-bold">#CriticalThinker</h1>
      <p className="text-sm text-muted-foreground mt-1">Solve today's critical thinking puzzle in 6 attempts</p>
    </header>
  );
};

export default GameHeader;
