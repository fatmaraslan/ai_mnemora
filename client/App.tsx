import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import DocumentViewer from "./pages/DocumentViewer";
import StudyGroups from "./pages/StudyGroups";
import StudyGroupChat from "./pages/StudyGroupChat";
import MyChats from "./pages/MyChats";
import ChatConversation from "./pages/ChatConversation";
import Community from "./pages/Community";
import Planner from "./pages/Planner";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import FocusMode from "./pages/FocusMode";
import StudyMusic from "./pages/StudyMusic";
import Settings from "./pages/Settings";
import Upgrade from "./pages/Upgrade";
import Payment from "./pages/Payment";
import QuizGenerator from "./pages/QuizGenerator";
import FlashcardsGenerator from "./pages/FlashcardsGenerator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/document/:id" element={<DocumentViewer />} />
            <Route path="/study-groups" element={<StudyGroups />} />
            <Route path="/study-group/:id" element={<StudyGroupChat />} />
            <Route path="/my-chats" element={<MyChats />} />
            <Route path="/chat/:id" element={<ChatConversation />} />
            <Route path="/community" element={<Community />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/focus-mode" element={<FocusMode />} />
            <Route path="/study-music" element={<StudyMusic />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/quiz-generator" element={<QuizGenerator />} />
            <Route path="/flashcards-generator" element={<FlashcardsGenerator />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
