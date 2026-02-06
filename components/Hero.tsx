"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-600"></span>
          </span>
          Full Stack Developer From India.
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          <span className="brand-gradient-text"> 2bitprince</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Prince Patel
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#"
            className="px-8 py-4 rounded-full brand-gradient text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            My Resume
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="px-8 py-4 rounded-full bg-white text-gray-700 border border-gray-200 font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            My Work
          </Link>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white"></div>
    </section>
  );
}
