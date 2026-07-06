"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layers, Zap, Shield, GitBranch } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Craftsmanship",
      description: "Building responsive, accessible interfaces with Next.js, React, and TypeScript.",
      color: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5",
      iconColor: "text-blue-500",
    },
    {
      icon: Server,
      title: "Backend Engineering",
      description: "Designing robust APIs and microservices with Django and Django REST Framework.",
      color: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5",
      iconColor: "text-purple-500",
    },
    {
      icon: Layers,
      title: "Cloud Infrastructure",
      description: "Deploying and scaling applications on AWS with Docker and Nginx.",
      color: "from-orange-500/10 to-yellow-500/10 dark:from-orange-500/5 dark:to-yellow-500/5",
      iconColor: "text-orange-500",
    },
    {
      icon: Zap,
      title: "Real-Time Systems",
      description: "Building WebSocket applications with Socket.IO for instant communication.",
      color: "from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5",
      iconColor: "text-green-500",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Implementing JWT authentication, input validation, and secure practices.",
      color: "from-red-500/10 to-rose-500/10 dark:from-red-500/5 dark:to-rose-500/5",
      iconColor: "text-red-500",
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description: "Automating deployments with GitHub Actions and PM2 process management.",
      color: "from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/5 dark:to-violet-500/5",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Master Content Splits */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Column A: Profile Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer Decorative Gradient Frames */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-6 scale-105 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3 scale-110 opacity-10" />
              
              {/* Profile Image Wrap */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 dark:border-slate-800/50 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Mohd Naveed Khan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Column B: Text Bio & Performance Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Hi, I'm Mohd Naveed Khan 👋
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm a passionate Software Engineer who loves building scalable web applications
                and real-time systems. My approach combines clean frontend experiences with robust
                backend architectures.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                From configuring Nginx on bare-metal servers to optimizing React components for
                performance, I enjoy working across the entire stack. I'm always exploring new
                technologies to deliver exceptional digital experiences.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl bg-gradient-to-br ${item.color} border border-slate-200/60 dark:border-slate-900/50 flex flex-col justify-between`}
                >
                  <div>
                    <item.icon className={`w-5 h-5 ${item.iconColor} mb-2.5`} />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
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