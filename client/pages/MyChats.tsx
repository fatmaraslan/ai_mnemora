import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyChats() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
              My Chats <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">2</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Your private conversations</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="space-y-4">
          {[
            {
              id: "1",
              initials: "AC",
              name: "Alex Chen",
              message: "Thanks for the help!",
              time: "5 min ago",
              color: "bg-blue-500",
            },
            {
              id: "2",
              initials: "SJ",
              name: "Sarah Johnson",
              message: "Can you help me with this problem?",
              time: "1 hour ago",
              color: "bg-green-500",
            },
            {
              id: "3",
              initials: "MR",
              name: "Mike Rodriguez",
              message: "See you at the study session!",
              time: "Yesterday",
              color: "bg-orange-500",
            },
            {
              id: "4",
              initials: "EW",
              name: "Emma Wilson",
              message: "Great explanation, thanks!",
              time: "2 days ago",
              color: "bg-pink-500",
            },
          ].map((chat) => (
            <Link key={chat.id} to={`/chat/${chat.id}`}>
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:border-primary/50 transition cursor-pointer">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${chat.color} rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0`}
                  >
                    {chat.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {chat.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {chat.message}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
                    {chat.time}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* AI Chat Assistant */}
        <div className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-6 border border-primary/20 dark:border-primary/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                AI Chat Assistant
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get instant help with your studies. Ask questions anytime!
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Start AI Chat
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
