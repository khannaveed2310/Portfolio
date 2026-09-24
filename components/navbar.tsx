"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, FileDown, Radio, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Arsenal", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Flight Path", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 30);

      if (window.scrollY <= 100) {
        setActiveSection("#home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY <= 100) {
          setActiveSection("#home");
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-25% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(href);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Real-time Global Scroll Progress HUD Beam */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-slate-900/60 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-6`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-[#050b18]/80 backdrop-blur-xl border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.1)] py-2.5 px-4 sm:px-6"
              : "bg-[#070e22]/50 backdrop-blur-md border-white/10 py-3.5 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo / Terminal Identity */}
            <div
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/70 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300">
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-bold text-sm tracking-tight text-white flex items-center gap-1">
                  NAVEED<span className="text-cyan-400 font-bold">.DEV</span>
                </span>
                <span className="text-[10px] font-mono text-cyan-400/80 -mt-0.5 tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  ONLINE
                </span>
              </div>
            </div>

            {/* Desktop Navigation Radar */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 select-none ${
                      isActive
                        ? "text-cyan-300 font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeRadarNav"
                        className="absolute inset-0 bg-cyan-950/80 border border-cyan-500/40 rounded-lg shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {isActive && <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />}
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* CTA & Resume Action */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs rounded-xl shadow-lg shadow-cyan-900/30 hover:shadow-cyan-500/30 transition-all border border-cyan-300/30"
              >
                <a href="/MohdNaveedKhan_.pdf" download className="flex items-center gap-1.5">
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-[#070e22]/95 border border-cyan-500/30 p-4 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeSection === item.href
                        ? "bg-cyan-950/80 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-300 hover:bg-slate-800/60"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-3 mt-1 border-t border-slate-800">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold"
                  >
                    <a href="/MohdNaveedKhan_.pdf" download className="flex items-center justify-center gap-2">
                      <FileDown className="w-4 h-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}