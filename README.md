# Daily Critical Thinker

A daily challenge game to test and improve critical thinking skills through a variety of puzzles and questions.

## Features

- Daily critical thinking challenges
- Different question types (numerical and text-based)
- Hint system to help when stuck
- Feedback on answers with closeness indicators for numerical questions
- Streaks to track your progress
- Share your results with friends

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI components
- React Router
- React Query
- Local storage for game state persistence

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/daily-critical-thinker.git
cd daily-critical-thinker

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start the development server
npm run dev
# or
yarn dev
# or
bun dev
```

Your application will be running at http://localhost:8080

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The build output will be in the `dist` directory.

## Deployment

This project can be deployed on platforms like Vercel, Netlify, or GitHub Pages.

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Connect your GitHub/GitLab/Bitbucket account
3. Import your repository
4. Vercel will automatically detect it as a Vite project and set up the build configuration
5. Deploy!

### Deploying to Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub/GitLab/Bitbucket account
3. Import your repository
4. Set the build command to `npm run build` and the publish directory to `dist`
5. Deploy!

## Customizing the Game

### Adding New Questions

To add new questions, edit the `src/data/questions.ts` file. Each question should follow the structure defined in the `Question` interface:

```typescript
// For text-based questions
{
  id: number;
  text: string;
  type: 'text';
  answer: string[];  // Multiple possible answers
  day: number;
  hint?: string;
  explanation?: string;
}

// For numerical questions
{
  id: number;
  text: string;
  type: 'numerical';
  answer: number;
  min?: number;  // Optional minimum value for range
  max?: number;  // Optional maximum value for range
  day: number;
  hint?: string;
  explanation?: string;
}
```

## Acknowledgments

- Inspired by games like Wordle and other daily puzzle challenges
- Built with [Shadcn UI](https://ui.shadcn.com/)
