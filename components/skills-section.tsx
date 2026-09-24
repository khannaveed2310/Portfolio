"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, Sparkles, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  category: "all" | "languages" | "frontend" | "backend" | "cloud";
  icon: string;
  proficiency: string;
  tagline: string;
  accent: string;
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const skills: SkillItem[] = [
    {
      name: "Python",
      category: "languages",
      icon: "/python.png",
      proficiency: "Advanced",
      tagline: "Core scripting, Django backends, automation",
      accent: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    },
    {
      name: "TypeScript",
      category: "languages",
      icon: "/ts.png",
      proficiency: "Advanced",
      tagline: "Strict type safety, generics, modern schemas",
      accent: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    },
    {
      name: "JavaScript",
      category: "languages",
      icon: "/javascript.png",
      proficiency: "Advanced",
      tagline: "ES6+, event loop, asynchronous architectures",
      accent: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: "/next.png",
      proficiency: "Expert",
      tagline: "App Router, SSR, Server Actions, SEO engines",
      accent: "group-hover:border-slate-400/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    },
    {
      name: "React",
      category: "frontend",
      icon: "/React.png",
      proficiency: "Expert",
      tagline: "Custom hooks, performance optimization, contexts",
      accent: "group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    },
    {
      name: "Django",
      category: "backend",
      icon: "/django.png",
      proficiency: "Advanced",
      tagline: "DRF controllers, ORM query tuning, auth systems",
      accent: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: "/tailwindcss.png",
      proficiency: "Expert",
      tagline: "Fluid responsiveness, custom design tokens",
      accent: "group-hover:border-teal-400/50 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]",
    },
    {
      name: "AWS",
      category: "cloud",
      icon: "/aws.png",
      proficiency: "Intermediate",
      tagline: "EC2 instances, S3 storage, IAM security policies",
      accent: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    },
    {
      name: "Docker",
      category: "cloud",
      icon: "/docker.png",
      proficiency: "Intermediate",
      tagline: "Multi-stage builds, container isolation, compose",
      accent: "group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]",
    },
    {
      name: "Nginx",
      category: "cloud",
      icon: "/Nginx.png",
      proficiency: "Advanced",
      tagline: "Reverse proxying, SSL termination, load balancing",
      accent: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
    },
  ];

  const categories = [
    { id: "all", label: "All Arsenal" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend Core" },
    { id: "backend", label: "Backend & APIs" },
    { id: "cloud", label: "Cloud & Ops" },
  ];

  const filteredSkills =
    activeTab === "all" ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-28 bg-[#030712] overflow-hidden cyber-grid">
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3 h-3" />
            <span>ARSENAL // 02</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            TECHNICAL MATRIX & ARSENAL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm font-light pt-2">
            Engineered tools and runtime frameworks deployed to solve complex business problems.
          </p>
        </motion.div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className={`group relative p-5 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-300 flex flex-col justify-between ${skill.accent}`}
              >
                {/* Header: Icon & Proficiency */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800/90 text-cyan-300 border border-slate-700/50">
                    {skill.proficiency}
                  </span>
                </div>

                {/* Body: Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {skill.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Architectural Directives Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full-Spectrum Engineering Capability</div>
              <div className="text-xs text-slate-400">From low-level Linux daemon management to modern React component architecture</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">GraphQL / REST</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">WebSocket Channels</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">CI/CD Deployments</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">Linux / Nginx Ops</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}