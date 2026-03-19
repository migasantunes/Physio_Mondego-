---
name: 21st-dev
description: 21st.dev SDK conventions — agent definition, React chat UI, Next.js integration, server SDK, theming, and deploy workflow.
---
# 21st.dev SDK — Skill Reference

Comprehensive reference for building with the 21st.dev Agents SDK ecosystem. Use this when the user asks to build AI agent UIs, chat interfaces, or integrate 21st Agents into their apps.

## Overview

21st.dev provides an SDK to build, deploy, and embed AI agents with production-ready infrastructure. Key packages:

| Package | Purpose |
|---------|---------|
| `@21st-sdk/agent` | Define agent config (model, tools, hooks) |
| `@21st-sdk/react` | Drop-in React chat UI components |
| `@21st-sdk/nextjs` | Next.js server-side token handler |
| `@21st-sdk/node` | Server SDK for sandboxes, threads, tokens |
| `@21st-sdk/cli` | Login & deploy agents |

**Architecture:** Browser → Next.js Server (JWT token exchange) → Relay Runtime → E2B Sandbox (isolated agent execution)

---

## 1. Agent Definition (`@21st-sdk/agent`)

```bash
npm install @21st-sdk/agent zod
```

### Project Layout

```
my-project/
├── package.json          # @21st-sdk/agent + zod
├── agents/
│   └── my-agent/
│       └── index.ts      # Agent config (entry point)
├── .an/                  # Generated on first deploy
│   └── project.json
└── .env                  # Local env vars
```

### Agent Config

```typescript
import { agent, tool } from "@21st-sdk/agent"
import { z } from "zod"

export default agent({
  // Model: "claude-sonnet-4-6" (default)
  model: "claude-sonnet-4-6",
  // Runtime: "claude-code" (default) or "codex"
  runtime: "claude-code",
  // System prompt
  systemPrompt: "You are a helpful coding assistant.",
  // Permission mode: "default" | "acceptEdits" | "bypassPermissions"
  permissionMode: "default",
  // Limits
  maxTurns: 50,
  maxBudgetUsd: 5,

  // Custom tools with Zod schema validation
  tools: {
    greet: tool({
      description: "Greet a user by name",
      inputSchema: z.object({ name: z.string() }),
      execute: async ({ name }) => ({
        content: [{ type: "text", text: `Hello, ${name}!` }],
      }),
    }),
  },

  // Lifecycle hooks
  onStart: async () => { /* ... */ },
  onToolCall: async ({ toolName, input }) => {
    // Return false to block the tool
  },
  onToolResult: async ({ toolName, input, output }) => { /* ... */ },
  onStepFinish: async ({ step }) => { /* ... */ },
  onFinish: async ({ result }) => { /* ... */ },
  onError: async ({ error }) => { /* ... */ },
})
```

### Deploy

```bash
npx @21st-sdk/cli login    # Auth with API key
npx @21st-sdk/cli deploy   # Bundle & deploy to E2B sandbox
```

---

## 2. React Chat UI (`@21st-sdk/react`)

Built on **Vercel AI SDK v5**. No custom hooks — just components.

```bash
npm install @21st-sdk/react ai @ai-sdk/react
```

### Quick Start

```tsx
"use client";
import { useChat } from "@ai-sdk/react";
import { AgentChat, createAgentChat } from "@21st-sdk/react";
import "@21st-sdk/react/styles.css";
import { useMemo } from "react";

export default function Chat() {
  const chat = useMemo(
    () => createAgentChat({
      agent: "your-agent-slug",
      getToken: async () => "your_an_sk_token",
    }),
    [],
  );

  const { messages, sendMessage, status, stop, error } = useChat({ chat });

  return (
    <AgentChat
      messages={messages}
      onSend={(msg) => sendMessage({
        parts: [{ type: "text", text: msg.content }],
      })}
      status={status}
      onStop={stop}
      error={error}
    />
  );
}
```

### `createAgentChat(options)`

```typescript
createAgentChat({
  agent: string;              // Agent slug from dashboard
  getToken: () => Promise<string>;  // Returns an_sk_ API key
  apiUrl?: string;            // Default: "https://relay.an.dev"
  projectId?: string;         // Session persistence key
  onFinish?: () => void;
  onError?: (error: Error) => void;
})
// Returns Chat<UIMessage> — pass to useChat({ chat })
```

### `<AgentChat />` Props

| Prop | Type | Description |
|------|------|-------------|
| `messages` | `UIMessage[]` | From `useChat()` |
| `onSend` | `(msg) => void` | Send handler |
| `status` | `"ready" \| "submitted" \| "streaming" \| "error"` | Chat status |
| `onStop` | `() => void` | Stop streaming |
| `error` | `Error` | Error object |
| `theme` | `ChatTheme` | Theme JSON from Playground |
| `colorMode` | `"light" \| "dark" \| "auto"` | Color mode |
| `classNames` | `Partial<ChatClassNames>` | CSS class overrides |
| `slots` | `Partial<ChatSlots>` | Custom sub-components |
| `modelSelector` | `{ models, activeModelId?, onModelChange? }` | Model picker |
| `attachments` | `{ onAttach?, images?, files? }` | File uploads |

### 4 Levels of Customization

**1. Theme tokens** — Apply a theme JSON:
```tsx
<AgentChat theme={playgroundTheme} colorMode="dark" />
```

**2. Class overrides** — Override styles per element:
```tsx
<AgentChat classNames={{
  root: "rounded-2xl border",
  messageList: "px-8",
  inputBar: "bg-gray-50",
  userMessage: "bg-blue-100",
}} />
```

**3. Slot components** — Swap sub-components:
```tsx
<AgentChat slots={{
  InputBar: MyCustomInput,
  UserMessage: MyUserBubble,
  ToolRenderer: MyToolRenderer,
}} />
```

**4. Individual imports** — Build from scratch:
```tsx
import { MessageList, InputBar, ToolRenderer } from "@21st-sdk/react";
```

### CSS Class Convention

All elements use stable `an-*` class names. No Tailwind peer dependency required — CSS is pre-compiled.

```css
.an-root { }
.an-message-list { }
.an-user-message { }
.an-assistant-message { }
.an-input-bar { }
.an-send-button { }
.an-tool-bash { }
.an-tool-edit { }
```

### Available Components

| Category | Components |
|----------|-----------|
| **Layout** | `MessageList`, `InputBar`, `MessageActions` |
| **Messages** | `UserMessage`, `AssistantMessage`, `StreamingMarkdown` |
| **Tools** | `ToolRenderer`, `BashTool`, `EditTool`, `WriteTool`, `SearchTool`, `TodoTool`, `PlanTool`, `TaskTool`, `McpTool`, `ThinkingTool`, `GenericTool` |

### Theme Type

```typescript
interface ChatTheme {
  theme: Record<string, string>;  // Shared: font, spacing, accent
  light: Record<string, string>;  // Light mode CSS vars
  dark: Record<string, string>;   // Dark mode CSS vars
}
```

### Model Constants

```typescript
import { CLAUDE_MODELS, DEFAULT_MODEL_ID } from "@21st-sdk/react"
import type { ModelOption, ClaudeModelId } from "@21st-sdk/react"
```

---

## 3. Next.js Integration (`@21st-sdk/nextjs`)

Server-side token handler — API key never reaches the client.

```bash
npm install @21st-sdk/nextjs @21st-sdk/react ai @ai-sdk/react
```

### Setup

**1. Environment variable:**
```env
# .env.local
API_KEY_21ST=an_sk_your_key_here
```

**2. Token route (one line):**
```typescript
// app/api/agent/token/route.ts
import { createTokenHandler } from "@21st-sdk/nextjs/server"
export const POST = createTokenHandler({
  apiKey: process.env.API_KEY_21ST!,
})
```

**3. Page component:**
```tsx
"use client"
import { AgentChat, createAgentChat } from "@21st-sdk/nextjs"
import { useChat } from "@ai-sdk/react"
import "@21st-sdk/react/styles.css"
import { useMemo } from "react"

export default function Chat() {
  const chat = useMemo(
    () => createAgentChat({
      agent: "your-agent-slug",
      tokenUrl: "/api/agent/token",
    }),
    [],
  )
  const { messages, sendMessage, status, stop, error } = useChat({ chat })

  return (
    <AgentChat
      messages={messages}
      onSend={(msg) => sendMessage({
        parts: [{ type: "text", text: msg.content }],
      })}
      status={status}
      onStop={stop}
      error={error}
    />
  )
}
```

### Auth Flow

```
Browser           Next.js Server        Relay
  |                    |                   |
  |-- POST /token ---->|                   |
  |                    |-- POST /v1/tokens (with an_sk_) -->|
  |                    |<-- { token, expiresAt } ----------|
  |<-- { token } ------|                   |
  |                    |                   |
  |-- POST /v1/chat/:agent (with JWT) ------------------->|
  |<-- SSE streaming ------------------------------------ |
```

---

## 4. Server SDK (`@21st-sdk/node`)

Manage sandboxes, threads, files, git, and tokens from server-side code.

```typescript
import { AgentClient } from "@21st-sdk/node"

const client = new AgentClient({
  apiKey: process.env.API_KEY_21ST!,
})
```

### Sandboxes

```typescript
// Create
const sandbox = await client.sandboxes.create({ agent: "my-agent" })

// Exec command
const result = await client.sandboxes.exec({
  sandboxId: sandbox.id,
  command: "ls /home/user/workspace",
})

// File operations
await client.sandboxes.files.write({
  sandboxId: sandbox.id,
  files: { "/home/user/workspace/note.txt": "Hello!" },
})
const file = await client.sandboxes.files.read({
  sandboxId: sandbox.id,
  path: "/home/user/workspace/note.txt",
})

// Git clone
await client.sandboxes.git.clone({
  sandboxId: sandbox.id,
  url: "https://github.com/org/repo.git",
  depth: 1,
})

// Cleanup
await client.sandboxes.delete(sandbox.id)
```

### Threads

```typescript
const thread = await client.threads.create({
  sandboxId: sandbox.id,
  name: "Chat 1",
})
const threads = await client.threads.list({ sandboxId: sandbox.id })

// Run from server (returns SSE stream)
const result = await client.threads.run({
  agent: "my-agent",
  sandboxId: sandbox.id,
  threadId: thread.id,
  messages: [
    { role: "user", parts: [{ type: "text", text: "Hello" }] },
  ],
})
```

### Tokens

```typescript
const token = await client.tokens.create({
  agent: "my-agent",
  userId: "user-123",     // optional
  expiresIn: "1h",        // default: "1h"
})
```

---

## 5. Core Concepts

| Concept | Description |
|---------|-------------|
| **Agent** | Code-first config (model, prompt, tools, hooks). Deployed via CLI. |
| **Skill** | Block of reference instructions attached to an agent (not sent every turn). |
| **Sandbox** | Persistent E2B environment with filesystem, git, sessions. |
| **Thread** | A conversation within a sandbox. Tracks messages, tokens, cost. |
| **Relay** | Runtime service: auth → sandbox → agent → SSE stream → your app. |
| **API Key** | Format: `an_sk_` + 64 hex chars. Scoped to a team. Never expose client-side. |

---

## Best Practices

1. **Never expose `an_sk_` keys client-side** — always use the token route pattern
2. **Use `useMemo`** for `createAgentChat` to avoid re-creating on every render
3. **Import `@21st-sdk/react/styles.css`** once in your app for base styles
4. **Use `an-*` class names** for custom CSS targeting — they are stable
5. **Agent entry points** must live at `agents/<slug>/index.ts` with a default export
6. **Sandbox lifecycle**: new sandbox = fresh environment; new thread = new conversation in same environment
7. **Theme customization**: start with theme tokens, escalate to class overrides, then slots, then individual components
8. **All component imports** come from `@21st-sdk/react`; only `createTokenHandler` comes from `@21st-sdk/nextjs/server`

---

## Dependencies Summary

```json
{
  "@21st-sdk/agent": "latest",
  "@21st-sdk/react": "latest",
  "@21st-sdk/nextjs": "latest",
  "@21st-sdk/node": "latest",
  "@ai-sdk/react": "latest",
  "ai": "latest",
  "zod": "^3.24"
}
```

License: MIT
