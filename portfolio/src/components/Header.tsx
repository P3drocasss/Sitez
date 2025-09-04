import React from 'react'
import { motion } from 'framer-motion'

export const Header: React.FC = () => {
  return (
    <motion.header 
      role="banner" 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-responsive flex h-16 items-center justify-between">
        <motion.a 
          href="#hero" 
          className="font-semibold text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          NE
        </motion.a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#about"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#skills"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Skills
              </motion.a>
            </li>
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#work"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Work
              </motion.a>
            </li>
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#contact"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </nav>
        <motion.a 
          href="#contact" 
          className="btn btn-primary"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Let's work together
        </motion.a>
      </div>
    </motion.header>
  )
}



