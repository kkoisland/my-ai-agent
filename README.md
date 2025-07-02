# My AI Agent

A personal AI assistant interface built with React and Tailwind CSS.

This project serves as the starting point for building a long-term, practical agent tailored to how I work and think.

Along the way, I’m also learning Tailwind CSS and applying it to create a responsive, clean UI while integrating OpenAI’s API for real functionality.

## Why I’m Building This

I often feel it's a burden to explain the same things again and again.

I want a personal assistant that understands how I write and think, and can suggest drafts in my natural tone.

This is not just a demo — I’m building something I’ll actually use, little by little, in a way that fits my own workflow.

Eventually, I want it to help me write, plan, and remember things more easily and naturally.

## Long-Term Vision

- Responds to natural instructions like “Add this to my calendar” or “Order this for dinner”
- Generates message, article, and memo drafts in my own tone and phrasing
- Supports natural interactions without formal commands
- Stores preferences and logs for consistency (future: local or MCP server)

## Developer Learning Goals

- Gain experience using OpenAI API to implement interactive features
- Improve frontend skills with React, TypeScript, and Tailwind CSS
- Practice building a small backend using Express and MongoDB
- Learn to iterate through design thinking: empathize, define, ideate, prototype, test

## Development Plan

- Phase 1: Tone and Draft Support

  - Generate message/article/memo drafts using my own tone and phrasing
  - Switch input type (Message / Article / Memo) via UI
  - Show formatted output and allow 1-click copy

- Phase 2: Calendar and Order Suggestions

  - Parse natural input like “Add to calendar” or “Order this”
  - Generate calendar entries (manual add)
  - Suggest order links (Amazon, UberEats etc.) without execution

- Phase 3: Server and Data Experiments
  - Try saving preferences using Express and file or MongoDB
  - Test using stored preferences in prompts
  - Lay the groundwork for MCP-style consistency

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
