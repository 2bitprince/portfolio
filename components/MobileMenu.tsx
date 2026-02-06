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
import { navItems, industriesData, solutionsData } from "./NavItems";

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
    if (id === "industries") return industriesData;
    if (id === "solutions") return solutionsData;
    return null;
  };

  return (
    <div className="fixed inset-0 z-50 page-gradient md:hidden overflow-y-auto">
      <div className="p-4 flex justify-between items-center border-b border-neutral-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tight logo-gradient header-font">
            2bitprince
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 -mr-2 rounded-xl bg-gray-100 text-gray-600 hover:text-black cursor-pointer shadow-sm hover:bg-gray-200 transition-colors"
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
                    ? "bg-white border-neutral-200 shadow-md"
                    : "bg-white/60 border-neutral-100 hover:bg-neutral-50/50"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">
                      {item.label}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isActive ? "rotate-180 text-neutral-900" : ""
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
                        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-2 border-l-2 border-neutral-300">
                          {section.title}
                        </h4>
                        <div className="grid gap-2">
                          {section.items.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href}
                              onClick={onClose}
                              className="group flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-300 mt-0.5 group-hover:text-neutral-900 transition-colors" />
                              <div>
                                <div className="text-sm font-medium text-gray-700 group-hover:text-neutral-900 transition-colors">
                                  {subItem.title}
                                </div>
                                <div className="text-xs text-gray-500 leading-snug mt-0.5">
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
              className="flex items-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200/50 hover:bg-neutral-50/50 transition-colors shadow-sm"
            >
              <span className="font-semibold text-gray-900">{item.label}</span>
            </Link>
          );
        })}

        {/* Mobile Actions */}
        <div className="pt-6 mt-6 border-t border-neutral-200/50 flex flex-col gap-3">
          <Link
            href="#"
            onClick={onClose}
            className="w-full py-3.5 text-center text-neutral-900 font-medium border-2 border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            Get App
          </Link>
          <Link
            href="/signup"
            onClick={onClose}
            className="w-full py-3.5 text-center text-white font-medium rounded-full brand-gradient shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
