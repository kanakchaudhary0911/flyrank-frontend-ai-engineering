# AI Prompts – FE-08 · Error States, Empty States & Edge Cases

## Overview

This document records the main prompts used during the development, debugging, testing, and verification of FE-08.

AI was used as a development assistant for assignment understanding, error-state planning, implementation guidance, debugging, UI review, edge-case identification, and test-case generation.

---

## 1. Assignment Understanding

**Prompt**

```text
Explain the FE-08 assignment requirements for Error States, Empty States & Edge Cases.

Break the requirements into practical implementation steps for a Next.js + TypeScript + AI SDK application.

Focus on:
- Error states
- Empty states
- Loading and streaming states
- Retry functionality
- API failures
- Edge cases
- User-friendly error messages
- Accessibility
- Final verification
```

**Purpose**

To understand the assignment requirements and create an implementation plan before making changes.

---

## 2. Error State Planning

**Prompt**

```text
I need to add an error state to my Next.js streaming AI chat application.

The UI should:
- Detect when an AI request fails
- Display a clear error message
- Use a visible error state
- Provide a Retry button
- Allow the user to retry the failed response
- Avoid exposing technical API errors directly to the user

Suggest a clean React/Next.js implementation approach that fits an existing chat interface.
```

**Purpose**

To plan the user-facing error state and understand how it should behave.

---

## 3. API Error Handling

**Prompt**

```text
Review my Next.js /api/chat route and explain how I should handle errors safely.

I want server-side errors to be logged for debugging while the frontend receives a user-friendly failure state.

Show how try/catch and error logging can be used without exposing sensitive technical details to the user.
```

**Purpose**

To understand the separation between server-side error logging and user-facing error messages.

---

## 4. Intentional Error Testing

**Prompt**

```text
I need to test the error state of my AI chat application without depending on a random API failure.

What is a simple way to intentionally trigger a test error inside the Next.js /api/chat route so I can verify that the frontend displays its error state correctly?

Also explain how to remove or comment out the test error after verification.
```

**Purpose**

To create a controlled failure scenario for testing the FE-08 error UI.

---

## 5. Retry Functionality

**Prompt**

```text
My React AI chat interface uses useChat().

How can I add a Retry button to the error state so that clicking Retry attempts to regenerate the failed AI response?

The UI should:
- Show the error state when a request fails
- Display a Retry button
- Trigger regeneration when clicked
- Show the normal streaming/loading state while retrying
- Return to the normal response state if the retry succeeds
```

**Purpose**

To implement and verify recovery from a failed AI response.

---

## 6. Empty State

**Prompt**

```text
Help me design an empty state for an AI conversation interface.

Before the user sends their first message, the interface should clearly communicate:
- What the application does
- What the user can ask
- Which AI tool can be used
- How to start a conversation

Keep the design minimal and consistent with the existing dark AI chat interface.
```

**Purpose**

To improve the first-use experience when there are no conversation messages.

---

## 7. Loading / Streaming State

**Prompt**

```text
Review the loading state of my streaming AI chat UI.

I want a clear visual indication that the AI is processing a request before the response appears.

Suggest a simple implementation using React state and a typing indicator or animated dots.

The loading state should disappear automatically when streaming completes or fails.
```

**Purpose**

To verify that users receive visual feedback while the AI response is being processed.

---

## 8. Edge Cases

**Prompt**

```text
Identify the important edge cases I should consider for FE-08 in a streaming AI chat application.

Focus on:
- Empty input
- Very long input
- API failure
- Rate-limit or quota errors
- Network failure
- Failed streaming response
- Retry after failure
- Empty conversation
- Multiple rapid requests
- Missing API key

For each case, suggest the expected user-facing behavior.
```

**Purpose**

To identify failure scenarios and decide how the application should behave in each case.

---

## 9. Accessibility Review

**Prompt**

```text
Review my FE-08 error and empty states from an accessibility perspective.

Check whether:
- Error messages are clearly visible
- The error container uses an appropriate ARIA role
- The Retry button is keyboard accessible
- Empty-state content is understandable
- Loading states provide useful visual feedback
- The layout remains usable on smaller screens

Suggest only practical improvements that fit the existing implementation.
```

**Purpose**

To review the error and empty states for basic accessibility and usability.

---

## 10. UI Review

**Prompt**

```text
Review my FE-08 chat interface after adding error states, empty states, loading states, and retry functionality.

Check whether the states feel visually consistent with the existing dark AI chat design.

Focus on:
- Spacing
- Alignment
- Visibility
- Button placement
- Error message readability
- Responsive behavior
- Overall consistency

Suggest only necessary improvements.
```

**Purpose**

To review the final UI and make targeted visual improvements.

---

## 11. Debugging API Errors

**Prompt**

```text
I am getting an HTTP 429 / RESOURCE_EXHAUSTED error from the Gemini API while testing my Next.js AI chat application.

The terminal indicates that the Gemini free-tier request quota has been exceeded.

Help me determine:
1. Whether the API route is receiving the request.
2. Whether the API key is being detected.
3. Whether the error is coming from the Gemini API rather than the frontend.
4. Whether my frontend error state is handling the failure correctly.
5. What should be documented as evidence for FE-08.

Do not suggest changing working application logic unnecessarily.
```

**Purpose**

To diagnose the API quota failure and verify that the frontend handles a real API failure correctly.

---

## 12. Error State Verification

**Prompt**

```text
I intentionally triggered an error in my Next.js AI route.

What should I verify in the browser to confirm that my FE-08 error handling is working correctly?

Check for:
- User-friendly error message
- Error-state styling
- Retry button
- Retry interaction
- Loading state during retry
- Successful recovery after retry
```

**Purpose**

To create a practical checklist for verifying the complete error-and-retry flow.

---

## 13. Retry Verification

**Prompt**

```text
My FE-08 interface displays a Retry button after an AI request fails.

Explain how I should test the Retry behavior.

I want to verify that:
- The Retry button is clickable
- The failed request is regenerated
- A loading/typing indicator appears while retrying
- The error state clears when appropriate
- A successful AI response is displayed after recovery
```

**Purpose**

To verify the recovery path after an AI request failure.

---

## 14. Code Review

**Prompt**

```text
Review my FE-08 implementation against these requirements:

- Empty state
- Loading/streaming state
- AI/API error state
- User-friendly error message
- Retry functionality
- Server-side error logging
- Edge-case handling
- Accessibility
- Responsive UI
- Streaming AI integration
- Production build

Identify missing requirements or unnecessary implementation changes.

Keep the review focused on the assignment requirements.
```

**Purpose**

To perform an AI-assisted requirements review before finalizing the project.

---

## 15. Final Verification

**Prompt**

```text
Review the final FE-08 implementation and create a verification checklist covering:

1. Empty state
2. Normal AI response
3. Loading/streaming state
4. Error state
5. Retry functionality
6. API error logging
7. Edge cases
8. Accessibility
9. Responsive behavior
10. Production build
11. Documentation
12. Screenshot evidence

Keep the checklist focused on the FE-08 assignment requirements.
```

**Purpose**

To perform a final pre-submission review.

---

## AI Usage Principle

AI-generated suggestions were treated as development assistance rather than final authority.

The final implementation was manually reviewed, tested, modified where necessary, and verified using local development and production build commands.

The main workflow was:

```text
Prompt
  ↓
AI Suggestion
  ↓
Developer Review
  ↓
Implementation
  ↓
Testing
  ↓
Manual Fixes
  ↓
Final Verification
```

---

## Summary

The prompts above were used across the FE-08 development lifecycle, including:

- Assignment understanding
- Error-state planning
- API error handling
- Intentional error testing
- Retry functionality
- Empty-state design
- Loading/streaming state
- Edge-case identification
- Accessibility review
- UI review
- API quota debugging
- Error-state verification
- Retry verification
- Code review
- Final verification