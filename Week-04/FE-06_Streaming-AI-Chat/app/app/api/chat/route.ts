import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import { MODEL, SYSTEM_PROMPT } from "../../../lib/model";

export const maxDuration = 30;

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