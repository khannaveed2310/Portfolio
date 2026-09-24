"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "khan23naveed@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden cyber-dots">
      {/* Background Ambience */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
            <MessageSquare className="w-3 h-3 text-cyan-400" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            LET&apos;S BUILD SOMETHING
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm font-light pt-2">
            I am always open to discussing new opportunities, high-throughput architectures, or joining visionary engineering teams.
          </p>
        </motion.div>

        {/* Horizontal Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                  Primary
                </span>
              </div>
              <div className="text-left space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</div>
                <div className="text-base font-bold text-white font-mono truncate">
                  {emailAddress}
                </div>
                <p className="text-xs text-slate-400 font-light pt-1 leading-relaxed">
                  Best for engineering inquiries, role proposals, and technical discussions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-6 mt-4 border-t border-slate-800/80">
              <Button
                asChild
                size="sm"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono"
              >
                <a href={`mailto:${emailAddress}`} className="flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </Button>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/50">
                  Network
                </span>
              </div>
              <div className="text-left space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">LinkedIn Profile</div>
                <div className="text-base font-bold text-white tracking-tight truncate">
                  Mohd Naveed Khan
                </div>
                <p className="text-xs text-slate-400 font-light pt-1 leading-relaxed">
                  Connect professionally, review career background, and reach out directly.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/80">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full bg-slate-800/60 hover:bg-slate-700/60 border-slate-700 hover:border-blue-500/50 text-slate-200 text-xs font-mono"
              >
                <a
                  href="https://www.linkedin.com/in/mohd-naveed-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Card 3: GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/50">
                  Repositories
                </span>
              </div>
              <div className="text-left space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">GitHub Hub</div>
                <div className="text-base font-bold text-white font-mono truncate">
                  @khannaveed2310
                </div>
                <p className="text-xs text-slate-400 font-light pt-1 leading-relaxed">
                  Explore full-stack source code, architecture repositories, and commit history.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/80">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full bg-slate-800/60 hover:bg-slate-700/60 border-slate-700 hover:border-purple-500/50 text-slate-200 text-xs font-mono"
              >
                <a
                  href="https://github.com/khannaveed2310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5"
                >
                  <span>Explore GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                </a>
              </Button>
            </div>
          </motion.div>

        </div>

        {/* Status Telemetry Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/70 to-purple-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Status: Open for Software Engineering Opportunities</div>
              <div className="text-xs text-slate-400">Available for Full-Time SDE Roles, High-Impact Web Applications &amp; Remote Contracts</div>
            </div>
          </div>
          <div className="text-xs font-mono text-cyan-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
            Avg. Response Time: &lt; 24h
          </div>
        </motion.div>

      </div>
    </section>
  );
}