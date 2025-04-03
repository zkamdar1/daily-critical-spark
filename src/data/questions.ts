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
    text: "What's the next number in this sequence: 3, 7, 15, 31, ?",
    type: "numerical",
    answer: 63,
    min: 1,
    max: 100,
    day: 2,
    hint: "Look at the difference between consecutive numbers, or how each number relates to powers of 2.",
    explanation: "Each number is one less than a power of two (2²-1=3, 2³-1=7, 2⁴-1=15, 2⁵-1=31). Alternatively, the difference doubles each time (+4, +8, +16). The next number is 2⁶-1 = 63 (or 31 + 32 = 63)."
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
    text: "If you flip a fair coin 10 times, what is the probability of getting all heads, expressed as '1 in X'? What is X?",
    type: "numerical",
    answer: 1024,
    min: 100,
    max: 2000,
    day: 4,
    hint: "Think about the probability of each individual flip and how to combine them.",
    explanation: "The probability of getting heads on one flip is 1/2. The probability of getting 10 heads in a row is (1/2)^10 = 1/1024. Therefore, the probability is 1 in 1024, and X is 1024."
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
    text: "A man needs to cross a river with a wolf, a goat, and a cabbage. His boat can only carry himself and one other item. He cannot leave the wolf alone with the goat, nor the goat alone with the cabbage. How does he get everything across?",
    type: "text",
    answer: ["take goat, return, take wolf, return goat, take cabbage, return, take goat", "take goat, return, take cabbage, return goat, take wolf, return, take goat"],
    day: 7,
    hint: "The goat is the trickiest item. You might need to bring something back temporarily.",
    explanation: "1. Take the goat across. 2. Return alone. 3. Take the wolf across. 4. Bring the goat back. 5. Take the cabbage across. 6. Return alone. 7. Take the goat across. (An alternative starts by taking the cabbage in step 3)."
  },
  {
    id: 8,
    text: "A bat and ball cost $1.10 in total. The bat costs $1 more than the ball. How much does the ball cost?",
    type: "numerical",
    answer: 5,
    min: 1,
    max: 100,
    day: 8,
    hint: "Don't make the common mistake! Set up an equation.",
    explanation: "If the ball costs x cents, the bat costs x + 100 cents. So x + (x + 100) = 110, which gives 2x + 100 = 110, so x = 5. The ball costs 5 cents and the bat costs 105 cents."
  },
  {
    id: 9,
    text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    type: "numerical",
    answer: 5,
    min: 1,
    max: 500,
    day: 9,
    hint: "Think about the production rate per machine.",
    explanation: "Each machine produces 1 widget in 5 minutes. So 100 machines would produce 100 widgets in 5 minutes."
  },
  {
    id: 10,
    text: "What's the next letter in this sequence: O, T, T, F, F, S, S, ?",
    type: "text",
    answer: ["e", "E"],
    day: 10,
    hint: "Think about counting and the first letters of number names.",
    explanation: "The sequence represents the first letters of the numbers: One, Two, Three, Four, Five, Six, Seven, Eight. So the answer is E for Eight."
  },
  {
    id: 11,
    text: "You have a 3-gallon jug and a 5-gallon jug. How can you measure exactly 4 gallons of water?",
    type: "text",
    answer: ["fill 5, pour into 3, empty 3, pour rest from 5 into 3, fill 5, top up 3", "fill 3, pour into 5, fill 3, top up 5, empty 5, pour rest from 3 into 5, fill 3, pour into 5"],
    day: 11,
    hint: "You'll need to fill, pour, and empty the jugs multiple times.",
    explanation: "1. Fill the 5-gallon jug. 2. Pour from the 5-gallon jug into the 3-gallon jug until the 3-gallon jug is full (leaving 2 gallons in the 5-gallon jug). 3. Empty the 3-gallon jug. 4. Pour the 2 gallons from the 5-gallon jug into the 3-gallon jug. 5. Fill the 5-gallon jug again. 6. Carefully pour water from the 5-gallon jug into the 3-gallon jug (which already has 2 gallons) until the 3-gallon jug is full. This uses 1 gallon from the 5-gallon jug, leaving exactly 4 gallons in the 5-gallon jug."
  },
  {
    id: 12,
    text: "What number comes next in the sequence: 1, 1, 2, 3, 5, 8, ?",
    type: "numerical",
    answer: 13,
    min: 5,
    max: 50,
    day: 12,
    hint: "Each number is the sum of the two preceding numbers.",
    explanation: "This is the Fibonacci sequence. Each number is the sum of the two preceding ones (1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13)."
  },
  {
    id: 13,
    text: "What is the capital of Australia?",
    type: "text",
    answer: ["canberra"],
    day: 13,
    hint: "It's not Sydney or Melbourne.",
    explanation: "Canberra is the capital city of Australia. Although Sydney and Melbourne are larger and more well-known, Canberra was chosen as a compromise location."
  },
  {
    id: 14,
    text: "If you were running a race and passed the person in 2nd place, what place would you be in now?",
    type: "text",
    answer: ["2nd", "second"],
    day: 14,
    hint: "Think carefully about who you overtook.",
    explanation: "If you pass the person in second place, you take their position. You are now in second place, and they are in third."
  },
  {
    id: 15,
    text: "How many months have 28 days?",
    type: "numerical",
    answer: 12,
    min: 1,
    max: 12,
    day: 15,
    hint: "Read the question carefully. Do other months *also* have 28 days?",
    explanation: "All 12 months of the year have at least 28 days. February has exactly 28 days in common years (and 29 in leap years), but all other months have more (30 or 31)."
  },
  {
    id: 16,
    text: "What word is spelled incorrectly in every dictionary?",
    type: "text",
    answer: ["incorrectly"],
    day: 16,
    hint: "This is a wordplay riddle.",
    explanation: "The word 'incorrectly' is, quite literally, spelled i-n-c-o-r-r-e-c-t-l-y in every dictionary."
  },
  {
    id: 17,
    text: "What is the approximate circumference of the Earth in kilometers?",
    type: "numerical",
    answer: 40000,
    min: 30000,
    max: 50000,
    day: 17,
    hint: "Think about the definition of the meter originally.",
    explanation: "The Earth's circumference at the equator is approximately 40,075 kilometers. The meter was originally defined as one ten-millionth of the distance from the equator to the North Pole."
  },
  {
    id: 18,
    text: "Mary's father has five daughters: 1. Nana, 2. Nene, 3. Nini, 4. Nono. What is the name of the fifth daughter?",
    type: "text",
    answer: ["mary"],
    day: 18,
    hint: "The answer is in the question itself.",
    explanation: "The question starts with 'Mary's father...', indicating Mary is one of the daughters. The list names the other four."
  },
  {
    id: 19,
    text: "What is the next number in the pattern: 1, 4, 9, 16, 25, ?",
    type: "numerical",
    answer: 36,
    min: 26,
    max: 50,
    day: 19,
    hint: "These are square numbers.",
    explanation: "The sequence consists of perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25. The next number is 6²=36."
  },
  {
    id: 20,
    text: "A farmer has 17 sheep, and all but 9 die. How many sheep are left?",
    type: "numerical",
    answer: 9,
    min: 1,
    max: 17,
    day: 20,
    hint: "Focus on the phrase 'all but 9 die'.",
    explanation: "The phrase 'all but 9 die' means that 9 sheep are the ones that *didn't* die, so 9 sheep are left."
  },
  {
    id: 21,
    text: "What can travel around the world while staying in a corner?",
    type: "text",
    answer: ["stamp", "a stamp"],
    day: 21,
    hint: "Think about something attached to letters.",
    explanation: "A postage stamp stays in the corner of an envelope but can travel anywhere the envelope goes."
  },
  {
    id: 22,
    text: "What is the approximate speed of light in meters per second?",
    type: "numerical",
    answer: 300000000,
    min: 250000000,
    max: 350000000,
    day: 22,
    hint: "It's a very large number, often written in scientific notation (3 x 10^8 m/s).",
    explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second, often rounded to 300,000,000 m/s or 3 x 10⁸ m/s for calculations."
  },
  {
    id: 23,
    text: "Forward I am heavy, but backward I am not. What am I?",
    type: "text",
    answer: ["ton", "a ton"],
    day: 23,
    hint: "Think about units of weight and palindromes.",
    explanation: "The word 'ton' is heavy, but spelled backward it becomes 'not'."
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
