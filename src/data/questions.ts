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
    "text": "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Whose portrait is the man looking at?",
    "type": "text",
    "answer": ["his son", "his son's portrait", "the man's son"],
    "day": 2,
    "hint": "Break down the relationship described starting from 'my father's son'.",
    "explanation": "'My father's son' is the speaker himself (since he has no brothers). So the statement becomes 'that man's father is me'. Therefore, the man in the portrait is his son."
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
    "text": "You are given three boxes. One contains only apples, one contains only oranges, and one contains both apples and oranges. Each box is incorrectly labeled. You are allowed to pick only one fruit from only one box. Which box should you pick from to determine the correct contents of all three boxes?",
    "type": "text",
    "answer": ["the box labeled 'apples and oranges'", "apples and oranges"],
    "day": 6,
    "hint": "Picking from a box labeled with a single fruit type won't give you enough information if you pick that fruit.",
    "explanation": "Pick from the box labeled 'Apples and Oranges'. Since it's mislabeled, it must contain only Apples or only Oranges. If you pick an Apple, you know that box is Apples only. The box labeled 'Oranges' must then be Apples and Oranges (it can't be Oranges), and the box labeled 'Apples' must be Oranges."
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
    "explanation": "All Zigs are Zags, but only some Zags are Zogs. The Zigs could be among the Zags that aren't Zogs, so it's not necessary."
  },
  {
    "id": 11,
    "text": "What is the next letter in this sequence: J, A, S, O, N, D, ...?",
    "type": "text",
    "answer": ["j", "january"],
    "day": 11,
    "hint": "Think cyclically, not just linearly forward.",
    "explanation": "The sequence represents the first letters of the months in reverse order starting from July: July, August, September, October, November, December. The next month backwards would be January, starting with J."
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
    "text": "A certain type of bacteria doubles every hour. If you start with one bacterium in a jar, and the jar is full after 12 hours, at what hour was the jar half full?",
    "type": "numerical",
    "answer": 11,
    "min": 1,
    "max": 12,
    "day": 14,
    "hint": "If it doubles every hour to become full at hour 12, what was its state one hour before?",
    "explanation": "Since the bacteria double every hour, if the jar is full at hour 12, it must have been half full exactly one hour earlier, at hour 11."
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
    "hint": "The square's diagonal is the circle's diameter.",
    "explanation": "The circle's diameter is 10. The square's diagonal is 10, so its side is 10/√2, and area is (10/√2)² = 50."
  },
  {
    "id": 17,
    "text": "If a plane crashes on the border between the USA and Canada, where are the survivors buried?",
    "type": "text",
    "answer": ["you don't bury survivors", "nowhere", "survivors aren't buried"],
    "day": 17,
    "hint": "Read the question carefully. Who are we talking about burying?",
    "explanation": "The question is a trick; you don't bury survivors of a plane crash."
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
    "hint": "Use the formula for a polygon's angles.",
    "explanation": "For an n-sided polygon, sum = (n-2) × 180°. For a pentagon (n=5), (5-2) × 180° = 540°."
  },
  {
    "id": 21,
    "text": "What common six-letter English word contains three consecutive pairs of identical letters?",
    "type": "text",
    "answer": ["bookkeeper"],
    "day": 21,
    "hint": "Think about words related to professions or specific items.",
    "explanation": "The word 'bookkeeper' contains 'oo', 'kk', and 'ee' consecutively."
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
    "text": "A cube is painted red on all faces. It is then cut into 27 smaller identical cubes. How many of the smaller cubes have exactly one face painted red?",
    "type": "numerical",
    "answer": 6,
    "min": 0,
    "max": 27,
    "day": 23,
    "hint": "Think about the positions of the smaller cubes within the larger cube. Which ones have only one face exposed?",
    "explanation": "A 3x3x3 cube (27 smaller cubes) has 6 center pieces on each face that have exactly one face painted red."
  },
  {
    "id": 24,
    "text": "If some cats are black, and all black things are furry, are all cats furry?",
    "type": "text",
    "answer": ["no"],
    "day": 24,
    "hint": "Consider cats that aren't black.",
    "explanation": "Only black cats must be furry. Non-black cats don't have to be, so not all cats are furry."
  },
  {
    "id": 25,
    "text": "Using only addition, how can you add eight 8s to get the number 1000?",
    "type": "text",
    "answer": ["888 + 88 + 8 + 8 + 8 = 1000"],
    "day": 25,
    "hint": "Think about combining the digits, not just adding 8 eight times.",
    "explanation": "The solution involves arranging the eights into larger numbers: 888 + 88 + 8 + 8 + 8 = 1000. This uses exactly eight 8s."
  },
  {
    "id": 26,
    "text": "You have 15 apples to distribute among 4 people. Each person must get at least 1 apple, and one person must get exactly twice as many as another. What's the maximum number of apples the person with the most can have?",
    "type": "numerical",
    "answer": 8,
    "min": 1,
    "max": 15,
    "day": 26,
    "hint": "Try to set the 'twice' condition between the person with the most and another person.",
    "explanation": "To maximize the most apples one person can have, assign one person 4 apples and another 8 apples (twice as many), with the remaining two getting 1 and 2 apples. The total is 4 + 8 + 1 + 2 = 15, all get at least 1, and 8 is twice 4, so the maximum is 8."
  },
  {
    "id": 27,
    "text": "What is always in front of you but can't be seen?",
    "type": "text",
    "answer": ["the future", "future"],
    "day": 27,
    "hint": "Think conceptually about time.",
    "explanation": "The future is always ahead or 'in front' of us in time, but it cannot be literally seen."
  },
  {
    "id": 28,
    "text": "What's the next number in this sequence: 2, 3, 5, 8, 12, 17, ...?",
    "type": "numerical",
    "answer": 23,
    "min": 1,
    "max": 50,
    "day": 28,
    "hint": "Look at the differences between consecutive terms.",
    "explanation": "The differences between terms are 1, 2, 3, 4, 5, increasing by 1 each time. Starting from 17, add the next difference, 6, to get 17 + 6 = 23."
  },
  {
    "id": 29,
    "text": "Estimate the number of times an average person's heart beats in a day.",
    "type": "numerical",
    "answer": 100000,
    "min": 50000,
    "max": 200000,
    "day": 29,
    "hint": "Think about the average heart rate and multiply by time.",
    "explanation": "An average heart rate is about 70 beats per minute. In a day: 70 * 60 minutes * 24 hours = 100,800 beats, which is approximately 100,000."
  },
  {
    "id": 30,
    "text": "How many trailing zeros are in 100! (100 factorial)?",
    "type": "numerical",
    "answer": 24,
    "min": 1,
    "max": 100,
    "day": 30,
    "hint": "Count the number of times 5 is a factor in the numbers from 1 to 100.",
    "explanation": "Trailing zeros in a factorial come from pairs of 2s and 5s. The limiting factor is the number of 5s. For 100!: floor(100/5) + floor(100/25) = 20 + 4 = 24 zeros."
  },
  {
    "id": 31,
    "text": "You have 8 identical-looking coins, but one is counterfeit and lighter. Using a balance scale, what's the minimum number of weighings needed to guarantee finding the counterfeit coin?",
    "type": "numerical",
    "answer": 2,
    "min": 1,
    "max": 5,
    "day": 31,
    "hint": "Divide the coins into groups and compare them.",
    "explanation": "Divide the 8 coins into groups of 3, 3, and 2. Weigh the two groups of 3. If they balance, the counterfeit is in the 2; weigh those against each other to find it. If they don't balance, take the lighter group of 3 and weigh 2 of them. In 2 weighings, you can always identify the lighter coin."
  },
  {
    "id": 32,
    "text": "A farmer has 17 sheep. All but 9 die. How many sheep does he have left?",
    "type": "numerical",
    "answer": 9,
    "min": 0,
    "max": 17,
    "day": 32,
    "hint": "Focus on the phrasing 'All but 9'.",
    "explanation": "The phrase 'All but 9 die' means that 9 sheep are the ones that did *not* die, so 9 sheep are left."
  },
  {
    "id": 33,
    "text": "What's the next letter in this sequence: B, C, D, F, G, H, J, ...?",
    "type": "text",
    "answer": ["k"],
    "day": 33,
    "hint": "Look at the positions in the alphabet and the pattern of increments.",
    "explanation": "The alphabet positions are 2, 3, 4, 6, 7, 8, 10. The increments are +1, +1, +2, repeating. From J (10), add 1 to get 11, which is 'K'."
  },
  {
    "id": 34,
    "text": "Estimate the number of people who fly in airplanes each day worldwide.",
    "type": "numerical",
    "answer": 15000000,
    "min": 1000000,
    "max": 50000000,
    "day": 34,
    "hint": "Think about the number of flights and average passengers per flight.",
    "explanation": "Assume 100,000 flights daily worldwide, with an average of 150 passengers per flight. Total = 100,000 * 150 = 15,000,000 people."
  },
  {
    "id": 35,
    "text": "A rectangle has a perimeter of 20 meters and an area of 24 square meters. What is its length in meters, assuming length is greater than width?",
    "type": "numerical",
    "answer": 6,
    "min": 1,
    "max": 10,
    "day": 35,
    "hint": "Set up equations for perimeter and area.",
    "explanation": "Perimeter: 2l + 2w = 20 → l + w = 10. Area: l * w = 24. Substitute w = 10 - l into the area: l * (10 - l) = 24 → l^2 - 10l + 24 = 0. Solve: (l - 6)(l - 4) = 0, so l = 6 or 4. Since length > width, l = 6 meters."
  },
  {
    "id": 36,
    "text": "In a single-elimination tournament with 16 players, how many matches are needed to determine a winner?",
    "type": "numerical",
    "answer": 15,
    "min": 1,
    "max": 30,
    "day": 36,
    "hint": "Think about how many players need to be eliminated.",
    "explanation": "In a single-elimination tournament, each match eliminates one player. To find one winner from 16, 15 players must be eliminated, requiring 15 matches."
  },
  {
    "id": 37,
    "text": "If you have a 7-minute hourglass and an 11-minute hourglass, how can you measure exactly 15 minutes?",
    "type": "text",
    "answer": ["Start both. When 7min ends, flip it. When 11min ends, flip 7min again. It runs for 4 more min.", "Start both. Flip 7min when it ends (at 7m). Flip 11min when it ends (at 11m). Flip 7min when it ends again (at 14m). Let 11min run out (1 min after 14m)." ],
    "day": 37,
    "hint": "Think about starting, flipping, and stopping the hourglasses at key moments based on when the other finishes.",
    "explanation": "1. Start both hourglasses. 2. When the 7-minute hourglass runs out, immediately flip it over. 3. When the 11-minute hourglass runs out, the 7-minute hourglass will have been running for 4 minutes (11 - 7). Flip the 7-minute hourglass again. 4. Let the 7-minute hourglass run out. This second flip will take another 4 minutes. Total time = 11 minutes (from the 11-minute hourglass) + 4 minutes (from the second flip of the 7-minute hourglass) = 15 minutes."
  },
  {
    "id": 38,
    "text": "What's the next number in this sequence: 1, 3, 6, 10, 15, ...?",
    "type": "numerical",
    "answer": 21,
    "min": 1,
    "max": 50,
    "day": 38,
    "hint": "Think about adding consecutive integers.",
    "explanation": "These are triangular numbers: 1 = 1, 3 = 1 + 2, 6 = 1 + 2 + 3, 10 = 1 + 2 + 3 + 4, 15 = 1 + 2 + 3 + 4 + 5. The next is 1 + 2 + 3 + 4 + 5 + 6 = 21."
  },
  {
    "id": 39,
    "text": "Estimate the number of recognized countries in the world.",
    "type": "numerical",
    "answer": 195,
    "min": 100,
    "max": 300,
    "day": 39,
    "hint": "Think about the number of UN member states.",
    "explanation": "There are 193 UN member states plus 2 observer states (Vatican City and Palestine), totaling 195 recognized countries."
  },
  {
    "id": 40,
    "text": "How many different ways can you arrange three distinct books on a shelf?",
    "type": "numerical",
    "answer": 6,
    "min": 1,
    "max": 20,
    "day": 40,
    "hint": "Think about permutations.",
    "explanation": "For three distinct books, the number of arrangements is 3! = 3 * 2 * 1 = 6."
  },
  {
    "id": 41,
    "text": "What's the maximum number of pieces you can cut a pizza into with 4 straight cuts?",
    "type": "numerical",
    "answer": 11,
    "min": 1,
    "max": 20,
    "day": 41,
    "hint": "Each new cut can intersect all previous cuts to maximize pieces.",
    "explanation": "The maximum number of pieces with n straight cuts is (n(n + 1))/2 + 1. For 4 cuts: (4 * 5)/2 + 1 = 10 + 1 = 11 pieces."
  },
  {
    "id": 42,
    "text": "Imagine you are in a room with no doors, no windows, and only a mirror and a table. How do you get out?",
    "type": "text",
    "answer": ["Look in the mirror, see what you saw, take the saw, cut the table in half, two halves make a whole (hole), climb out the hole.", "Use the saw from the mirror to cut the table in half to make a hole."],
    "day": 42,
    "hint": "This is a classic wordplay riddle. Break down the steps described.",
    "explanation": "This riddle relies on puns: Look in the mirror, you see what you 'saw'. Take the 'saw'. Cut the table in 'half'. Two halves make a 'whole' (hole). Climb out through the 'hole'."
  },
  {
    "id": 43,
    "text": "What number follows logically in this sequence: 4, 8, 12, 16, 20, ...?",
    "type": "numerical",
    "answer": 24,
    "min": 1,
    "max": 50,
    "day": 43,
    "hint": "This is a simple arithmetic progression.",
    "explanation": "The sequence increases by 4 each time (multiples of 4). 20 + 4 = 24."
  },
  {
    "id": 44,
    "text": "Estimate the number of hours of video uploaded to YouTube every minute.",
    "type": "numerical",
    "answer": 500,
    "min": 100,
    "max": 1000,
    "day": 44,
    "hint": "Consider the vast amount of content created daily.",
    "explanation": "Estimates suggest around 500 hours of video are uploaded to YouTube every minute, based on the platform's massive daily content creation."
  },
  {
    "id": 45,
    "text": "What's the sum of the first 10 positive integers?",
    "type": "numerical",
    "answer": 55,
    "min": 1,
    "max": 100,
    "day": 45,
    "hint": "Use the formula for the sum of an arithmetic series.",
    "explanation": "The sum of the first n positive integers is n(n + 1)/2. For n = 10: 10 * 11 / 2 = 55."
  },
  {
    "id": 46,
    "text": "If 5 machines take 5 minutes to make 5 widgets, how many minutes do 100 machines take to make 100 widgets?",
    "type": "numerical",
    "answer": 5,
    "min": 1,
    "max": 100,
    "day": 46,
    "hint": "Think about the rate per machine.",
    "explanation": "Five machines make 5 widgets in 5 minutes, so each machine makes 1 widget in 5 minutes. Thus, 100 machines can make 100 widgets simultaneously in 5 minutes."
  },
  {
    "id": 47,
    "text": "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?",
    "type": "text",
    "answer": ["He is playing Monopoly", "It's a game of Monopoly"],
    "day": 47,
    "hint": "Think about contexts where pushing a car token and landing on property relate to bankruptcy.",
    "explanation": "The scenario describes actions within the board game Monopoly, where landing on a hotel owned by another player can lead to bankruptcy if you cannot pay the rent."
  },
  {
    "id": 48,
    "text": "What's the next number in this sequence: 1, 3, 6, 10, 15, ...?",
    "type": "numerical",
    "answer": 21,
    "min": 1,
    "max": 50,
    "day": 48,
    "hint": "Think about adding consecutive integers.",
    "explanation": "These are triangular numbers: 1 = 1, 3 = 1 + 2, 6 = 1 + 2 + 3, 10 = 1 + 2 + 3 + 4, 15 = 1 + 2 + 3 + 4 + 5. The next is 1 + 2 + 3 + 4 + 5 + 6 = 21."
  },
  {
    "id": 49,
    "text": "Estimate the number of breaths an average person takes in a year.",
    "type": "numerical",
    "answer": 8000000,
    "min": 1000000,
    "max": 10000000,
    "day": 49,
    "hint": "Calculate breaths per day and multiply by 365.",
    "explanation": "Assume 15 breaths per minute: 15 * 60 * 24 = 21,600 breaths per day. Over a year: 21,600 * 365 ≈ 7,884,000, or about 8,000,000."
  },
  {
    "id": 50,
    "text": "A sphere has a volume of (36 * pi) cubic units. What is its surface area in square units?",
    "type": "numerical",
    "answer": 113.1, // Calculate directly or expect 36*pi or approx 113.1
    "min": 100,
    "max": 120,
    "day": 50,
    "hint": "First find the radius from the volume formula (V = 4/3 * pi * r^3), then use it in the surface area formula (A = 4 * pi * r^2).",
    "explanation": "Volume V = (4/3)πr³ = 36π. Divide by π: (4/3)r³ = 36. Multiply by 3/4: r³ = 27. So, radius r = 3. Surface Area A = 4πr² = 4π(3)² = 4π(9) = 36π square units."
  },
  {
    "id": 51,
    "text": "You have 12 socks in a drawer: 6 identical blue and 6 identical black. If you pull socks out in complete darkness, what's the minimum number you must pull to guarantee a matching pair?",
    "type": "numerical",
    "answer": 3,
    "min": 1,
    "max": 12,
    "day": 51,
    "hint": "Consider the worst-case scenario for the first two socks you pull.",
    "explanation": "The first sock can be either blue or black. The second sock could be the opposite color. The third sock, however, must match either the first or the second sock, guaranteeing a pair. So, you need to pull 3 socks."
  },
  {
    "id": 52,
    "text": "What letter comes next in this sequence of capital letters: A, E, F, H, I, K, L, M, N, ...?",
    "type": "text",
    "answer": ["t"],
    "day": 52,
    "hint": "Think about the shapes of the letters themselves.",
    "explanation": "The sequence consists of capital letters made only of straight lines (A, E, F, H, I, K, L, M, N). The next letter in the alphabet made only of straight lines is T."
  },
  {
    "id": 53,
    "text": "Estimate the number of professional piano tuners working in a major city like Chicago (population ~3 million).",
    "type": "numerical",
    "answer": 80, // Example answer, range allows variation
    "min": 20,
    "max": 500,
    "day": 53,
    "hint": "Estimate pianos per household, tuning frequency, tuner workload, and population.",
    "explanation": "Fermi problem. Example: ~1M households, maybe 1 in 20 own pianos (50k pianos). Tuned yearly? Takes 2hrs? Tuner works 8hr/day, 5day/wk, 50wk/yr = 1000 pianos/yr. Need 50k/1000 = 50 tuners. Adjust for schools, venues etc. -> ~70-100."
  },
  {
    "id": 54,
    "text": "What is full of holes but still holds water?",
    "type": "text",
    "answer": ["sponge", "a sponge"],
    "day": 54,
    "hint": "Think about something absorbent.",
    "explanation": "A sponge has many holes (pores) but is designed to absorb and hold water."
  },
  {
    "id": 55,
    "text": "If it takes 3 painters 6 days to paint a house, assuming they all work at the same constant rate, how many days would it take 2 painters to paint the same house?",
    "type": "numerical",
    "answer": 9,
    "min": 1,
    "max": 30,
    "day": 55,
    "hint": "Calculate the total 'painter-days' required for the job.",
    "explanation": "The job requires 3 painters * 6 days = 18 painter-days of work. With 2 painters, the time required is 18 painter-days / 2 painters = 9 days."
  },
  {
    "id": 56,
    "text": "What's the next number in this sequence: 1, 4, 9, 16, 25, ...?",
    "type": "numerical",
    "answer": 36,
    "min": 1,
    "max": 100,
    "day": 56,
    "hint": "These numbers relate to squares.",
    "explanation": "The sequence consists of perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25. The next number is 6²=36."
  },
  {
    "id": 57,
    "text": "A man is found dead in a locked room empty except for a puddle of water and some sawdust. No signs of forced entry. How did he likely die?",
    "type": "text",
    "answer": ["stabbed with an icicle", "icicle", "melted weapon"],
    "day": 57,
    "hint": "Think about a weapon that could disappear, leaving only water.",
    "explanation": "The classic answer is that he was stabbed with an icicle, which then melted, leaving only a puddle of water. The sawdust might be incidental or from something else in the room (less common variation)."
  },
  {
    "id": 58,
    "text": "How many distinct triangles can be formed by choosing 3 vertices from a set of 6 points arranged on a circle?",
    "type": "numerical",
    "answer": 20,
    "min": 1,
    "max": 50,
    "day": 58,
    "hint": "This is a combination problem: how many ways to choose 3 points out of 6?",
    "explanation": "The number of ways to choose 3 vertices from 6 available points is given by the combination formula C(n, k) = n! / (k!(n-k)!). Here, C(6, 3) = 6! / (3!(6-3)!) = 720 / (6 * 6) = 720 / 36 = 20."
  },
  {
    "id": 59,
    "text": "Estimate the approximate empty weight (Operating Empty Weight) of a Boeing 747 airplane in kilograms.",
    "type": "numerical",
    "answer": 180000,
    "min": 100000,
    "max": 300000,
    "day": 59,
    "hint": "Think about the scale of a large passenger jet; it weighs many tons.",
    "explanation": "The Operating Empty Weight (OEW) of a Boeing 747 varies by model but is typically around 180,000 kg (or about 400,000 lbs)."
  },
  {
    "id": 60,
    "text": "What has cities, but no houses; forests, but no trees; and water, but no fish?",
    "type": "text",
    "answer": ["map", "a map"],
    "day": 60,
    "hint": "Think about representations of places.",
    "explanation": "A map depicts cities, forests, and bodies of water, but it doesn't contain the actual physical objects like houses, trees, or fish."
  },
  {
    "id": 61,
    "text": "You have two ropes, each taking exactly one hour to burn completely if lit from one end. The ropes don't burn at a uniform rate. How can you measure exactly 45 minutes using only these ropes and a lighter?",
    "type": "text",
    "answer": ["Light rope A at both ends and rope B at one end simultaneously. When rope A burns out (30 mins), light the other end of rope B. Rope B will finish burning 15 mins later.", "Burn A both ends, B one end. When A finishes, light B other end."],
    "day": 61,
    "hint": "Burning a rope from both ends halves its total burn time.",
    "explanation": "1. Light rope A at both ends and rope B at one end at the same time. 2. Rope A will burn out completely in 30 minutes (half the time). 3. At the exact moment Rope A burns out, light the *other* end of Rope B. Since 30 minutes of Rope B has already burned from one end, the remaining portion would take 30 minutes to burn from one end. By lighting the other end too, this remaining portion will burn out in half the time: 15 minutes. 4. Total time measured = 30 minutes (when A burned out) + 15 minutes (remaining B burning from both ends) = 45 minutes."
  },
  {
    "id": 62,
    "text": "What is the missing letter in this sequence: M, V, E, M, J, S, U, N, ...?",
    "type": "text",
    "answer": ["p"],
    "day": 62,
    "hint": "Think about ordering things in our solar system.",
    "explanation": "The sequence represents the first letters of the planets in order from the sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. The next (dwarf) planet is Pluto, starting with P."
  },
  {
    "id": 63,
    "text": "A bat and a ball cost 110 cents in total. The bat costs 100 cents more than the ball. How much does the ball cost in cents?",
    "type": "numerical",
    "answer": 5,
    "min": 1,
    "max": 110,
    "day": 63,
    "hint": "Set up an equation. If ball = x, then bat = x + 100.",
    "explanation": "Let B be the cost of the ball and T be the cost of the bat. T + B = 110. T = B + 100. Substitute the second equation into the first: (B + 100) + B = 110. Combine terms: 2B + 100 = 110. Subtract 100: 2B = 10. Divide by 2: B = 5 cents."
  },
  {
    "id": 64,
    "text": "What common English word retains the same pronunciation, even when you take away four of its five letters?",
    "type": "text",
    "answer": ["queue"],
    "day": 64,
    "hint": "Think about letters that don't change the sound.",
    "explanation": "The word 'Queue' is pronounced like the letter 'Q'. Removing the letters 'u', 'e', 'u', 'e' leaves 'Q', which has the same pronunciation."
  },
  {
    "id": 65,
    "text": "Estimate the number of individual blades of grass in a typical suburban lawn measuring 500 square meters.",
    "type": "numerical",
    "answer": 75000000, // Example answer, range allows variation
    "min": 10000000,
    "max": 500000000,
    "day": 65,
    "hint": "Estimate blades per square centimeter, then convert units.",
    "explanation": "Fermi problem. Assume ~15 blades/sq cm. 500 sq meters = 5,000,000 sq cm. Total blades = 5,000,000 sq cm * 15 blades/sq cm = 75,000,000 blades. Estimates vary widely based on grass density."
  },
  {
    "id": 66,
    "text": "What question can you never truthfully answer 'yes' to?",
    "type": "text",
    "answer": ["are you asleep yet", "are you asleep"],
    "day": 66,
    "hint": "If you can answer, what state are you necessarily in?",
    "explanation": "If you are able to answer the question 'Are you asleep yet?', you must be awake, making 'yes' an untruthful answer."
  },
  {
    "id": 67,
    "text": "Find the next number in this sequence: 31, 28, 31, 30, 31, 30, ...?",
    "type": "numerical",
    "answer": 31,
    "min": 28,
    "max": 31,
    "day": 67,
    "hint": "Think about the calendar.",
    "explanation": "The sequence represents the number of days in consecutive months of a non-leap year, starting with January: Jan(31), Feb(28), Mar(31), Apr(30), May(31), Jun(30). The next month is July, which has 31 days."
  },
  {
    "id": 68,
    "text": "Mary's father has five daughters: 1. Nana, 2. Nene, 3. Nini, 4. Nono. What is the name of the fifth daughter?",
    "type": "text",
    "answer": ["mary"],
    "day": 68,
    "hint": "Read the first part of the question again carefully.",
    "explanation": "The question starts by mentioning 'Mary's father'. Therefore, Mary must be one of the daughters. The list names four daughters, so the fifth must be Mary."
  },
  {
    "id": 69,
    "text": "Estimate the approximate number of cells in the average adult human body (in trillions).",
    "type": "numerical",
    "answer": 37, // Example, common estimate is 30-40 trillion
    "min": 10,
    "max": 100,
    "day": 69,
    "hint": "The number is incredibly large, measured in trillions.",
    "explanation": "Scientific estimates vary, but a commonly cited figure for the number of human cells in the average adult body is around 30-40 trillion (3.0-4.0 x 10^13). Bacterial cells in the microbiome outnumber human cells, but the question implies human cells."
  },
  {
    "id": 70,
    "text": "What can you hold in your right hand, but never in your left hand?",
    "type": "text",
    "answer": ["your left elbow", "left elbow"],
    "day": 70,
    "hint": "Think physically about what your hands can reach.",
    "explanation": "Due to the structure of your arms, you can physically grasp your left elbow with your right hand, but you cannot grasp your left elbow with your left hand."
  },
  {
    "id": 71,
    "text": "A square has an area of 64 square units. What is the exact length of its diagonal?",
    "type": "numerical",
    "answer": 11.31, // sqrt(128) approx 11.31
    "min": 10,
    "max": 15,
    "day": 71,
    "hint": "First find the side length from the area, then use the Pythagorean theorem.",
    "explanation": "Area = side * side = s². If Area = 64, then s = √64 = 8 units. The diagonal (d) forms a right triangle with two sides. By Pythagoras: s² + s² = d². So, 8² + 8² = d². 64 + 64 = d². d² = 128. d = √128 = √(64 * 2) = 8√2 ≈ 11.31 units."
  },
  {
    "id": 72,
    "text": "A doctor gives you 3 pills and tells you to take one every half hour. How much time will elapse from taking the first pill to taking the last pill?",
    "type": "numerical",
    "answer": 1, // Time is 1 hour
    "min": 0,
    "max": 3,
    "day": 72,
    "hint": "Think about the time intervals between taking the pills.",
    "explanation": "You take the 1st pill at time 0. You take the 2nd pill after 30 minutes (0.5 hours). You take the 3rd pill after another 30 minutes (1 hour total). The total time elapsed between the first and last pill is 1 hour."
  },
  {
    "id": 73,
    "text": "What word might logically follow in this sequence: Apple, Banana, Cherry, Date, ...?",
    "type": "text",
    "answer": ["elderberry"],
    "day": 73,
    "hint": "Consider the starting letters and a common category.",
    "explanation": "The sequence lists fruits in alphabetical order by their first letter: Apple (A), Banana (B), Cherry (C), Date (D). The next letter is E, and a common fruit starting with E is Elderberry."
  },
  {
    "id": 74,
    "text": "Estimate the total number of grains of sand on all the world's beaches combined (order of magnitude, e.g., 7 x 10^18). Provide the answer as a number.",
    "type": "numerical",
    "answer": 7e18, // Representing 7 quintillion
    "min": 1e15, // Quadrillion
    "max": 1e21, // Sextillion
    "day": 74,
    "hint": "Estimate beach volume worldwide and grains per volume. Think extremely large numbers (quintillions/sextillions). Answer in scientific notation like 7e18.",
    "explanation": "Fermi problem. Estimate total beach length/width/depth -> volume. Estimate grains per cubic meter. Common estimate is ~7.5 x 10^18 grains (7.5 quintillion). Represented as 7e18."
  },
  {
    "id": 75,
    "text": "You are driving a bus. At the first stop, 10 people get on. At the second stop, 5 people get off and 3 get on. At the third stop, 8 people get off and 2 get on. What is the color of the bus driver's eyes?",
    "type": "text",
    "answer": ["your eye color", "the color of your eyes", "my eye color"], // Adapt based on context if needed
    "day": 75,
    "hint": "Focus on the very first sentence of the question.",
    "explanation": "The question starts with 'You are driving a bus...'. Therefore, 'you' are the bus driver. The color of the driver's eyes is the color of your own eyes."
  },
  {
    "id": 76,
    "text": "What is the smallest positive integer that is divisible by all integers from 1 to 10?",
    "type": "numerical",
    "answer": 2520,
    "min": 1000,
    "max": 5000,
    "day": 76,
    "hint": "Think about the least common multiple (LCM) and prime factorization.",
    "explanation": "We need the LCM of {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. Prime factors needed are: 7, 5, 3² (for 9), 2³ (for 8). LCM = 2³ * 3² * 5 * 7 = 8 * 9 * 5 * 7 = 72 * 35 = 2520."
  },
  {
    "id": 77,
    "text": "I have cities named after battles, but I fight no wars. I have mountains named after gods, but I hold no temples. I have rivers named after explorers, but I chart no seas. What am I?",
    "type": "text",
    "answer": ["atlas", "an atlas"],
    "day": 77,
    "hint": "Think about something that contains geographical information.",
    "explanation": "An atlas is a book of maps, often containing place names derived from historical events, mythology, or exploration, but it is just a representation."
  },
  {
    "id": 78,
    "text": "What's the next number in the sequence: 2, 10, 12, 16, 17, 18, 19, ...?",
    "type": "numerical",
    "answer": 200,
    "min": 100,
    "max": 300,
    "day": 78,
    "hint": "Think about how numbers are written in English.",
    "explanation": "The sequence lists numbers whose English spelling starts with the letter 'T': Two, Ten, Twelve, Sixteen, Seventeen, Eighteen, Nineteen. The next number starting with 'T' is Two Hundred (200)."
  },
  {
    "id": 79,
    "text": "Estimate the total length of all the paved roads (highways, streets, etc.) in the United States in kilometers.",
    "type": "numerical",
    "answer": 6500000, // Approx 6.5 million km
    "min": 1000000,
    "max": 20000000,
    "day": 79,
    "hint": "Consider the vast network connecting cities and towns across a large country. Think millions of kilometers.",
    "explanation": "Estimates vary, but the total length of public roads in the U.S. is around 6.5-7 million kilometers (about 4 million miles). This includes highways, state routes, local streets, etc."
  },
  {
    "id": 80,
    "text": "What English word contains the letters 'CLE' together three separate times?",
    "type": "text",
    "answer": ["recycleable"], // Note: Acceptable alternative spelling of recyclable
    "day": 80,
    "hint": "Think about words related to waste management or cycles.",
    "explanation": "The word 'recycleable' contains 'cle' three times: re(cle)a(ble) -> re-cy-cle-a-ble. (Note: 'recyclable' is more common, but 'recycleable' fits the pattern explicitly)."
  },
  {
    "id": 81,
    "text": "You have 10 bags of 10 coins each. All coins look identical. One bag contains only counterfeit coins, and each counterfeit coin weighs 1.1 grams, while genuine coins weigh 1.0 gram. Using a digital scale (which gives an exact weight reading) just once, how can you identify the bag of counterfeit coins?",
    "type": "text",
    "answer": ["Take 1 coin from bag 1, 2 from bag 2, ..., 10 from bag 10. Weigh them all together. The excess weight in tenths of a gram reveals the bag number.", "Number bags 1-10. Take N coins from bag N. Weigh. Check decimal."],
    "day": 81,
    "hint": "Think about how the weight difference can encode the bag number.",
    "explanation": "Number the bags 1 through 10. Take 1 coin from bag #1, 2 coins from bag #2, 3 coins from bag #3, ..., and 10 coins from bag #10. Place all these collected coins (1+2+...+10 = 55 coins) on the digital scale. If all coins were genuine (1.0g), the total weight would be 55.0g. Since one bag has coins weighing 1.1g, the total weight will be slightly higher. If bag #N is counterfeit, you took N coins from it, each weighing 0.1g extra. So, the total extra weight will be N * 0.1g. If the scale reads 55.3g, the extra weight is 0.3g, meaning bag #3 is counterfeit."
  },
  {
    "id": 82,
    "text": "What can be broken, but is never held?",
    "type": "text",
    "answer": ["a promise", "promise"],
    "day": 82,
    "hint": "Think abstractly about commitments.",
    "explanation": "A promise is a commitment that can be 'broken' (not kept), but it's not a physical object that can be 'held'."
  },
  {
    "id": 83,
    "text": "What is the angle between the hour hand and the minute hand of a clock at 3:15?",
    "type": "numerical",
    "answer": 7.5, // Degrees
    "min": 0,
    "max": 90,
    "day": 83,
    "hint": "The hour hand moves past the 3 slightly by 3:15. Calculate positions precisely.",
    "explanation": "At 3:15, the minute hand is exactly at the 3 (90° from the 12). The hour hand moves 360° in 12 hours (0.5°/minute) or 30° per hour. At 3:00, it's at the 3 (90°). By 3:15, it has moved an additional 15 minutes * 0.5°/minute = 7.5°. So the hour hand is at 90° + 7.5° = 97.5°. The angle difference is 97.5° - 90° = 7.5°."
  },
  {
    "id": 84,
    "text": "Find the next term in this sequence: 5, 11, 23, 47, 95, ...?",
    "type": "numerical",
    "answer": 191,
    "min": 100,
    "max": 300,
    "day": 84,
    "hint": "Consider multiplying by 2 and adding or subtracting a small number.",
    "explanation": "Each term is roughly double the previous one. The pattern is: (previous term * 2) + 1. 5*2+1=11; 11*2+1=23; 23*2+1=47; 47*2+1=95. The next term is 95*2+1 = 190+1 = 191."
  },
  {
    "id": 85,
    "text": "Estimate the total number of photos uploaded to Instagram globally each day.",
    "type": "numerical",
    "answer": 100000000, // Roughly 100 million
    "min": 50000000,
    "max": 500000000,
    "day": 85,
    "hint": "Consider the number of active users and average uploads per user. Think tens or hundreds of millions.",
    "explanation": "Instagram has over a billion monthly active users. While uploads vary, estimates often place daily photo and video uploads combined around 100 million or more."
  },
  {
    "id": 86,
    "text": "What disappears as soon as you say its name?",
    "type": "text",
    "answer": ["silence"],
    "day": 86,
    "hint": "Think about the effect of sound.",
    "explanation": "Saying the word 'silence' itself breaks the silence."
  },
  {
    "id": 87,
    "text": "A palindromic number reads the same forwards and backwards (e.g., 121). What is the next palindromic number after 393?",
    "type": "numerical",
    "answer": 404,
    "min": 394,
    "max": 500,
    "day": 87,
    "hint": "Increment the number and check if it's a palindrome.",
    "explanation": "Check numbers after 393: 394-403 are not palindromic. 404 reads the same forwards and backwards, so it is the next palindrome."
  },
  {
    "id": 88,
    "text": "If it costs $1 to cut a log into 2 pieces, how much does it cost to cut a log into 4 pieces, assuming the cost is per cut?",
    "type": "numerical",
    "answer": 3, // Cost in dollars
    "min": 1,
    "max": 10,
    "day": 88,
    "hint": "How many cuts are needed to get the specified number of pieces?",
    "explanation": "To get 2 pieces requires 1 cut ($1). To get 4 pieces requires 3 cuts. If each cut costs $1, then 3 cuts cost $3."
  },
  {
    "id": 89,
    "text": "What has keys that open no locks, yet they can unlock your soul?",
    "type": "text",
    "answer": ["piano", "a piano"],
    "day": 89,
    "hint": "Think about musical instruments.",
    "explanation": "A piano has keys that don't open physical locks, but its music is often said to 'unlock' emotions or touch the soul."
  },
  {
    "id": 90,
    "text": "Estimate the number of times the word 'the' appears in all of Shakespeare's published works combined.",
    "type": "numerical",
    "answer": 27000,
    "min": 10000,
    "max": 50000,
    "day": 90,
    "hint": "Consider the total word count and the frequency of 'the' in English.",
    "explanation": "Shakespeare's works total around 880,000 words. 'The' is the most common word in English, appearing roughly 3-5% of the time. 3% of 880,000 is about 26,400. Concordances often list it around 27,000 times."
  },
  {
    "id": 91,
    "text": "What is the only English word that ends in the letters 'mt'?",
    "type": "text",
    "answer": ["dreamt"],
    "day": 91,
    "hint": "Think about past tense verbs, particularly irregular ones.",
    "explanation": "The word 'dreamt' (past tense of dream) is commonly cited as the only standard English word ending in 'mt'. (Note: 'undreamt' also exists)."
  },
  {
    "id": 92,
    "text": "How many squares (of any size) are there on a standard 8x8 chessboard?",
    "type": "numerical",
    "answer": 204,
    "min": 64,
    "max": 300,
    "day": 92,
    "hint": "Sum the squares of different sizes: 1x1, 2x2, ..., 8x8.",
    "explanation": "There are 8x8 = 64 (1x1 squares), 7x7 = 49 (2x2 squares), 6x6 = 36 (3x3 squares), 5x5 = 25 (4x4 squares), 4x4 = 16 (5x5 squares), 3x3 = 9 (6x6 squares), 2x2 = 4 (7x7 squares), and 1x1 = 1 (8x8 square). The sum is 64+49+36+25+16+9+4+1 = 204 squares."
  },
  {
    "id": 93,
    "text": "What is always coming but never arrives?",
    "type": "text",
    "answer": ["tomorrow"],
    "day": 93,
    "hint": "Think about the concept of days relative to the present.",
    "explanation": "Tomorrow is always a day away in the future. When it 'arrives', it becomes 'today', and there is a new 'tomorrow'."
  },
  {
    "id": 94,
    "text": "A clock strikes 6 times in 5 seconds. How long does it take to strike 12 times, assuming the time between strikes is constant?",
    "type": "numerical",
    "answer": 11, // Time in seconds
    "min": 5,
    "max": 15,
    "day": 94,
    "hint": "Focus on the number of *intervals* between strikes, not the number of strikes.",
    "explanation": "6 strikes involve 5 intervals between them. These 5 intervals take 5 seconds, meaning each interval is 1 second long. To strike 12 times, there are 11 intervals. Therefore, it takes 11 intervals * 1 second/interval = 11 seconds."
  },
  {
    "id": 95,
    "text": "Estimate the total weight of all the ants on Earth compared to the total weight of all humans on Earth. Is it greater, lesser, or about the same?",
    "type": "text",
    "answer": ["about the same", "similar", "roughly equal"], // Historically 'greater', now often 'similar' or slightly less
    "day": 95,
    "hint": "Ants are tiny but incredibly numerous. Humans are large but fewer. Consider biomass.",
    "explanation": "While extremely difficult to calculate precisely, estimates of the total biomass (collective weight) of ants and humans are surprisingly close. Older estimates often put ant biomass higher, but recent studies suggest human biomass might now be similar or even slightly greater due to population growth and increased average weight. 'About the same' is a reasonable critical thinking answer."
  },
  {
    "id": 96,
    "text": "What has an eye, but cannot see?",
    "type": "text",
    "answer": ["hurricane", "storm", "needle", "potato"], // Allow multiple common answers
    "day": 96,
    "hint": "Think metaphorically about the 'center' of something, or sewing/vegetables.",
    "explanation": "Several things fit: the 'eye' of a hurricane/storm (its center), the 'eye' of a needle (hole for thread), or the 'eyes' on a potato (buds)."
  },
  {
    "id": 97,
    "text": "If you write down all the integers from 1 to 100, how many times does the digit '7' appear?",
    "type": "numerical",
    "answer": 20,
    "min": 10,
    "max": 30,
    "day": 97,
    "hint": "Count the 7s in the units place (7, 17, .. 97) and the 7s in the tens place (70, 71, .. 79).",
    "explanation": "The digit '7' appears in the units place 10 times (7, 17, 27, ..., 97). It appears in the tens place 10 times (70, 71, 72, ..., 79). Total count = 10 + 10 = 20."
  },
  {
    "id": 98,
    "text": "A farmer wants to cross a river with a wolf, a goat, and a cabbage. His boat can only carry himself and one other item. He cannot leave the wolf alone with the goat, nor the goat alone with the cabbage. How does he get everything across?",
    "type": "text",
    "answer": ["Take goat over. Return. Take wolf/cabbage over. Return with goat. Take cabbage/wolf over. Return. Take goat over.", "Goat over, return, wolf over, goat back, cabbage over, return, goat over"],
    "day": 98,
    "hint": "The key is realizing you might need to bring something back temporarily.",
    "explanation": "1. Take Goat across. 2. Return alone. 3. Take Wolf across. 4. Return with Goat. 5. Take Cabbage across. 6. Return alone. 7. Take Goat across. (Alternative: switch Wolf and Cabbage in steps 3/5)."
  },
  {
    "id": 99,
    "text": "What's the next symbol in this sequence: ←, ↑, →, ↓, ←, ...?",
    "type": "text",
    "answer": ["↑", "up arrow"],
    "day": 99,
    "hint": "Think about directions cycling.",
    "explanation": "The sequence cycles through the four cardinal directions: Left, Up, Right, Down, Left... The next symbol after Left is Up (↑)."
  },
  {
    "id": 100,
    "text": "Estimate the number of liters of water an average person drinks directly (as water or other beverages) in a year.",
    "type": "numerical",
    "answer": 730, // Based on ~2 liters/day
    "min": 300,
    "max": 1500,
    "day": 100,
    "hint": "Consider recommended daily fluid intake and multiply by 365.",
    "explanation": "Health recommendations often suggest around 2-3 liters of total fluid intake per day. If we assume an average of 2 liters directly consumed as water/beverages daily, then over a year (365 days), the total is 2 L/day * 365 days = 730 Liters."
  }
];

// Function to get today's question based on the day of the year (UTC)
export const getTodaysQuestion = (): Question => {
  // Use UTC time to ensure consistency across timezones
  const now = new Date();
  const utcYear = now.getUTCFullYear();
  const utcMonth = now.getUTCMonth();
  const utcDay = now.getUTCDate();

  // Start of the current year in UTC
  const startOfYearUTC = Date.UTC(utcYear, 0, 1); // Jan 1st UTC
  // Current time in UTC
  const nowUTC = Date.UTC(utcYear, utcMonth, utcDay);

  const oneDay = 1000 * 60 * 60 * 24;
  // Calculate the difference in days from the start of the year (UTC)
  // Add 1 because day numbers are usually 1-based
  const dayOfYearUTC = Math.floor((nowUTC - startOfYearUTC) / oneDay) + 1;

  // Wrap around if we have fewer questions than days in a year
  const questionIndex = (dayOfYearUTC - 1) % questions.length;
  // Ensure index is non-negative (in case modulo result is negative, unlikely here but good practice)
  const safeIndex = (questionIndex + questions.length) % questions.length;

  // Find the question matching the calculated UTC day index logic
  // We need to find the question whose 'day' property corresponds to our modulo logic
  // Assuming questions[i].day corresponds to i+1
  const targetDay = safeIndex + 1;
  const todaysQuestion = questions.find(q => q.day === targetDay);

  // Fallback to the first question if something goes wrong (e.g., day mapping mismatch)
  return todaysQuestion || questions[0];
};
