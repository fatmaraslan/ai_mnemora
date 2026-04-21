import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Edit,
  Copy,
  LogOut,
  Trophy,
  BookOpen,
  MessageCircle,
  Zap,
  Clock,
} from "lucide-react";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 border border-gray-200">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-3xl">
                  JD
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Jane Doe</h2>
                  <p className="text-gray-600">jane.doe@university.edu</p>
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
              <Button variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            {/* Student ID */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 block mb-2">Student ID</label>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-900">STU-2024-30789</p>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Copy className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
              <div>
                <p className="text-gray-600 text-sm mb-1">Hours Studied</p>
                <p className="text-2xl font-bold text-gray-900">245.5</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Contributions</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Study Streak</p>
                <p className="text-2xl font-bold text-gray-900">7 🔥</p>
              </div>
            </div>

            {/* Member Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-sm">Member since January 2024</p>
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
            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Achievements
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm font-medium text-gray-900">🥇 Top Contributor</p>
                  <p className="text-xs text-gray-600">Top 1% answers</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-gray-900">📚 Dedicated Learner</p>
                  <p className="text-xs text-gray-600">200+ hours studied</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-gray-900">⚡ Quick Responder</p>
                  <p className="text-xs text-gray-600">Avg response time</p>
                </div>
              </div>
            </div>

            {/* Study Statistics */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Study Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <p className="text-sm text-gray-600">Avg Daily Study</p>
                  </div>
                  <p className="font-semibold text-gray-900">2.5h</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    <p className="text-sm text-gray-600">Documents Uploaded</p>
                  </div>
                  <p className="font-semibold text-gray-900">18</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <p className="text-sm text-gray-600">Questions Answered</p>
                  </div>
                  <p className="font-semibold text-gray-900">42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
