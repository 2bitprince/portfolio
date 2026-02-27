"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Database, Cpu } from "lucide-react";
import {
  SiDart,
  SiFlutter,
  SiTypescript,
  SiPython,
  SiDotnet,
} from "react-icons/si";

const skills = [
  { name: "C# / .NET", icon: SiDotnet },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Dart", icon: SiDart },
  { name: "Flutter", icon: SiFlutter },
];

export default function Hero() {
  return (
    <section className="relative pt-12 pb-4 lg:pt-20 lg:pb-10 overflow-hidden w-full flex-grow">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-zinc-400 tracking-wide uppercase">
                Backend Engineer, MCA
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100 leading-tight">
              Hi, I'm Prince Patel.
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8 leading-relaxed font-light">
              I build stuff.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-zinc-300 text-sm hover:text-zinc-50 hover:bg-zinc-800 transition-colors cursor-default"
                >
                  <skill.icon className="w-4 h-4" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/Resume.pdf"
                target="_blank"
                className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 font-semibold text-sm hover:bg-white transition-all duration-200 flex items-center gap-2 group shadow-sm"
              >
                View Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://github.com/princepatelcodes"
                target="_blank"
                className="px-6 py-3 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 font-medium text-sm hover:bg-zinc-800 hover:text-zinc-100 transition-all duration-200 flex items-center gap-2"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex relative justify-center items-center">
            <div className="absolute inset-0 bg-purple-500/5 blur-[100px] rounded-full" />

            <div className="relative w-full max-w-sm bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">
              <div className="flex items-center gap-2 pb-4 border-b border-zinc-800/50">
                <div className="w-3 h-3 rounded-full bg-purple-500/80 border border-purple-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/20"></div>
              </div>

              <div className="space-y-4 py-2">
                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="h-2 flex-grow bg-zinc-800/50 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-3/4 animate-pulse"></div>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-lg bg-purple-600/10 border border-purple-600/20">
                    <Database className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="h-2 flex-grow bg-zinc-800/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 w-1/2 animate-pulse"
                      style={{ animationDelay: "500ms" }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Terminal className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="h-2 flex-grow bg-zinc-800/50 rounded-full overflow-hidden">
                    <div className="h-full w-full relative">
                      <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-purple-500 blur-[2px] opacity-80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-1/4 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-xl shadow-xl z-20">
                <div className="font-mono text-[10px] text-zinc-400 select-none">
                  status: 200 OK
                </div>
              </div>
              <div className="absolute -left-8 bottom-1/4 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                <div className="font-mono text-[10px] text-zinc-400 select-none">
                  AI Cluster Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute lg:top-1/4 lg:right-0 bottom-0 left-0 lg:left-auto w-full lg:w-[500px] h-[500px] -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-zinc-900/0 to-zinc-900/0 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}
