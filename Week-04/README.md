# Week 4 – Frontend AI Engineering

This folder contains all work completed during **Week 4** of the FlyRank Frontend AI Engineering program.

The focus of this week was building accessible React components from first principles, understanding WAI-ARIA interaction patterns, implementing keyboard accessibility, reviewing open-code UI components, and building a real-time AI chat interface using React, Next.js, the AI SDK, and Google Gemini.

---

## Assignments

### FE-05 – Accessible Component Fundamentals

**Objective**

Build three interactive and keyboard-accessible components from scratch in React + TypeScript and implement them according to established WAI-ARIA patterns.

The assignment focuses on understanding accessibility fundamentals before relying on AI-generated or pre-built components.

**Key Activities**

* Build a Modal Dialog from scratch
* Build accessible Tabs from scratch
* Build an accessible Disclosure component
* Implement appropriate ARIA semantics
* Support keyboard-only interaction
* Implement modal focus trapping and focus restoration
* Test keyboard navigation and interaction
* Review shadcn/ui open-code Dialog and Tabs implementations
* Document gaps between the hand-built components and shadcn/ui

---

### FE-06 – Streaming AI Chat

**Objective**

Build a frontend AI chat interface that sends user messages to an AI model and displays the response progressively in real time using streaming.

The assignment focuses on understanding how frontend applications communicate with AI models, how streaming responses improve the user experience, and how AI-assisted development can be integrated into a React/Next.js application.

**Key Activities**

* Build a modern AI chat interface
* Create a responsive conversation layout
* Implement user and AI message bubbles
* Connect the frontend to an API route
* Use the AI SDK for model interaction
* Integrate Google Gemini as the AI provider
* Implement real-time streaming responses
* Display a loading/streaming state while the AI responds
* Handle API and model errors
* Configure the Gemini API key through environment variables
* Build the application using Next.js App Router
* Test the complete request → API → AI → streamed response flow

**Technology Used**

* React
* TypeScript
* Next.js
* Next.js App Router
* AI SDK
* Google Gemini
* CSS
* Environment Variables
* npm

**Result**

The completed application provides a polished AI conversation interface where the user can enter a prompt and receive a response from Gemini in a streaming experience.

---

## Learning Outcomes

By completing this week's assignments, I learned how to:

* Implement accessible interactive components in React
* Apply WAI-ARIA patterns to common UI widgets
* Handle keyboard interactions without relying on component libraries
* Manage focus correctly inside modal dialogs
* Restore focus after closing a modal
* Implement arrow-key navigation for tabs
* Understand the difference between semantic HTML and ARIA requirements
* Review accessibility-focused component source code
* Compare custom implementations with production-oriented component implementations
* Identify accessibility and engineering gaps in AI-assisted component development
* Build a real-time AI chat interface
* Connect a React/Next.js frontend to an AI backend route
* Work with the AI SDK for AI model integration
* Integrate Google Gemini into a web application
* Implement streamed AI responses
* Manage loading and streaming states in the UI
* Handle API errors and model availability issues
* Use environment variables for API configuration
* Understand the request and response flow of an AI-powered frontend application

---

## Repository Structure

```text
Week-4/
│
├── README.md
│
├── FE-05_Accessible-Component-Fundamentals/
│   ├── README.md
│   ├── NOTES.md
│   ├── SHADCN-SOURCE-REVIEW.md
│   │
│   └── playground/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Disclosure.tsx
│       │   │   ├── Modal.tsx
│       │   │   ├── Tabs.tsx
│       │   │   └── ui/
│       │   │       ├── dialog.tsx
│       │   │       └── tabs.tsx
│       │   │
│       │   ├── App.tsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.tsx
│       │
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── index.html
│
└── FE-06_Streaming-AI-Chat/
    └── app/
        ├── app/
        │   ├── api/
        │   │   └── chat/
        │   │       └── route.ts
        │   │
        │   ├── globals.css
        │   ├── layout.tsx
        │   └── page.tsx
        │
        ├── lib/
        │   └── model.ts
        │
        ├── .env.example
        ├── .env.local
        ├── .gitignore
        ├── next-env.d.ts
        ├── package.json
        ├── package-lock.json
        └── tsconfig.json
```

---

## Week 4 Summary

Week 4 combined **accessibility engineering** with **AI-powered frontend development**.

In **FE-05**, I focused on understanding how interactive components should behave from an accessibility and keyboard-navigation perspective before depending on component libraries.

In **FE-06**, I applied frontend AI engineering concepts by building a complete streaming AI chat application with **Next.js, React, TypeScript, the AI SDK, and Google Gemini**.

Together, these assignments strengthened my understanding of building frontend applications that are both **accessible and AI-enabled**.
