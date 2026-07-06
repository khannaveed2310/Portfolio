"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:khan23naveed@gmail.com",
      color: "hover:bg-red-500/10 hover:text-red-500",
      bg: "bg-red-500/5",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/khannaveed2310",
      color: "hover:bg-slate-700/10 hover:text-slate-700 dark:hover:bg-slate-300/10 dark:hover:text-slate-300",
      bg: "bg-slate-500/5",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohd-naveed-khan/",
      color: "hover:bg-blue-600/10 hover:text-blue-600",
      bg: "bg-blue-600/5",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to new opportunities and interesting conversations.
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`group flex items-center gap-3 px-6 py-3 rounded-xl ${link.bg} border border-slate-200 dark:border-slate-800 hover:border-transparent transition-all duration-300 ${link.color}`}
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.name}</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-lg">
            <CardContent className="p-8 text-center">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Let&apos;s work together
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                I typically respond within 24 hours
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl"
              >
                <a href="mailto:khan23naveed@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  khan23naveed@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}