import { tool } from "ai";
import { z } from "zod";

export const analyzeContentTool = tool({
  description:
    "Analyzes a topic and returns a structured learning assessment including score, category, difficulty, key points, and recommendation.",

  inputSchema: z.object({
    topic: z
      .string()
      .describe("The topic that should be analyzed by the tool."),
  }),

  execute: async ({ topic }) => {
    if (!topic.trim()) {
      throw new Error("A topic is required for analysis.");
    }

    // Demo structured analysis for FE-08
    return {
      topic: topic.trim(),
      score: 85,
      category: "Learning Topic",
      difficulty: "Intermediate",
      keyPoints: [
        "Core concepts",
        "Practical applications",
        "Important terminology",
      ],
      recommendation:
        "This topic is suitable for structured learning with examples and practice.",
    };
  },
});