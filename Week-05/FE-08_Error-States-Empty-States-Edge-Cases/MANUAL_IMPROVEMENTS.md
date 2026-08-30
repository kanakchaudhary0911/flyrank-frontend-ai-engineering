# Manual Improvements – FE-08 · Error States, Empty States & Edge Cases

## Overview

AI assistance was used during the development of FE-08, but the final implementation was manually reviewed, tested, and refined.

The following improvements and decisions were made manually to ensure that the application handled empty, loading, error, retry, and edge-case scenarios correctly while matching the assignment requirements.

---

## 1. Added a Dedicated Empty State

The initial chat screen was manually designed to clearly communicate what the application does before the user sends a message.

The empty state includes:

- Application title
- Short description
- Tool-powered AI indicator
- Explanation of the `analyzeContent` tool
- Clear instruction for starting a conversation

The empty state prevents the interface from appearing blank when there are no messages.

---

## 2. Preserved the Existing Streaming Chat Behaviour

The existing streaming architecture was retained while adding FE-08 error handling.

The application continues to use:

```ts
useChat()
```

with the existing API transport.

The server-side route continues to use:

```ts
streamText()
```

This allowed error and retry behaviour to be added without removing the real-time AI response experience.

---

## 3. Added a Dedicated Error State

A dedicated error UI was manually added to the chat interface.

The error state is displayed when the AI request fails and contains:

```text
Something went wrong

The AI response could not be completed.
Please try the failed message again.

[ Retry ]
```

The error container uses:

```tsx
<div className="error-state" role="alert">
```

Using `role="alert"` makes the error state more accessible to assistive technologies.

---

## 4. Added Retry Functionality

A Retry button was manually added to the error state.

The implementation uses:

```tsx
<button
  type="button"
  className="retry-button"
  onClick={() => regenerate()}
>
  Retry
</button>
```

This allows the user to retry the failed AI response without manually re-entering the message.

The retry flow is:

```text
AI Request
    ↓
Request Fails
    ↓
Error State
    ↓
User Clicks Retry
    ↓
Regenerate Request
    ↓
Loading / Streaming State
    ↓
AI Response
```

---

## 5. Added Responsive Error-State Styling

The error state was manually styled to remain usable on smaller screens.

The implementation includes a responsive media query:

```css
@media (max-width: 600px) {
  .error-state {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .error-content {
    min-width: 0;
  }

  .retry-button {
    margin-left: 46px;
  }
}
```

This prevents the error content and Retry button from becoming difficult to use on narrow screens.

---

## 6. Added Error-State Visual Styling

A dedicated visual style was manually created for the error state.

The styling includes:

- Error icon
- Rounded container
- Error border
- Dark translucent background
- Clear spacing
- Readable error text
- Visible Retry button
- Hover and active button states

The main error-state classes are:

- `.error-state`
- `.error-icon`
- `.error-content`
- `.retry-button`

This keeps the error presentation visually consistent with the existing dark interface.

---

## 7. Added Server-Side Error Logging

The API route was manually reviewed to ensure that AI failures are logged in the terminal for debugging.

The route contains:

```ts
onError({ error }) {
  console.error("❌ GEMINI STREAM ERROR:");
  console.error(error);
}
```

This separates developer-facing technical information from the simplified error message shown to the user.

---

## 8. Tested a Controlled Error Scenario

A controlled error scenario was used during development to verify the frontend error state.

The API route included a temporary test error:

```ts
// throw new Error("FE-08 test error");
```

The error was intentionally commented out after testing so that the normal application behaviour remained unchanged.

This allowed the following flow to be verified:

```text
Test Error
    ↓
API Failure
    ↓
Frontend Error State
    ↓
Retry Button
```

---

## 9. Tested a Real Gemini API Failure

During testing, the Gemini API returned an HTTP 429 `RESOURCE_EXHAUSTED` error because the available free-tier request quota for the configured model had been exceeded.

The terminal confirmed:

```text
statusCode: 429
RESOURCE_EXHAUSTED
```

The API route also logged:

```text
❌ GEMINI STREAM ERROR:
```

This provided a real failure scenario for verifying the application's error handling.

---

## 10. Verified User-Friendly Error Messaging

The technical API error was not displayed directly inside the main user interface.

Instead, the frontend displays a concise message:

```text
Something went wrong

The AI response could not be completed.
Please try the failed message again.
```

This keeps the interface understandable for normal users while detailed technical information remains available in the server terminal.

---

## 11. Verified Retry Behaviour

The Retry button was manually tested after an error occurred.

The expected behaviour was verified as:

```text
Error State
    ↓
Click Retry
    ↓
AI Request Processing
    ↓
Typing / Loading Indicator
    ↓
Response or Error State
```

This ensures that the retry interaction does not leave the interface permanently stuck in the error state.

---

## 12. Verified Loading / Typing State

The existing streaming/loading indicator was reviewed as part of the FE-08 edge-case handling.

While the AI is processing a response, the interface displays an animated typing indicator.

This gives the user feedback that the request is still being processed instead of making the application appear frozen.

---

## 13. Reviewed Empty Input Behaviour

The message input was manually reviewed to ensure that the chat interface does not unnecessarily submit invalid empty messages.

The existing input and submit behaviour was preserved instead of adding unnecessary changes to unrelated parts of the application.

---

## 14. Reviewed Failed Streaming Behaviour

The application was tested against failed AI requests to ensure that a failed streaming response does not leave the user without feedback.

When the AI request fails:

```text
Streaming Request
        ↓
Failure
        ↓
Error State Displayed
        ↓
Retry Available
```

This provides a clear recovery path for the user.

---

## 15. Preserved Existing Tool Integration

The FE-08 changes were added without removing the existing server-side tool functionality.

The API route continues to register:

```ts
tools: {
  analyzeContent: analyzeContentTool,
  analyzeWebsite: analyzeWebsiteTool,
},
```

This ensures that FE-08 continues to build on the tool-powered AI functionality implemented in the previous assignment.

---

## 16. Updated Frontend Branding

The frontend branding was manually updated to:

**FE-08 · Error States & Edge Cases**

The interface continues to display:

- Frontend AI Engineering
- Gemini AI · Online

This makes the submitted application clearly identifiable as the FE-08 project.

---

## 17. Refined the User Interface

The final UI was manually reviewed to ensure that the new states fit the existing dark AI chat design.

The interface includes:

- Empty state
- User messages
- AI messages
- Streaming/loading indicator
- Tool result display
- Error state
- Retry button
- Responsive layout
- Keyboard interaction
- Clear application branding

The design was intentionally kept simple so that error handling and edge-case behaviour remain the primary focus.

---

## 18. Verified Production Build

The application was manually verified using:

```bash
npm run build
```

The production build completed successfully.

The build verification included:

```text
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

The final route structure was also verified:

```text
Route (app)
┌ ○ /
├ ○ /_not-found
└ ƒ /api/chat
```

This confirmed that the FE-08 implementation compiled successfully with Next.js and TypeScript.

---

## 19. Verified Local Development

The application was tested using:

```bash
npm run dev
```

The local development server successfully started on:

http://localhost:3000


The API route successfully received chat requests.

The terminal output confirmed:

```text
➡️ Chat request received
➡️ Messages: 1
➡️ API key present: true
```

This verified that the frontend could successfully communicate with the server-side chat route.

---

## 20. Screenshot Evidence

Screenshots were manually captured to document the important FE-08 states and behaviour.

The evidence includes screenshots for:

- Initial empty state
- Normal AI conversation
- Error state
- Retry interaction
- API error in terminal
- Successful build verification

The terminal screenshot showing the real API failure was saved as:

`FE-08_04_API-Error-Log.png`

This screenshot provides evidence of the 429 / `RESOURCE_EXHAUSTED` Gemini API failure encountered during testing.

---

## 21. Documentation Improvements

The FE-08 documentation was manually organized into separate files:

```text
FE-08_Error-States-Empty-States-Edge-Cases/
│
├── README.md
├── AI_ASSISTANCE.md
├── AI_PROMPTS.md
├── MANUAL_IMPROVEMENTS.md
├── screenshots/
└── app/
```

This separates:

- Project overview and implementation details
- AI assistance
- AI prompts
- Manual developer improvements
- Screenshot evidence
- Application source code

---

## AI vs Manual Work

The development process was divided between AI assistance and developer responsibility.

| Area | AI Assistance | Manual Work |
|---|---|---|
| Project planning | ✓ | ✓ |
| Error-state planning | ✓ | ✓ |
| Empty-state design | ✓ | ✓ |
| Retry functionality | ✓ | ✓ |
| Error handling | ✓ | ✓ |
| Edge-case identification | ✓ | ✓ |
| API debugging | ✓ | ✓ |
| UI refinement | ✓ | ✓ |
| Accessibility review | ✓ | ✓ |
| Error testing | Test guidance | ✓ |
| Retry testing | Test guidance | ✓ |
| Screenshot selection | Suggestions | ✓ |
| Build verification | Guidance | ✓ |
| Documentation | Drafting assistance | ✓ |

---

## Final Verification

Before considering FE-08 complete, the following were manually verified:

- [x] Empty state is displayed before the first conversation.
- [x] Normal AI responses work when the API is available.
- [x] Loading/typing state is displayed while processing.
- [x] Error state is displayed when an AI request fails.
- [x] Error state uses a user-friendly message.
- [x] Error state uses `role="alert"`.
- [x] Retry button is available after failure.
- [x] Retry triggers `regenerate()`.
- [x] Retry processing displays the loading/typing state.
- [x] Server-side Gemini errors are logged.
- [x] Real 429 `RESOURCE_EXHAUSTED` API failure was observed.
- [x] Existing tool integration remains available.
- [x] Responsive error-state styling was added.
- [x] Local development server works.
- [x] `/api/chat` receives requests.
- [x] Production build completed successfully.
- [x] Screenshot evidence was captured.
- [x] Documentation completed.

---

## Conclusion

The final FE-08 implementation combines AI-assisted development with manual engineering decisions and verification.

AI was used to accelerate planning, implementation guidance, debugging, testing, and review, while the final error state, empty state, retry interaction, UI refinement, API failure testing, build verification, and documentation were manually reviewed and validated.

The completed application demonstrates a complete failure-recovery flow:

```text
User Request
      ↓
AI Processing
      ↓
Success ─────────────→ AI Response
      │
      ↓
Failure
      ↓
User-Friendly Error State
      ↓
Retry
      ↓
Loading / Streaming
      ↓
Recovered AI Response
```