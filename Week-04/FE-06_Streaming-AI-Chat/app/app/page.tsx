"use client";

import { useState } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";

export default function Home() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop } = useChat({
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
                FE-06 · Streaming AI Chat
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
              REAL-TIME AI
            </div>

            <h1>AI Conversation</h1>

            <p>
              Ask anything and watch the response stream in real time.
              Powered by Gemini and the AI SDK.
            </p>

            <div className="empty-state" style={{ marginTop: "38px" }}>
              <div className="empty-icon">✦</div>

              <h2>Start a conversation</h2>

              <p>
                Send a message below to begin chatting with the AI.
              </p>
            </div>
          </div>
        ) : (
          <div className="conversation">
            <div className="message-list">
              {messages.map((message) => {
                const text = message.parts
                  .filter((part) => part.type === "text")
                  .map((part) => part.text)
                  .join("");

                if (!text) return null;

                const isUser = message.role === "user";

                return (
                  <div
                    key={message.id}
                    className={`message ${isUser ? "user" : ""}`}
                  >
                    <div
                      className={`message-avatar ${
                        isUser ? "user-avatar" : "ai-avatar"
                      }`}
                    >
                      {isUser ? "KC" : "✦"}
                    </div>

                    <div className="message-content">
                      <div className="message-role">
                        {isUser ? "You" : "Gemini AI"}
                      </div>

                      <div className="message-text">
                        {text}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isStreaming &&
                messages[messages.length - 1]?.role === "user" && (
                  <div className="message">
                    <div className="message-avatar ai-avatar">
                      ✦
                    </div>

                    <div className="message-content">
                      <div className="message-role">Gemini AI</div>

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

      <div className="input-area">
        <form className="input-box" onSubmit={handleSubmit}>
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