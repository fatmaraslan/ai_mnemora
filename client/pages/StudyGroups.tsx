import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Users, Search, Plus, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudyGroups() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
              Study Groups <Users className="w-8 h-8" />
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Connect and study with peers</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Join with Code
            </button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Group
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search groups..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* My Groups */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Groups</h2>
          <div className="space-y-4">
            {[
              {
                id: "1",
                icon: "🟣",
                name: "ML Study Group",
                members: 12,
                message: "Hey everyone, let's meet at 8 PM",
                time: "10 min ago",
              },
              {
                id: "2",
                icon: "🔵",
                name: "Quantum Physics Discussion",
                members: 45,
                message: "Can someone explain wave functions?",
                time: "1 hour ago",
              },
              {
                id: "3",
                icon: "🟢",
                name: "Chemistry Study Squad",
                members: 8,
                message: "Great study session today!",
                time: "Yesterday",
              },
            ].map((group) => (
              <Link key={group.id} to={`/study-group/${group.id}`}>
                <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:border-primary/50 transition">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-xl">
                        {group.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">{group.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {group.members} members
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">{group.message}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{group.time}</p>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition">
                        <Bell className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Discover Public Groups */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Discover Public Groups
            </h2>
            <a href="#" className="text-primary text-sm hover:underline">
              View All
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                id: "4",
                icon: "🟣",
                name: "Computer Science Hub",
                description: "Discuss algorithms, data structures and programming",
                subject: "Computer Science",
                members: 156,
                active: "15 online",
              },
              {
                id: "5",
                icon: "🟢",
                name: "Biology Study Circle",
                description: "Call biology, genetics, and molecular biology",
                subject: "Biology",
                members: 89,
                active: "9 online",
              },
              {
                id: "6",
                icon: "🟠",
                name: "Math Problem Solvers",
                description: "Share math problems and solutions together",
                subject: "Mathematics",
                members: 203,
                active: "21 online",
              },
            ].map((group) => (
              <Link key={group.id} to={`/study-group/${group.id}`}>
                <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:border-primary/50 transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg text-xl">
                      {group.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                      {group.subject}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    {group.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                    {group.description}
                  </p>
                  <div className="flex items-center justify-between mb-4 py-2 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {group.members}
                      </span>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      {group.active}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    Join Group
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Groups Stats */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-700 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Total Groups</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-700 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Unread Messages</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-700 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg">📈</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Most Active</span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">ML Study Group</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
