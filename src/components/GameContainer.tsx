
import React, { useState } from 'react';
import { GameProvider } from '../contexts/GameContext';
import QuestionDisplay from './QuestionDisplay';
import GuessForm from './GuessForm';
import AttemptsDisplay from './AttemptsDisplay';
import GameResults from './GameResults';
import HintExplanation from './HintExplanation';
import RevealAnswerDialog from './RevealAnswerDialog';
import { useGame } from '../contexts/GameContext';
import IntroductionDialog from './IntroductionDialog';
import { Settings, LightbulbIcon, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const GameContent: React.FC = () => {
  const { gameState, useHint, revealAnswer } = useGame();
  const [showIntro, setShowIntro] = useState(false);
  
  const handleToggleIntro = () => {
    setShowIntro(true);
  };
  
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden">
      <header className="bg-gray-800 p-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost" 
              size="sm"
              className="p-2 text-gray-300 hover:text-gray-100"
              onClick={handleToggleIntro}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 text-center">
          <h1 className="text-base font-bold bg-gradient-to-r from-green-600 to-blue-600 inline-block text-transparent bg-clip-text">
            #CriticalThinker
          </h1>
        </div>
        
        <div className="flex-1 flex justify-end space-x-1">
          {gameState.question && !gameState.gameEnded && !gameState.answerRevealed && (
            <Button
              variant="ghost"
              size="sm"
              className={`p-2 ${gameState.hintUsed ? 'text-amber-500' : 'text-gray-300 hover:text-amber-500'}`}
              onClick={useHint}
            >
              <LightbulbIcon className="h-5 w-5" />
            </Button>
          )}
          
          {gameState.question && (gameState.gameEnded || gameState.answerRevealed) && gameState.question.explanation && (
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-gray-300 hover:text-indigo-400"
              onClick={() => document.getElementById('explanation-toggle')?.click()}
            >
              <BookOpen className="h-5 w-5" />
            </Button>
          )}
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
      
      <IntroductionDialog open={showIntro} onOpenChange={setShowIntro} />
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
