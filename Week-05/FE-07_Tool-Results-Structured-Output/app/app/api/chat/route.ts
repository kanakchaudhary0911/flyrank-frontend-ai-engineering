import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  type UIMessage,
} from "ai";

import * as z from "zod";

import { MODEL, SYSTEM_PROMPT } from "../../../lib/model";
import { analyzeContentTool } from "../../../lib/tools/analyze-content";

export const maxDuration = 30;

const analyzeWebsiteTool = tool({
  description:
    "Analyze a public website and return basic metadata such as title, description, status, and word count.",

  inputSchema: z.object({
    url: z
      .string()
      .url()
      .describe("The complete public website URL to analyze."),
  }),

  execute: async ({ url }) => {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 FE-07 Website Analyzer",
        },
      });

      if (!response.ok) {
        throw new Error(`Website returned status ${response.status}`);
      }

      const html = await response.text();

      const title =
        html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ||
        "No title found";

      const description =
        html
          .match(
            /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i
          )?.[1]
          ?.trim() || "No description found";

      const text = html
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      const wordCount = text ? text.split(/\s+/).length : 0;

      return {
        success: true,
        url,
        title,
        description,
        status: response.status,
        wordCount,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Unable to analyze the website."
      );
    }
  },
});

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    console.log("➡️ Chat request received");
    console.log("➡️ Messages:", messages.length);
    console.log(
      "➡️ API key present:",
      Boolean(process.env.GOOGLE_GENERATIVE_AI_API_KEY)
    );

    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: MODEL,
      system: SYSTEM_PROMPT,
      messages: modelMessages,

      tools: {
        analyzeContent: analyzeContentTool,
        analyzeWebsite: analyzeWebsiteTool,
      },

      stopWhen: stepCountIs(3),

      onError({ error }) {
        console.error("❌ GEMINI STREAM ERROR:");
        console.error(error);
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("❌ CHAT ROUTE ERROR:");
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "AI request failed",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}