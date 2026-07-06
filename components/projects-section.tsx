"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "JobNest",
      description: "Full-stack job board with JWT auth, role-based access, and real-time applications.",
      tech: ["Next.js", "Django", "JWT", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/JobNest",
      gradient: "from-blue-600 to-cyan-600",
      stats: { stars: 12, forks: 4 },
    },
    {
      title: "DevFinder",
      description: "GitHub profile explorer with search, repo viewer, and developer insights.",
      tech: ["Next.js", "GitHub API", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/DevFinder",
      gradient: "from-orange-600 to-red-600",
      stats: { stars: 8, forks: 2 },
    },
    {
      title: "BookShelfPro",
      description: "Modern book management app with responsive design and intuitive interface.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/BookShelfPro",
      live: "https://book-shelf-pro.vercel.app/",
      gradient: "from-amber-600 to-orange-600",
      stats: { stars: 6, forks: 3 },
    },
    {
      title: "NextCart",
      description: "E-commerce cart with Context API state management and responsive UI.",
      tech: ["Next.js", "Context API", "Tailwind CSS"],
      github: "https://github.com/khannaveed2310/NextCart",
      gradient: "from-pink-600 to-rose-600",
      stats: { stars: 10, forks: 5 },
    },
    {
      title: "RealTime Chat",
      description: "WebSocket-based chat application with instant messaging and responsive design.",
      tech: ["Next.js", "Socket.IO", "WebSockets"],
      github: "https://github.com/khannaveed2310/RealTimeChat",
      gradient: "from-green-600 to-emerald-600",
      stats: { stars: 15, forks: 7 },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
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
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {project.stats.forks}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    </Button>
                    {"live" in project && project.live && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}