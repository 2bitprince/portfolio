"use client";

import { GraduationCap } from "lucide-react";

export default function Education() {
  const educations = [
    {
      degree: "Masters in Computer Application ( MCA )",
      institution: "College of Engineering Guindy, Anna University, Chennai",
      duration: "2021 - 2023",
      description:
        "Graduated while securing an internship and Full-time offer in Caterpillar India Pvt. Ltd. Specialized in advanced backend architecture, distributed systems, Postgres, MongoDB, Cloud Computing, Machine learning and did a project using OCR and Deep learning.",
    },
    {
      degree: "Bachelor of Computer Application ( BCA )",
      institution: "Patna College, Patna University, Patna",
      duration: "2017 - 2020",
      description:
        "Graduated with Distinction. Specialized in programming basics, data structures, algorithms, and database management systems.",
    },
  ];

  return (
    <section className="py-10 w-full max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
          <GraduationCap className="w-5 h-5 text-zinc-400" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
          Education
        </h2>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-16 pb-4">
        {educations.map((edu, idx) => (
          <div key={idx} className="relative pl-8 md:pl-10 group">
            <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950 transition-colors group-hover:bg-zinc-400"></div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-zinc-200">{edu.degree}</h3>
              <span className="text-sm font-medium text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 w-fit">
                {edu.duration}
              </span>
            </div>

            <div className="text-lg text-zinc-500 mb-4 font-medium">
              {edu.institution}
            </div>

            <p className="text-zinc-400 font-light leading-relaxed max-w-3xl">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
