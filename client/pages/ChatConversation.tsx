import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ChatConversation() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      author: "Alex Chen",
      content: "Thanks for the help!",
      timestamp: "5 min ago",
      isUser: false,
    },
    {
      id: "2",
      author: "You",
      content: "No problem! Happy to help with anything else.",
      timestamp: "4 min ago",
      isUser: true,
    },
    {
      id: "3",
      author: "Alex Chen",
      content:
        "Actually, I have a question about quantum mechanics. Can you explain wave-particle duality?",
      timestamp: "3 min ago",
      isUser: false,
    },
  ]);

  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: String(messages.length + 1),
      author: "You",
      content: messageInput,
      timestamp: "just now",
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  return (
    <DashboardLayout>
      <div className="flex h-screen flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/my-chats" className="hover:bg-gray-100 dark:hover:bg-slate-700 p-2 rounded">
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Link>
            <div>
              <h1 className="font-semibold text-gray-900 dark:text-white">
                Alex Chen
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-slate-950">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isUser ? "justify-end" : ""}`}
            >
              {!message.isUser && (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm">
                  AC
                </div>
              )}

              <div className={message.isUser ? "max-w-xs" : "max-w-md"}>
                {!message.isUser && (
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {message.author}
                  </p>
                )}
                <div
                  className={`rounded-lg p-3 ${
                    message.isUser
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    message.isUser
                      ? "text-gray-500 text-right"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>

              {message.isUser && (
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm">
                  JD
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              className="flex-1 px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
