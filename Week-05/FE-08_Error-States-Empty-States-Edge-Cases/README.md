# FE-08 · Error States, Empty States & Edge Cases

Frontend AI Engineering

---

## Overview

FE-08 focuses on designing and implementing clear **error states, empty states, loading states, retry behaviour, and edge-case handling** in an AI-powered chat application.

The application builds on the tool-powered AI chat experience from the previous assignment and adds a more resilient user experience for situations where:

- No conversation has started yet.
- An AI response is being generated.
- An AI request fails.
- The user needs to retry a failed request.
- The backend or external AI service returns an error.

The goal was to make failures understandable and recoverable instead of leaving the user with a broken or unclear interface.

---

## Assignment Focus

The main focus of FE-08 was:

- Empty state design
- Error state design
- Loading and streaming states
- Retry interaction
- Edge-case handling
- User-friendly error messages
- Server-side error logging
- Responsive error UI
- Accessibility considerations

---

## Application

The application is a tool-powered AI conversation interface using:

- Next.js
- React
- TypeScript
- AI SDK
- Gemini AI
- Zod
- CSS

The application communicates with the server through:

```text
/api/chat
```

---

## Key Features

### 1. Empty State

When the application has no messages, the user is presented with a dedicated empty state.

It communicates:

```text
TOOL-POWERED AI

AI Conversation
Analyze topics using structured AI tools
and view the results in a clear format.

Start a conversation
Ask the AI to analyze a topic using
the analyzeContent tool.
```

This prevents the interface from appearing empty or unfinished before the first message.

---

### 2. AI Conversation

Users can enter natural-language prompts and communicate with the Gemini-powered AI.

Example:

```text
Analyze Python as a learning topic.
```

The application sends the request to `/api/chat` and displays the resulting AI response in the conversation interface.

---

### 3. Loading / Streaming State

While the AI is processing a request, the interface displays a typing/loading indicator.

This provides immediate feedback that the request is still being processed.

The general flow is:

```text
User Message
     ↓
API Request
     ↓
AI Processing
     ↓
Loading / Typing Indicator
     ↓
Streaming Response
     ↓
AI Message
```

---

### 4. Error State

When the AI request cannot be completed, the application displays a dedicated error state.

The interface shows:

```text
Something went wrong

The AI response could not be completed.
Please try the failed message again.

[ Retry ]
```

The error container uses `role="alert"` so that the error is presented as an important status update.

---

### 5. Retry Behaviour

The error state includes a Retry button.

The button uses `regenerate()` to retry the failed AI response.

The recovery flow is:

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
Loading / Streaming
     ↓
AI Response
```

This gives the user a clear recovery path without requiring them to type the request again.

---

## Error Handling

The application handles errors at both the server and frontend levels.

### Server-Side Error Logging

The API route contains:

```ts
onError({ error }) {
  console.error("❌ GEMINI STREAM ERROR:");
  console.error(error);
}
```

This allows detailed technical errors to remain available in the development terminal.

### User-Facing Error

Instead of exposing the complete technical error to the user, the frontend displays a simplified message:

```text
Something went wrong

The AI response could not be completed.
Please try the failed message again.
```

This keeps the interface understandable while still providing useful debugging information to the developer.

### Real API Error Testing

During development and testing, the Gemini API returned:

```text
429 RESOURCE_EXHAUSTED
```

The terminal indicated that the configured Gemini model had exceeded the available free-tier request quota.

The application correctly reached the error handling flow and displayed the frontend error state.

This provided a real API failure scenario for validating the FE-08 implementation.

### Controlled Error Testing

A temporary controlled error was also used during development:

```ts
// throw new Error("FE-08 test error");
```

This allowed the error UI and retry flow to be tested without depending entirely on an external API failure.

The test error was commented out after verification.

---

## Responsive Design

The error state was designed to remain usable on smaller screens.

A responsive media query adjusts the layout below:

```css
@media (max-width: 600px)
```

The error content can wrap appropriately and the Retry button remains accessible.

---

## Accessibility

The error state uses `role="alert"`.

This communicates the error as an important status update to assistive technologies.

The Retry control is implemented as a semantic button:

```html
<button type="button">
```

The application also preserves keyboard interaction for the chat input.

---

## Existing Tool Integration

FE-08 continues to use the tool-powered architecture from the previous assignment.

The API route registers:

```ts
tools: {
  analyzeContent: analyzeContentTool,
  analyzeWebsite: analyzeWebsiteTool,
},
```

This means the application can continue to use structured AI tools while providing improved error and edge-case handling.

---

## API Route

The main server-side route is:

```text
app/
└── api/
    └── chat/
        └── route.ts
```

The route:

- Receives chat messages.
- Converts messages for the AI model.
- Uses `streamText()`.
- Registers available tools.
- Handles multi-step execution.
- Streams the AI response.
- Logs errors when streaming fails.

---

## Project Structure

```text
FE-08_Error-States-Empty-States-Edge-Cases/
│
├── README.md
├── AI_ASSISTANCE.md
├── AI_PROMPTS.md
├── MANUAL_IMPROVEMENTS.md
│
├── screenshots/
│   ├── FE-08_01_Empty-State.png
│   ├── FE-08_02_AI-Response.png
│   ├── FE-08_03_Error-State.png
│   ├── FE-08_04_API-Error-Log.png
│   └── FE-08_05_Retry-State.png
│
└── app/
    ├── app/
    │   ├── api/
    │   │   └── chat/
    │   │       └── route.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── lib/
    │   └── tools/
    │       ├── analyze-content.ts
    │       └── analyze-website.ts
    │
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    └── .env.local
```

---

## Testing

The application was tested using the following scenarios.

### Test 1 – Empty State

Initial application load was checked before sending a message.

**Expected result:** Empty state is displayed.

### Test 2 – Normal AI Response

A normal prompt was entered into the chat.

Example: `Explain React in 2 sentences.`

**Expected result:** AI response is displayed successfully.

### Test 3 – Tool-Powered Request

A topic-analysis request was tested.

Example: `Analyze Python as a learning topic.`

**Expected result:** AI processes the request using the available tool.

### Test 4 – API Error

A real Gemini API quota failure was encountered.

Observed error: `429 RESOURCE_EXHAUSTED`

**Expected frontend result:**

```text
Something went wrong
[ Retry ]
```

### Test 5 – Retry

The Retry button was tested after an error.

**Expected flow:**

```text
Error State
     ↓
Retry
     ↓
Loading / Typing
     ↓
Response or Error
```

### Test 6 – Production Build

The project was verified using:

```bash
npm run build
```

The build completed successfully:

```text
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

---

## Build Verification

Final production build:

- Next.js 16.3.1
- Turbopack

Routes generated:

```text
Route (app)

┌ ○ /
├ ○ /_not-found
└ ƒ /api/chat
```

The successful build confirms that the application compiles correctly with TypeScript and Next.js.

---

## Local Development

The application can be started using:

```bash
npm install
npm run dev
```

The development server runs at:

http://localhost:3000


The application requires the Gemini API key in the environment configuration:

```env
GOOGLE_GENERATIVE_AI_API_KEY
```

The API key is not hard-coded into the source code.

---

## Screenshot Evidence

The screenshots document the major FE-08 states and testing scenarios.

| Screenshot | File | Description |
|---|---|---|
| Empty State | `FE-08_01_Empty-State.png` | Shows the initial application state before a conversation begins. |
| Normal AI Response | `FE-08_02_AI-Response.png` | Shows a successful AI conversation. |
| Error State | `FE-08_03_Error-State.png` | Shows the user-facing error message and Retry button. |
| API Error Log | `FE-08_04_API-Error-Log.png` | Shows the terminal output containing the real `429 / RESOURCE_EXHAUSTED` Gemini API error. |
| Retry State | `FE-08_05_Retry-State.png` | Shows the application processing a retry request. |

---

## AI-Assisted Development

AI tools were used during development as assistants for:

- Assignment understanding
- Implementation planning
- Error-state design
- Retry-flow planning
- Debugging
- Edge-case identification
- Accessibility review
- Testing ideas
- Code review
- Documentation

The final implementation was manually reviewed, tested, modified, and verified.

Detailed information is documented in:

- `AI_ASSISTANCE.md`
- `AI_PROMPTS.md`
- `MANUAL_IMPROVEMENTS.md`

---

## Manual Verification

The final application was manually verified for:

- Empty state
- Normal AI response
- Loading state
- Error state
- Retry button
- Retry behaviour
- Responsive error layout
- Accessibility alert behaviour
- Server-side error logging
- Real API failure
- Tool integration
- Local development
- Production build

---

## Final Flow

The completed FE-08 application demonstrates:

```text
User Request
      ↓
AI Processing
      ↓
   ┌──┴──┐
   ↓     ↓
Success Failure
   ↓     ↓
AI      Error
Response State
          ↓
        Retry
          ↓
     AI Processing
          ↓
      AI Response
```

---

## Learning Outcomes

Through FE-08, the implementation demonstrates an understanding of:

- Designing meaningful empty states.
- Providing feedback during asynchronous operations.
- Handling API and AI failures.
- Separating technical errors from user-facing messages.
- Implementing retry interactions.
- Handling edge cases in AI-powered interfaces.
- Using accessible error notifications.
- Logging server-side failures.
- Testing real API failure scenarios.
- Building resilient AI user experiences.

---

## Conclusion

FE-08 extends the AI chat application with a complete set of user-facing states for normal, loading, empty, and failure scenarios.

The final implementation provides a clear recovery path when an AI request fails:

```text
Request
   ↓
Processing
   ↓
Failure
   ↓
Clear Error Message
   ↓
Retry
   ↓
Processing
   ↓
Response
```

The project was manually tested, documented, and verified with a successful production build.