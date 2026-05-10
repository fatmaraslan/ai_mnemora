import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Brain, Upload, Plus, Edit2, Trash2, Play, RotateCcw } from "lucide-react";
import { useState } from "react";

interface Quiz {
  id: string;
  title: string;
  document: string;
  questions: number;
  difficulty: "easy" | "medium" | "hard";
  createdAt: string;
  score?: number;
}

export default function QuizGenerator() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    {
      id: "1",
      title: "Quantum Physics Chapter 1-3",
      document: "Introduction to Quantum Physics",
      questions: 15,
      difficulty: "medium",
      createdAt: "2 hours ago",
      score: 85,
    },
    {
      id: "2",
      title: "Organic Chemistry Reactions",
      document: "Organic Chemistry Reactions",
      questions: 20,
      difficulty: "hard",
      createdAt: "1 day ago",
    },
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "medium"
  );

  const handleGenerateQuiz = () => {
    if (!selectedDoc) return;
    setIsGenerating(true);

    setTimeout(() => {
      const newQuiz: Quiz = {
        id: String(quizzes.length + 1),
        title: `${selectedDoc} Quiz`,
        document: selectedDoc,
        questions: numQuestions,
        difficulty,
        createdAt: "just now",
      };
      setQuizzes([newQuiz, ...quizzes]);
      setIsGenerating(false);
      setSelectedDoc("");
      setNumQuestions(10);
      setDifficulty("medium");
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            Quiz Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create custom quizzes from your study materials
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Generator Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Generate New Quiz
            </h2>

            <div className="space-y-6">
              {/* Document Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Document
                </label>
                <select
                  value={selectedDoc}
                  onChange={(e) => setSelectedDoc(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose a document...</option>
                  <option value="Introduction to Quantum Physics">
                    Introduction to Quantum Physics
                  </option>
                  <option value="Organic Chemistry Reactions">
                    Organic Chemistry Reactions
                  </option>
                  <option value="Biology: Cell Structure">
                    Biology: Cell Structure
                  </option>
                  <option value="Mathematics: Calculus">
                    Mathematics: Calculus
                  </option>
                </select>
              </div>

              {/* Number of Questions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Number of Questions
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-lg font-bold text-primary w-12 text-right">
                    {numQuestions}
                  </span>
                </div>
              </div>

              {/* Difficulty Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["easy", "medium", "hard"].map((level) => (
                    <button
                      key={level}
                      onClick={() =>
                        setDifficulty(level as "easy" | "medium" | "hard")
                      }
                      className={`py-2 px-4 rounded-lg font-medium transition ${
                        difficulty === level
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600"
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quiz Options */}
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="mcq"
                    defaultChecked
                    className="w-4 h-4 rounded border-gray-300 text-primary cursor-pointer"
                  />
                  <label htmlFor="mcq" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Include Multiple Choice Questions
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="shortAnswer"
                    defaultChecked
                    className="w-4 h-4 rounded border-gray-300 text-primary cursor-pointer"
                  />
                  <label htmlFor="shortAnswer" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Include Short Answer Questions
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="timer"
                    className="w-4 h-4 rounded border-gray-300 text-primary cursor-pointer"
                  />
                  <label htmlFor="timer" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Enable Time Limit
                  </label>
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerateQuiz}
                disabled={!selectedDoc || isGenerating}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg"
              >
                {isGenerating ? "Generating Quiz..." : "Generate Quiz"}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl p-6 border border-primary/20 dark:border-primary/30">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Quizzes Created
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {quizzes.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Avg. Score
                  </span>
                  <span className="text-2xl font-bold text-green-500">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Questions Answered
                  </span>
                  <span className="text-2xl font-bold text-blue-500">127</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                💡 <strong>Tip:</strong> Generate quizzes with varying difficulty
                levels to reinforce your learning!
              </p>
            </div>
          </div>
        </div>

        {/* Recent Quizzes */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your Quizzes
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {quizzes.length} quizzes
            </span>
          </div>

          <div className="space-y-4">
            {quizzes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  No quizzes yet. Create your first quiz above!
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Quiz
                </Button>
              </div>
            ) : (
              quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {quiz.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs bg-primary/10 dark:bg-primary/20 text-primary px-2 py-1 rounded">
                        {quiz.questions} questions
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded font-medium ${
                          quiz.difficulty === "easy"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : quiz.difficulty === "medium"
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                        }`}
                      >
                        {quiz.difficulty}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {quiz.createdAt}
                      </span>
                      {quiz.score && (
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded ml-auto">
                          Score: {quiz.score}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="dark:border-slate-600"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="dark:border-slate-600"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="dark:border-slate-600 text-red-600 dark:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
