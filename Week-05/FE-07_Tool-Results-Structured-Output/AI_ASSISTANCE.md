# AI Assistance – FE-07 · Tool Results & Structured Output

## Overview

AI tools were used as development assistants during the implementation of FE-07.

The AI was mainly used for planning, understanding the AI SDK tool-calling workflow, generating implementation suggestions, debugging issues, and reviewing the structure of the application.

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

- Break the assignment requirements into smaller implementation steps.
- Plan the server-side tool architecture.
- Identify the required tool inputs and outputs.
- Plan how the tools should connect with the AI SDK `streamText()` workflow.
- Plan the frontend and API structure.

---

### 2. Tool Definition

AI was used to understand and implement the structure of server-side tools using the AI SDK.

The main concepts included:

- Tool descriptions
- Input schemas
- Tool execution functions
- Structured return values
- Server-side execution

The final implementation contains:

```ts
tools: {
  analyzeContent: analyzeContentTool,
  analyzeWebsite: analyzeWebsiteTool,
}
```

---

### 3. Zod Schema Validation

AI assistance helped explain how Zod can be used to validate tool inputs.

For example, the content analysis tool uses:

```ts
inputSchema: z.object({
  topic: z
    .string()
    .describe("The topic that should be analyzed by the tool."),
})
```

The website analysis tool validates URLs using:

```ts
inputSchema: z.object({
  url: z
    .string()
    .url()
    .describe("The complete public website URL to analyze."),
})
```

The schemas were reviewed and tested as part of the final implementation.

---

### 4. Multi-Step Tool Execution

AI assistance was used to understand why multiple execution steps may be required when an AI model calls a tool and then needs to use the tool result to produce a final response.

The implementation uses:

```ts
stopWhen: stepCountIs(3),
```

This allows the model to continue the workflow after a tool call instead of stopping immediately after tool execution.

---

### 5. Website Analysis Tool

AI assistance was used while designing the `analyzeWebsite` tool.

The tool:

- Fetches a public website.
- Checks the HTTP response.
- Extracts the page title.
- Attempts to extract the meta description.
- Removes scripts and styles.
- Extracts visible text.
- Calculates an approximate word count.
- Returns structured metadata.

The implementation was manually reviewed and tested with public websites.

---

### 6. Debugging

AI assistance was used during development to help understand and resolve issues related to:

- AI SDK configuration
- Tool registration
- TypeScript errors
- Next.js API routes
- Dependency configuration
- Build errors
- Streaming responses
- Tool execution flow

After applying suggested fixes, the application was tested locally.

---

### 7. Frontend Integration

AI assistance was also used to review the React/Next.js chat interface and its integration with the API route.

The frontend uses:

```ts
useChat()
```

with:

```ts
new DefaultChatTransport({
  api: "/api/chat",
})
```

This allows the frontend to communicate with the server-side AI route and receive streamed responses.

---

### 8. Testing Prompts

AI assistance helped create prompts for verifying tool execution.

Examples included:

- `Use the analyzeContent tool. Do not answer from your own knowledge. Analyze the topic "React" and return the complete structured result exactly as provided by the tool.`
- `Use the analyzeContent tool. Do not answer from your own knowledge. Analyze the topic "Python" and return the complete structured result exactly as provided by the tool.`
- `Analyze this website using your website analysis tool: https://example.com`
- `Analyze this website using your website analysis tool: https://www.google.com/`

These prompts were used to verify that the AI could select the appropriate tool and return the expected structured information.

---

## Human Verification

AI-generated suggestions were not accepted without verification.

The final implementation was manually checked by:

- Reviewing the generated code.
- Confirming that both tools were registered in the API route.
- Checking Zod input schemas.
- Testing tool calls through the chat interface.
- Testing multiple topics.
- Testing multiple websites.
- Running the production build.
- Checking the Next.js API route.
- Confirming that the Gemini API key was available through environment variables.
- Reviewing the final UI and tool responses.

---

## Build Verification

The final project was verified using:

```bash
npm run build
```

The production build completed successfully with:

✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization


The application was also tested locally using:

```bash
npm run dev
```

---

## Human Decisions and Manual Changes

The final implementation was not treated as a direct copy of AI-generated output.

Manual decisions included:

- Choosing the final tool structure.
- Connecting `analyzeContentTool` to the API route.
- Registering both tools inside `streamText()`.
- Adding `stepCountIs(3)` for multi-step tool execution.
- Designing the website metadata extraction logic.
- Handling website fetch errors.
- Designing the final chat UI.
- Testing tool behavior with real prompts.
- Verifying the production build.
- Updating project documentation.
- Selecting and capturing screenshots for evidence.

---

## AI Assistance Summary

AI was used as a development assistant rather than as a replacement for implementation and verification.

The overall workflow was:

```text
Assignment Requirements
        ↓
AI-Assisted Planning
        ↓
Implementation
        ↓
AI-Assisted Debugging
        ↓
Manual Code Review
        ↓
Local Testing
        ↓
Build Verification
        ↓
Final Documentation
```

The developer remained responsible for reviewing, testing, modifying, and validating the final implementation.