"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 page-gradient">
      <div className="w-full max-w-lg">
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 text-center shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-black to-black" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-black rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-black rounded-full blur-3xl opacity-50" />

          <div className="relative z-10">
            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-black mb-4 header-font">
              404
            </h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 header-font">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 body-font text-lg">
              Oops! The page you are looking for has vanished into thin air. It
              looks like you have ventured into uncharted territory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-gray-700 font-medium border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Back Home
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl brand-gradient text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Email Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
