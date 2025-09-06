import React from 'react'
import { motion } from 'framer-motion'

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
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
    <section id="hero" aria-labelledby="hero-title" className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Headline */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 
              id="hero-title" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              From raw footage to perfectly cooked videos.
            </h1>
            <motion.p 
              className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Top 1% video editor with over 20M+ views. I craft engaging digital experiences through talking-head videos, faceless content, and more.
            </motion.p>
          </motion.div>

          {/* VSL Video */}
          <motion.div 
            className="w-full max-w-2xl"
            variants={itemVariants}
          >
            <figure 
              className="card overflow-hidden"
            >
              <video controls preload="metadata" className="w-full h-auto" poster="/media/vsl-poster.jpg" aria-label="VSL demo video">
                <source src="/media/VSL_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="sr-only">VSL showcase</figcaption>
            </figure>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <a 
              href="#contact" 
              className="btn btn-primary px-8 py-4 text-lg"
            >
              Let's work together
            </a>
            <a 
              href="#work" 
              className="btn btn-secondary px-8 py-4 text-lg"
            >
              Portfólio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}












