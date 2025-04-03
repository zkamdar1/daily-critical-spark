import { Question } from '../types/game';

// Enhanced set of questions with hints and explanations
export const questions: Question[] = [
  {
    "id": 1,
    "text": "You have 100 coins to distribute among 5 pirates. The pirate who gets the most coins must get exactly 10 more than the pirate who gets the least. What's the maximum number of coins the greediest pirate can get?",
    "type": "numerical",
    "answer": 28,
    "min": 1,
    "max": 100,
    "day": 1,
    "hint": "Maximize the least amount to allow the most to be larger.",
    "explanation": "Set four pirates to 18 coins each and one to 28 coins. Total is 100, and 28 = 18 + 10."
  },
  {
    "id": 2,
    "text": "I have keys but no locks, space but no room, and you can enter but not go inside. What am I?",
    "type": "text",
    "answer": ["keyboard", "a keyboard"],
    "day": 2,
    "hint": "Think about something you use daily with your computer.",
    "explanation": "A keyboard has keys (buttons), a space bar, and an enter key, but no physical locks, rooms, or spaces to go inside."
  },
  {
    "id": 3,
    "text": "What's the next number in this sequence: 5, 10, 17, 26, 37?",
    "type": "numerical",
    "answer": 50,
    "min": 1,
    "max": 100,
    "day": 3,
    "hint": "Look at the differences between consecutive terms.",
    "explanation": "The differences are 5, 7, 9, 11, increasing by 2 each time. The next difference is 13, so 37 + 13 = 50."
  },
  {
    "id": 4,
    "text": "Estimate the number of tennis balls that can fit into a standard school bus.",
    "type": "numerical",
    "answer": 300000,
    "min": 100000,
    "max": 1000000,
    "day": 4,
    "hint": "Think about the volume of the bus and how tennis balls pack.",
    "explanation": "A school bus has a volume of about 100 cubic meters, and a tennis ball occupies about 157 cubic centimeters. With packing efficiency, roughly 300,000 balls can fit."
  },
  {
    "id": 5,
    "text": "A snail climbs a 10m pole. Each day, it climbs 3m, but at night, it slips back 2m. How many days does it take to reach the top?",
    "type": "numerical",
    "answer": 8,
    "min": 1,
    "max": 20,
    "day": 5,
    "hint": "Consider the net progress each day and when it reaches the top.",
    "explanation": "The snail makes a net progress of 1m per day until the day it climbs to 10m. On day 8, it starts at 7m, climbs to 10m, and stays."
  },
  {
    "id": 6,
    "text": "What five-letter word becomes shorter when you add two letters to it?",
    "type": "text",
    "answer": ["short"],
    "day": 6,
    "hint": "Think about the meaning of the word.",
    "explanation": "Adding 'er' to 'short' makes 'shorter', which means more short, but the riddle plays on 'short' as the base word."
  },
  {
    "id": 7,
    "text": "What's the smallest number of people in a room such that the probability that at least two share the same birthday is over 50%? (Assume 365 days in a year and uniform distribution.)",
    "type": "numerical",
    "answer": 23,
    "min": 1,
    "max": 100,
    "day": 7,
    "hint": "Calculate the probability that all have different birthdays and find when it drops below 50%.",
    "explanation": "For 23 people, the probability that all have different birthdays is about 49.3%, so the probability of at least one shared birthday is about 50.7%."
  },
  {
    "id": 8,
    "text": "A ladder 10m long leans against a wall, with its base 6m from the wall. How high up the wall does the ladder reach?",
    "type": "numerical",
    "answer": 8,
    "min": 1,
    "max": 10,
    "day": 8,
    "hint": "Think about a right triangle.",
    "explanation": "Using the Pythagorean theorem: √(10² - 6²) = √(100 - 36) = √64 = 8m."
  },
  {
    "id": 9,
    "text": "Two trains 200km apart are moving towards each other; one at 60km/h, the other at 40km/h. How long until they meet in hours?",
    "type": "numerical",
    "answer": 2,
    "min": 1,
    "max": 10,
    "day": 9,
    "hint": "Consider their combined speed.",
    "explanation": "Their relative speed is 60 + 40 = 100km/h. Time to meet is 200km / 100km/h = 2 hours."
  },
  {
    "id": 10,
    "text": "If all Zigs are Zags, and some Zags are Zogs, must some Zigs be Zogs?",
    "type": "text",
    "answer": ["no"],
    "day": 10,
    "hint": "Consider whether all Zags must be Zogs.",
    "explanation": "All Zigs are Zags, but only some Zags are Zogs. The Zigs could be among the Zags that aren’t Zogs, so it’s not necessary."
  },
  {
    "id": 11,
    "text": "What comes next in this sequence: O, T, T, F, F, S, S, E, ...?",
    "type": "text",
    "answer": ["n", "nine"],
    "day": 11,
    "hint": "Think about counting from one.",
    "explanation": "The sequence is the first letters of numbers: One, Two, Three, Four, Five, Six, Seven, Eight, Nine."
  },
  {
    "id": 12,
    "text": "Estimate the number of hairs on an average human head.",
    "type": "numerical",
    "answer": 100000,
    "min": 50000,
    "max": 500000,
    "day": 12,
    "hint": "Consider a rough count per square inch and the scalp area.",
    "explanation": "Assuming 100 hairs per square cm and a scalp area of about 1000 square cm, the total is approximately 100,000."
  },
  {
    "id": 13,
    "text": "What's the last digit of 2 raised to the power of 100?",
    "type": "numerical",
    "answer": 6,
    "min": 0,
    "max": 9,
    "day": 13,
    "hint": "Look for a pattern in the last digits of powers of 2.",
    "explanation": "The last digits of 2^n cycle every 4: 2, 4, 8, 6. Since 100 ÷ 4 = 25 (remainder 0), 2^100 ends in 6."
  },
  {
    "id": 14,
    "text": "I'm light as a feather, yet the strongest man can't hold me for much more than a minute. What am I?",
    "type": "text",
    "answer": ["breath", "air"],
    "day": 14,
    "hint": "Think about something you can’t grasp.",
    "explanation": "A breath is light and intangible, and even a strong person can’t hold it for long."
  },
  {
    "id": 15,
    "text": "You roll two dice. How many ways can the sum be 7?",
    "type": "numerical",
    "answer": 6,
    "min": 1,
    "max": 36,
    "day": 15,
    "hint": "List the possible pairs.",
    "explanation": "The pairs summing to 7 are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), totaling 6 ways."
  },
  {
    "id": 16,
    "text": "A circle has a radius of 5. What's the area of the largest square that can fit inside it?",
    "type": "numerical",
    "answer": 50,
    "min": 1,
    "max": 100,
    "day": 16,
    "hint": "The square’s diagonal is the circle’s diameter.",
    "explanation": "The circle’s diameter is 10. The square’s diagonal is 10, so its side is 10/√2, and area is (10/√2)² = 50."
  },
  {
    "id": 17,
    "text": "In a race, you overtake the second-place runner. What position are you in now?",
    "type": "numerical",
    "answer": 2,
    "min": 1,
    "max": 10,
    "day": 17,
    "hint": "Think about what overtaking means.",
    "explanation": "Overtaking the second-place runner puts you in their position, which is second."
  },
  {
    "id": 18,
    "text": "What's the next number in this sequence: 1, 1, 2, 3, 5, 8, 13?",
    "type": "numerical",
    "answer": 21,
    "min": 1,
    "max": 50,
    "day": 18,
    "hint": "Each number is the sum of the two before it.",
    "explanation": "This is the Fibonacci sequence: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 5 + 8 = 13, 8 + 13 = 21."
  },
  {
    "id": 19,
    "text": "Estimate the number of words in a 300-page novel.",
    "type": "numerical",
    "answer": 90000,
    "min": 50000,
    "max": 200000,
    "day": 19,
    "hint": "Estimate words per page and multiply.",
    "explanation": "Assuming 300 words per page, 300 pages × 300 words = 90,000 words."
  },
  {
    "id": 20,
    "text": "What's the sum of the interior angles in a pentagon in degrees?",
    "type": "numerical",
    "answer": 540,
    "min": 100,
    "max": 1000,
    "day": 20,
    "hint": "Use the formula for a polygon’s angles.",
    "explanation": "For an n-sided polygon, sum = (n-2) × 180°. For a pentagon (n=5), (5-2) × 180° = 540°."
  },
  {
    "id": 21,
    "text": "What has a neck but no head?",
    "type": "text",
    "answer": ["bottle", "a bottle"],
    "day": 21,
    "hint": "Think about everyday objects.",
    "explanation": "A bottle has a 'neck' as part of its shape but no head."
  },
  {
    "id": 22,
    "text": "If you flip three coins, how many ways can you get exactly two heads?",
    "type": "numerical",
    "answer": 3,
    "min": 1,
    "max": 8,
    "day": 22,
    "hint": "List the possible outcomes.",
    "explanation": "Outcomes with two heads are HHT, HTH, THH, totaling 3 ways out of 8 possible outcomes."
  },
  {
    "id": 23,
    "text": "What shape has all sides equal and all angles 90 degrees?",
    "type": "text",
    "answer": ["square"],
    "day": 23,
    "hint": "It’s a four-sided shape.",
    "explanation": "A square has four equal sides and four right angles."
  },
  {
    "id": 24,
    "text": "If some cats are black, and all black things are furry, are all cats furry?",
    "type": "text",
    "answer": ["no"],
    "day": 24,
    "hint": "Consider cats that aren’t black.",
    "explanation": "Only black cats must be furry. Non-black cats don’t have to be, so not all cats are furry."
  },
  {
    "id": 25,
    "text": "What comes next in this sequence: J, F, M, A, M, J, J, A, S, O, ...?",
    "type": "text",
    "answer": ["n", "november"],
    "day": 25,
    "hint": "Think about the calendar.",
    "explanation": "The sequence is the first letters of the months: January, February, March, April, May, June, July, August, September, October, November."
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
