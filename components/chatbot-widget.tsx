"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { mockAgentReply, type ChatMessage } from "@/lib/chatbot";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Bienvenue chez TimeTravel Agency ! Je suis Chronos, votre assistant temporel. Comment puis-je vous aider ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const updatedMessages = [...messages, { role: "user", content: userMessage } as ChatMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error("Chat endpoint error");
      }

      const data = (await response.json()) as { reply?: string };
      const assistantReply = data.reply?.trim() || mockAgentReply(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: assistantReply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: mockAgentReply(userMessage) },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_4px_24px_rgba(196,166,71,0.3)] transition-shadow duration-300 hover:shadow-[0_4px_32px_rgba(196,166,71,0.45)]"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat Chronos"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[30rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_16px_64px_rgba(0,0,0,0.5)] sm:w-96"
            role="dialog"
            aria-label="Chat avec l'agent Chronos"
          >
            {/* Header */}
            <div className="border-b border-border/40 bg-secondary/50 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-sm font-bold tracking-tight text-foreground">
                  Chronos - Agent Temporel
                </span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                En ligne | Temps de reponse : instantane
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4" role="log" aria-live="polite">
              <div className="flex flex-col gap-3.5">
                {messages.map((msg, i) => (
                  <motion.div
                    key={`msg-${i}-${msg.role}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "rounded-br-sm bg-primary text-primary-foreground"
                          : "rounded-bl-sm bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-xl rounded-bl-sm bg-secondary px-4 py-2.5 text-sm text-muted-foreground">
                      <span className="inline-flex gap-1">
                        <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
                      </span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-border/40 p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2.5"
              >
                <label htmlFor="chat-input" className="sr-only">
                  Votre message
                </label>
                <input
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez-moi vos questions sur les voyages temporels..."
                  className="flex-1 rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all duration-200"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-200 hover:shadow-[0_0_16px_rgba(196,166,71,0.3)] disabled:opacity-30 disabled:hover:shadow-none"
                  aria-label="Envoyer le message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
