# FlyRank Frontend AI Engineering

This repository contains my weekly assignments, projects, experiments, and learning progress completed as part of the **FlyRank Frontend AI Engineering** program.

The repository documents my journey through AI-assisted software development, prompt engineering, frontend engineering, accessibility, Git workflows, documentation, testing, debugging, streaming AI applications, structured tool calling, error handling, motion design, and interactive 3D web experiences.

The goal is to build strong engineering fundamentals while learning how to use AI effectively as a development assistant.

---

## 🚧 Currently Working On

**Week 7 — Frontend AI Engineering** is currently in progress.

Week 1 through Week 6 assignments have been completed, documented, tested, and organized in this repository.

The first Week 7 assignment, **FE-AA2 — First 3D Experience on the Web**, has been completed, tested, optimized, and documented.

The internship is still ongoing, so the repository remains **in progress** as new weekly assignments, experiments, reviews, and refinements are added.

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

### Week 6 – Frontend AI Engineering

**Completed.**

Focused on frontend motion design, state-driven UI, meaningful micro-interactions, accessibility, keyboard interaction, reduced-motion support, interaction safety, component testing, end-to-end testing, API mocking, and CI automation.

The week included:

- **FE-AA1 – Buttons with a Brain: Motion & State Micro-interactions** ✅
- **FE-09 – Testing Pass** ✅

#### FE-AA1 – Buttons with a Brain

FE-AA1 focused on building an interactive button that communicates its complete lifecycle through intentional motion and visual feedback.

The project demonstrates:

- Idle state
- Hover and focus states
- Loading state
- Success state
- Error state
- Disabled state during loading
- Success and Error demo triggers
- Smooth CSS transitions
- Success feedback animation
- Error feedback animation
- Spam-click protection
- Keyboard accessibility
- Visible focus state
- `aria-live` feedback
- `prefers-reduced-motion` support
- Production build verification

#### FE-09 – Testing Pass

FE-09 focused on validating high-risk frontend components and the primary application flow using automated testing.

The project demonstrates:

- Vitest component testing
- React Testing Library
- ChatMessage component testing
- JobForm validation testing
- Accessible queries
- AI API mocking
- Playwright end-to-end testing
- Primary chat flow testing
- GitHub Actions CI
- Automated test execution
- Playwright report generation
- 14 passing component tests
- Primary E2E flow verification

Week 6 was completed with both assignments implemented, tested, documented, and verified.

---

### Week 7 – Interactive 3D Web Experience

**In Progress.**

Week 7 introduces interactive 3D web development, responsible loading, device-aware fallbacks, responsive interaction, and performance optimization.

The first assignment completed this week is:

- **FE-AA2 – First 3D Experience on the Web** ✅

#### FE-AA2 – First 3D Experience on the Web

Built a lightweight interactive 3D experience called **Blue Orbit** using React, TypeScript, Three.js, and React Three Fiber.

The project demonstrates:

- Real 3D scene rendering
- Procedural 3D geometry
- Interactive 3D orb
- Mouse orbit interaction
- Touch interaction
- Click/tap interaction
- Orb scale and brightness feedback
- Continuous rotation
- Floating animation
- Responsive layout
- Lazy-loaded 3D experience
- `prefers-reduced-motion` fallback
- Lower-power device fallback
- DPR capped at `1.5`
- Three.js code splitting
- Production build optimization
- Mobile-friendly interaction

**FE-AA2 Performance**

The initial production build identified a large Three.js chunk.

The bundle was then optimized using code splitting so that the Three.js dependency was divided into smaller production chunks.

Final relevant production chunks:

```text
react   → ~178 KB
r3f     → ~183 KB
three   → ~331 KB + ~370 KB
```

The final production build completed successfully without the previous chunk-size warning.

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

### FE-AA1 – Buttons with a Brain: Motion & State Micro-interactions

Built a reusable, state-driven interactive button that communicates its complete interaction lifecycle through intentional motion and visual feedback.

Key areas:

- React + TypeScript
- Vite
- State-driven UI
- CSS transitions and animations
- Micro-interactions
- Motion design
- Accessibility
- Keyboard navigation
- `aria-live` feedback
- `prefers-reduced-motion` support
- Spam-click protection
- Testing and verification

---

### FE-09 – Testing Pass

Built a testing workflow for validating high-risk frontend components and the primary chat user flow.

Key areas:

- Vitest
- React Testing Library
- Component testing
- ChatMessage testing
- JobForm testing
- Form validation
- Accessible queries
- API mocking
- Playwright
- End-to-end testing
- Primary chat flow
- GitHub Actions
- CI automation
- Playwright reports
- Test debugging
- Regression testing

The test suite includes **14 passing component tests** and a Playwright test covering the primary chat flow with a mocked AI response.

---

### FE-AA2 – First 3D Experience on the Web

Built a lightweight interactive 3D web experience using React Three Fiber and Three.js.

Key areas:

- React + TypeScript
- Three.js
- React Three Fiber
- 3D scene composition
- Procedural geometry
- Orbit controls
- Mouse and touch interaction
- Interactive 3D object
- Animation
- Responsive design
- Lazy loading
- Performance optimization
- Code splitting
- Reduced-motion support
- Device-aware fallback
- Mobile support
- Production build optimization

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
│   │
│   └── FE-06_Streaming-AI-Chat/
│       └── app/
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
│       ├── screenshots/
│       └── app/
│
├── Week-6/
│   ├── README.md
│   │
│   ├── FE-AA1_Buttons-with-a-Brain-Motion-and-State-Micro-interactions/
│   │   ├── README.md
│   │   └── app/
│   │
│   └── FE-09_Testing-Pass/
│       ├── README.md
│       ├── .github/
│       ├── e2e/
│       ├── tests/
│       ├── package.json
│       └── playwright.config.ts
│
├── Week-07/
│   ├── README.md
│   │
│   └── FE-AA2_First-3D-Experience/
│       ├── README.md
│       ├── src/
│       │   ├── components/
│       │   │   ├── Experience.tsx
│       │   │   ├── Orb.tsx
│       │   │   └── Scene.tsx
│       │   │
│       │   ├── App.tsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.tsx
│       │
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── tsconfig.json
│       ├── tsconfig.app.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
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
- Vite

**3D Web**

- Three.js
- React Three Fiber
- @react-three/drei
- 3D scene composition
- Procedural geometry
- 3D interaction

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
- Reduced Motion

**Development Tools**

- Git
- GitHub
- VS Code
- npm
- Vite
- Next.js App Router

**Testing & Quality**

- Vitest
- React Testing Library
- Playwright
- GitHub Actions
- API Mocking
- Automated Testing
- End-to-End Testing
- Component Testing

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
- Motion design
- Interaction design
- 3D web development
- Performance optimization
- Responsive experiences
- Documentation
- Git and GitHub workflows
- Practical frontend project development

---

## Current Progress

| Week   | Focus                                             | Status         |
|--------|----------------------------------------------------|----------------|
| Week 1 | Environment, Toolchain & AI Workflow               | ✅ Completed   |
| Week 2 | AI-Assisted Workflow & Prompting                   | ✅ Completed   |
| Week 3 | Frontend AI Engineering                            | ✅ Completed   |
| Week 4 | Accessibility & Streaming AI                       | ✅ Completed   |
| Week 5 | Tool Results, Structured Output & Error Handling   | ✅ Completed   |
| Week 6 | Motion, Micro-interactions & Testing               | ✅ Completed   |
| Week 7 | Interactive 3D Web Experience                      | 🟡 In Progress |

---

## Week 7 Assignment Progress

| Assignment | Title | Status |
|---|---|---|
| FE-AA2 | First 3D Experience on the Web | ✅ Completed |
| Upcoming | Next Week 7 Assignment | ⏳ Upcoming |

---

## About This Repository

This repository serves as a practical record of my progress through the FlyRank Frontend AI Engineering program.

Each week's work demonstrates a combination of technical implementation, AI-assisted workflows, experimentation, debugging, testing, documentation, and manual engineering decisions.

The projects progressively move from basic AI-assisted workflows toward building production-oriented frontend applications involving AI models, streaming, server-side tools, structured data, validated tool execution, resilient user experiences, motion-driven interfaces, automated testing, and interactive 3D experiences.

---

## 📌 Note

This is a **live, evolving repository** tied to an active internship.

Weeks 1–6 have been completed and documented.

Week 7 is currently in progress. **FE-AA2 — First 3D Experience on the Web** has been completed and documented, while the remaining Week 7 assignment is yet to be completed.

The repository will be updated regularly to reflect the latest internship progress.

---

## Week 7 Progress

**Week 7 – Frontend AI Engineering is currently in progress.** 🟡

**Completed**

- [x] FE-AA2 – First 3D Experience on the Web
  - [x] Interactive 3D scene
  - [x] Procedural 3D orb
  - [x] Mouse and touch interaction
  - [x] Click/tap interaction
  - [x] Responsive layout
  - [x] Reduced-motion fallback
  - [x] Lower-power device fallback
  - [x] Lazy-loaded 3D experience
  - [x] DPR optimization
  - [x] Three.js code splitting
  - [x] Production build verification
  - [x] Documentation completed

**Upcoming**

- [ ] Next Week 7 assignment
- [ ] Implementation and testing
- [ ] Documentation
- [ ] Final Week 7 verification

```text
Week 07
│
├── FE-AA2
│   └── ✅ Completed
│
└── Next Assignment
    └── ⏳ Upcoming
```

---

## Internship Status

🟢 **Weeks 1–6 Completed**

🟡 **Week 7 In Progress**

The internship continues into the next phase, with upcoming assignments expected to build on the frontend engineering, accessibility, testing, motion design, performance optimization, and interactive web foundations established so far.

More assignments, projects, experiments, and refinements are on the way as the program progresses.