"use client";

import { Code2, Database, Layout, Server, Wrench } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-zinc-400" />,
      skills: ["C#", "TypeScript", "Python", "Dart", "JavaScript", "SQL"],
    },
    {
      title: "Backend Frameworks",
      icon: <Server className="w-5 h-5 text-zinc-400" />,
      skills: [".NET Core", "Node.js", "Express", "NestJS", "FastAPI"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-zinc-400" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Vector DBs"],
    },
    {
      title: "Frontend & Mobile",
      icon: <Layout className="w-5 h-5 text-zinc-400" />,
      skills: ["Flutter", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5 text-zinc-400" />,
      skills: ["Docker", "Git", "Linux", "AWS", "CI/CD"],
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 relative z-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
          Tools & <span className="text-zinc-500">Technologies</span>
        </h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="break-inside-avoid p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm flex flex-col gap-4 hover:border-zinc-700 transition-colors shadow-sm cursor-default"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-zinc-800/50">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-200">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-zinc-800/80 text-zinc-300 rounded-md border border-zinc-700/50 hover:bg-zinc-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
