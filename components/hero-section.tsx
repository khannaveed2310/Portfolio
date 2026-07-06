"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = ["Software Engineer", "Full-Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [bgStage, setBgStage] = useState(0); // 0: Next.js, 1: Django, 2: GitHub, 3: Nginx/Baremetal, 4: Live App

  // Programmatic Video Autoplay Force
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Browser playback restrictions bypassed:", error);
      });
    }
  }, []);

  // 1. Text Typing Loop Logic
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // 2. Background Simulator Screen Cycler Loop
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setBgStage((prev) => (prev + 1) % 5);
    }, 4500);
    return () => clearInterval(stageInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* BASE BACKGROUND PIPELINE LAYER (VIDEO + SIMULATOR ART) */}
      <div className="absolute inset-0 z-0">
        {/* High-Performance Looping Video Element */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-25 dark:opacity-20 scale-100 pointer-events-none filter brightness-[0.65] contrast-125"
        >
          {/* Ensure file asset path sits inside your project's public/ directory */}
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Vignette Contrast Shield Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-950 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-slate-950/90" />
        
        {/* Floating Ambient Aurora Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Alignment Layout Mask */}
      <div className="absolute inset-0 z-1 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* EMBEDDED MAXIMIZED IDE / BACKGROUND SIMULATOR INTERIOR */}
      <div className="absolute inset-0 z-2 pointer-events-none opacity-20 dark:opacity-15 flex items-center justify-center p-2 sm:p-4">
        <div className="w-full h-[85vh] max-w-[95%] bg-[#121212]/90 border border-slate-800/60 rounded-xl shadow-2xl font-mono text-xs md:text-sm flex flex-col overflow-hidden backdrop-blur-[2px]">
          {/* Mock Window Top Bar */}
          <div className="bg-[#1c1c1c] px-4 py-3 flex items-center justify-between border-b border-slate-900/80">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block" />
            </div>
            <div className="text-slate-500 text-xs select-none tracking-wide">
              {bgStage === 0 && "naveed-portfolio ~/src/components/Hero.tsx (VS Code)"}
              {bgStage === 1 && "backend-api ~/api/views.py (Django)"}
              {bgStage === 2 && "terminal - git push origin main"}
              {bgStage === 3 && "root@baremetal-ubuntu:~ - venv/bin/nginx"}
              {bgStage === 4 && "https://naveedkhan.dev - Production Preview"}
            </div>
            <div className="w-10" />
          </div>

          {/* Canvas Screens Viewports */}
          <div className="flex-1 p-6 overflow-hidden text-left bg-transparent relative">
            <AnimatePresence mode="wait">
              {bgStage === 0 && (
                <motion.div
                  key="nextjs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-emerald-400 space-y-1 whitespace-pre-wrap"
                >
                  <p className="text-slate-600">// Step 1: Initializing Frontend View Component with Next.js</p>
                  <p><span className="text-purple-400">import</span> {"{ motion }"} <span className="text-purple-400">from</span> <span className="text-amber-300">"framer-motion"</span>;</p>
                  <p><span className="text-purple-400">export function</span> <span className="text-blue-400">HeroSection</span>() {"{"}</p>
                  <p>&nbsp;&nbsp;<span className="text-purple-400">return</span> (</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-blue-500">section</span> className=<span className="text-amber-300">"relative min-h-screen"</span>{">"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-blue-500">motion.div</span> animate={"{{ y: [0, -10, 0] }}"}{">"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<"}<span className="text-blue-500">h1</span>{">"}Naveed Portfolio{"</"}<span className="text-blue-500">h1</span>{">"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</"}<span className="text-blue-500">motion.div</span>{">"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</"}<span className="text-blue-500">section</span>{">"}</p>
                  <p>&nbsp;&nbsp;);</p>
                  <p>{"}"}</p>
                </motion.div>
              )}

              {bgStage === 1 && (
                <motion.div
                  key="django"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-blue-300 space-y-1 whitespace-pre-wrap"
                >
                  <p className="text-slate-600"># Step 2: High Performance Controller API endpoints (Django REST Framework)</p>
                  <p><span className="text-purple-400">from</span> rest_framework.views <span className="text-purple-400">import</span> APIView</p>
                  <p><span className="text-purple-400">from</span> rest_framework.response <span className="text-purple-400">import</span> Response</p>
                  <p className="text-purple-400">class <span className="text-yellow-400">ProjectPipelineView</span>(APIView):</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">get</span>(self, request):</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics = {"{"}<span className="text-amber-300">"status"</span>: <span className="text-amber-300">"healthy"</span>, <span className="text-amber-300">"engine"</span>: <span className="text-amber-300">"v2.0.6"</span>{"}"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> Response({"{"}<span className="text-amber-300">"data"</span>: metrics{"}"})</p>
                </motion.div>
              )}

              {bgStage === 2 && (
                <motion.div
                  key="github"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-300 space-y-2 font-mono"
                >
                  <p className="text-slate-600"># Step 3: Compiling staging files and version control delivery</p>
                  <p><span className="text-blue-400">$</span> git add .</p>
                  <p><span className="text-blue-400">$</span> git commit -m <span className="text-amber-300">"feat: optimize engine pipelines"</span></p>
                  <p className="text-slate-500">[main 8eef23a] feat: optimize engine pipelines and baremetal ecosystem</p>
                  <p><span className="text-blue-400">$</span> git push origin main</p>
                  <p className="text-purple-400">Enumerating objects: 14, done.</p>
                  <p className="text-emerald-400">To github.com:naveed/fullstack-portfolio.git · [main -&gt; main]</p>
                </motion.div>
              )}

              {bgStage === 3 && (
                <motion.div
                  key="nginx"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-amber-200/90 space-y-1 font-mono"
                >
                  <p className="text-slate-600"># Step 4: Structuring reverse proxy inside Nginx engine blocks</p>
                  <p><span className="text-red-400">root@baremetal</span>:~# nano /etc/nginx/sites-available/portfolio</p>
                  <p className="text-purple-400">server {"{"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;listen 80;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;server_name naveedkhan.dev;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;location / {"{"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proxy_pass http://127.0.0.1:3000;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
                  <p>{"}"}</p>
                  <p><span className="text-red-400">root@baremetal</span>:~# nginx -t && systemctl restart nginx</p>
                  <p className="text-emerald-400">nginx: configuration file /etc/nginx/nginx.conf test is successful</p>
                </motion.div>
              )}

              {bgStage === 4 && (
                <motion.div
                  key="portfolio-mock-ui"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full rounded-lg border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col font-sans"
                >
                  <div className="bg-slate-900/90 px-4 py-2 flex items-center gap-2 border-b border-slate-800 text-xs text-slate-500">
                    <div className="flex gap-1.5 mr-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                    </div>
                    <div className="bg-slate-950 px-3 py-1 rounded-md flex-1 max-w-sm text-[11px] border border-slate-800/80 tracking-wide text-slate-400">
                      https://naveedkhan.dev
                    </div>
                  </div>

                  <div className="flex-1 p-6 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950 flex flex-col justify-between text-left relative">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-400/80 px-2 py-0.5 rounded">Next.js Live</span>
                    </div>
                    <div className="space-y-2 max-w-xl">
                      <div className="text-xl font-bold text-white tracking-tight">
                        Crafting High-Performance Architecture
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed max-w-md">
                        Automated baremetal microservices pipeline logs running live updates dynamically.
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-900">
                      {["E-Commerce", "AI Analytics", "Infrastructure"].map((project, i) => (
                        <div key={i} className="bg-slate-950/90 border border-slate-900 p-2 rounded space-y-1">
                          <div className="text-[10px] font-medium text-slate-300 truncate">{project}</div>
                          <div className="h-1 w-full bg-slate-900 rounded overflow-hidden">
                            <div className="h-full bg-blue-500/70 rounded" style={{ width: `${65 + (i * 12)}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Running Node Tracker Line */}
          <div className="bg-[#0d0d0d] px-4 py-2.5 flex items-center gap-4 border-t border-slate-900 text-[10px] text-slate-600 select-none overflow-x-auto whitespace-nowrap">
            <span className={bgStage === 0 ? "text-emerald-400 font-bold" : ""}>1. Next.js Architecture</span>
            <span>➔</span>
            <span className={bgStage === 1 ? "text-blue-400 font-bold" : ""}>2. Django Controllers</span>
            <span>➔</span>
            <span className={bgStage === 2 ? "text-purple-400 font-bold" : ""}>3. Git Push Hub</span>
            <span>➔</span>
            <span className={bgStage === 3 ? "text-amber-400 font-bold" : ""}>4. Nginx Edge Config</span>
            <span>➔</span>
            <span className={bgStage === 4 ? "text-emerald-400 font-bold" : ""}>5. Production Platform Live</span>
          </div>
        </div>
      </div>

      {/* FOREGROUND PRIMARY BRANDING INTERACTION LAYER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">Available for Projects</span>
          </motion.div>

          {/* Master Structural Typography Heading */}
          <h1 className="text-5xl sm:text-xl md:text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-sm">
            Mohd Naveed Khan
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">.</span>
          </h1>

          {/* Dynamic Interactive Role Typing Line */}
          <div className="h-14 flex items-center justify-center mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light tracking-wide">
              I am a{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                {displayText}
                <span className="text-blue-400 animate-pulse font-normal ml-0.5">|</span>
              </span>
            </p>
          </div>

          {/* Descriptive Pitch Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Building high-performance web applications with Next.js, Django, and AWS. 
            From pixel-perfect user interfaces to scalable production-grade infrastructure.
          </motion.p>

          {/* Interactive CTA Operations Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-base font-medium rounded-xl shadow-xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 border border-blue-500/30"
            >
              <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
              Let's Build Something
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-800 bg-slate-900/40 text-slate-300 hover:bg-slate-900 hover:text-white px-8 py-6 text-base font-medium rounded-xl backdrop-blur-sm transition-colors duration-200"
              asChild
            >
              <a href="/MohdNaveedKhan_.pdf" download className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                View Resume
              </a>
            </Button>
          </motion.div>

          {/* Core Infrastructure Matrix Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2.5 justify-center mt-16 max-w-xl mx-auto"
          >
            {["Next.js", "React", "Django", "TypeScript", "AWS", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 text-xs font-semibold uppercase tracking-wider bg-slate-900/60 text-slate-400 border border-slate-800/80 rounded-lg backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigational Arrow Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-slate-400 cursor-pointer hover:text-white transition-colors duration-200"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}