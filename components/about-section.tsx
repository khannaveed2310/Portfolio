"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function AboutSection() {
  const skills = [
    "Next.js",
    "Django REST Framework",
    "TailwindCSS",
    "AWS (EC2, RDS, Docker)",
    "Saleor",
    "WebSockets",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white dark:bg-slate-800 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile.jpg" 
                  alt="Naveed"
                  width={288} 
                  height={288}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer with expertise in building
              scalable web applications and real-time systems. With a strong
              foundation in full-stack development, I create efficient solutions
              that bridge front-end user experiences with robust back-end
              architectures.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My experience spans across modern web technologies, cloud
              platforms, and real-time communication systems. I'm always
              exploring new technologies and best practices to deliver
              exceptional digital experiences.
            </p>

            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
