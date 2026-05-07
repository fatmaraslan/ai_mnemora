import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Lock,
  Eye,
  Smartphone,
  Globe,
  Trash2,
  LogOut,
  ChevronRight,
  Moon,
  Volume2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    messages: true,
    updates: false,
  });

  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    allowMessages: true,
    shareActivity: false,
  });

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account and preferences
          </p>
        </div>

        <div className="max-w-2xl space-y-6">
          {/* Account Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Account Settings
            </h2>

            <div className="space-y-4">
              {/* Profile Info */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Jane Doe
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      jane.doe@university.edu
                    </p>
                  </div>
                </div>
                <button className="text-primary hover:underline text-sm font-medium">
                  Edit
                </button>
              </div>

              {/* Plan Info */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Current Plan
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Free Plan - Limited features
                  </p>
                </div>
                <button
                  onClick={() => navigate("/upgrade")}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Upgrade
                </button>
              </div>

              {/* Password */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition cursor-pointer">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Change Password
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Update your password
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Notification Preferences
            </h2>

            <div className="space-y-4">
              {[
                {
                  id: "email",
                  icon: Bell,
                  label: "Email Notifications",
                  description: "Receive updates via email",
                },
                {
                  id: "push",
                  icon: Smartphone,
                  label: "Push Notifications",
                  description: "Get alerts on your device",
                },
                {
                  id: "messages",
                  icon: Volume2,
                  label: "Message Notifications",
                  description: "Alerts for new messages",
                },
                {
                  id: "updates",
                  icon: Globe,
                  label: "Product Updates",
                  description: "News about new features",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications[item.id as keyof typeof notifications]}
                      onChange={() =>
                        setNotifications({
                          ...notifications,
                          [item.id]: !notifications[item.id as keyof typeof notifications],
                        })
                      }
                      className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Privacy & Security
            </h2>

            <div className="space-y-4">
              {[
                {
                  id: "profilePublic",
                  label: "Public Profile",
                  description: "Let others find and follow your profile",
                },
                {
                  id: "allowMessages",
                  label: "Allow Messages",
                  description: "Anyone can message you",
                },
                {
                  id: "shareActivity",
                  label: "Share Activity",
                  description: "Show your study progress to friends",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={privacy[item.id as keyof typeof privacy]}
                    onChange={() =>
                      setPrivacy({
                        ...privacy,
                        [item.id]: !privacy[item.id as keyof typeof privacy],
                      })
                    }
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-red-200 dark:border-red-900">
            <h2 className="text-lg font-bold text-red-600 dark:text-red-400 mb-6">
              Danger Zone
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/10 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition cursor-pointer">
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <div>
                    <p className="font-medium text-red-600 dark:text-red-400">
                      Clear All Data
                    </p>
                    <p className="text-sm text-red-600/70 dark:text-red-400/70">
                      Delete all your study materials and notes
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>

              <div
                onClick={() => navigate("/sign-in")}
                className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/10 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <div>
                    <p className="font-medium text-red-600 dark:text-red-400">
                      Logout
                    </p>
                    <p className="text-sm text-red-600/70 dark:text-red-400/70">
                      Sign out of your account
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-white flex-1">
              Save Settings
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
