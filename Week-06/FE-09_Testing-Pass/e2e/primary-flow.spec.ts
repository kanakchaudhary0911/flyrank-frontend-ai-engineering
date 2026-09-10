import { test, expect } from "@playwright/test";

test("primary chat flow works with mocked AI response", async ({ page }) => {
  // Mock the AI API so the test never calls the real Gemini API.
  await page.route("**/api/chat", async (route) => {
    await route.fulfill({
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Vercel-AI-Data-Stream": "v1",
      },
      body:
        'data: {"type":"text-start","id":"mock-text"}\n\n' +
        'data: {"type":"text-delta","id":"mock-text","delta":"Hello! This is a mocked AI response."}\n\n' +
        'data: {"type":"text-end","id":"mock-text"}\n\n' +
        'data: {"type":"finish","finishReason":"stop"}\n\n',
    });
  });

  await page.goto("/");

  // Verify the initial empty state.
  await expect(
    page.getByRole("heading", { name: "AI Conversation" })
  ).toBeVisible();

  await expect(
    page.getByText("Start a conversation")
  ).toBeVisible();

  // Enter a message.
  const input = page.getByPlaceholder("Message Gemini AI...");
  await input.fill("Hello AI");

  // Send the message.
  await page.getByRole("button", { name: "Send message" }).click();

  // Verify the user's message appears.
  await expect(page.getByText("Hello AI")).toBeVisible();

  // Verify the mocked AI response appears.
  await expect(
    page.getByText("Hello! This is a mocked AI response.")
  ).toBeVisible();
});