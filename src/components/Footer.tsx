import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-gradient pt-20 pb-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-semibold text-zinc-100 mb-5 header-font">
              Social
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Linkedin</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Github</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Instagram</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Email</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-5 header-font">
              Projects
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/api-access"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Project 1</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Project 2</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-5 header-font">
              Blogs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Blog 1</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Blog 2</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-5 header-font">
              Tools
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>N Length String</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>UUID Generator</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-purple-500 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Words Count</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 2bitprince. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>Made with</span>
            <span className="text-purple-500">❤️</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
