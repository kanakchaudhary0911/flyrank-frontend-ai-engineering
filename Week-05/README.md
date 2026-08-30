# Week 5 – Frontend AI Engineering

This folder contains the work completed during **Week 5** of the FlyRank Frontend AI Engineering program.

The focus of this week was working with AI-powered frontend applications, server-side tools, structured tool results, error states, empty states, edge cases, and reliable AI interaction using the AI SDK and Google Gemini.

---

## Week 5 Overview

| Assignment | Title | Status |
|---|---|---|
| FE-07 | Tool Results & Structured Output | ✅ Completed |
| FE-08 | Error States, Empty States & Edge Cases | ✅ Completed |

---

## Assignments

### FE-07 – Tool Results & Structured Output

**Objective**

Build an AI-powered frontend application that uses server-side tools with structured input and output, executes tool calls, and presents the resulting information through the AI chat interface.

The assignment focused on understanding how AI applications can use tools to perform specific tasks and return structured results instead of relying only on the model's own knowledge.

**Key Activities**

- Define server-side AI tools
- Use Zod schemas for structured tool input
- Execute tools on the server
- Return structured tool results
- Connect tools to the AI SDK `streamText` workflow
- Use `stepCountIs` to support multi-step tool execution
- Implement a content analysis tool
- Implement a website analysis tool
- Test tool execution through natural-language prompts
- Display structured tool results through the chat interface
- Verify API and tool execution
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

### FE-08 – Error States, Empty States & Edge Cases

**Objective**

Build an AI-powered frontend application that demonstrates appropriate handling of error states, empty states, and edge cases during AI interactions.

The assignment focused on making the application more reliable and user-friendly when an AI request cannot be completed successfully.

**Key Activities**

- Build an AI-powered chat interface
- Connect the frontend to a server-side AI route
- Handle AI/API failures
- Display a clear error state to the user
- Provide a Retry action after failed requests
- Show loading/processing feedback during retry
- Test API failures and error scenarios
- Capture terminal evidence of API errors
- Verify the application's error-state UI
- Handle edge cases during AI interaction
- Maintain a clear and consistent user experience
- Verify the production build

**Technology Used**

- React
- TypeScript
- Next.js
- Next.js App Router
- AI SDK
- Google Gemini
- CSS
- Environment Variables
- npm

**Skills Practiced**

- AI Error Handling
- Error States
- Empty States
- Edge Cases
- Retry UX
- Loading States
- API Error Handling
- Streaming AI
- React
- Next.js
- TypeScript
- Debugging
- Testing
- UI/UX
- Documentation

---

## Repository Structure

```text
Week-05/
│
├── README.md
│
├── FE-07_Tool-Results-Structured-Output/
│   │
│   ├── README.md
│   ├── AI_ASSISTANCE.md
│   ├── AI_PROMPTS.md
│   ├── MANUAL_IMPROVEMENTS.md
│   │
│   ├── screenshots/
│   │   ├── Tool Analysis.png
│   │   ├── Website Analysis.png
│   │   └── ...
│   │
│   └── app/
│       ├── app/
│       │   ├── api/
│       │   │   └── chat/
│       │   │       └── route.ts
│       │   │
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       │
│       ├── lib/
│       │   ├── model.ts
│       │   └── tools/
│       │       ├── analyze-content.ts
│       │       └── analyze-website.ts
│       │
│       ├── .env.example
│       ├── .gitignore
│       ├── next-env.d.ts
│       ├── package.json
│       ├── package-lock.json
│       └── tsconfig.json
│
└── FE-08_Error-States-Empty-States-Edge-Cases/
    │
    ├── README.md
    ├── AI_ASSISTANCE.md
    ├── AI_PROMPTS.md
    ├── MANUAL_IMPROVEMENTS.md
    │
    ├── screenshots/
    │   ├── FE-08_01_Basic-UI.png
    │   ├── FE-08_02_Error-State.png
    │   ├── FE-08_03_Retry-Processing.png
    │   ├── FE-08_04_API-Error-Log.png
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
        │       ├── analyze-content.ts
        │       └── analyze-website.ts
        │
        ├── .env.example
        ├── .gitignore
        ├── next-env.d.ts
        ├── package.json
        ├── package-lock.json
        └── tsconfig.json
```

---

## What I Learned

**FE-07**

- Connecting tools to the AI SDK's `streamText` workflow demonstrated how an AI model can decide when to call a server-side tool.
- Zod schemas provided structured validation for tool inputs.
- `stepCountIs` helped support multi-step tool execution.
- Structured tool output was easier and more reliable to render in the UI than free-form text.
- Website analysis demonstrated the importance of handling real-world fetch and parsing issues.
- AI assistance can accelerate development, but generated suggestions still require manual review and testing.

**FE-08**

- AI applications need dedicated error states instead of leaving users with an unexplained failed request.
- A clear error message helps users understand that the request could not be completed.
- A Retry action provides a simple recovery path without requiring the user to restart the application.
- Loading feedback during retry makes the interface feel responsive and prevents confusion while another request is being processed.
- Testing with an actual API quota failure helped verify the application's error-handling behaviour.
- Terminal logs are useful for identifying the difference between a frontend error state and the underlying server/API failure.
- Edge-case handling is an important part of making AI applications reliable rather than only functional in the happy path.

---

## What I Enjoyed Most

- Seeing the AI model call server-side tools and return structured information in FE-07 was an important step toward understanding practical AI application development.
- Building the error and retry flow in FE-08 showed how frontend UX needs to respond when external AI services fail.
- Testing the application with real API failures made the error-state implementation more meaningful than testing only successful responses.
- Working across AI integration, frontend UI, API routes, debugging, and documentation provided a more complete development workflow.

---

## Week 5 Summary

Week 5 moved beyond a basic text-in/text-out AI chat and focused on building more reliable AI-powered frontend applications.

FE-07 introduced server-side tool calling, Zod validation, structured results, and multi-step AI workflows.

FE-08 extended the application experience by focusing on error states, retry behaviour, loading feedback, empty states, and edge-case handling.

Together, the assignments demonstrated the complete flow:

```text
User Interaction
       ↓
Frontend AI Interface
       ↓
Server-Side AI Route
       ↓
AI Model / Tool Execution
       ↓
Success or Error
       ↓
Structured Result / Error State
       ↓
User Feedback
```

---

## Week 5 Status

✅ **Week 5 Completed**

Both assignments have been completed, tested, documented, and verified.

- [x] FE-07 completed
- [x] FE-08 completed
- [x] AI assistance documented
- [x] AI prompts documented
- [x] Manual improvements documented
- [x] Screenshots prepared
- [x] Local testing completed
- [x] Production build verified
- [x] Week 5 documentation completed

**Week 5 is complete.**