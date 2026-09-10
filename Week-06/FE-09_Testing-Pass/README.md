# FE-09 — Testing Pass

## Component & End-to-End Testing

A testing setup for validating high-risk frontend UI through component tests and a primary end-to-end flow.

---

## Testing Scope

The project covers testing for:

- **Chat Message Renderer** — Validates user messages, assistant messages, text parts, structured tool results, and mixed message content.
- **Validated Job Form** — Tests required fields, form submission, initial data, application status, location handling, and cancel behavior.
- **Primary Chat Flow** — Uses Playwright to verify the main chat interaction with a mocked AI response.

---

## Component Tests

Component tests are written using **Vitest** and **React Testing Library**.

### ChatMessage

The ChatMessage tests cover:

- User text messages.
- Assistant text messages.
- Multiple text parts combined into one message.
- Structured `analyzeContent` tool results.
- Tool results without key points.
- Messages without tool output.
- Messages containing both text and tool results.

### JobForm

The JobForm tests cover:

- Required form fields.
- Empty form submission validation.
- Trimmed form data.
- Empty location fallback.
- Edit mode with initial data.
- Application status selection.
- Cancel action.

**Total component tests: 14**

---

## End-to-End Test

Playwright verifies the primary chat flow:

```text
Open Chat
   ↓
Verify Empty State
   ↓
Enter Message
   ↓
Send Message
   ↓
Verify User Message
   ↓
Verify Mocked AI Response
```

The AI route is mocked during the test, so the test does not call the real Gemini API.

---

## Test Results

### Vitest

```text
Test Files: 2 passed
Tests:      14 passed
```

### Playwright

```text
Chromium: 1 passed
```

The component and end-to-end test suites were verified locally before pushing the changes.

---

## Testing Principles

- Tests query elements by accessible roles, labels, placeholders, and visible text.
- Tests avoid depending on CSS class names.
- The AI API is mocked during E2E testing.
- Tests validate meaningful user-facing behavior.
- Component tests focus on high-risk UI paths.
- Playwright validates the primary user flow.

---

## CI

GitHub Actions runs the testing workflow on:

- Push to `main` or `master`.
- Pull requests targeting `main` or `master`.

The CI workflow runs:

1. Vitest component tests.
2. Playwright browser installation.
3. Playwright end-to-end tests.
4. Playwright test report upload.

A failing test causes the CI job to fail and prevents the workflow from being considered successful.

---

## Tech Stack

- React
- Vitest
- React Testing Library
- Playwright
- Vite
- TypeScript
- GitHub Actions

---

## Project Structure

```text
FE-09_Testing-Pass/
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
├── vitest.config.js
└── README.md
```

---

## Reused Components

FE-09 uses existing application components instead of creating duplicate dummy components.

- `ChatMessage.tsx` from FE-08 — Error States & Edge Cases
- `JobForm.tsx` from the existing application codebase

The tests validate real project components and their user-facing behavior.

---

## Status

✅ **Complete**