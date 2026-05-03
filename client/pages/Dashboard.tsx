import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Clock,
  FileText,
  TrendingUp,
  Flame,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Upload,
} from "lucide-react";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header with Upload Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, Jane! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Here's what's happening with your studies today
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
              <span className="text-gray-600">⏱️</span>
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Upload className="w-4 h-4 mr-2" />
              Upload PDF
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Study Hours */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 dark:text-gray-400">Study Hours</p>
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">24.5</p>
            <p className="text-xs text-green-600 dark:text-green-400">+15% this week</p>
          </div>

          {/* Documents */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 dark:text-gray-400">Documents</p>
              <FileText className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">18</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Active PDFs</p>
          </div>

          {/* Progress */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 dark:text-gray-400">Avg Progress</p>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">68%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Completion rate</p>
          </div>

          {/* Study Streak */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 dark:text-gray-400">Study Streak</p>
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">7</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Days in a row</p>
          </div>
        </div>

        {/* Study Materials and Schedule */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Study Materials */}
          <div className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Progress
            </h2>

            <div className="space-y-6">
              {/* Material 1 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded flex items-center justify-center">
                      <span className="text-lg">📖</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        Organic Chemistry Reactions
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Chemistry • 68 pages • 1 day ago
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary">30%</span>
                </div>
                <div className="bg-gray-200 dark:bg-slate-600 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "30%" }}></div>
                </div>
              </div>

              {/* Material 2 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                      <span className="text-lg">🔬</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        Quantum Physics Chapter 5
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Physics • 45 pages • 2 days ago
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary">65%</span>
                </div>
                <div className="bg-gray-200 dark:bg-slate-600 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                </div>
              </div>

              {/* Upload New */}
              <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-6 text-center hover:border-primary/50 transition">
                <div className="flex justify-center mb-2">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  Upload New Study Material
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  Drop your PDF here or click to browse files
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                  Choose File
                </Button>
              </div>
            </div>
          </div>

          {/* Schedule Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Schedule */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Today's Schedule
              </h3>
              <div className="space-y-3">
                {/* Event 1 */}
                <div className="flex gap-3">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap pt-1">
                    2:00 PM
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      ML Assignment
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      3:00 PM
                    </p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex gap-3">
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap pt-1">
                    3:00 PM
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Study Group
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      6:00 PM - 7:30 PM
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-sm text-primary font-semibold hover:underline">
                View Full Schedule
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Recent Activity
                </h3>
                <button className="text-xs text-primary font-semibold hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Generated summary for Chapter 5
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Physics • 1 hour ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Asked 3 questions
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Organic Chemistry • 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Completed study session
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      25 minutes • Yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Study Topics */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            What's Next to Study?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg hover:border-primary/50 transition cursor-pointer">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">
                Chapter 6: Evolution
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Biology • 12 pages
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg hover:border-primary/50 transition cursor-pointer">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">
                Lesson 4: Calculus
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Mathematics • 8 pages
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg hover:border-primary/50 transition cursor-pointer">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">
                Unit 3: History
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                History • 15 pages
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
