# vercel-ai-sdk

Minimal starter for experimenting with the Vercel AI SDK.

## Prerequisites

- **Node.js**: v22.15.0 or later (see [Node Version](#node-version) below)
- **pnpm**: v10.26.0 or later

## Node Version

This project is pinned to **Node v22.15.0** using:

- **`.nvmrc`** for nvm users: run `nvm use` before development
- **`volta` field in `package.json`**: [Volta](https://docs.volta.sh/) automatically pins Node and pnpm versions for your team

If you use **Volta**, simply run `volta install` once, then Volta handles version switching transparently.

## Quick Start

1. Install dependencies:

```bash
cd /Users/sushmeet/Documents/workspace/training/vercel-ai-sdk
pnpm install
```

2. Create a `.env` file in the project root and add your Google API key:

```text
GOOGLE_API_KEY=your_google_api_key_here
```

Get your key from [Google AI Studio](https://aistudio.google.com/app/apikey).

3. Run the TypeScript example:

```bash
pnpm dev
# or: pnpm tsx index.ts
```

This logs the Node version and confirms the `streamText` export is available; it doesn't make an API call.

## Notes

- `index.ts` is a TypeScript example with `zod` and other imports (ready for extending).
- See https://ai-sdk.dev/ for full docs, streaming, tools, and providers.

## Development

- **TypeScript compilation**: handled by `tsx` at runtime (no build step needed).
- **Type checking**: ensure your IDE or editor is using TypeScript 5.9+ for proper support.
