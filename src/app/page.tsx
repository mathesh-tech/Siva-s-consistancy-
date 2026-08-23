"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Flame, BrainCircuit, Activity } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] mix-blend-screen opacity-50" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        
        {/* Header/Logo area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-8 left-8 flex items-center justify-between w-[calc(100%-4rem)]"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white/90">Consistify<span className="text-indigo-400">.ai</span></span>
          </div>
          <ThemeToggle />
        </motion.div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 font-medium mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Your AI Accountability Partner
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Never break your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              promises to yourself.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Consistify uses AI-driven insights, smart reminders, and powerful gamification to help you master your habits, crush your goals, and become the best version of yourself.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/login" className="w-full sm:w-auto">
              <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Start Building Habits <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm w-full sm:w-auto">
              See How It Works
            </button>
          </motion.div>
        </div>

        {/* Feature Cards Showcase */}
        <div className="w-full max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative h-full bg-neutral-950/80 backdrop-blur-xl rounded-[23px] p-8 flex flex-col items-start border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                <BrainCircuit className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Coach</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Personalized insights that learn from your behavior. Know your peak productivity hours and when you need a push.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] overflow-hidden md:-translate-y-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative h-full bg-neutral-950/80 backdrop-blur-xl rounded-[23px] p-8 flex flex-col items-start border border-white/5 shadow-2xl shadow-black/50">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30">
                <Flame className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unbreakable Streaks</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gamify your life. Build streaks for studying, LeetCode, or working out. Earn badges and dominate your goals.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent p-[1px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative h-full bg-neutral-950/80 backdrop-blur-xl rounded-[23px] p-8 flex flex-col items-start border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Reminders</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Choose your accountability style. Gentle nudges or strict warnings before you lose your momentum.
              </p>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
