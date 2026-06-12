import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Edit,
  Copy,
  LogOut,
  BookOpen,
  MessageCircle,
  Zap,
  Clock,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "Jane Doe",
    email: "jane.doe@university.edu",
    bio: "",
    interests: ["Machine Learning", "Quantum Physics", "Chemistry"],
  });
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Profile</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-3xl">
                  JD
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Jane Doe</h2>
                  <p className="text-gray-600 dark:text-gray-400">jane.doe@university.edu</p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                      Quantum Physics
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      Chemistry
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsEditOpen(true)}
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            {/* Student ID */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Student ID</label>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">STU-2024-30789</p>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Copy className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-slate-700 pt-6">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Hours Studied</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">245.5</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Contributions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Study Streak</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">7 🔥</p>
              </div>
            </div>

            {/* Member Info */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm">Member since January 2024</p>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message to Myself
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Study Statistics */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Study Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Avg Daily Study</p>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">2.5h</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Documents Uploaded</p>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">18</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Questions Answered</p>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">42</p>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 pb-3 border-b border-gray-200 dark:border-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Generated summary for Chapter 5
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Physics • 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-gray-200 dark:border-slate-700">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Asked 3 questions in Quantum Physics
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      4 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-gray-200 dark:border-slate-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Completed 45-minute study session
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Yesterday
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-gray-200 dark:border-slate-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Joined Study Group: ML Study Group
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      2 days ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Uploaded Chemistry Notes
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      3 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditOpen && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Edit Profile
                </h2>
                <button
                  onClick={() => setIsEditOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) =>
                      setEditForm({ ...editForm, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bio (Optional)
                  </label>
                  <textarea
                    value={editForm.bio}
                    onChange={(e) =>
                      setEditForm({ ...editForm, bio: e.target.value })
                    }
                    placeholder="Tell us about yourself..."
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setIsEditOpen(false)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white"
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsEditOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
