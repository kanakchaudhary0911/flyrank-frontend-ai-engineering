# Week 5 – Frontend AI Engineering

This folder contains the work completed during **Week 5** of the FlyRank Frontend AI Engineering program.

The focus of this week is working with AI tools, structured tool results, server-side tool execution, and building frontend interfaces that integrate AI capabilities using the AI SDK and Google Gemini.

---

## Week 5 Overview

| Assignment | Title | Status |
|---|---|---|
| FE-07 | Tool Results & Structured Output | ✅ Completed |
| FE-08 | *(To be added)* | ⏳ Upcoming |

---

## Assignments

### FE-07 – Tool Results & Structured Output

**Objective**

Build an AI-powered frontend application that uses server-side tools with structured input and output, executes tool calls, and presents the resulting information through the AI chat interface.

The assignment focuses on understanding how AI applications can use tools to perform specific tasks and return structured results instead of relying only on the model's own knowledge.

**Key Activities**

- Define a server-side AI tool
- Use Zod schemas for structured tool input
- Execute tools on the server
- Return structured tool results
- Connect tools to the AI SDK `streamText` workflow
- Use `stepCountIs` to support multi-step tool execution
- Implement a content analysis tool
- Implement a website analysis tool
- Test tool execution through natural-language prompts
- Display tool results through the chat interface
- Verify successful API and tool execution
- Document AI assistance and manual improvements

**Technology Used**

- React
- TypeScript
- Next.js
- Next.js App Router
- AI SDK
- Google Gemini
- Zod
- CSS
- Environment Variables
- npm

**Skills Practiced**

- AI Tool Calling
- Structured Output
- Zod Schema Validation
- Server-Side Tool Execution
- AI SDK
- React
- Next.js
- TypeScript
- Google Gemini Integration
- Prompt Engineering
- API Integration
- Debugging
- Testing
- Documentation

---

### FE-08 – *(Upcoming)*

**Status:** ⏳ Upcoming

Details for this assignment will be added once it is assigned.

---

## Repository Structure

```text
Week-05/
│
├── README.md
│
└── FE-07_Tool-Results-Structured-Output/
    │
    ├── README.md
    ├── AI_ASSISTANCE.md
    ├── AI_PROMPTS.md
    ├── MANUAL_IMPROVEMENTS.md
    │
    ├── screenshots/
    │   ├── Tool Analysis.png
    │   ├── Website Analysis.png
    │   └── ...
    │
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
        │   ├── model.ts
        │   └── tools/
        │       └── analyze-content.ts
        │
        ├── .env.example
        ├── .gitignore
        ├── next-env.d.ts
        ├── package.json
        ├── package-lock.json
        └── tsconfig.json
```

---

## What I Learned (FE-07)

- Connecting a tool to the AI SDK's `streamText` workflow made it clear how the model decides *when* to call a tool versus answering directly from its own knowledge.
- Using Zod for tool input validation caught malformed inputs (like an invalid URL) before they ever reached the tool's execution logic — much safer than trusting the model's output blindly.
- `stepCountIs` was essential for multi-step flows — without it, the model would stop right after the tool call instead of using the result to form a final response.
- Building the website analysis tool showed how much real-world messiness (missing meta tags, unreachable URLs, inconsistent HTML) needs to be handled even for a "simple" scraping task.
- Structured tool output (JSON) is far more reliable to render in the UI than parsing free-form text out of a model's response.
- Documenting AI assistance versus manual improvements side-by-side made it easier to see exactly where I had to step in and fix or refine what the AI produced.

---

## What I Enjoyed Most (FE-07)

- Seeing the model autonomously decide to call `analyzeContent` or `analyzeWebsite` based purely on the phrasing of a prompt felt like a real "aha" moment for how tool-calling actually works.
- Getting structured, well-formatted results (score, category, key points) to render cleanly in the chat UI was satisfying — it felt like a genuine step up from a plain text-only chatbot.
- Testing edge cases on the website analysis tool (broken links, slow sites) and watching the error handling kick in gracefully was one of the more rewarding debugging sessions this month.

---

## Week 5 Summary

Week 5 is moving beyond a simple text-in, text-out AI chat into building an application where the AI can actually **do things** — calling server-side tools, validating inputs, and returning structured results. FE-07 reinforced that reliable AI-powered features depend as much on schema validation and multi-step orchestration as they do on the model's raw capability. FE-08 will extend this work further.

---

## Week 5 Status

🔄 **Week 5 In Progress — FE-07 completed, FE-08 upcoming.**