import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Search, Plus, Filter, Zap, TrendingUp } from "lucide-react";

export default function Community() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2 mb-2">
              Study Community
            </h1>
            <p className="text-gray-600">
              Ask questions, share knowledge, and learn together
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Ask Question
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions, topics, or users..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Questions */}
          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-6">
              <button className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Trending
              </button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                Recent
              </button>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                Unanswered
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  title:
                    "How does gradient descent work in neural networks?",
                  votes: 24,
                  answers: 3,
                  tags: ["neural-networks", "optimization", "ml"],
                  user: "Alex Chen",
                  time: "2 hours ago",
                },
                {
                  title:
                    "Difference between prokaryotic and eukaryotic cells",
                  votes: 18,
                  answers: 2,
                  tags: ["biology", "cells"],
                  user: "Sarah Johnson",
                  time: "4 hours ago",
                },
              ].map((question, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition"
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <button className="text-gray-400 hover:text-primary">
                        👍
                      </button>
                      <span className="text-sm font-semibold text-gray-600">
                        {question.votes}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary cursor-pointer">
                        {question.title}
                      </h3>
                      <div className="flex gap-2 flex-wrap mb-3">
                        {question.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200 cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                          {question.answers} answers • {question.user} • {question.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {Math.floor(Math.random() * 100) + 50} views
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Need Quick Help */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">❓</span>
                <p className="font-semibold text-gray-900">Need Quick Help?</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Ask our AI assistant for instant answers to your questions.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Ask AI Assistant
              </Button>
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Popular Tags</h3>
              <div className="space-y-2">
                {[
                  { name: "machine-learning", count: 234 },
                  { name: "quantum-physics", count: 189 },
                  { name: "organic-chemistry", count: 156 },
                  { name: "calculus", count: 142 },
                  { name: "biology", count: 127 },
                ].map((tag) => (
                  <div
                    key={tag.name}
                    className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary/50 cursor-pointer transition"
                  >
                    <p className="text-sm font-medium text-gray-900">
                      {tag.name}
                    </p>
                    <p className="text-xs text-gray-500">{tag.count} questions</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
