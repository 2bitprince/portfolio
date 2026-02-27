"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";

export const navItems = [
  // {
  //   id: "code-snippets",
  //   isMegaMenu: true,
  //   label: "Code Snippets",
  //   href: "/code-snippets",
  // },
  // {
  //   id: "blogs-by-tags",
  //   isMegaMenu: true,
  //   label: "Blogs By Tags",
  //   href: "/blogs-by-tags",
  // },
  { id: "projects", isMegaMenu: false, label: "My Work", href: "/projects" },
  { id: "blogs", isMegaMenu: false, label: "Blogs", href: "/blogs" },
];

export const megamenu1 = [
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

export const megamenu2 = [
  {
    title: "Full Stack",
    items: [
      {
        title: "ASP.NET Core",
        description: "Backend Development",
        href: "#",
      },
    ],
  },
  {
    title: "Mobile App ",
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
        const hasMegaMenu = item.isMegaMenu;

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
                  ? "bg-zinc-800/50 text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
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
                  data={item.id === "code-snippets" ? megamenu1 : megamenu2}
                />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
