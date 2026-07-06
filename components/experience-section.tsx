"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer (SDE-1)",
      company: "Coneio Exim Pvt Ltd",
      location: "Hyderabad",
      period: "May 2025 - Present",
      description:
        "Building scalable B2B e-commerce platforms with Saleor 3.0 and GraphQL.",
      achievements: [
        "Built B2B platform with Saleor 3.0 and GraphQL",
        "Extended GraphQL APIs for product ratings",
        "Integrated Microsoft Dynamics 365 CRM",
        "Managed CI/CD deployments",
      ],
    },
    {
      title: "Backend Operations Associate",
      company: "Samsung Service Center",
      location: "Azamgarh",
      period: "Jan 2024 - Apr 2025",
      description: "Managed service center operations through Samsung's GSPN portal.",
      achievements: [
        "Operated Samsung's GSPN portal",
        "Managed repair job workflows",
        "Tracked parts inventory",
        "Ensured SOP compliance",
      ],
    },
    {
      title: "Web Developer Associate",
      company: "Mahira Technology (Intern)",
      location: "Pune",
      period: "Nov 2022 - Apr 2023",
      description: "Developed responsive web interfaces and integrated REST APIs.",
      achievements: [
        "Built user-facing features with HTML, CSS, JavaScript",
        "Integrated REST APIs",
        "Fixed UI bugs and performance issues",
        "Shipped code to production",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2 px-4 md:px-8">
                  <Card className="hover:shadow-xl transition-shadow duration-300 border-slate-200 dark:border-slate-800">
                    <CardContent className="p-6">
                      {/* Period */}
                      <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 mb-4">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Empty Space */}
                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}