"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    { name: "Python", icon: "/python.png" },
    { name: "Django", icon: "/django.png" },
    { name: "Next.js", icon: "/next.png" },
    { name: "React", icon: "/React.png" },
    { name: "TypeScript", icon: "/ts.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "Tailwind CSS", icon: "/tailwindcss.png" },
    { name: "AWS", icon: "/aws.png" },
    { name: "Docker", icon: "/docker.png" },
    { name: "Nginx", icon: "/Nginx.png" },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Technologies I work with to build modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}