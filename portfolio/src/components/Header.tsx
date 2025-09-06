import React from 'react'

export const Header: React.FC = () => {
  return (
    <header 
      role="banner" 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"
    >
      <div className="container-responsive flex h-16 items-center justify-between">
        <a 
          href="#hero" 
          className="font-semibold text-primary"
        >
          NE
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <a 
                className="hover:text-primary transition-colors" 
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a 
                className="hover:text-primary transition-colors" 
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                className="hover:text-primary transition-colors" 
                href="#work"
              >
                Work
              </a>
            </li>
            <li>
              <a 
                className="hover:text-primary transition-colors" 
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a 
          href="#contact" 
          className="btn btn-primary"
        >
          Let's work together
        </a>
      </div>
    </header>
  )
}



