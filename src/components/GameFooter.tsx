
import React from 'react';

const GameFooter: React.FC = () => {
  return (
    <footer className="w-full text-center p-6 mt-auto text-sm text-muted-foreground bg-gradient-to-r from-blue-50 to-green-50">
      <p>A new puzzle arrives every day at midnight UTC</p>
      <p className="mt-1">Made with <span className="text-red-500">♥</span> by the <span className="font-semibold">#CriticalThinker</span> team</p>
    </footer>
  );
};

export default GameFooter;
