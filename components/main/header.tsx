import { Code } from "lucide-react";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  page: "home" | "projects" | "contact";
}

export function Header({ page }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-xl text-white flex items-center"
          >
            <Code className="mr-2 h-6 w-6" />
            Asitha Lakshan
          </Link>
          {page === "home" && (
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          )}
          {page === "projects" && (
            <Link href="/#projects">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Back to Projects
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
