"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  Layers,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: "all" | "fullstack" | "realtime" | "frontend";
  categoryLabel: string;
  description: string;
  architecture: string;
  tech: string[];
  github: string;
  live?: string;
  stats: { stars: number; forks: number };
  gradient: string;
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      title: "JobNest",
      category: "fullstack",
      categoryLabel: "Full-Stack Recruitment Platform",
      description:
        "Comprehensive enterprise recruitment system featuring secure JWT authentication, role-based access control (Candidates & Employers), job application tracking, and automated candidate filtering.",
      architecture: "Next.js Frontend + Django REST API + PostgreSQL + JWT Session Flow",
      tech: ["Next.js", "Django", "Python", "JWT", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/JobNest",
      stats: { stars: 12, forks: 4 },
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "RealTime Chat",
      category: "realtime",
      categoryLabel: "Low-Latency WebSocket Engine",
      description:
        "High-performance event-driven instant messaging application with bi-directional streaming, live typing indicators, room segregation, and instant notifications.",
      architecture: "Socket.IO Protocol + Node.js Event Loop + Reactive Next.js UI",
      tech: ["Next.js", "Socket.IO", "WebSockets", "Node.js", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/RealTimeChat",
      stats: { stars: 15, forks: 7 },
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "DevFinder",
      category: "frontend",
      categoryLabel: "GitHub Developer Analytics Hub",
      description:
        "Developer intelligence platform aggregating GitHub accounts with real-time profile exploration, deep repository inspection, contribution graphs, and tech stack detection.",
      architecture: "Next.js Static Generation + GitHub REST API v3 + Debounced Search",
      tech: ["Next.js", "GitHub API", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/DevFinder",
      stats: { stars: 8, forks: 2 },
      gradient: "from-orange-500 to-amber-600",
    },
    {
      title: "BookShelfPro",
      category: "frontend",
      categoryLabel: "SaaS Digital Library Manager",
      description:
        "Modern cloud library application for cataloging, reading status workflow tracking, ratings, and instant search across extensive book databases with persistent state.",
      architecture: "React Component Hierarchy + Vercel Edge Serverless Deployment",
      tech: ["Next.js", "React", "State Management", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/BookShelfPro",
      live: "https://book-shelf-pro.vercel.app/",
      stats: { stars: 6, forks: 3 },
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "NextCart",
      category: "frontend",
      categoryLabel: "High-Performance E-Commerce Engine",
      description:
        "Ultra-responsive storefront application featuring atomic cart state synchronization, optimistic UI updates, inventory verification, and seamless checkout pipelines.",
      architecture: "Next.js + React Context API + LocalStorage Persist Engine",
      tech: ["Next.js", "Context API", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/NextCart",
      stats: { stars: 10, forks: 5 },
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Repositories" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "realtime", label: "Real-Time / Sockets" },
    { id: "frontend", label: "Frontend & APIs" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 bg-[#030712] overflow-hidden cyber-dots">
      {/* Background Neon Halo */}
      <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <Layers className="w-3 h-3" />
            <span>SHOWCASE // 03</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            FEATURED ENGINEERING WORK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm font-light pt-2">
            Selected systems, architectures, and open-source applications built for production.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                filter === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Showcase Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Luminous Top Edge Accent */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                  
                  {/* Category & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                        {project.categoryLabel}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-slate-400" />
                          {project.stats.forks}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Architecture Blueprint Note */}
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400">
                    <span className="text-cyan-400 font-semibold block text-[10px]">ARCHITECTURE:</span>
                    {project.architecture}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[10px] font-mono border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-slate-800/60 hover:bg-slate-700/60 border-slate-700 hover:border-cyan-500/50 text-slate-200 text-xs font-mono"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Source Code</span>
                      </a>
                    </Button>

                    {project.live && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono px-3"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Direct Link Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-slate-800 hover:border-cyan-500/50 bg-slate-900/60 text-slate-300 hover:text-white px-6 py-5 rounded-xl font-mono text-xs"
          >
            <a
              href="https://github.com/khannaveed2310"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Explore All 15+ Repositories on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}