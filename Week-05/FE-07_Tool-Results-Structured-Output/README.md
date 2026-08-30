# FE-07 · Tool Results & Structured Output

A server-side AI tool integration built with **Next.js, TypeScript, AI SDK, Zod, and Google Gemini**.

This project demonstrates how an AI application can call structured tools on the server, execute them, return structured data, and present the results through the AI chat interface.

---

## ✦ Project Overview

FE-07 extends the streaming AI chat experience from FE-06 by introducing **server-side tool calling and structured tool results**.

The application provides two tools:

1. **analyzeContent** — analyzes a learning topic and returns a structured assessment.
2. **analyzeWebsite** — analyzes a public website and returns basic metadata.

The main focus of this assignment is demonstrating the complete flow:

**User Request → AI Tool Selection → Server-side Execution → Structured Result → UI Rendering**

---

## ✦ Features

- Real-time AI chat powered by Google Gemini
- Server-side AI tool execution
- Zod-based tool input validation
- Structured tool results
- `analyzeContent` learning-topic analysis tool
- `analyzeWebsite` website analysis tool
- Structured assessment responses
- Website metadata analysis
- Multi-turn conversations
- Streaming AI responses
- Stop-generation control
- Responsive dark UI
- TypeScript implementation

---

## ✦ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and server-side API routes |
| React | User interface |
| TypeScript | Type-safe development |
| AI SDK | Gemini integration and tool calling |
| Google Gemini | AI model |
| Zod | Tool input schema validation |
| CSS | Custom responsive UI |
| npm | Package management |

---

## ✦ How Tool Calling Works

The application uses a server-side API route at:

`/api/chat`

The incoming conversation is converted into model messages and passed to the AI model.

The model has access to the registered tools:

```ts
tools: {
  analyzeContent: analyzeContentTool,
  analyzeWebsite: analyzeWebsiteTool,
}
```

The AI can decide when a tool is required based on the user's request.

The selected tool executes on the server and returns structured data.

The result is then returned through the AI SDK stream and presented in the conversation.

---

## ✦ Tool 1: analyzeContent

### Purpose

Analyzes a learning topic and returns a structured learning assessment.

### Input

```ts
{
  topic: string
}
```

### Validation

The input is validated using Zod:

```ts
inputSchema: z.object({
  topic: z
    .string()
    .describe("The topic that should be analyzed by the tool."),
})
```

An empty topic is rejected during execution.

### Structured Output

```ts
{
  topic: string,
  score: number,
  category: string,
  difficulty: string,
  keyPoints: string[],
  recommendation: string
}
```

### Example

For the topic `Python`, the tool returns:

```json
{
  "topic": "Python",
  "score": 85,
  "category": "Learning Topic",
  "difficulty": "Intermediate",
  "keyPoints": [
    "Core concepts",
    "Practical applications",
    "Important terminology"
  ],
  "recommendation": "This topic is suitable for structured learning with examples and practice."
}
```

The result is presented as a structured assessment response.

---

## ✦ Tool 2: analyzeWebsite

### Purpose

Analyzes a public website and returns basic metadata.

### Input

```ts
{
  url: string
}
```

### Validation

The URL is validated using Zod's URL validator:

```ts
inputSchema: z.object({
  url: z
    .string()
    .url()
    .describe("The complete public website URL to analyze."),
})
```

### Structured Output

```ts
{
  success: boolean,
  url: string,
  title: string,
  description: string,
  status: number,
  wordCount: number
}
```

### Example

For `https://example.com`, the tool can return:

- URL
- HTTP status
- Page title
- Description
- Word count

The website is fetched on the server and basic metadata is extracted from the returned HTML.

---

## ✦ Tool Contract

### analyzeContent

| Property | Value |
|---|---|
| Tool name | `analyzeContent` |
| Input | `topic: string` |
| Validation | Zod string schema |
| Execution | Server-side |
| Output | Structured learning assessment |

### analyzeWebsite

| Property | Value |
|---|---|
| Tool name | `analyzeWebsite` |
| Input | `url: string` |
| Validation | Zod URL schema |
| Execution | Server-side |
| Output | Structured website metadata |

---

## ✦ Structured Result

Tool results are handled as structured data rather than relying only on free-form AI text.

The `analyzeContent` result contains:

- Topic
- Score
- Category
- Difficulty
- Key Points
- Recommendation

The `analyzeWebsite` result contains:

- URL
- Status
- Title
- Description
- Word Count

This demonstrates how tool outputs can provide predictable data for frontend applications.

---

## ✦ Multi-Turn Tool Usage

The application supports multi-turn conversations.

Example workflow:

```text
User
  ↓
Ask AI to analyze a topic
  ↓
Gemini selects analyzeContent
  ↓
Server executes the tool
  ↓
Structured result is returned
  ↓
AI presents the result
  ↓
User continues the conversation
```

Website analysis follows a similar flow using `analyzeWebsite`.

The API route uses:

```ts
stopWhen: stepCountIs(3)
```

to allow multi-step model/tool execution.

---

## ✦ Streaming

The application continues to use the streaming architecture introduced in FE-06.

The API route uses:

```ts
streamText()
```

and returns:

```ts
result.toUIMessageStreamResponse()
```

The frontend consumes the response through:

```ts
useChat()
```

This allows AI responses to be displayed progressively instead of waiting for the entire response to complete.

---

## ✦ AI Assistance

AI tools were used as development assistants throughout the project.

AI assistance was used for:

- Planning the tool-calling architecture
- Understanding AI SDK tool integration
- Designing Zod input schemas
- Implementing server-side tool execution
- Debugging Next.js and TypeScript issues
- Reviewing API route logic
- Improving UI and responsive styling
- Understanding multi-step tool execution
- Suggesting testing approaches
- Identifying potential edge cases

All AI-generated suggestions were reviewed, tested, and adapted before being included in the final implementation.

Detailed AI assistance is documented in: `AI_ASSISTANCE.md`

---

## ✦ AI Prompts

Structured prompts were used during different stages of development.

Prompt categories included:

- Project planning
- AI SDK tool integration
- `analyzeContent` tool implementation
- `analyzeWebsite` tool implementation
- Zod schema validation
- Tool registration
- Multi-step tool execution
- Debugging
- UI refinement
- Testing tool-calling behavior
- Final code review

The complete prompts used during development are documented in: `AI_PROMPTS.md`

---

## ✦ Manual Improvements

The AI-generated suggestions and implementations were manually reviewed and refined.

Manual improvements included:

- Connected `analyzeContent` to the API route
- Connected `analyzeWebsite` to the API route
- Added Zod-based input validation
- Added multi-step execution using `stepCountIs`
- Tested content analysis with multiple topics
- Tested website analysis with multiple public URLs
- Added responsive dark-themed UI styling
- Improved message presentation
- Added streaming/loading feedback
- Added stop-generation functionality
- Verified environment variable configuration
- Verified API requests and tool execution
- Ran a successful production build using `npm run build`
- Manually tested the complete user → AI → tool → result flow

Detailed manual changes are documented in: `MANUAL_IMPROVEMENTS.md`

---

## ✦ Project Structure

```text
FE-07_Tool-Results-Structured-Output/
│
├── README.md
├── AI_ASSISTANCE.md
├── AI_PROMPTS.md
├── MANUAL_IMPROVEMENTS.md
│
├── screenshots/
│   ├── Basic-UI-Page.png
│   ├── 01-Content-Tool-React.png
│   ├── 02-Content-Tool-Python.png
│   ├── 03-Website-Tool-Example.png
│   ├── 04-Website-Tool-Google.png
│   ├── 05-Multi-Tool-Conversation-1.png
│   └── 06-Multi-Tool-Conversation-2.png
│
└── app/
    ├── app/
    │   ├── api/
    │   │   └── chat/
    │   │       └── route.ts
    │   │
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── lib/
    │   ├── model.ts
    │   └── tools/
    │       └── analyze-content.ts
    │
    ├── .env.example
    ├── .gitignore
    ├── next-env.d.ts
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json
```

---

## ✦ Screenshots

| Screenshot | File |
|---|---|
| Basic UI Page | `Basic-UI-Page.png` |
| Analyze Content Tool – React | `01-Content-Tool-React.png` |
| Analyze Content Tool – Python | `02-Content-Tool-Python.png` |
| Analyze Website Tool – Example | `03-Website-Tool-Example.png` |
| Analyze Website Tool – Google | `04-Website-Tool-Google.png` |
| Multi-Turn Tool Conversation – 1 | `05-Multi-Tool-Conversation-1.png` |
| Multi-Turn Tool Conversation – 2 | `06-Multi-Tool-Conversation-2.png` |

---

## ✦ Setup

### 1. Navigate to the app

```bash
cd Week-05/FE-07_Tool-Results-Structured-Output/app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env.local`:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

Open: