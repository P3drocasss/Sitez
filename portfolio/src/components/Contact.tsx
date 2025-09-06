import React from 'react'
import { motion } from 'framer-motion'

export const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <motion.section 
      id="contact" 
      aria-labelledby="contact-title"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div className="space-y-4" variants={itemVariants}>
          <h2 
            id="contact-title" 
            className="text-3xl sm:text-4xl font-semibold"
          >
            Let's work together
          </h2>
          <motion.p 
            className="text-slate-700 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Ready to transform your raw footage into engaging content that converts? 
            Let's discuss your project and bring your vision to life.
          </motion.p>
        </motion.div>
        
        <motion.div className="space-y-6" variants={itemVariants}>
          <a 
            href="https://x.com/Emystylez_x" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary px-12 py-4 text-lg inline-flex items-center gap-3"
            aria-label="Contact me on X (Twitter) to discuss your project"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Get in touch on X
          </a>
          
          <motion.p 
            className="text-slate-600 text-sm"
            variants={itemVariants}
          >
            DM me on X (Twitter) to discuss your video editing needs
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}