import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Settings,
  Send,
  Sparkles,
  Users,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Message {
  id: string;
  author: string;
  avatar: string;
  initials: string;
  color: string;
  content: string;
  timestamp: string;
  isUser: boolean;
}

export default function StudyGroupChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      author: "Alex Chen",
      avatar: "AC",
      initials: "AC",
      color: "bg-blue-500",
      content: "Hey everyone! Ready for today's study session?",
      timestamp: "10:30 AM",
      isUser: false,
    },
    {
      id: "2",
      author: "You",
      avatar: "JD",
      initials: "JD",
      color: "bg-purple-500",
      content:
        "Yes! I've prepared some questions about gradient descent.",
      timestamp: "10:32 AM",
      isUser: true,
    },
    {
      id: "3",
      author: "AI Assistant",
      avatar: "🤖",
      initials: "AI",
      color: "bg-primary",
      content:
        "I can help explain gradient descent! It's an optimization algorithm used to minimize the cost function in machine learning models.",
      timestamp: "10:33 AM",
      isUser: false,
    },
    {
      id: "4",
      author: "Sarah Johnson",
      avatar: "SJ",
      initials: "SJ",
      color: "bg-green-500",
      content:
        "That would be great! I'm also confused about learning rates.",
      timestamp: "10:33 AM",
      isUser: false,
    },
  ]);

  const [messageInput, setMessageInput] = useState("");
  const [activeTab, setActiveTab] = useState<"chat" | "members">("chat");

  const members = [
    {
      name: "Alex Chen",
      initials: "AC",
      color: "bg-blue-500",
      status: "Online",
    },
    {
      name: "Sarah Johnson",
      initials: "SJ",
      color: "bg-green-500",
      status: "Online",
    },
    {
      name: "Mike Rodriguez",
      initials: "MR",
      color: "bg-orange-500",
      status: "Away",
    },
    {
      name: "You",
      initials: "JD",
      color: "bg-purple-500",
      status: "Online",
    },
    {
      name: "AI Assistant",
      initials: "AI",
      color: "bg-primary",
      status: "Always available",
    },
  ];

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: String(messages.length + 1),
      author: "You",
      avatar: "JD",
      initials: "JD",
      color: "bg-purple-500",
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  return (
    <DashboardLayout>
      <div className="flex h-screen flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 bg-white px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/study-groups" className="hover:bg-gray-100 p-2 rounded">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="font-semibold text-gray-900 mb-1">
                ML Study Group
              </h1>
              <p className="text-sm text-gray-600">12 members • 4 online</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isUser ? "justify-end" : ""}`}
                >
                  {!message.isUser && (
                    <div className={`w-10 h-10 ${message.color} rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                      {message.initials === "AI" ? "🤖" : message.initials}
                    </div>
                  )}

                  <div className={message.isUser ? "max-w-xs" : "max-w-md"}>
                    {!message.isUser && (
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        {message.author}
                      </p>
                    )}
                    <div
                      className={`rounded-lg p-3 ${
                        message.isUser
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p
                      className={`text-xs mt-1 ${
                        message.isUser
                          ? "text-gray-500 text-right"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>

                  {message.isUser && (
                    <div className={`w-10 h-10 ${message.color} rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                      {message.initials}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-200 bg-white p-6">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* AI Suggestion */}
              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <span className="font-medium">AI Suggestion:</span> Type
                  <span className="text-primary font-medium"> @AI </span>to get
                  instant help with your questions!
                </p>
              </div>
            </div>
          </div>

          {/* Members Panel */}
          <div className="w-80 border-l border-gray-200 bg-white flex flex-col">
            {/* Tabs */}
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="font-semibold text-gray-900 mb-4">Members</h2>
              <p className="text-sm text-gray-600 mb-4">
                12 members, 4 online
              </p>

              {/* Member List */}
              <div className="space-y-3">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div
                      className={`w-10 h-10 ${member.color} rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0`}
                    >
                      {member.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-500">{member.status}</p>
                    </div>
                    {member.status === "Online" && (
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  About
                </h3>
                <p className="text-sm text-gray-600">
                  A study group for machine learning enthusiasts covering
                  algorithms, deep learning, and practical applications.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  <Users className="w-4 h-4 inline mr-2" />
                  Quick Access
                </h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 text-left text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                    📌 Pinned Messages
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                    📁 Files
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                    🔗 Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
