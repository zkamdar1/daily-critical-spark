
export type QuestionType = 'numerical' | 'text';

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  answer: number | string[];
  min?: number;  // For numerical questions - min bounds
  max?: number;  // For numerical questions - max bounds
  day: number;   // Day of the year (1-365)
  hint?: string; // Optional hint for the question
  explanation?: string; // Optional explanation of the answer
}

export interface Attempt {
  guess: string;
  feedback: number | boolean; // Percentage for numerical, boolean for text
  closenessScore?: number; // 0-100 percentage
  isCorrect: boolean;
  revealedAnswer?: boolean; // Whether the user revealed the answer for this attempt
}

export interface GameState {
  currentDay: number; // Current day's ID
  question: Question | null;
  attempts: Attempt[];
  gameEnded: boolean;
  streak: number;
  lastPlayedDate: string | null;
  hintUsed: boolean; // Track if hint was used
  answerRevealed: boolean; // Track if answer was revealed
}
