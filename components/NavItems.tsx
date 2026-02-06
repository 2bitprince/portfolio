"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";

export const navItems = [
  { id: "code-snippets", label: "Code Snippets", href: "/code-snippets" },
  { id: "blogs-by-tags", label: "Blogs By Tags", href: "/blogs-by-tags" },
  { id: "projects", label: "My Work", href: "/projects" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
];

export const industriesData = [
  {
    title: "Quick Starters",
    items: [
      {
        title: "Next.js",
        description: "Web Development",
        href: "#",
      },
    ],
  },
  {
    title: "AI Tools",
    items: [
      {
        title: "Cursor",
        description: "AI Code Editor",
        href: "#",
      },
    ],
  },
  {
    title: "Cloud and Deployment",
    items: [
      {
        title: "AWS",
        description: "Cloud Services",
        href: "#",
      },
    ],
  },
];

export const solutionsData = [
  {
    title: "Full Stack Development",
    items: [
      {
        title: "ASP.NET Core",
        description: "Backend Development",
        href: "#",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "Flutter",
        description: "Cross Platform Development",
        href: "#",
      },
    ],
  },
  {
    title: "Productivity and tools",
    items: [
      {
        title: "Cursor",
        description: "AI Code Editor",
        href: "#",
      },
    ],
  },
];

export default function NavItems() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className="hidden md:flex items-center justify-center gap-2 whitespace-nowrap"
      onMouseLeave={handleMouseLeave}
    >
      {navItems.map((item) => {
        const isActive = activeDropdown === item.id;
        const hasMegaMenu =
          item.id === "code-snippets" || item.id === "blogs-by-tags";

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
          >
            <Link
              href={item.href || "#"}
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 group ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span>{item.label}</span>
              {hasMegaMenu && (
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                />
              )}
            </Link>

            {/* Mega Menu Dropdown */}
            {isActive && hasMegaMenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                <MegaMenu
                  data={
                    item.id === "code-snippets" ? industriesData : solutionsData
                  }
                />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
