import { google } from "@ai-sdk/google";
import { streamText } from "ai";

// Basic runtime checks — doesn't call the API.
// Note: tsx automatically loads .env files, so no explicit dotenv import needed.
console.log("Node:", process.version);
console.log("Google provider available:", typeof google);
console.log("AI SDK `streamText` is", typeof streamText);

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
