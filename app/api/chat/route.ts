import { NextResponse } from "next/server";
import {
  chatbotSystemPrompt,
  mockAgentReply,
  type ChatMessage,
} from "@/lib/chatbot";

const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

function sanitizeMessages(messages: ChatMessage[]): ChatMessage[] {
  return messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .slice(-10)
    .map((message) => ({
      role: message.role,
      content: String(message.content ?? "").slice(0, 1200),
    }));
}

function extractLastUserMessage(messages: ChatMessage[]): string {
  const reversed = [...messages].reverse();
  return reversed.find((message) => message.role === "user")?.content ?? "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = sanitizeMessages(body.messages ?? []);
    const lastUserMessage = extractLastUserMessage(messages);

    if (!lastUserMessage) {
      return NextResponse.json({
        reply:
          "Je suis pret a vous aider. Posez-moi une question sur les destinations temporelles.",
        mode: "mock",
      });
    }

    const apiKey = process.env.MISTRAL_API_KEY;
    const model = process.env.MISTRAL_MODEL ?? "mistral-small-latest";

    if (!apiKey) {
      return NextResponse.json({
        reply: mockAgentReply(lastUserMessage),
        mode: "mock",
      });
    }

    const response = await fetch(MISTRAL_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        max_tokens: 260,
        messages: [
          { role: "system", content: chatbotSystemPrompt },
          ...messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({
        reply: mockAgentReply(lastUserMessage),
        mode: "mock",
      });
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const aiReply = data.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      reply: aiReply || mockAgentReply(lastUserMessage),
      mode: aiReply ? "mistral" : "mock",
    });
  } catch {
    return NextResponse.json(
      {
        reply:
          "Le portail IA est momentanement instable. Je reste disponible pour vous conseiller sur Paris 1889, le Cretace -65M et Florence 1504.",
        mode: "mock",
      },
      { status: 200 },
    );
  }
}
