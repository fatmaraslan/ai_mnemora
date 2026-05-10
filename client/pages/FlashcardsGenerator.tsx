import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Plus,
  Edit2,
  Trash2,
  Play,
  BookOpen,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

interface FlashcardDeck {
  id: string;
  title: string;
  document: string;
  cards: number;
  studied: number;
  createdAt: string;
  tags: string[];
}

export default function FlashcardsGenerator() {
  const [decks, setDecks] = useState<FlashcardDeck[]>([
    {
      id: "1",
      title: "Quantum Physics Concepts",
      document: "Introduction to Quantum Physics",
      cards: 32,
      studied: 28,
      createdAt: "3 days ago",
      tags: ["Physics", "Quantum", "Concepts"],
    },
    {
      id: "2",
      title: "Organic Chemistry Reactions",
      document: "Organic Chemistry Reactions",
      cards: 45,
      studied: 18,
      createdAt: "1 week ago",
      tags: ["Chemistry", "Reactions", "Study"],
    },
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");
  const [deckName, setDeckName] = useState("");
  const [cardCount, setCardCount] = useState(20);
  const [cardType, setCardType] = useState<"definition" | "qa" | "mixed">(
    "mixed"
  );

  const handleGenerateDeck = () => {
    if (!selectedDoc || !deckName) return;
    setIsGenerating(true);

    setTimeout(() => {
      const newDeck: FlashcardDeck = {
        id: String(decks.length + 1),
        title: deckName,
        document: selectedDoc,
        cards: cardCount,
        studied: 0,
        createdAt: "just now",
        tags: ["New", selectedDoc.split(" ")[0]],
      };
      setDecks([newDeck, ...decks]);
      setIsGenerating(false);
      setSelectedDoc("");
      setDeckName("");
      setCardCount(20);
      setCardType("mixed");
    }, 2000);
  };

  const studiedPercentage = (studied: number, total: number) =>
    Math.round((studied / total) * 100);

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-secondary" />
            Flashcards Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create smart flashcards from your study materials
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Generator Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Create New Deck
            </h2>

            <div className="space-y-6">
              {/* Deck Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Deck Name
                </label>
                <input
                  type="text"
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                  placeholder="e.g., Biology Chapter 5"
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

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

              {/* Card Count */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Number of Cards
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={cardCount}
                    onChange={(e) => setCardCount(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-lg font-bold text-secondary w-16 text-right">
                    {cardCount}
                  </span>
                </div>
              </div>

              {/* Card Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Card Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "definition", label: "Definition" },
                    { id: "qa", label: "Q&A" },
                    { id: "mixed", label: "Mixed" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() =>
                        setCardType(
                          type.id as "definition" | "qa" | "mixed"
                        )
                      }
                      className={`py-2 px-4 rounded-lg font-medium transition ${
                        cardType === type.id
                          ? "bg-secondary text-white"
                          : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Smart Options */}
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="images"
                    defaultChecked
                    className="w-4 h-4 rounded border-gray-300 text-secondary cursor-pointer"
                  />
                  <label htmlFor="images" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Include images and diagrams
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="audio"
                    className="w-4 h-4 rounded border-gray-300 text-secondary cursor-pointer"
                  />
                  <label htmlFor="audio" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Add audio pronunciation
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="examples"
                    defaultChecked
                    className="w-4 h-4 rounded border-gray-300 text-secondary cursor-pointer"
                  />
                  <label htmlFor="examples" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Include example sentences
                  </label>
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerateDeck}
                disabled={!selectedDoc || !deckName || isGenerating}
                className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 text-lg"
              >
                {isGenerating ? "Creating Deck..." : "Create Flashcard Deck"}
              </Button>
            </div>
          </div>

          {/* Study Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 rounded-xl p-6 border border-secondary/20 dark:border-secondary/30">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Study Progress
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Decks
                  </span>
                  <span className="text-2xl font-bold text-secondary">
                    {decks.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Cards
                  </span>
                  <span className="text-2xl font-bold text-blue-500">
                    {decks.reduce((sum, d) => sum + d.cards, 0)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Avg. Mastery
                  </span>
                  <span className="text-2xl font-bold text-green-500">
                    {decks.length > 0
                      ? Math.round(
                          decks.reduce((sum, d) => sum + studiedPercentage(d.studied, d.cards), 0) /
                            decks.length
                        )
                      : 0}
                    %
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <p className="text-sm text-purple-700 dark:text-purple-300">
                🎯 <strong>Tip:</strong> Use spaced repetition to maximize
                retention!
              </p>
            </div>
          </div>
        </div>

        {/* Flashcard Decks */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your Decks
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {decks.length} decks
            </span>
          </div>

          {decks.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No flashcard decks yet. Create your first deck above!
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create Deck
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {decks.map((deck) => {
                const percentage = studiedPercentage(deck.studied, deck.cards);
                return (
                  <div
                    key={deck.id}
                    className="p-6 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition border border-gray-200 dark:border-slate-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {deck.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {deck.document}
                        </p>
                      </div>
                      <span className="text-xs bg-secondary/10 dark:bg-secondary/20 text-secondary px-2 py-1 rounded">
                        {deck.cards} cards
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Progress
                        </span>
                        <span className="text-sm font-semibold text-secondary">
                          {percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-600 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-secondary h-full transition-all"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      {deck.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary/10 dark:bg-primary/20 text-primary px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                        {deck.createdAt}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-secondary hover:bg-secondary/90 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Study
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
                );
              })}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
