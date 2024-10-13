import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { BeatLoader } from "react-spinners";
import { Button } from "./ui/MovingBorder";
import { Input } from "./ui/input";

interface Chat {
  text: string;
  role: "user" | "bot";
}

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [chats, setChats] = useState<Chat[]>([
    {
      text: "Hello there! It's nice to meet you. My name is Ali, and I'm Sajad Ali Ismail's assistant.",
      role: "bot",
    },
  ]);
  const [error, setError] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    const newChat: Chat = { text: prompt, role: "user" };
    setChats((prev) => [...prev, newChat]);
    setPrompt("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatBot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An error occurred");
      }

      const data = await response.json();
      setChats((prev) => [...prev, { text: data.answer, role: "bot" }]);
      setError("");
    } catch (error) {
      console.error("[ERROR]", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="fixed z-50 bottom-4 right-4" style={{ zIndex: 1000 }}>
      <AnimatePresence>
        {!isChatOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="rounded-full w-16 h-16 bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-900 animate-bounce"
              onClick={() => setIsChatOpen(true)}
            >
              <Image
                width={60}
                height={60}
                src="/assistant.png"
                alt="Chat Assistant"
              />
            </button>
          </motion.div>
        )}

        {isChatOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-80 md:w-96 h-[32rem] bg-black-100 border border-border rounded-lg shadow-lg flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Image width={30} height={30} src="/assistant.png" alt="AI" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">Ali</h2>
                  <p className="text-xs text-muted-foreground">AI Assistant</p>
                </div>
              </div>
              <button
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setIsChatOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ scrollbarWidth: "none" }}
            >
              {chats.map((chat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${
                    chat.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      chat.role === "user" ? "bg-slate-800" : "bg-blue-950"
                    }`}
                  >
                    {chat.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-lg p-3">
                    <BeatLoader color="white" size={10} />
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-center">
                  <div className="bg-destructive text-destructive-foreground rounded-lg p-3">
                    {error}
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="flex items-center space-x-2"
              >
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1 w-64"
                />
                <Button type="submit" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
