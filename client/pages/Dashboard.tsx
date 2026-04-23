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
          {/* Active Study Rooms */}
          <div className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Active Study Rooms
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Continue where you left off
              </p>
            </div>

            <div className="space-y-4">
              {/* Study Room Card */}
              <Link to="/document/1">
                <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:border-primary/50 transition dark:bg-slate-800">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">📚</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Introduction to Quantum Physics
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Physics • 45 pages • 2 hours ago
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition flex items-center gap-2">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-3">
                    <div className="bg-gray-200 dark:bg-slate-600 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      65% complete
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-6 border border-primary/20 dark:border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  AI Assistant
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Always ready to help
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white/50 dark:bg-slate-700/50 backdrop-blur rounded-lg p-3">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Hi! I can help you with summaries, questions, or study tips.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 rounded-lg p-3">
                <p className="text-gray-900 dark:text-gray-100 text-sm">
                  Ask me anything...
                </p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full mt-4 px-4 py-2 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 dark:placeholder-gray-400"
            />
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
