"use client";

import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-3 text-center"
        >
         
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {currentYear} Mohd Naveed Khan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}