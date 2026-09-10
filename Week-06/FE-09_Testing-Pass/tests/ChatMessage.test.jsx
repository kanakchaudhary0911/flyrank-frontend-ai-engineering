import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatMessage from "../../../Week-05/FE-08_Error-States-Empty-States-Edge-Cases/app/components/ChatMessage";

describe("ChatMessage", () => {
  it("renders a user text message", () => {
    render(
      <ChatMessage
        message={{
          id: "user-1",
          role: "user",
          parts: [{ type: "text", text: "Hello AI" }],
        }}
      />
    );

    expect(screen.getByText("You")).toBeInTheDocument();
    expect(screen.getByText("Hello AI")).toBeInTheDocument();
    expect(screen.getByText("KC")).toBeInTheDocument();
  });

  it("renders an assistant text message", () => {
    render(
      <ChatMessage
        message={{
          id: "assistant-1",
          role: "assistant",
          parts: [{ type: "text", text: "Hello! How can I help?" }],
        }}
      />
    );

    expect(screen.getByText("Gemini AI")).toBeInTheDocument();
    expect(
      screen.getByText("Hello! How can I help?")
    ).toBeInTheDocument();
  });

  it("combines multiple text parts into one message", () => {
    render(
      <ChatMessage
        message={{
          id: "assistant-2",
          role: "assistant",
          parts: [
            { type: "text", text: "Hello " },
            { type: "text", text: "from " },
            { type: "text", text: "Gemini" },
          ],
        }}
      />
    );

    expect(screen.getByText("Hello from Gemini")).toBeInTheDocument();
  });

  it("renders a structured analyzeContent tool result", () => {
    render(
      <ChatMessage
        message={{
          id: "tool-1",
          role: "assistant",
          parts: [
            {
              type: "tool-analyzeContent",
              output: {
                topic: "React Testing",
                score: 85,
                category: "Learning Topic",
                difficulty: "Intermediate",
                keyPoints: [
                  "Core concepts",
                  "Practical applications",
                ],
                recommendation:
                  "Practice with component tests.",
              },
            },
          ],
        }}
      />
    );

    expect(screen.getByText("Structured Assessment")).toBeInTheDocument();
    expect(screen.getByText("React Testing")).toBeInTheDocument();
    expect(screen.getByText("85")).toBeInTheDocument();
    expect(screen.getByText("Learning Topic")).toBeInTheDocument();
    expect(screen.getByText("Intermediate")).toBeInTheDocument();
    expect(screen.getByText("Core concepts")).toBeInTheDocument();
    expect(
      screen.getByText("Practical applications")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Practice with component tests.")
    ).toBeInTheDocument();
  });

  it("renders tool result with no key points safely", () => {
    render(
      <ChatMessage
        message={{
          id: "tool-2",
          role: "assistant",
          parts: [
            {
              type: "tool-analyzeContent",
              output: {
                topic: "TypeScript",
                score: 90,
                category: "Programming",
                difficulty: "Intermediate",
                recommendation: "Keep practicing.",
              },
            },
          ],
        }}
      />
    );

    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("90")).toBeInTheDocument();
    expect(screen.getByText("Keep practicing.")).toBeInTheDocument();
  });

  it("does not render a tool card when there is no tool output", () => {
    render(
      <ChatMessage
        message={{
          id: "tool-3",
          role: "assistant",
          parts: [{ type: "tool-analyzeContent" }],
        }}
      />
    );

    expect(
      screen.queryByText("Structured Assessment")
    ).not.toBeInTheDocument();
  });

  it("renders a message containing both text and a tool result", () => {
    render(
      <ChatMessage
        message={{
          id: "mixed-1",
          role: "assistant",
          parts: [
            {
              type: "text",
              text: "Here is the analysis:",
            },
            {
              type: "tool-analyzeContent",
              output: {
                topic: "Vitest",
                score: 95,
                category: "Testing",
                difficulty: "Beginner",
                keyPoints: ["Fast feedback"],
                recommendation: "Run tests before pushing.",
              },
            },
          ],
        }}
      />
    );

    expect(
      screen.getByText("Here is the analysis:")
    ).toBeInTheDocument();

    expect(screen.getByText("Vitest")).toBeInTheDocument();
    expect(screen.getByText("95")).toBeInTheDocument();
    expect(screen.getByText("Fast feedback")).toBeInTheDocument();
    expect(
      screen.getByText("Run tests before pushing.")
    ).toBeInTheDocument();
  });
});