"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      toast.error("Please enter a valid mobile number.");
      return;
    }
    setLoading(true);
    // Simulate API call for sending OTP via Twilio/Supabase
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      toast.success("OTP sent successfully!");
    }, 1500);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      toast.error("Please enter the complete OTP.");
      return;
    }
    setLoading(true);
    // Simulate API call for verifying OTP
    setTimeout(() => {
      setLoading(false);
      toast.success("Login successful!");
      router.push("/onboarding");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-neutral-950/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome to Consistify.ai</h1>
            <p className="text-gray-400 text-sm">
              {step === "phone" ? "Enter your mobile number to sign in or create an account." : "Enter the verification code sent to your phone."}
            </p>
          </div>

          {step === "phone" ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-semibold rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Verification Code (OTP)</label>
                <div className="relative">
                  <CheckCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-center tracking-widest text-lg"
                    maxLength={6}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify & Login"}
              </button>
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  Use a different number
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
