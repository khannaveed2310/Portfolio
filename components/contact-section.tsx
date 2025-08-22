"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&to=khan23naveed@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/khannaveed2310",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohd-naveed-khan/",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-10   bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life.
          </p>
        </motion.div>

        <div className="text-center gap-12">
          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="max-w-2xl mx-auto text-xl  text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology. Feel free to
                reach out through any of these channels.
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors duration-200 ${link.color}`}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Response
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I typically respond to messages within 24 hours. For urgent
                  inquiries, feel free to reach out via email directly.
                </p>
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="h-4 w-4  mr-2" />
                  <span>khan23naveed@gmail.com</span>
                </div>
              </CardContent>
            </Card>
          </motion.div> 
        </div>
      </div>
    </section>
  );
}
