import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export const Footer: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4
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
      viewport={{ once: true }}
    >
      <div className="container-responsive flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <motion.p variants={itemVariants}>© {new Date().getFullYear()} Nnaemeka Emmanuel</motion.p>
        <motion.nav aria-label="Footer" variants={itemVariants}>
          <ul className="flex items-center gap-4">
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#about"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#skills"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Skills
              </motion.a>
            </li>
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#work"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Work
              </motion.a>
            </li>
            <li>
              <motion.a 
                className="hover:text-primary transition-colors duration-300" 
                href="#contact"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </motion.nav>
      </div>
    </motion.footer>
  )
}












