"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import NavItems from "./NavItems";
import ActionButtons from "./ActionButtons";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 h-16 navbar-glass navbar-border z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 z-50 group flex-shrink-0"
          >
            <span className="text-xl font-bold tracking-tight logo-gradient header-font">
              Prince Patel
            </span>
          </Link>

          <div className="hidden md:block flex-1 mx-8">
            <NavItems />
          </div>

          <div className="hidden md:block flex-shrink-0">
            <ActionButtons />
          </div>

          <button
            className="md:hidden p-2.5 -mr-2 rounded-xl brand-gradient text-zinc-950 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
