import { Question } from '../types/game';

// Enhanced set of questions with hints and explanations
export const questions: Question[] = [
  {
    id: 1,
    text: "If 100 murderers are lined up and you have 1 bullet, how do you stop them from escaping (they'll try unless certain of death)?",
    type: "text",
    answer: ["shoot the first one", "kill the first one", "shoot one randomly"],
    day: 1,
    hint: "Think about establishing credibility of your threat.",
    explanation: "By shooting the first person (or a random person), you establish your willingness to use the gun, making your threat to the others credible even with no bullets left."
  },
  {
    id: 2,
    text: "What's the next number in this sequence: 2, 4, 8, 16, ?",
    type: "numerical",
    answer: 32,
    min: 1,
    max: 100,
    day: 2,
    hint: "Look at how each number relates to the previous one.",
    explanation: "Each number is doubled to get the next number in the sequence (2×2=4, 4×2=8, 8×2=16, 16×2=32)."
  },
  {
    id: 3,
    text: "How many piano tuners are there in Chicago?",
    type: "numerical",
    answer: 125,
    min: 10,
    max: 1000,
    day: 3,
    hint: "Consider the population of Chicago, how many people own pianos, and how often they need tuning.",
    explanation: "This is a classic Fermi estimation problem. With Chicago's population, piano ownership rate, and tuning frequency, about 125 full-time piano tuners would be needed."
  },
  {
    id: 4,
    text: "If 100 murderers are lined up and you have 1 bullet, how do you stop them from escaping (they'll try unless certain of death)?",
    type: "text",
    answer: ["shoot the first one", "kill the first one", "shoot one randomly"],
    day: 4,
    hint: "Think about establishing credibility of your threat.",
    explanation: "By shooting the first person (or a random person), you establish your willingness to use the gun, making your threat to the others credible even with no bullets left."
  },
  {
    id: 5,
    text: "In a town where everyone either always tells the truth or always lies, a stranger asks a local, 'Are you a truth-teller?' The local replies, 'Yes.' Is the local a truth-teller?",
    type: "text",
    answer: ["can't determine", "unknown", "impossible to know"],
    day: 5,
    hint: "Consider what both a truth-teller and a liar would say to this question.",
    explanation: "Both truth-tellers and liars would answer 'Yes' to this question. A truth-teller would honestly say yes, while a liar would falsely say yes. Thus, it's impossible to determine."
  },
  {
    id: 6,
    text: "How many times heavier is an elephant than a mouse?",
    type: "numerical",
    answer: 90000,
    min: 1000,
    max: 1000000,
    day: 6,
    hint: "An average elephant weighs about 4-6 tons, while a mouse weighs about 20 grams.",
    explanation: "An average elephant (5,000 kg) divided by an average mouse (0.05 kg) gives a ratio of approximately 90,000 times heavier."
  },
  {
    id: 7,
    text: "What is the shortest word that contains all five vowels (a, e, i, o, u) exactly once?",
    type: "text",
    answer: ["sequoia", "eunoia", "eulogia"],
    day: 7,
    hint: "Think of words related to trees or philosophical concepts.",
    explanation: "'Sequoia' (a type of tree), 'eunoia' (a state of normal mental health), and 'eulogia' (a blessing) all contain each vowel exactly once."
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
