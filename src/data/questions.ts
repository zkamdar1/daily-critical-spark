
import { Question } from '../types/game';

// Sample set of questions
export const questions: Question[] = [
  {
    id: 1,
    text: "How many elevators are there in Manhattan?",
    type: "numerical",
    answer: 58000,
    min: 1000,
    max: 200000,
    day: 1
  },
  {
    id: 2,
    text: "What's the next number in this sequence: 2, 4, 8, 16, ?",
    type: "numerical",
    answer: 32,
    min: 1,
    max: 100,
    day: 2
  },
  {
    id: 3,
    text: "How many piano tuners are there in Chicago?",
    type: "numerical",
    answer: 125,
    min: 10,
    max: 1000,
    day: 3
  },
  {
    id: 4,
    text: "If 100 murderers are lined up and you have 1 bullet, how do you stop them from escaping (they'll try unless certain of death)?",
    type: "text",
    answer: ["shoot the first one", "kill the first one", "shoot one randomly"],
    day: 4
  },
  {
    id: 5,
    text: "In a town where everyone either always tells the truth or always lies, a stranger asks a local, 'Are you a truth-teller?' The local replies, 'Yes.' Is the local a truth-teller?",
    type: "text",
    answer: ["can't determine", "unknown", "impossible to know"],
    day: 5
  },
  {
    id: 6,
    text: "How many times heavier is an elephant than a mouse?",
    type: "numerical",
    answer: 90000,
    min: 1000,
    max: 1000000,
    day: 6
  },
  {
    id: 7,
    text: "What is the shortest word that contains all five vowels (a, e, i, o, u) exactly once?",
    type: "text",
    answer: ["sequoia", "eunoia", "eulogia"],
    day: 7
  }
];

// Function to get today's question based on the day of the year
export const getTodaysQuestion = (): Question => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Wrap around if we have fewer questions than days in a year
  const questionIndex = (dayOfYear - 1) % questions.length;
  return questions[questionIndex];
};
