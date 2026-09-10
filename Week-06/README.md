# Week 6 – Frontend AI Engineering

This folder contains the work completed during **Week 6** of the FlyRank Frontend AI Engineering program.

The focus of this week was building interactive frontend experiences with intentional motion, state-driven UI feedback, accessible interactions, micro-interactions, component testing, end-to-end testing, and reliable CI validation.

---

## Week 6 Overview

| Assignment | Title | Status |
|---|---|---|
| FE-AA1 | Buttons with a Brain: Motion & State Micro-interactions | ✅ Completed |
| FE-09 | Testing Pass | ✅ Completed |

---

## Assignments

### FE-AA1 – Buttons with a Brain: Motion & State Micro-interactions

**Objective**

Build an interactive button that communicates its complete lifecycle through intentional motion and visual state changes instead of abruptly switching between states.

The assignment focused on designing meaningful micro-interactions that provide clear feedback during user actions, processing, success, and failure.

**Key Activities**

- Build a reusable state-driven interactive button
- Implement idle state
- Implement hover and keyboard focus states
- Implement loading state with spinner feedback
- Implement success state with checkmark feedback
- Implement error state with retry feedback
- Add a Reset action
- Add dedicated Force Success and Force Error demo controls
- Add smooth state transitions
- Add success scale animation
- Add error shake animation
- Use compositor-friendly properties such as `transform` and `opacity`
- Prevent repeated actions while loading
- Handle rapid/spam clicks safely
- Add visible keyboard focus feedback
- Implement `aria-live` state announcements
- Respect `prefers-reduced-motion`
- Test all interaction states
- Verify the production build
- Document motion and easing decisions

**Technology Used**

- React
- TypeScript
- Vite
- CSS
- ESLint
- npm

**Skills Practiced**

- State-driven UI
- React State Management
- CSS Transitions
- CSS Animations
- Micro-interactions
- Motion Design
- Accessibility
- Keyboard Navigation
- Reduced Motion
- Interaction Design
- Responsive UI
- Event Handling
- Async State Simulation
- Spam-click Protection
- Testing
- Debugging
- Documentation

---

### FE-09 – Testing Pass

**Objective**

Set up a reliable testing workflow for high-risk frontend components and the primary user flow using component testing, end-to-end testing, and continuous integration.

The assignment focused on validating real application components, testing meaningful user-facing behaviour, mocking the AI API, and running automated tests through GitHub Actions.

**Key Activities**

- Set up Vitest for component testing
- Configure React Testing Library
- Add shared test setup with `jest-dom`
- Test the existing ChatMessage component
- Test the existing JobForm component
- Cover different chat message parts and tool results
- Test form validation and submission behaviour
- Query elements using accessible roles, labels, placeholders, and visible text
- Avoid relying on CSS class names or test IDs
- Mock the AI API during end-to-end testing
- Set up Playwright
- Add a primary chat flow E2E test
- Configure Chromium, Firefox, and WebKit projects
- Configure GitHub Actions CI
- Run component tests automatically in CI
- Run Playwright tests automatically in CI
- Upload Playwright reports as CI artifacts
- Verify the complete testing workflow locally

**Testing Results**

- **14/14 component tests passed**
- **1/1 Playwright primary-flow test passed**
- AI API successfully mocked during E2E testing
- GitHub Actions workflow configured for automated testing

**Technology Used**

- React
- TypeScript
- Vitest
- React Testing Library
- Playwright
- Vite
- GitHub Actions
- npm

**Skills Practiced**

- Component Testing
- End-to-End Testing
- Test Automation
- React Testing Library
- Vitest
- Playwright
- API Mocking
- Accessibility Testing
- CI/CD
- Debugging
- Test Design
- Regression Testing

---

## Repository Structure

```text
Week-06/
│
├── README.md
│
├── FE-AA1_Buttons-with-a-Brain-Motion-and-State-Micro-interactions/
│   │
│   ├── README.md
│   │
│   └── app/
│       ├── public/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.tsx
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
│
└── FE-09_Testing-Pass/
    │
    ├── README.md
    ├── .github/
    │   └── workflows/
    │       └── playwright.yml
    ├── e2e/
    │   └── primary-flow.spec.ts
    ├── tests/
    │   ├── ChatMessage.test.jsx
    │   ├── JobForm.test.jsx
    │   └── setup.js
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── playwright.config.ts
    └── vitest.config.js
```

---

## Week 6 Testing & Quality

Week 6 included both manual interaction testing and automated application testing.

### FE-AA1 Testing

The interactive button was tested for:

- [x] Idle state
- [x] Hover interaction
- [x] Keyboard focus
- [x] Loading state
- [x] Loading spinner
- [x] Success state
- [x] Error state
- [x] Reset functionality
- [x] Force Success control
- [x] Force Error control
- [x] Rapid/spam clicking during loading
- [x] Disabled state during loading
- [x] Reduced-motion support
- [x] Production build

### FE-09 Automated Testing

The testing pass includes:

- [x] Vitest component testing
- [x] React Testing Library
- [x] ChatMessage tests
- [x] JobForm tests
- [x] Accessible queries
- [x] AI API mocking
- [x] Playwright E2E testing
- [x] Primary chat flow
- [x] GitHub Actions CI
- [x] Automated test execution
- [x] Playwright report upload
- [x] Local test verification

---

## What I Learned

- UI state changes should communicate what is happening instead of simply replacing text or colors.
- Small animations can make interfaces feel more responsive when they have a clear purpose.
- State-driven components are easier to reason about when each state has a defined visual and interaction behaviour.
- `transform` and `opacity` are useful properties for creating performant UI motion.
- Keyboard focus needs to remain visible even when designing highly visual interfaces.
- `prefers-reduced-motion` should reduce unnecessary movement without removing important feedback.
- Preventing repeated actions during loading helps avoid conflicting state updates.
- Component tests should focus on meaningful user-facing behaviour.
- Accessible queries make tests less dependent on implementation details.
- API mocking allows E2E tests to validate application behaviour without calling real external services.
- Automated CI testing helps catch regressions before changes are merged.
- Testing both components and the primary user flow provides stronger confidence than testing either layer alone.

---

## What I Enjoyed Most

- Designing a button where motion communicates the current state rather than being purely decorative.
- Seeing the loading state transition into clear success and error feedback.
- Adding the success checkmark and error shake to make the results immediately understandable.
- Testing rapid clicks and ensuring the component remained stable.
- Building the interaction using React, TypeScript, and CSS without relying on a component library.
- Reusing real application components for automated testing instead of creating duplicate dummy components.
- Building a Playwright test that follows the actual primary chat flow.
- Mocking the AI response so the E2E test remained reliable and independent of the real API.
- Setting up GitHub Actions to automate the testing workflow.

---

## Week 6 Summary

Week 6 focused on building frontend experiences that communicate clearly through both interaction design and automated validation.

FE-AA1 demonstrated how a reusable button can communicate its complete lifecycle through intentional transitions:

```text
User Interaction
       ↓
      Idle
       ↓
     Loading
       ↓
 ┌─────┴─────┐
 ▼           ▼
Success     Error
 ✓           !
 └─────┬─────┘
       ↓
     Reset
       ↓
      Idle
```

FE-09 extended the week by adding automated confidence around real application components and the primary chat flow:

```text
Real Components
      ↓
Vitest + RTL
      ↓
Component Tests
      ↓
Playwright
      ↓
Primary E2E Flow
      ↓
GitHub Actions
      ↓
Automated CI Validation
```

Together, the assignments combined React state management, CSS motion, accessibility, reduced-motion support, interaction safety, component testing, E2E testing, API mocking, and CI automation into a complete frontend engineering workflow.

---

## Week 6 Status

🟢 **Week 6 Completed**

Both Week 6 assignments have been completed, tested, documented, and verified.

- [x] FE-AA1 completed
  - [x] Idle state implemented
  - [x] Hover/focus state implemented
  - [x] Loading state implemented
  - [x] Success state implemented
  - [x] Error state implemented
  - [x] Disabled/loading protection implemented
  - [x] Success and Error demo triggers added
  - [x] Motion and easing documented
  - [x] Accessibility implemented
  - [x] Reduced-motion support implemented
  - [x] Spam-click protection tested
  - [x] Local testing completed
  - [x] Production build verified
  - [x] Documentation completed
- [x] FE-09 completed
  - [x] Vitest configured
  - [x] React Testing Library configured
  - [x] ChatMessage tests added
  - [x] JobForm tests added
  - [x] 14 component tests passing
  - [x] Playwright configured
  - [x] Primary chat E2E test added
  - [x] AI API mocked
  - [x] GitHub Actions CI configured
  - [x] Automated testing workflow added
  - [x] Local test verification completed
  - [x] Documentation completed

```text
Week 06
│
├── FE-AA1
│   └── ✅ Completed
│
└── FE-09
    └── ✅ Completed

🟢 Week 6 Completed
```

---

## Completion Status

**Week 6 – Frontend AI Engineering is complete. ✅**

All assigned Week 6 work has been implemented and documented. The week covered both interactive frontend motion and automated testing, including component tests, end-to-end testing, API mocking, accessibility, and CI automation.

### Final Deliverables

- [x] FE-AA1 — Buttons with a Brain: Motion & State Micro-interactions
- [x] FE-09 — Testing Pass
- [x] Component test suite with 14 passing tests
- [x] Playwright primary-flow E2E test
- [x] AI API mocked during E2E testing
- [x] GitHub Actions CI workflow
- [x] Documentation completed

**Final Status: 🟢 COMPLETED**