import "dotenv/config";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const model = google("gemini-2.0-flash-lite");

const prompt = "What is the capital of Italy";

const result = await generateText({
  model,
  prompt,
});

console.log(result.text);

/*
Example usage (uncomment and set GOOGLE_API_KEY in .env to run):

import { ModelMessage } from 'ai';

const messages: ModelMessage[] = [];

async function runExample() {
  messages.push({ role: 'user', content: 'Invent a new holiday and describe its traditions.' });
  const result = streamText({ model: google('gemini-2.0-flash'), messages });

  for await (const delta of result.textStream) {
    process.stdout.write(delta);
  }
  process.stdout.write('\n');
}

// runExample().catch(console.error);
*/
