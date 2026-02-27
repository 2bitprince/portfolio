"use client";

import { FolderGit2, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "I will add it soon",
      description: "I will add it soon",
      tags: ["I will add it soon"],
      github: "#",
      link: "#",
    },
    {
      title: "I will add it soon",
      description: "I will add it soon",
      tags: ["I will add it soon"],
      github: "#",
      link: "#",
    },
  ];

  return (
    <section className="py-10 w-full max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
          <FolderGit2 className="w-5 h-5 text-zinc-400" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
          Selected Work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm flex flex-col h-full hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    className="text-zinc-500 hover:text-zinc-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    className="text-zinc-500 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-400 mb-3 group-hover:text-purple-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="font-light text-gray-500 leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-zinc-500 px-2.5 py-1 bg-zinc-900 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
