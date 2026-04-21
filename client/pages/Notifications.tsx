import { DashboardLayout } from "@/components/DashboardLayout";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2 mb-2">
              <Bell className="w-8 h-8" />
              Notifications
            </h1>
            <p className="text-gray-600">
              Stay updated with your study activities
            </p>
          </div>
          <button className="text-primary hover:underline font-medium text-sm">
            Mark All as Read
          </button>
        </div>

        {/* Notification Filters */}
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium">
            All
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Unread
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {[
            {
              type: "Study Session Reminder",
              message: "Physics lesson starts in 30 minutes",
              time: "10 min ago",
              icon: "📋",
              new: true,
            },
            {
              type: "Your answer was upvoted",
              message: "Someone upvoted your answer in Quantum Physics",
              time: "1 hour ago",
              icon: "👍",
              new: false,
            },
            {
              type: "New reply to your question",
              message:
                "Alex Chen replied to your question about gradient descent",
              time: "4 hours ago",
              icon: "💬",
              new: false,
            },
          ].map((notification, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{notification.icon}</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    {notification.type}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    {notification.message}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-500">{notification.time}</p>
                  {notification.new && (
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      🔔
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
