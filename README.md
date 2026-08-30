Yeh raha final clean root README, Week 5 completion aur Week 6 in-progress ke saath — sabhi missing fences, tables fix kiye:

markdown
# FlyRank Frontend AI Engineering

This repository contains my weekly assignments, projects, experiments, and learning progress completed as part of the **FlyRank Frontend AI Engineering** program.

The repository documents my journey through AI-assisted software development, prompt engineering, frontend engineering, accessibility, Git workflows, documentation, testing, debugging, streaming AI applications, structured tool calling, error handling, and practical project development.

The goal is to build strong engineering fundamentals while learning how to use AI effectively as a development assistant.

---

## 🚧 Currently Working On

**Week 6 — Frontend AI Engineering** is currently in progress as part of the ongoing internship.

Week 1 through Week 5 assignments have been completed, documented, tested, and organized in this repository.

The repository continues to be updated as new assignments are completed, reviewed, tested, and documented.

---

## Program Progress

### Week 1 – Environment, Toolchain & AI Workflow

Focused on setting up the development environment, AI tools, workflow foundations, Git and GitHub practices, and initial frontend engineering workflows.

---

### Week 2 – AI-Assisted Workflow & Prompting

Focused on AI-assisted development workflows, prompting fundamentals, documentation, reusable project rules, and practical AI-assisted software development.

---

### Week 3 – Frontend AI Engineering

Focused on building practical frontend applications with AI assistance, React development, project structure, testing, debugging, deployment preparation, and manual code improvements.

---

### Week 4 – Accessibility & Streaming AI

Focused on frontend accessibility, WAI-ARIA patterns, keyboard interaction, focus management, reusable accessible React components, open-code component review, and AI-powered frontend development.

The week included:

- **FE-05 – Accessible Component Fundamentals**
- **FE-06 – Streaming AI Chat**

FE-05 focused on building accessible interactive components from scratch and comparing custom implementations with production-oriented open-code components.

FE-06 focused on building a real-time AI conversation interface using React, Next.js, TypeScript, the AI SDK, and Google Gemini with streamed responses.

---

### Week 5 – AI Tools, Structured Output & Error Handling

Focused on extending AI-powered frontend applications with **server-side tool calling, structured inputs and outputs, Zod validation, multi-step tool execution, tool-result rendering, error states, empty states, retry behaviour, and edge-case handling**.

The week included:

- **FE-07 – Tool Results & Structured Output** ✅
- **FE-08 – Error States, Empty States & Edge Cases** ✅

FE-07 extended the streaming AI chat experience by adding server-side tools that the AI could call based on the user's request.

The project demonstrated:

- Server-side AI tool execution
- `analyzeContent` tool
- `analyzeWebsite` tool
- Zod input validation
- Structured tool results
- AI SDK `streamText` workflow
- Multi-step tool execution with `stepCountIs`
- Structured result rendering
- Multi-turn tool conversations
- Google Gemini integration
- Streaming responses

FE-08 extended the AI chat experience with dedicated handling for failed AI/API requests and edge cases.

The project demonstrated:

- AI/API error handling
- Error-state UI
- Retry interaction
- Loading and processing feedback
- Empty-state handling
- Edge-case testing
- API failure verification
- Terminal error logging
- User-friendly recovery behaviour
- Production build verification

---

## Assignments

### FE-05 – Accessible Component Fundamentals

Built interactive and keyboard-accessible React components from first principles.

Key areas:

- Modal Dialog
- Tabs
- Disclosure
- WAI-ARIA semantics
- Keyboard navigation
- Focus trapping
- Focus restoration
- Accessibility testing
- shadcn/ui source review
- Comparison between custom and production-oriented implementations

---

### FE-06 – Streaming AI Chat

Built a real-time AI chat interface using Next.js and Google Gemini.

Key areas:

- React + TypeScript
- Next.js App Router
- AI SDK
- Google Gemini integration
- API routes
- Streaming AI responses
- Conversation UI
- Loading and streaming states
- Error handling
- Environment variables
- AI-assisted frontend development

---

### FE-07 – Tool Results & Structured Output

Built an AI-powered frontend application that can use server-side tools to perform specific tasks and return structured results.

Key areas:

- AI tool calling
- Server-side tool execution
- Zod schema validation
- Structured tool inputs
- Structured tool outputs
- `analyzeContent` tool
- `analyzeWebsite` tool
- AI SDK `streamText`
- Multi-step tool execution
- `stepCountIs`
- Structured result UI
- Multi-turn conversations
- Streaming responses
- Google Gemini integration
- TypeScript
- Testing and verification
- AI assistance documentation
- Manual improvements

---

### FE-08 – Error States, Empty States & Edge Cases

Built an AI-powered frontend application focused on handling AI/API failures and improving the reliability of the user experience.

Key areas:

- AI conversation interface
- Server-side AI route
- Error-state UI
- API error handling
- Retry interaction
- Loading state during retry
- Empty-state handling
- Edge-case handling
- Gemini API integration
- Error logging
- Debugging
- Local testing
- Screenshot evidence
- Production build verification
- AI assistance documentation
- AI prompt documentation
- Manual improvements

The application was also tested against an actual Gemini API quota failure to verify the error-handling experience.

---

## Repository Structure

```text
FLYRANK-FRONTEND-AI-ENGINEERING/
│
├── Week-1/
│   ├── README.md
│   └── FE-01_AI-Environment-and-Toolchain/
│
├── Week-2/
│   ├── README.md
│   └── FE-02_AI-Assisted-Workflow-Drill/
│
├── Week-3/
│   ├── README.md
│   │
│   ├── FE-03_Capstone-Skeleton-and-Deployment/
│   │   ├── README.md
│   │   ├── AI_ASSISTANCE.md
│   │   ├── AI_PROMPTS.md
│   │   ├── DEPLOYMENT.md
│   │   ├── MANUAL_IMPROVEMENTS.md
│   │   └── app/
│   │
│   └── FE-04_React-App-Development-with-AI/
│       ├── README.md
│       ├── app/
│       └── Docs/
│           ├── AI_ASSISTANCE.md
│           ├── AI_PROMPTS.md
│           ├── MANUAL_IMPROVEMENTS.md
│           └── WORKFLOW.md
│
├── Week-4/
│   ├── README.md
│   │
│   ├── FE-05_Accessible-Component-Fundamentals/
│   │   ├── README.md
│   │   ├── NOTES.md
│   │   └── playground/
│   │       ├── src/
│   │       │   ├── components/
│   │       │   │   ├── Modal.tsx
│   │       │   │   ├── Tabs.tsx
│   │       │   │   ├── Disclosure.tsx
│   │       │   │   └── ui/
│   │       │   │       ├── dialog.tsx
│   │       │   │       └── tabs.tsx
│   │       │   │
│   │       │   ├── App.tsx
│   │       │   ├── App.css
│   │       │   ├── index.css
│   │       │   └── main.tsx
│   │       │
│   │       ├── package.json
│   │       ├── tsconfig.json
│   │       ├── vite.config.ts
│   │       └── index.html
│   │
│   └── FE-06_Streaming-AI-Chat/
│       └── app/
│           ├── app/
│           │   ├── api/
│           │   │   └── chat/
│           │   │       └── route.ts
│           │   │
│           │   ├── globals.css
│           │   ├── layout.tsx
│           │   └── page.tsx
│           │
│           ├── lib/
│           │   └── model.ts
│           │
│           ├── .env.example
│           ├── .gitignore
│           ├── next-env.d.ts
│           ├── package.json
│           ├── package-lock.json
│           └── tsconfig.json
│
├── Week-5/
│   ├── README.md
│   │
│   ├── FE-07_Tool-Results-Structured-Output/
│   │   ├── README.md
│   │   ├── AI_ASSISTANCE.md
│   │   ├── AI_PROMPTS.md
│   │   ├── MANUAL_IMPROVEMENTS.md
│   │   ├── screenshots/
│   │   └── app/
│   │
│   └── FE-08_Error-States-Empty-States-Edge-Cases/
│       ├── README.md
│       ├── AI_ASSISTANCE.md
│       ├── AI_PROMPTS.md
│       ├── MANUAL_IMPROVEMENTS.md
│       │
│       ├── screenshots/
│       │   ├── FE-08_01_Basic-UI.png
│       │   ├── FE-08_02_Error-State.png
│       │   ├── FE-08_03_Retry-Processing.png
│       │   ├── FE-08_04_API-Error-Log.png
│       │   └── ...
│       │
│       └── app/
│           ├── app/
│           │   ├── api/
│           │   │   └── chat/
│           │   │       └── route.ts
│           │   │
│           │   ├── globals.css
│           │   ├── layout.tsx
│           │   └── page.tsx
│           │
│           ├── lib/
│           │   ├── model.ts
│           │   └── tools/
│           │       ├── analyze-content.ts
│           │       └── analyze-website.ts
│           │
│           ├── .env.example
│           ├── .gitignore
│           ├── next-env.d.ts
│           ├── package.json
│           ├── package-lock.json
│           └── tsconfig.json
│
├── Week-6/
│   └── [Current Week 6 Work]
│
└── README.md
```

---

## Technologies & Tools

**Frontend**

- React
- TypeScript
- Next.js
- HTML
- CSS

**AI Engineering**

- AI SDK
- Google Gemini
- Prompt Engineering
- AI-assisted development
- Streaming AI responses
- AI Tool Calling
- Structured Output

**Validation & Backend**

- Zod
- Server-side API Routes
- Schema Validation
- Tool Execution
- Multi-step AI workflows
- API Error Handling

**Accessibility**

- WAI-ARIA
- Keyboard Navigation
- Focus Management
- Accessible UI Patterns

**Development Tools**

- Git
- GitHub
- VS Code
- npm
- Vite
- Next.js App Router

---

## Learning Focus

Throughout the program, the main focus has been on combining AI assistance with real engineering practices rather than relying on generated code without understanding it.

The work emphasizes:

- Understanding before implementation
- AI-assisted development
- Prompt quality
- Manual code review
- Debugging
- Testing
- Accessibility
- Component architecture
- API integration
- Streaming interfaces
- AI tool calling
- Structured data
- Schema validation
- Server-side execution
- Error handling
- Edge-case handling
- Documentation
- Git and GitHub workflows
- Practical frontend project development

---

## Current Progress

| Week   |    Focus                                         |   Status       |
|--------|--------------------------------------------------|----------------|
| Week 1 | Environment, Toolchain & AI Workflow             | ✅ Completed   |
| Week 2 | AI-Assisted Workflow & Prompting                 | ✅ Completed   |
| Week 3 | Frontend AI Engineering                          | ✅ Completed   |
| Week 4 | Accessibility & Streaming AI                     | ✅ Completed   |
| Week 5 | Tool Results, Structured Output & Error Handling | ✅ Completed   |
| Week 6 | Frontend AI Engineering                          | 🔄 In Progress |

---

## About This Repository

This repository serves as a practical record of my progress through the FlyRank Frontend AI Engineering program.

Each week's work demonstrates a combination of technical implementation, AI-assisted workflows, experimentation, debugging, testing, documentation, and manual engineering decisions.

The projects progressively move from basic AI-assisted workflows toward building production-oriented frontend applications that integrate AI models, streaming, server-side tools, structured data, validated tool execution, and resilient user experiences.

---

## 📌 Note

This is a **live, evolving repository** tied to an active internship.

Weeks 1–5 have been completed and documented.

Week 6 is currently in progress, and new assignments, experiments, and refinements will be added as the program continues.

Check the **Currently Working On** and **Current Progress** sections above for the latest status.