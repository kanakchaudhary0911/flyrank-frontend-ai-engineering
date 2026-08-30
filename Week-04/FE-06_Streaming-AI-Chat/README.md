# FE-06 – Streaming AI Chat

## Overview

This assignment focuses on building a responsive streaming AI chat interface using Next.js, TypeScript, React, and the Vercel AI SDK, powered by Google Gemini.

The project demonstrates real-time, token-by-token AI response streaming along with proper conversation state handling, user experience details like stop/resume behavior, and secure server-side API key handling.

---

## Objectives

- Build a streaming AI chat interface
- Integrate the Vercel AI SDK with Google Gemini
- Implement token-by-token response streaming
- Handle multi-turn conversation state
- Preserve partial responses when generation is stopped
- Implement scroll-aware auto-scroll behavior
- Keep the AI model and system prompt centrally configured
- Keep the API key secure on the server side only

---

## Project

### Streaming AI Chat Interface

A responsive chat interface that streams AI-generated responses in real time, built to feel smooth and production-ready.

### Key Features

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

---

## Technology Stack

- Next.js
- React
- TypeScript
- Vercel AI SDK
- Google Gemini
- CSS
- Environment Variables
- Git & GitHub

---

## Application Structure

```text
FE-06-Streaming-AI-Chat/
│
├── README.md
│
└── app/
    ├── src/
    │   ├── app/
    │   │   ├── api/
    │   │   │   └── chat/
    │   │   │       └── route.ts
    │   │   │
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   │
    │   └── lib/
    │       └── model.ts
    │
    ├── .env.local
    ├── package.json
    └── tsconfig.json
```

---

## Setup

### 1. Navigate to the app

```bash
cd app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env.local`:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

### 4. Start the development server

```bash
npm run dev
```

Open: