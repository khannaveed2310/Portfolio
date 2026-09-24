"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, Sparkles, RefreshCw, CheckCircle2 } from "lucide-react";

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "init-1",
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-semibold">⚡ Naveed Core OS v3.4.1 (x86_64-linux-gnu)</p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-amber-400 font-mono">help</span> or click command badges below to interact.
          </p>
        </div>
      ),
      time: "boot",
    },
  ]);
  const outputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    let output: React.ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300 py-1">
            <p className="text-cyan-300 font-semibold">Available Operations:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-400">
              <div><span className="text-amber-400 font-mono">about</span> - Background & philosophy</div>
              <div><span className="text-amber-400 font-mono">skills</span> - Core tech arsenal</div>
              <div><span className="text-amber-400 font-mono">projects</span> - Flagship repositories</div>
              <div><span className="text-amber-400 font-mono">experience</span> - Work history</div>
              <div><span className="text-amber-400 font-mono">contact</span> - Email & socials</div>
              <div><span className="text-emerald-400 font-mono">hire</span> - Deploy Naveed to your team!</div>
              <div><span className="text-purple-400 font-mono">clear</span> - Clear display logs</div>
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="text-xs text-slate-300 space-y-1 py-1">
            <p className="text-cyan-400 font-bold">Mohd Naveed Khan - Full-Stack Engineer</p>
            <p className="text-slate-400 leading-relaxed">
              Specialist in building high-throughput web applications with Next.js, Django, and cloud infrastructure.
              Passionate about low-latency APIs, resilient architectures, and pixel-precise frontends.
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="text-xs space-y-1.5 py-1">
            <p className="text-cyan-400 font-semibold">Technical Matrix:</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js", "React", "TypeScript", "Python", "Django", "GraphQL", "AWS", "Docker", "Nginx", "Socket.IO"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-[11px] font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-xs space-y-1 py-1">
            <p className="text-cyan-400 font-semibold">Active Flagship Builds:</p>
            <p className="text-slate-300 font-mono">1. <span className="text-amber-300">JobNest</span> - Full-Stack recruitment platform (Next.js + Django)</p>
            <p className="text-slate-300 font-mono">2. <span className="text-amber-300">RealTime Chat</span> - Scalable WebSockets with Socket.IO</p>
            <p className="text-slate-300 font-mono">3. <span className="text-amber-300">DevFinder</span> - Developer analytics hub with GitHub API</p>
            <p className="text-slate-300 font-mono">4. <span className="text-amber-300">BookShelfPro</span> - Modern SaaS library manager</p>
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="text-xs space-y-1.5 py-1">
            <p className="text-cyan-400 font-semibold">Flight Path:</p>
            <p className="text-slate-300">🔹 <span className="text-white font-medium">Software Engineer (SDE-1)</span> @ Coneio Exim (May 2025 - Present)</p>
            <p className="text-slate-400 pl-4 text-[11px]">Saleor 3.0 GraphQL, Dynamics 365 CRM, automated deployments</p>
            <p className="text-slate-300">🔹 <span className="text-white font-medium">Backend Operations Associate</span> @ Samsung Service Center</p>
            <p className="text-slate-400 pl-4 text-[11px]">GSPN portal management & inventory workflows</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs space-y-1 py-1">
            <p className="text-cyan-400 font-semibold">Direct Communication Channels:</p>
            <p className="text-slate-300">📧 Email: <a href="mailto:khan23naveed@gmail.com" className="text-cyan-300 underline">khan23naveed@gmail.com</a></p>
            <p className="text-slate-300">🐙 GitHub: <a href="https://github.com/khannaveed2310" target="_blank" className="text-cyan-300 underline">github.com/khannaveed2310</a></p>
            <p className="text-slate-300">💼 LinkedIn: <a href="https://www.linkedin.com/in/mohd-naveed-khan/" target="_blank" className="text-cyan-300 underline">linkedin.com/in/mohd-naveed-khan</a></p>
          </div>
        );
        break;

      case "hire":
        output = (
          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-1 text-emerald-300">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Target Locked: Initiating Collaboration Request</span>
            </div>
            <p className="text-slate-300 text-[11px]">
              Ready to ship production code. Redirecting in 2 seconds...
            </p>
          </div>
        );
        setTimeout(() => {
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }, 1200);
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs text-rose-400 font-mono">
            command not found: {trimmed}. Type <span className="text-amber-400">help</span> for recognized operations.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        output,
        time,
      },
    ]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const quickCommands = ["help", "skills", "projects", "experience", "hire", "clear"];

  return (
    <div className="w-full min-w-0 rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 font-mono text-left">
      {/* Terminal Titlebar */}
      <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm shadow-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/50" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/50" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-xs text-slate-400 min-w-0">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-slate-300 font-medium truncate">naveed@architect:~ (interactive-cli)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-emerald-400 font-semibold">LIVE</span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div ref={outputContainerRef} className="p-4 h-64 sm:h-80 lg:h-96 overflow-y-auto space-y-3 text-xs text-slate-300 scrollbar-thin">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400">naveed@core:~$</span>
              <span className="text-cyan-300 font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
            </div>
            <div className="pl-4 border-l border-slate-800">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Quick Action Badges */}
      <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800/60 flex items-center gap-1.5 overflow-x-auto text-[11px]">
        <span className="text-slate-500 mr-1 flex items-center gap-1 text-[10px] shrink-0">
          <Sparkles className="w-3 h-3 text-amber-400" /> Quick:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-0.5 rounded-md bg-slate-800/80 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 text-slate-300 transition-all shrink-0 active:scale-95"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <form onSubmit={handleSubmit} className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-xs select-none">$&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help' or any command..."
          className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
        />
        <button
          type="submit"
          className="p-1 rounded-md text-slate-400 hover:text-cyan-400 transition-colors"
          title="Send command"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
