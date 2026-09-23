"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layers,
  Zap,
  ShieldCheck,
  GitBranch,
  Clock,
  MapPin,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(istTime);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const capabilities = [
    {
      icon: Code2,
      title: "Frontend Craftsmanship",
      description: "Pixel-perfect, ultra-fast interfaces using Next.js 14/13, React, Tailwind CSS, and Framer Motion.",
      badge: "UI / UX",
      glow: "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
      iconColor: "text-cyan-400",
    },
    {
      icon: Server,
      title: "Backend Engineering",
      description: "High-throughput APIs, GraphQL engines (Saleor 3.0), and REST controllers built with Django & Python.",
      badge: "Architecture",
      glow: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
      iconColor: "text-purple-400",
    },
    {
      icon: Layers,
      title: "Cloud Infrastructure",
      description: "Docker containerization, AWS deployments, Nginx edge reverse proxying, and bare-metal server tuning.",
      badge: "DevOps",
      glow: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
      iconColor: "text-blue-400",
    },
    {
      icon: Zap,
      title: "Real-Time Systems",
      description: "Low-latency WebSocket event streams and live messaging platforms powered by Socket.IO.",
      badge: "WebSockets",
      glow: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
      iconColor: "text-emerald-400",
    },
    {
      icon: ShieldCheck,
      title: "Security & Validation",
      description: "JWT session governance, RBAC role-based authorization, sanitization, and automated input validation.",
      badge: "Security",
      glow: "hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]",
      iconColor: "text-rose-400",
    },
    {
      icon: GitBranch,
      title: "CI/CD & Automation",
      description: "Streamlined deployment pipelines using GitHub Actions, PM2 process management, and automated test gates.",
      badge: "Pipelines",
      glow: "hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#030712] overflow-hidden cyber-dots">
      {/* Decorative Neon Conduits */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <Terminal className="w-3 h-3" />
            <span>DOSSIER // 01</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            ENGINEER IDENTITY & PHILOSOPHY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Master Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Holographic Photo & Telemetry (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Holographic Card Frame */}
            <div className="relative group rounded-3xl p-1 bg-gradient-to-br from-cyan-500/30 via-slate-800 to-purple-600/30 shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950 border border-slate-800">
                {/* Image Wrap */}
                <div className="relative w-full aspect-square max-h-[380px] overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Mohd Naveed Khan"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Photo Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700/80">
                    <span className="text-cyan-300 font-bold">MOHD NAVEED KHAN</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time Telemetry HUD Box */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> LOCAL TIME (IST):
                </span>
                <span className="text-cyan-300 font-bold">{localTime || "SYNCING..."}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" /> LOCATION:
                </span>
                <span className="text-slate-200">Hyderabad / Remote Worldwide</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> FOCUS:
                </span>
                <span className="text-emerald-300 font-semibold">Production Scalability</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Directives Grid (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Architecting the modern web with precision and velocity.
              </h3>
              <p className="text-slate-300 leading-relaxed font-light text-base">
                I am a Software Engineer who merges meticulous frontend craftsmanship with heavy-duty backend engineering.
                Whether it is building custom GraphQL extensions for enterprise e-commerce (Saleor 3.0), designing microservices in Django,
                or architecting real-time WebSocket applications in Next.js, I engineer systems that are built to last.
              </p>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                My workflow spans the entire digital lifecycle: from UI motion choreography and zero-compromise accessibility to bare-metal Nginx configurations,
                Dockerized staging clusters, and automated CI/CD pipelines.
              </p>
            </div>

            {/* Directives & Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-300 flex flex-col justify-between group ${item.glow}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-tight pt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}