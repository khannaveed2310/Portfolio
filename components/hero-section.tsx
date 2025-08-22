"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const fullText = "Software Engineer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let typingForward = true;

    const interval = setInterval(() => {
      if (typingForward) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          typingForward = false;
          setTimeout(() => {}, 1000); // pause
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) {
          typingForward = true;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Naveed –
            <br />
            <span className="text-blue-600 dark:text-blue-400 inline-block">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Building full-stack web apps with Next.js, Django & AWS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg min-w-[160px]"
            >
              Hire Me
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg min-w-[160px]"
              asChild
            >
              <a
                href="/MohdNaveedKhan.pdf"
                download
              >
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Arrow fixed to bottom center of hero */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
