import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" className="mt-24 border-t border-slate-200 py-8">
      <div className="container-responsive flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Nnaemeka Emmanuel</p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-4">
            <li><a className="hover:text-primary" href="#about">About</a></li>
            <li><a className="hover:text-primary" href="#skills">Skills</a></li>
            <li><a className="hover:text-primary" href="#work">Work</a></li>
            <li><a className="hover:text-primary" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}












