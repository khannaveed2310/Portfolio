"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Role-Based Job Portal",
      description:
        "A comprehensive job portal with role-based authentication, featuring employer and job seeker dashboards, application tracking.",
      tech: ["Next.js", "Django REST", "SQLite", "TailwindCSS"],
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      github: "https://github.com/khannaveed2310/JobNest",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "DevFinder",
      description:
        "A GitHub user search tool built with Next.js and GitHub Open API. Allows users to search for any GitHub username and view profile details including bio, repositories, followers, and more, with dark/light mode support.",
      tech: ["Next.js", "GitHub API", "TailwindCSS", "TypeScript"],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      github: "https://github.com/khannaveed2310/DevFinder",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "NextCart",
      description:
        "An e-commerce shopping cart built with Next.js. Features include product listing, add-to-cart, quantity management, and responsive UI with TailwindCSS. Designed with scalable architecture to support future checkout and payment integration.",
      tech: ["Next.js", "React Hooks", "TailwindCSS", "Context API"],
      image:
        "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg",
      github: "https://github.com/khannaveed2310/NextCart",
      color: "from-pink-500 to-yellow-500",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A modern chat application with real-time messaging using WebSocket connections.",
      tech: ["Next.js", "Socket.IO"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      github: "https://github.com/khannaveed2310/RealTimeChat",
      color: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div
                  className={`h-48 bg-gradient-to-r ${project.color} relative`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Project Content */}
                <CardContent className="p-6 flex flex-col flex-1">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Button */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </a>
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
