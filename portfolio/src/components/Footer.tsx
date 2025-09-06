import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <motion.footer 
      role="contentinfo" 
      className="mt-24 border-t border-slate-200 py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-responsive flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <motion.p variants={itemVariants}>© {new Date().getFullYear()} Nnaemeka Emmanuel</motion.p>
        <motion.nav aria-label="Footer" variants={itemVariants}>
          <ul className="flex items-center gap-4">
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
        </motion.nav>
      </div>
    </motion.footer>
  )
}












