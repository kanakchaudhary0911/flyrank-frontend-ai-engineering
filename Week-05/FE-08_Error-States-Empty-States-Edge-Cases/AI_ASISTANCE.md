# AI Assistance – FE-08 · Error States & Edge Cases

## Overview

AI tools were used as development assistants during the implementation of FE-08.

The AI was mainly used for planning, understanding error-handling patterns, designing user-friendly error and empty states, debugging issues, improving the UI, and reviewing the structure of the application.

All AI-generated suggestions were reviewed, tested, and adapted before being included in the final project.

---

## AI Tools Used

- ChatGPT
- Claude
- Gemini

---

## Areas Where AI Assisted

### 1. Project Planning

AI assistance was used to:

- Break the FE-08 assignment requirements into smaller implementation steps.
- Identify the important error states and edge cases that should be handled.
- Plan the frontend error-state experience.
- Plan how API and AI failures should be communicated to users.
- Plan the empty-state experience for a new conversation.
- Review the existing FE-07 implementation before adapting it for FE-08.

---

### 2. Error State Design

AI assistance was used to design a clear and user-friendly error state for failed AI responses.

The error state includes:

- Error icon
- Clear error heading
- User-friendly error message
- Retry button
- Accessible alert semantics

The final implementation uses:

```tsx
{error && (
  <div className="error-state" role="alert">
    <div className="error-icon">!</div>

    <div className="error-content">
      <strong>Something went wrong</strong>

      <p>
        The AI response could not be completed.
        Please try the failed message again.
      </p>
    </div>

    <button
      type="button"
      className="retry-button"
      onClick={() => regenerate()}
    >
      Retry
    </button>
  </div>
)}
```

AI assistance helped review the structure and user experience, while the final implementation was manually integrated into the application.

---

### 3. Retry Interaction

AI assistance was used to understand how the failed AI request could be retried from the frontend.

The implementation uses:

```tsx
onClick={() => regenerate()}
```

This allows the user to retry the failed message without manually typing the request again.

The retry interaction was tested through the UI.

---

### 4. Empty State

AI assistance was used to review the initial empty conversation state.

The application provides a clear starting screen when no messages exist:

```text
TOOL-POWERED AI

AI Conversation
Analyze topics using structured AI tools
and view the results in a clear format.

Start a conversation
Ask the AI to analyze a topic using
the analyzeContent tool.
```

This helps users understand what the application does before sending their first message.

---

### 5. API Error Handling

AI assistance was used while debugging and testing API failures.

The server-side route contains error handling around the chat request:

```ts
try {
  // AI request
} catch (error) {
  console.error("❌ CHAT ROUTE ERROR:");
  console.error(error);

  return new Response(
    JSON.stringify({
      error: "AI request failed",
      details:
        error instanceof Error
          ? error.message
          : String(error),
    }),
    {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
```

The implementation was tested against an intentionally triggered error as well as an actual Gemini API failure.

---

### 6. Testing Error States

AI assistance helped create a controlled test for verifying the FE-08 error UI.

During development, an intentional error was temporarily introduced:

```ts
throw new Error("FE-08 test error");
```

This was used to verify that the frontend correctly displayed:

- Error state
- Error message
- Retry button
- Appropriate visual styling

After verification, the intentional test error was removed.

---

### 7. Real API Error Debugging

AI assistance was also used to understand a real Gemini API failure encountered during testing.

The development server reported:

```text
AI_RetryError
AI_APICallError
statusCode: 429
RESOURCE_EXHAUSTED
```

The error indicated that the Gemini API free-tier request quota had been exceeded.

This confirmed that the application's error UI was also able to respond to a real external API failure rather than only the manually triggered test error.

---

### 8. UI and CSS Improvements

AI assistance was used to review and improve the error-state styling.

The final error state includes:

- Responsive layout
- Rounded container
- Error icon
- Clear visual hierarchy
- Retry button
- Mobile-friendly wrapping
- Accessible alert role

The relevant CSS was manually reviewed and integrated into:

`app/globals.css`

The `.error-state`, `.error-icon`, `.error-content`, and `.retry-button` classes were used for the final implementation.

---

### 9. Edge Case Testing

AI assistance was used to identify and test different application states.

The testing process included:

- Empty conversation state
- Normal AI response
- Tool-powered response
- API failure
- Error message display
- Retry interaction
- Streaming/loading state
- Responsive error-state layout
- Production build verification

These cases were checked manually through the application.

---

## Human Verification

AI-generated suggestions were not accepted without verification.

The final implementation was manually checked by:

- Reviewing the generated code.
- Testing the empty conversation state.
- Triggering an intentional FE-08 error.
- Confirming that the error state appeared correctly.
- Testing the Retry button.
- Testing the application with a real Gemini API failure.
- Reviewing the terminal API error logs.
- Checking the responsive error-state layout.
- Running the development server.
- Running the production build.
- Reviewing the final UI.
- Capturing screenshots for assignment evidence.

---

## Build Verification

The final project was verified using:

```bash
npm run build
```

The production build completed successfully with:

```text
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

The application was also tested locally using:

```bash
npm run dev
```

The Next.js application successfully started on the local development server.

---

## Human Decisions and Manual Changes

The final implementation was not treated as a direct copy of AI-generated output.

Manual decisions included:

- Reusing the working FE-07 application structure as the starting point.
- Adapting the interface specifically for FE-08.
- Designing the final empty state.
- Designing the error-state layout.
- Adding the `role="alert"` accessibility attribute.
- Adding the Retry button.
- Connecting the Retry button to `regenerate()`.
- Creating the intentional FE-08 test error.
- Removing the intentional error after testing.
- Testing the real Gemini API quota failure.
- Reviewing the final CSS styling.
- Verifying responsive behavior.
- Running the production build.
- Selecting and capturing screenshots for evidence.
- Updating project documentation.

---

## AI Assistance Summary

AI was used as a development assistant rather than as a replacement for implementation and verification.

The overall workflow was:

```text
Assignment Requirements
        ↓
AI-Assisted Planning
        ↓
FE-07 Structure Review
        ↓
FE-08 Implementation
        ↓
AI-Assisted Debugging
        ↓
Manual Error Testing
        ↓
UI Verification
        ↓
Real API Error Testing
        ↓
Build Verification
        ↓
Final Documentation
```

The developer remained responsible for reviewing, testing, modifying, and validating the final implementation.