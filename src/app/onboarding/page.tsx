"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles, BookOpen, Code2, Dumbbell, BrainCircuit, Goal, Clock, LayoutDashboard } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const goals = [
  { id: "study", label: "Study", icon: BookOpen },
  { id: "leetcode", label: "LeetCode", icon: Code2 },
  { id: "exercise", label: "Exercise", icon: Dumbbell },
  { id: "reading", label: "Reading", icon: BookOpen },
  { id: "projects", label: "Projects", icon: Goal },
];

const reminderStyles = [
  { id: "friendly", label: "Friendly", desc: "\"Hi! Don't forget your study session!\"" },
  { id: "motivational", label: "Motivational", desc: "\"You're one step closer to your dream job.\"" },
  { id: "strict", label: "Strict", desc: "\"Your consistency score drops if you skip this.\"" },
  { id: "funny", label: "Funny", desc: "\"Even your future self is waiting for you to finish.\"" },
  { id: "ai", label: "AI Coach", desc: "Dynamic insights based on your behavior." },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [reminderStyle, setReminderStyle] = useState("");

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const finishSetup = () => {
    toast.success("Profile setup complete!");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Background glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-indigo-400">Step {step} of 5</span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-500 rounded-full"
              initial={{ width: "20%" }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="bg-neutral-950/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold mb-2">What should we call you?</h2>
                <p className="text-gray-400 mb-8">Let's start by getting to know you better.</p>
                
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white text-xl placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  autoFocus
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold mb-2">What are your goals?</h2>
                <p className="text-gray-400 mb-8">Select the areas you want to build consistency in.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {goals.map(goal => (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                        selectedGoals.includes(goal.id) 
                        ? "bg-indigo-600/20 border-indigo-500" 
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <goal.icon className={`w-5 h-5 ${selectedGoals.includes(goal.id) ? "text-indigo-400" : "text-gray-400"}`} />
                      <span className={selectedGoals.includes(goal.id) ? "text-white" : "text-gray-300"}>{goal.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                  <Goal className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Set Daily Targets</h2>
                <p className="text-gray-400 mb-8">How much time do you want to dedicate each day?</p>
                
                <div className="space-y-4">
                  {selectedGoals.length === 0 ? (
                    <p className="text-gray-500 italic">No specific goals selected. We'll set up general productivity targets.</p>
                  ) : (
                    selectedGoals.map(goal => (
                      <div key={goal} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                        <span className="capitalize font-medium">{goal}</span>
                        <select className="bg-black border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500">
                          <option>30 mins / day</option>
                          <option>1 hour / day</option>
                          <option>2 hours / day</option>
                        </select>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Choose Reminder Style</h2>
                <p className="text-gray-400 mb-8">How would you like Consistify to motivate you?</p>
                
                <div className="space-y-3">
                  {reminderStyles.map(style => (
                    <button
                      key={style.id}
                      onClick={() => setReminderStyle(style.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        reminderStyle === style.id 
                        ? "bg-indigo-600/20 border-indigo-500" 
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="font-semibold text-white mb-1">{style.label}</div>
                      <div className="text-sm text-gray-400 italic">{style.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-8"
              >
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/50">
                  <Check className="w-10 h-10 text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">You're all set, {name || "Friend"}!</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                  Your personalized accountability partner is ready. Let's build those unbreakable streaks.
                </p>
                <button
                  onClick={finishSetup}
                  className="bg-white text-black font-semibold rounded-full px-8 py-4 flex items-center gap-2 hover:bg-gray-100 transition-transform hover:scale-105 active:scale-95"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Go to Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex justify-between items-center pt-8 mt-auto border-t border-white/10">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition-colors ${
                  step === 1 ? "opacity-0 pointer-events-none" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <button
                onClick={nextStep}
                disabled={step === 1 && !name.trim()}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white font-medium px-6 py-2.5 rounded-full transition-all"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
