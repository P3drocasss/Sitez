import React from 'react'
import { motion } from 'framer-motion'

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      }
    }
  }

  return (
    <motion.section 
      id="skills" 
      aria-labelledby="skills-title"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-8 text-center">
        <motion.header className="space-y-2" variants={cardVariants}>
          <h2 
            id="skills-title" 
            className="text-3xl sm:text-4xl font-semibold"
          >
            Skills
          </h2>
          <motion.p 
            className="text-slate-600"
            variants={cardVariants}
          >
            Professional tools and expertise I bring to every project.
          </motion.p>
        </motion.header>
        
        <div className="flex justify-center">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl"
            variants={containerVariants}
          >
            <div 
              className="card px-6 py-4 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <img 
                  src="/media/Premiere_Pro_logo.png" 
                  alt="Premiere Pro logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 
                  className="font-medium text-slate-900"
                >
                  Premiere Pro
                </h3>
              </div>
              <p className="text-sm text-slate-600">Professional video editing</p>
            </div>
            <div 
              className="card px-6 py-4 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <img 
                  src="/media/After_Effects_logo.png" 
                  alt="After Effects logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 
                  className="font-medium text-slate-900"
                >
                  After Effects
                </h3>
              </div>
              <p className="text-sm text-slate-600">Motion graphics & effects</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center"
          variants={cardVariants}
        >
          <div className="max-w-2xl w-full">
            <figure 
              className="card overflow-hidden"
            >
              <video controls preload="metadata" className="w-full h-auto" poster="/media/skills-poster.jpg" aria-label="Skills montage video">
                <source src="/media/Skills_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="px-4 py-3 text-sm text-slate-600 text-center">Skills showcase</figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
