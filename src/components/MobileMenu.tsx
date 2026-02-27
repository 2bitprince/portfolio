"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  ArrowRight,
  Smartphone,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { navItems, megamenu1, megamenu2 } from "./NavItems";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const getSubMenuData = (id: string) => {
    if (id === "code-snippets") return megamenu1;
    if (id === "blogs-by-tags") return megamenu2;
    return null;
  };

  return (
    <div className="fixed inset-0 z-50 page-gradient md:hidden overflow-y-auto">
      <div className="p-4 flex justify-between items-center border-b border-zinc-800/50 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tight logo-gradient header-font">
            2bitprince
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 -mr-2 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-zinc-50 cursor-pointer shadow-sm hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-2 pb-24">
        {navItems.map((item) => {
          const subMenuData = getSubMenuData(item.id);
          const isActive = activeAccordion === item.id;

          if (subMenuData) {
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-900 border-zinc-800 shadow-md"
                    : "bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900/50"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-zinc-100">
                      {item.label}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isActive ? "rotate-180 text-zinc-100" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 space-y-6 pt-2">
                    {subMenuData.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider pl-2 border-l-2 border-zinc-700">
                          {section.title}
                        </h4>
                        <div className="grid gap-2">
                          {section.items.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href}
                              onClick={onClose}
                              className="group flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-900 transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 text-zinc-400 mt-0.5 group-hover:text-zinc-100 transition-colors" />
                              <div>
                                <div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-zinc-500 leading-snug mt-0.5">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href || "#"}
              onClick={onClose}
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors shadow-sm"
            >
              <span className="font-semibold text-zinc-100">{item.label}</span>
            </Link>
          );
        })}

        {/* Mobile Actions */}
        <div className="pt-6 mt-6 border-t border-zinc-800/50 flex flex-col gap-3">
          <Link
            href="#"
            onClick={onClose}
            className="w-full py-3.5 text-center text-zinc-100 font-medium border-2 border-zinc-700 rounded-full hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            Get App
          </Link>
          <Link
            href="/signup"
            onClick={onClose}
            className="w-full py-3.5 text-center text-zinc-50 font-medium rounded-full brand-gradient shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
