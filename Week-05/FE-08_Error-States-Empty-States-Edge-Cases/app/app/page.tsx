"use client";

import { useState } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import ChatMessage from "../components/ChatMessage";

export default function Home() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop, error, regenerate } = useChat({
  transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isStreaming = status === "streaming" || status === "submitted";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = input.trim();

    if (!text || isStreaming) return;

    sendMessage({ text });
    setInput("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const text = input.trim();

      if (!text || isStreaming) return;

      sendMessage({ text });
      setInput("");
    }
  };

  return (
    <main className="chat-shell">
      <header className="chat-header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">✦</div>

            <div>
              <div className="brand-title">
                FE-08 · Error States & Edge Cases
              </div>

              <div className="brand-subtitle">
                Frontend AI Engineering
              </div>
            </div>
          </div>

          <div className="status">
            <span className="status-dot" />
            Gemini AI · Online
          </div>
        </div>
      </header>

      <section className="chat-main">
        {messages.length === 0 ? (
          <div className="hero">
            <div className="hero-badge">
              <span>✦</span>
              TOOL-POWERED AI
            </div>

            <h1>AI Conversation</h1>

            <p>
              Analyze topics using structured AI tools and view
              the results in a clear format.
            </p>

            <div
              className="empty-state"
              style={{ marginTop: "38px" }}
            >
              <div className="empty-icon">✦</div>

              <h2>Start a conversation</h2>

              <p>
                Ask the AI to analyze a topic using the
                analyzeContent tool.
              </p>
            </div>
          </div>
        ) : (
          <div className="conversation">
            <div className="message-list">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message as any}
                />
              ))}

              {isStreaming &&
                messages[messages.length - 1]?.role ===
                  "user" && (
                  <div className="message">
                    <div className="message-avatar ai-avatar">
                      ✦
                    </div>

                    <div className="message-content">
                      <div className="message-role">
                        Gemini AI
                      </div>

                      <div className="message-text typing">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        )}
      </section>

      {error && (<div className="error-state" role="alert">
        <div className="error-icon">!</div>

        <div className="error-content">
          <strong>Something went wrong</strong>
        <p>
          The AI response could not be completed. Please try the failed message again.
        </p>
        </div>

        <button type="button" className="retry-button" onClick={() => regenerate()}>
          Retry
        </button>
        </div>
      )}

      <div className="input-area">
        <form
          className="input-box"
          onSubmit={handleSubmit}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Gemini AI..."
            rows={1}
            disabled={isStreaming}
          />

          {isStreaming ? (
            <button
              type="button"
              className="send-button"
              onClick={stop}
              title="Stop generating"
              aria-label="Stop generating"
            >
              ■
            </button>
          ) : (
            <button
              type="submit"
              className="send-button"
              disabled={!input.trim()}
              title="Send message"
              aria-label="Send message"
            >
              ↑
            </button>
          )}
        </form>

        <div className="input-hint">
          Enter to send · Shift + Enter for a new line
        </div>
      </div>
    </main>
  );
}