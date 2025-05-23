# My AI Agent

A personal AI assistant interface built with React and Tailwind CSS.

This project serves as the starting point for building a long-term, practical agent tailored to how I work and think.

Along the way, I’m also learning Tailwind CSS and applying it to create a responsive, clean UI while integrating OpenAI’s API for real functionality.

## Why I’m Building This

I’m building my own AI agent — not as a demo, but as a practical assistant that I will use daily to think, write, and communicate more effectively.

This project explores how to integrate OpenAI’s API with a custom frontend to create a useful, extensible assistant that fits my workflow.

Eventually, I also plan to explore fine-tuning and voice input, so the assistant can better reflect how I think and interact naturally.

## Long-Term Vision

- Responds to natural instructions like “Add this to my calendar”, “Remind me later”, or “Order this for dinner”, by connecting to services like calendars, to-do apps, or messaging platforms
- Learns my tone, phrasing, and language habits over time
- Builds shopping lists or places orders through services like Amazon or UberEats by conversing with me to understand my preferences
- Grows into a daily-use assistant that's uniquely mine
- Stores preferences and logs locally (e.g. in JSON) for ongoing refinement

## Current Features (Initial Build)

- Simple text-based chat interface
- Responsive UI with Tailwind CSS
- Supports multiline input
- Connects to OpenAI-compatible endpoints (mocked or real)
- Easy customization for future extensions

## Current Features (Initial Build)

- Connects directly to OpenAI’s chat/completions API to retrieve responses based on user input
- Implements basic API communication using fetch, along with state management and error handling
- Incorporates a structure for passing user-specific data (e.g., preferences or history in JSON format) to support agent growth
- Provides a simple chat UI built with Tailwind CSS for input and response display

## Tech Stack

- React (Functional Components)
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Prettier

## Project Structure

```bash
my-ai-agent/
├── public/
├── src/
│ ├── assets/
│ ├── App.tsx
│ ├── main.tsx
│ ├── index.css
│ └── vite-env.d.ts
├── .nvmrc
├── .npmrc
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

Note: This repository is licensed under the MIT License.  
However, personal data, including chat logs or user-specific prompts, are not included and not to be reused.
