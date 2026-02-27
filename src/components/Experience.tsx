"use client";

import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "Caterpillar India Pvt. Ltd.",
      duration: "August 2023 - Present",
      description:
        "Designing and developing scalable backend APIs, optimizing distributed database queries, and integrating sophisticated LLMs for automated data intelligence tasks. Decreased latency by 40% across edge clusters.",
    },
    {
      role: "Internship",
      company: "Caterpillar India Pvt. Ltd.",
      duration: "April 2023 - June 2023",
      description:
        "Built end-to-end web and mobile applications using Flutter and a .NET monolithic backend. Successfully led the migration strategy to a microservices architecture handling millions of requests constraint-free.",
    },
    {
      role: "Full Stack Freelance Developer",
      company: "Self-Employed",
      duration: "April 2020 - December 2022",
      description:
        "Built end-to-end web and mobile applications using Flutter and a .NET monolithic backend. Successfully led the migration strategy to a microservices architecture handling millions of requests constraint-free.",
    },
  ];

  return (
    <section className="py-10 w-full max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
          <Briefcase className="w-5 h-5 text-zinc-400" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
          Experience
        </h2>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-16 pb-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-10 group">
            <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-purple-500/20 border-2 border-zinc-950 transition-colors group-hover:bg-purple-500"></div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-zinc-200">{exp.role}</h3>
              <span className="text-sm font-medium text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 w-fit">
                {exp.duration}
              </span>
            </div>

            <div className="text-lg text-purple-400 mb-4 font-medium">
              {exp.company}
            </div>

            <p className="text-zinc-400 font-light leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
