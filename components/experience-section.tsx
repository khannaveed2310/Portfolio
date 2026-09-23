"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, GitCommit, Rocket } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer (SDE-1)",
      company: "Coneio Exim Pvt Ltd",
      location: "Hyderabad, India",
      period: "May 2025 - Present",
      type: "Full-Time",
      description:
        "Leading core development on scalable B2B enterprise e-commerce platforms powered by Saleor 3.0 and GraphQL.",
      achievements: [
        "Architected multi-tenant B2B platform with Saleor 3.0 and GraphQL endpoints",
        "Engineered custom GraphQL schema extensions for product rating & review telemetry",
        "Integrated Microsoft Dynamics 365 CRM for bidirectional customer and order sync",
        "Supervised Dockerized CI/CD deployments and production server reliability",
      ],
      skills: ["Saleor 3.0", "GraphQL", "Python", "Dynamics 365", "Docker", "CI/CD"],
      accent: "border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]",
      badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-800/60",
    },
    {
      title: "Backend Operations Associate",
      company: "Samsung Service Center",
      location: "Azamgarh, India",
      period: "Jan 2024 - Apr 2025",
      type: "Full-Time",
      description:
        "Managed mission-critical backend service center operations, workflows, and database record keeping through Samsung's GSPN portal.",
      achievements: [
        "Operated Samsung's Global Service Partner Network (GSPN) enterprise portal",
        "Streamlined repair job lifecycle tracking and technical diagnostics recording",
        "Managed high-precision parts inventory reconciliation and dispatch pipelines",
        "Enforced strict SOP compliance and operational accuracy audits",
      ],
      skills: ["GSPN Enterprise Portal", "Operational Workflows", "Inventory Systems", "SOP Audits"],
      accent: "border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.15)]",
      badgeColor: "bg-purple-950/80 text-purple-300 border-purple-800/60",
    },
    {
      title: "Web Developer Associate (Intern)",
      company: "Mahira Technology",
      location: "Pune, India",
      period: "Nov 2022 - Apr 2023",
      type: "Internship",
      description:
        "Developed responsive web interfaces, implemented dynamic UI components, and integrated third-party RESTful APIs.",
      achievements: [
        "Constructed responsive, mobile-first web pages with semantic HTML5, CSS3, and JavaScript",
        "Integrated asynchronous REST API endpoints for dynamic content rendering",
        "Triaged cross-browser rendering bugs and performance bottlenecks",
        "Collaborated with senior engineers to stage and ship production releases",
      ],
      skills: ["JavaScript", "HTML5/CSS3", "REST APIs", "Git", "Responsive UI"],
      accent: "border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)]",
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-800/60",
    },
  ];

  return (
    <section id="experience" className="relative py-28 bg-[#030712] overflow-hidden cyber-grid">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            <Rocket className="w-3 h-3" />
            <span>FLIGHT PATH // 04</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            ENGINEERING FLIGHT PATH
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent mx-auto rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm font-light pt-2">
            Chronological progression of production impact, systems architecture, and engineering roles.
          </p>
        </motion.div>

        {/* Timeline Circuit Container */}
        <div className="relative">
          {/* Vertical Neon Circuit Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Central Circuit Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.9)] z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 px-0 md:px-8"
                  >
                    <div className={`p-6 sm:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border ${exp.accent} space-y-4`}>
                      
                      {/* Period Badge & Type */}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono">
                          <span className="flex items-center gap-1 text-slate-200">
                            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                            {exp.company}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Narrative */}
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements List */}
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px] font-mono border border-slate-700/60"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}