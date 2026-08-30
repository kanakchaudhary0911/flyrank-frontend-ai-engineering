# Manual Improvements – FE-07 · Tool Results & Structured Output

## Overview

AI assistance was used during the development of FE-07, but the final implementation was manually reviewed, tested, and refined.

The following improvements and decisions were made manually to ensure that the application matched the assignment requirements and worked correctly in the local environment.

---

## 1. Connected the Content Analysis Tool

The `analyzeContentTool` was implemented as a separate reusable tool file:

```text
lib/
└── tools/
    └── analyze-content.ts
```

The tool was manually connected to the API route using:

```ts
import { analyzeContentTool } from "../../../lib/tools/analyze-content";
```

It was then registered inside `streamText()`:

```ts
tools: {
  analyzeContent: analyzeContentTool,
  analyzeWebsite: analyzeWebsiteTool,
},
```

This ensured that the AI model could actually access and execute the content analysis tool.

---

## 2. Added Multi-Step Tool Execution

The API route was manually configured to allow multiple execution steps:

```ts
stopWhen: stepCountIs(3),
```

This was important because the workflow can require:

```text
User Request
    ↓
AI Selects Tool
    ↓
Tool Executes
    ↓
Tool Result Returned
    ↓
AI Produces Final Response
```

Without allowing additional steps, the model may stop before completing the full tool-assisted response.

---

## 3. Added Tool Input Validation

Zod schemas were reviewed and maintained for both tools.

**analyzeContent**

```ts
inputSchema: z.object({
  topic: z
    .string()
    .describe("The topic that should be analyzed by the tool."),
})
```

**analyzeWebsite**

```ts
inputSchema: z.object({
  url: z
    .string()
    .url()
    .describe("The complete public website URL to analyze."),
})
```

The URL validation prevents invalid URL input from reaching the website analysis logic.

---

## 4. Added Content Tool Error Handling

The content analysis tool checks for an empty topic before executing:

```ts
if (!topic.trim()) {
  throw new Error("A topic is required for analysis.");
}
```

This was kept as an explicit validation step so that the tool does not silently process an empty input.

---

## 5. Improved Website Analysis Handling

The website analysis tool was manually reviewed to handle common website-analysis issues.

The implementation:

- Checks the HTTP response.
- Throws an error when the website does not return a successful response.
- Extracts the page title.
- Attempts to extract the meta description.
- Removes script and style content.
- Extracts page text.
- Calculates an approximate word count.
- Returns structured metadata.

This keeps the website tool focused on the assignment requirement instead of attempting to perform unnecessary full SEO analysis.

---

## 6. Added Website Error Handling

The website tool uses a try/catch block so that fetch or parsing failures are converted into meaningful errors.

```ts
catch (error) {
  throw new Error(
    error instanceof Error
      ? error.message
      : "Unable to analyze the website."
  );
}
```

This was manually reviewed to avoid exposing unexpected error values directly.

---

## 7. Preserved Streaming Behaviour

The existing streaming architecture was retained while adding tool calling.

The API route uses:

```ts
streamText()
```

and returns:

```ts
result.toUIMessageStreamResponse();
```

The frontend continues to consume the response using:

```ts
useChat()
```

This allowed tool calling to be added without removing the real-time chat behaviour from the previous implementation.

---

## 8. Updated Frontend Branding

The frontend branding was manually updated from the previous FE-06 project to:

**FE-07 · Tool Results & Structured Output**

The interface also continues to display:

- Frontend AI Engineering
- Gemini AI · Online

This makes the submitted application clearly identifiable as the FE-07 project.

---

## 9. Refined the User Interface

The existing chat interface was manually reviewed and refined to provide:

- Responsive layout
- Dark premium appearance
- Clear user and AI message separation
- Loading/typing indicator
- Send button
- Stop-generation button
- Keyboard interaction
- Mobile responsive behaviour
- Clear project branding

The UI was kept intentionally simple so that the tool-calling functionality remains the main focus of the assignment.

---

## 10. Tested Tool Selection with Real Prompts

The tools were manually tested through the actual chat interface.

**Content Tool**

The following topics were tested:

- React
- Python

**Website Tool**

The following websites were tested:

- `https://example.com`
- `https://www.google.com/`

The responses were checked to confirm that the appropriate tool was selected and that the expected structured information was returned.

---

## 11. Verified Multi-Turn Conversations

Multiple messages were sent through the same chat session to verify that the application could continue the conversation after a tool-assisted response.

This helped verify the complete flow:

```text
User Message
    ↓
AI Tool Selection
    ↓
Server-Side Execution
    ↓
Structured Tool Result
    ↓
AI Response
    ↓
Follow-Up User Message
```

---

## 12. Verified Production Build

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

This confirmed that the final implementation compiled successfully with TypeScript and Next.js.

---

## 13. Verified Local Development

The application was also tested using:

```bash
npm run dev
```

The local application successfully started and responded to requests through:

http://localhost:3000


The API route also successfully received chat requests.

---

## 14. Verified Environment Configuration

The Gemini API key was kept in the environment configuration instead of being hard-coded into the source code.

The API route was also checked to confirm that the key was available:

```ts
Boolean(process.env.GOOGLE_GENERATIVE_AI_API_KEY)
```

This keeps the API credential separate from the application source.

---

## 15. Documentation Improvements

The project documentation was manually prepared and organized into separate files:

```text
FE-07_Tool-Results-Structured-Output/
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
- Visual evidence

---

## 16. Screenshot Evidence

Screenshots were selected to demonstrate the important FE-07 functionality.

The planned evidence includes:

- `Basic-UI-Page.png`
- `01-Content-Tool-React.png`
- `02-Content-Tool-Python.png`
- `03-Website-Tool-Example.png`
- `04-Website-Tool-Google.png`
- `05-Multi-Tool-Conversation-1.png`
- `06-Multi-Tool-Conversation-2.png`

These screenshots provide visual evidence of the UI, content analysis tool, website analysis tool, and multi-turn tool usage.

---

## AI vs Manual Work

The development process was divided between AI assistance and developer responsibility.

| Area | AI Assistance | Manual Work |
|---|---|---|
| Project planning | ✓ | ✓ |
| Tool architecture | ✓ | ✓ |
| Zod schema guidance | ✓ | ✓ |
| Tool implementation | ✓ | ✓ |
| Tool registration | Guidance | ✓ |
| Multi-step execution | Explanation | ✓ |
| Website parsing | Guidance | ✓ |
| Error handling | Suggestions | ✓ |
| UI refinement | Suggestions | ✓ |
| Tool testing | Test prompt generation | ✓ |
| Build verification | Guidance | ✓ |
| Screenshots | Suggestions | ✓ |
| Documentation | Drafting assistance | ✓ |

---

## Final Verification

Before considering FE-07 complete, the following were manually verified:

- [x] `analyzeContent` tool exists.
- [x] `analyzeContent` is registered in the API route.
- [x] `analyzeWebsite` tool exists.
- [x] Both tools use Zod input schemas.
- [x] Both tools execute on the server.
- [x] Structured results are returned.
- [x] `streamText()` is used for AI interaction.
- [x] `stepCountIs(3)` supports multi-step execution.
- [x] Frontend communicates with `/api/chat`.
- [x] Streaming responses work.
- [x] Content tool tested with React.
- [x] Content tool tested with Python.
- [x] Website tool tested with example.com.
- [x] Website tool tested with Google.
- [x] Multi-turn conversation tested.
- [x] Production build completed successfully.
- [x] Documentation completed.
- [x] Screenshot evidence prepared.

---

## Conclusion

The final FE-07 implementation combines AI-assisted development with manual engineering decisions and verification.

AI was used to accelerate planning, implementation, debugging, and review, while the final tool integration, testing, UI refinement, build verification, and documentation were manually reviewed and validated.

The completed application demonstrates a working flow from:

```text
Natural Language Request
        ↓
AI Tool Selection
        ↓
Server-Side Tool Execution
        ↓
Structured Tool Result
        ↓
AI Response
        ↓
Frontend Display
```
