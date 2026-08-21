# FE-06 — Streaming AI Chat

FlyRank Frontend AI Engineering — Week 4.

A responsive streaming AI chat interface built with Next.js, TypeScript, React, and the Vercel AI SDK using Google Gemini.

## Features

- Token-by-token streaming responses
- Thinking indicator before the first token
- Stop button
- Partial response preservation after stopping
- Multi-turn conversation state
- User/assistant message styling
- Scroll-aware auto-scroll
- Jump-to-latest affordance
- Mobile-friendly input
- Server-side API key only
- Central model and system-prompt configuration

## Run

```bash
cd app
npm install
```

Create `.env.local`:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

Then:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Security

Never commit `.env.local` or expose the Google API key in client-side code.
