"use client";

import { ArrowRight } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDotnet,
  SiJavascript,
  SiDart,
  SiPython,
} from "react-icons/si";

const frameworks = [
  {
    title: "ASP .net",
    icon: SiDotnet,
  },
  {
    title: "Java",
    icon: SiJavascript,
  },
  {
    title: "Dart",
    icon: SiDart,
  },
  {
    title: "Python",
    icon: SiPython,
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
  },
  {
    title: "React.js",
    icon: SiReact,
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
  },
  {
    title: "Express.js",
    icon: SiExpress,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
  },
];

export default function LanguageFrameworks() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Worked With{" "}
            <span className="brand-gradient-text">language and framework</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 hover:cursor-pointer">
          {frameworks.map((framework, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-neutral-100 transition-colors">
                  <framework.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 leading-snug">
                  {framework.title}
                </h3>
              </div>
              <div className="flex items-center text-sm text-neutral-900 font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                Learn more <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
