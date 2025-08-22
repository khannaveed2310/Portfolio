"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    { name: "Python", icon: "/python.png" },
    { name: "Django", icon: "/django.png" },
    { name: "Next.js", icon: "/next.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "Tailwind", icon: "/tailwindcss.png" },
    { name: "AWS", icon: "/aws.png" },
    { name: "Docker", icon: "/docker.png" },
    
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We put your ideas and thus your wishes in the form of unique
            projects that inspire you and your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-7  gap-8 md:gap-12">
          {skills.map((skill, index) => {
            // Smaller size for Next.js, Django, AWS
            const isSmaller = ["Next.js", "Django",].includes(skill.name);
            const iconSize = isSmaller ? "h-7 w-auto" : "h-12 w-auto";

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Dark Circle with Logo */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className={`${iconSize} object-contain`}
                  />
                </div>

                {/* Name */}
                <h3 className="text-purple-600 dark:text-purple-400 text-lg md:text-xl font-semibold text-center">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
