type ToolResult = {
  topic?: unknown;
  score?: unknown;
  category?: unknown;
  difficulty?: unknown;
  keyPoints?: unknown[];
  recommendation?: unknown;
};

type ChatPart = {
  type: string;
  text?: string;
  output?: unknown;
};

type ChatMessageProps = {
  message: {
    id: string;
    role: "user" | "assistant" | "system";
    parts: ChatPart[];
  };
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  const text = message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("");

  const toolPart = message.parts.find(
    (part) => part.type === "tool-analyzeContent"
  );

  const toolResult =
    toolPart && "output" in toolPart
      ? toolPart.output
      : null;

  const hasToolResult =
    toolResult &&
    typeof toolResult === "object" &&
    "topic" in toolResult;

  return (
    <div
      data-testid="chat-message"
      className={`message ${isUser ? "user" : ""}`}
    >
      <div
        className={`message-avatar ${
          isUser ? "user-avatar" : "ai-avatar"
        }`}
      >
        {isUser ? "KC" : "âœ¦"}
      </div>

      <div className="message-content">
        <div className="message-role">
          {isUser ? "You" : "Gemini AI"}
        </div>

        {text && (
          <div className="message-text">
            {text}
          </div>
        )}

        {hasToolResult && (
          <div className="tool-result-card">
            <div className="tool-result-header">
              <div>
                <div className="tool-result-label">
                  âœ¦ TOOL RESULT
                </div>

                <h3>Structured Assessment</h3>
              </div>

              <div className="tool-result-score">
                {"score" in toolResult
                  ? String((toolResult as ToolResult).score)
                  : "â€”"}
              </div>
            </div>

            <div className="tool-result-topic">
              <span>Topic</span>

              <strong>
                {"topic" in toolResult
                  ? String((toolResult as ToolResult).topic)
                  : "â€”"}
              </strong>
            </div>

            <div className="tool-result-grid">
              <div className="tool-result-item">
                <span>Category</span>

                <strong>
                  {"category" in toolResult
                    ? String((toolResult as ToolResult).category)
                    : "â€”"}
                </strong>
              </div>

              <div className="tool-result-item">
                <span>Difficulty</span>

                <strong>
                  {"difficulty" in toolResult
                    ? String((toolResult as ToolResult).difficulty)
                    : "â€”"}
                </strong>
              </div>
            </div>

            <div className="tool-result-section">
              <span>Key Points</span>

              <ul>
                {"keyPoints" in toolResult &&
                Array.isArray((toolResult as ToolResult).keyPoints)
                  ? (toolResult as ToolResult).keyPoints.map(
                      (point: unknown, index: number) => (
                        <li key={index}>
                          {String(point)}
                        </li>
                      )
                    )
                  : null}
              </ul>
            </div>

            <div className="tool-result-recommendation">
              <span>Recommendation</span>

              <p>
                {"recommendation" in toolResult
                  ? String(
                      (toolResult as ToolResult).recommendation
                    )
                  : "â€”"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}