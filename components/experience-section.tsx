"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Software Engineer Frontend Developer',
      company: 'Coneio Exim Pvt Ltd.',
      period: 'May 2025 - Present',
      description: 'Working as a Frontend Developer on a B2B e-commerce platform, I focus on enhancing user experience and implementing modular features. I collaborate with the backend and deployment processes to ensure smooth updates, and contribute to building scalable and maintainable solutions.',
      achievements: [
        'Developed and maintained the backend for a B2B e-commerce platform using Saleor 3.0.',
        'Customized Saleor backend and dashboard to add product and variant ratings.',
        'Managed website updates and ensured smooth deployment to production environments.'
      ]
    },
    {
      title: 'Technical Support',
      company: 'Samsung Service Center',
      location: "Azamgarh, UP",
      period: 'Jan 2024 - April 2025',
      description: 'Managed customer service requests using Samsung’s inbuilt support software, ensuring all issues were accurately logged, tracked, and resolved. Coordinated with hardware engineers to assign and update service calls, maintaining smooth workflows and timely issue resolution. Monitored all service requests to ensure completion and accurate record-keeping, improving operational efficiency and customer satisfaction.',
      achievements: [
        'Efficiently diagnosed and resolved software issues for a wide range of Samsung devices, ensuring minimal downtime for customers',
        'Provided clear guidance and support to customers, improving satisfaction and fostering trust through professional and timely assistance',
        
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Mahira Technologies',
      location: "Pune",
      period: 'Nov 2022 - Jan 2023',
      description: 'Worked on early-stage startup projects focusing on MVP development and rapid prototyping. Gained experience in agile development and cross-functional collaboration.',
      achievements: [
        'Developed and maintained user-facing features using modern front-end technologies (HTML, CSS, JavaScript, React)',
        'Managed website updates and ensured smooth deployment by pushing code changes to live production environments',
        'Collaborated with UI/UX designers for pixel-perfect implementations',
        'Diagnosed and resolved bugs, UI inconsistencies',
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:w-1/2 px-4 md:px-8">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-4 h-4 bg-blue-600 rounded-full mr-4 md:hidden"></div>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                        {exp.company}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-8 h-8 bg-blue-600 rounded-full items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div className="flex-1 md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}