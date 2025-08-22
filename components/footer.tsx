"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="border-t border-gray-800 pt-8">
            <h3 className="text-2xl font-bold mb-4">Mohd Naveed Khan</h3>
            <p className="text-gray-400">
              Software Engineer • Full-Stack Developer
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
