import "dotenv/config";
import { streamText } from "ai";
import { google } from "@ai-sdk/google";

const model = google("gemini-2.0-flash-lite");
const prompt = "Write a good story about a rabbit and a tortoise in 50 words";

const result = streamText({ model, prompt });

for await (const text of result.textStream) {
  console.log(text);
}
