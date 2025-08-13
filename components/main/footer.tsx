import React from 'react';

export function Footer() {
  return (
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © {new Date().getFullYear()} Asitha Lakshan. Built with Next.js and Tailwind CSS.
          </p>
          {/* <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div> */}
        </div>
      </footer>
  )
}
