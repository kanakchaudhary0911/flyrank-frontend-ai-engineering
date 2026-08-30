# AI Prompts – FE-07 · Tool Results & Structured Output

## Overview

This document records the main prompts used during the development, debugging, testing, and verification of FE-07.

AI was used as a development assistant for planning, implementation guidance, debugging, code review, and test-case generation.

---

## 1. Assignment Understanding

**Prompt**

```text
Explain the FE-07 assignment requirements for Tool Results & Structured Output.
Break the requirements into implementation steps for a Next.js + TypeScript + AI SDK application.
Focus on server-side tools, Zod schemas, structured results, tool execution, and UI rendering.
```

**Purpose**

To understand the assignment requirements and create an implementation plan before coding.

---

## 2. Tool Architecture Planning

**Prompt**

```text
I need to build a server-side AI tool for a Next.js application using the AI SDK.
Explain how to define a tool with an input schema, execute function, and structured return value.
Show the recommended architecture without using a component library.
```

**Purpose**

To understand the structure of an AI SDK server-side tool.

---

## 3. analyzeContent Tool

**Prompt**

```text
Help me create a server-side analyzeContent tool using the AI SDK and Zod.

The tool should accept:
{
  topic: string
}

It should return structured data containing:
- topic
- score
- category
- difficulty
- keyPoints
- recommendation

Keep the implementation simple and suitable for an FE-07 learning demonstration.
```

**Purpose**

To design the content analysis tool and its structured output contract.

---

## 4. analyzeWebsite Tool

**Prompt**

```text
Help me implement a server-side website analysis tool for a Next.js API route.

The tool should:
- Accept a public website URL
- Validate the URL using Zod
- Fetch the website
- Extract the page title
- Extract the meta description when available
- Calculate an approximate word count
- Return the HTTP status
- Return the result as structured data
- Handle fetch and parsing errors safely
```

**Purpose**

To plan and implement the website analysis tool.

---

## 5. Connecting Tools to the AI Route

**Prompt**

```text
Review this Next.js AI SDK route and explain how to register multiple server-side tools with streamText().
I need both analyzeContent and analyzeWebsite to be available to the model.
Also explain how the model can decide which tool to call based on the user's request.
```

**Purpose**

To understand how the tools are connected to the `/api/chat` route.

---

## 6. Multi-Step Tool Execution

**Prompt**

```text
Explain why stepCountIs() may be required when using tools with streamText().
Show how to allow the model to call a tool and then continue processing the tool result before producing the final response.
```

**Purpose**

To understand and implement multi-step tool execution.

---

## 7. Frontend Integration

**Prompt**

```text
Review a React/Next.js chat interface using useChat() and DefaultChatTransport.
Explain how it should communicate with /api/chat and display streamed AI responses.
Also identify anything that could interfere with tool-based responses.
```

**Purpose**

To verify the frontend-to-API integration.

---

## 8. Debugging

**Prompt**

```text
I am getting an issue in my Next.js AI SDK tool-calling application.
Review the provided error/code and identify the likely cause.
Suggest the smallest safe change needed to fix it.
Do not rewrite unrelated parts of the application.
```

**Purpose**

To get targeted debugging assistance while keeping the existing implementation intact.

---

## 9. Tool Execution Test – React

**Prompt**

```text
Use the analyzeContent tool. Do not answer from your own knowledge.
Analyze the topic "React" and return the complete structured result exactly as provided by the tool.
```

**Expected Verification**

The response should contain the structured tool result:

- Topic: React
- Score: 85
- Category: Learning Topic
- Difficulty: Intermediate
- Key Points
- Recommendation

**Purpose**

To verify that `analyzeContent` is actually being called and its structured result is returned.

---

## 10. Tool Execution Test – Python

**Prompt**

```text
Use the analyzeContent tool. Do not answer from your own knowledge.
Analyze the topic "Python" and return the complete structured result exactly as provided by the tool.
```

**Expected Verification**

The tool should return a structured result for Python using the same defined output structure.

**Purpose**

To confirm that the content analysis tool works with different inputs.

---

## 11. Website Tool Test – Example

**Prompt**

```text
Analyze this website using your website analysis tool:
https://example.com
```

**Expected Verification**

The response should contain:

- URL
- HTTP status
- Page title
- Description
- Word count

**Purpose**

To verify that `analyzeWebsite` executes successfully against a public website.

---

## 12. Website Tool Test – Google

**Prompt**

```text
Analyze this website using your website analysis tool:
https://www.google.com/
```

**Expected Verification**

The response should contain the website URL, HTTP status, title, description information, and word count when available.

**Purpose**

To test the website tool with another public website.

---

## 13. Multi-Turn Tool Testing

**Prompt**

```text
Analyze the topic React using the analyzeContent tool.

Follow-up:
Now analyze Python using the same tool and compare the structured results.
```

**Purpose**

To verify that the chat can continue across multiple turns while using the available tool.

---

## 14. Code Review

**Prompt**

```text
Review my FE-07 implementation against these requirements:

- Server-side AI tool
- Zod input schema
- Tool execute function
- Structured tool result
- Tool registered in streamText()
- Multi-step tool execution
- Website analysis tool
- Error handling
- Streaming response
- Frontend chat integration

Identify missing requirements or unnecessary implementation changes.
```

**Purpose**

To perform an AI-assisted requirements review before finalizing the project.

---

## 15. Final Verification

**Prompt**

```text
Review the final FE-07 implementation and create a verification checklist covering:
1. Tool registration
2. Zod validation
3. Server-side execution
4. Structured output
5. Multi-step execution
6. Frontend integration
7. Streaming
8. Error handling
9. Build verification
10. Documentation

Keep the checklist focused on the assignment requirements.
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

The prompts above were used across the FE-07 development lifecycle, including:

- Assignment understanding
- Tool architecture
- Tool implementation
- Zod validation
- AI SDK integration
- Debugging
- Tool execution testing
- Multi-turn testing
- Code review
- Final verification