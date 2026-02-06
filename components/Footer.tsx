import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-gradient pt-20 pb-4 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neutral-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        {/* <div className="mb-16 p-8 md:p-12 rounded-3xl brand-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 header-font">
                Stay Updated with 2bitprince
              </h3>
              <p className="text-white/80 max-w-md">
                Get the latest travel tips, exclusive deals, and product updates
                delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-72"
              />
              <button className="px-6 py-3.5 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5 header-font">
              Social
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-neutral-900 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Linkedin</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Github</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Instagram</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Email</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5 header-font">
              Projects
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/api-access"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Project 1</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Project 2</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5 header-font">
              Blogs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Blog 1</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Blog 2</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5 header-font">
              Tools
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>N Length String</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>UUID Generator</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>Words Count</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 2bitprince. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
