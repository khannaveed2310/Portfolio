"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, FileDown, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveTerminal } from "@/components/interactive-terminal";

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
];

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [decodedText, setDecodedText] = useState(ROLES[0]);

  // Cyber decoder text effect
  useEffect(() => {
    const targetText = ROLES[roleIndex];
    let iteration = 0;
    const interval = setInterval(() => {
      setDecodedText(() =>
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);

    const switchTimeout = setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(switchTimeout);
    };
  }, [roleIndex]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-x-hidden bg-[#030712] cyber-grid"
    >
      {/* Background Glowing Energy Spheres */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-[30rem] h-64 sm:h-[30rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Overlay Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/70 to-[#030712] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand & Hero Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-5 w-full min-w-0"
          >
            {/* Telemetry Status Chip */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] max-w-full overflow-hidden"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block shrink-0" />
              <span className="text-cyan-300 font-semibold tracking-wide whitespace-nowrap">SYSTEM READY</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 truncate">OPEN FOR HIGH-IMPACT ROLES</span>
            </motion.div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                MOHD NAVEED <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                  KHAN
                </span>
                <span className="text-cyan-400 animate-pulse">_</span>
              </h1>

              {/* Cyber Glitch Role Decoder */}
              <div className="h-10 flex items-center overflow-hidden">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mr-2 select-none shrink-0">
                  // ROLE:
                </span>
                <span className="text-sm sm:text-xl font-mono font-bold text-slate-100 tracking-wider bg-slate-900/60 px-3 py-1 rounded-md border border-cyan-500/20 text-glow-cyan truncate">
                  {decodedText}
                </span>
              </div>
            </div>

            {/* Strategic Value Proposition */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light w-full">
              Architecting resilient, production-grade web systems. From ultra-fluid{" "}
              <span className="text-cyan-300 font-medium">Next.js &amp; React</span> frontends to scalable{" "}
              <span className="text-purple-300 font-medium">Django &amp; GraphQL</span> microservices deployed on{" "}
              <span className="text-emerald-300 font-medium">AWS &amp; Docker</span>.
            </p>

            {/* Interactive Call to Action Group */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold px-5 sm:px-7 py-5 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 border border-cyan-300/40 text-sm"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                  <Zap className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  Initiate Collaboration
                </span>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-700 hover:border-cyan-500/60 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 px-5 sm:px-6 py-5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300"
              >
                <a href="/MohdNaveedKhan_.pdf" download className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  Download Dossier
                </a>
              </Button>
            </div>

            {/* Quick Metrics Matrix Grid — full width on mobile, constrained on lg */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-5 border-t border-slate-800/80 w-full">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 min-w-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">3+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider leading-tight mt-0.5">Years Exp.</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 min-w-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400">15+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider leading-tight mt-0.5">Repositories</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 min-w-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">99.9%</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider leading-tight mt-0.5">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Developer CLI Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full min-w-0"
          >
            {/* Futuristic Aura Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-emerald-500/30 rounded-3xl blur-xl opacity-75 transition duration-1000 -z-10" />
            <InteractiveTerminal />
          </motion.div>

        </div>

        {/* Scroll Journey Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center cursor-pointer group"
          onClick={scrollToAbout}
        >
          <span className="text-[10px] font-mono tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors uppercase">
            Scroll to Explore Architecture
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="mt-2 p-2 rounded-full border border-slate-800 bg-slate-900/60 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
          >
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}