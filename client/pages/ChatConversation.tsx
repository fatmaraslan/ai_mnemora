import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, UserPlus, X, Trash2, Ban } from "lucide-react";
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
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [friendCode, setFriendCode] = useState("");
  const [showViewProfileModal, setShowViewProfileModal] = useState(false);

  const friendData = {
    name: "Alex Chen",
    initials: "AC",
    email: "alex.chen@university.edu",
    interests: ["Quantum Physics", "Machine Learning"],
    hoursStudied: 186,
    contributions: 72,
    studyStreak: 5,
  };

  const handleAddFriend = () => {
    if (friendCode.trim()) {
      alert(`Friend added with code: ${friendCode}`);
      setFriendCode("");
      setShowAddFriendModal(false);
    }
  };

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
            <button
              onClick={() => setShowViewProfileModal(true)}
              className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-slate-700 p-2 rounded transition flex-1"
            >
              <div>
                <h1 className="font-semibold text-gray-900 dark:text-white text-left">
                  Alex Chen
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
              </div>
            </button>
          </div>
          <button
            onClick={() => setShowAddFriendModal(true)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition text-gray-600 dark:text-gray-400"
            title="Add as friend"
          >
            <UserPlus className="w-5 h-5" />
          </button>
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

        {/* Add Friend Modal */}
        {showAddFriendModal && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Add Friend
                </h2>
                <button
                  onClick={() => setShowAddFriendModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Friend Code
                  </label>
                  <input
                    type="text"
                    value={friendCode}
                    onChange={(e) => setFriendCode(e.target.value)}
                    placeholder="Enter friend's code (e.g., AC-2024-789)"
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  You can find your friend's code on their profile page.
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddFriend}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white"
                >
                  Add Friend
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowAddFriendModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* View Friend Profile Modal */}
        {showViewProfileModal && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full p-6 border border-gray-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Profile
                </h2>
                <button
                  onClick={() => setShowViewProfileModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Profile Avatar */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {friendData.initials}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {friendData.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {friendData.email}
                  </p>
                </div>

                {/* Interests */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Interests
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {friendData.interests.map((interest, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 border-t border-gray-200 dark:border-slate-700 pt-4">
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">Hours Studied</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{friendData.hoursStudied}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">Contributions</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{friendData.contributions}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">Study Streak</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{friendData.studyStreak} 🔥</p>
                  </div>
                </div>

                {/* Student ID */}
                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Student ID</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">STU-2024-30790</p>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <Button
                  onClick={() => {
                    alert("Friend deleted");
                    setShowViewProfileModal(false);
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    alert("Friend blocked");
                    setShowViewProfileModal(false);
                  }}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
                >
                  <Ban className="w-4 h-4" />
                  Block
                </Button>
              </div>
              <Button
                onClick={() => setShowViewProfileModal(false)}
                variant="outline"
                className="w-full mt-2"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
