import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Clock, Target, Flame, CheckCircle, Settings } from "lucide-react";

export default function Planner() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2 mb-2">
              Study Planner 📋
            </h1>
            <p className="text-gray-600">
              Plan your study sessions and track your progress
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">This Week</p>
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900">29.5h</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Weekly Goal</p>
              <Target className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-3xl font-bold text-gray-900">83%</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Current Streak</p>
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 flex items-center gap-1">
              🔥 7 Days
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600">Tasks Completed</p>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">24</p>
          </div>
        </div>

        {/* Calendar and Timer */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">February 2026</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center py-2 font-semibold text-gray-600 text-sm"
                >
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {[...Array(35)].map((_, idx) => {
                const day = idx - 1;
                if (day < 0 || day > 28) return null;
                return (
                  <div
                    key={idx}
                    className="aspect-square bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center hover:border-primary/50 cursor-pointer transition"
                  >
                    {day + 1}
                  </div>
                );
              })}
            </div>

            {/* Upcoming Tasks */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Upcoming Study Sessions</h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Physics Chapter Review",
                    time: "2 hours",
                    date: "Today",
                  },
                  {
                    title: "Chemistry Lab Notes",
                    time: "1.5 hours",
                    date: "Tomorrow",
                  },
                ].map((task, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-xs text-gray-500">{task.date}</p>
                    </div>
                    <p className="text-sm font-medium text-primary">{task.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Study Timer */}
          <div className="bg-gradient-to-b from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 font-medium mb-4">Study Timer</p>
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
              <p className="text-6xl font-bold text-primary">25:00</p>
            </div>
            <div className="space-y-3 w-full">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Start Session
              </Button>
              <button className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
