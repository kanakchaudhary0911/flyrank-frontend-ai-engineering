import { google } from "@ai-sdk/google";

export const MODEL = google("gemini-3.6-flash");

export const SYSTEM_PROMPT =
  "You are a helpful AI assistant. Give clear, accurate and concise answers.";