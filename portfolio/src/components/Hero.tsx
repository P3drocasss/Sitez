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
        type: "spring", 
        stiffness: 80,
        damping: 20,
        duration: 0.8
      }
    }
  }

  const glitchVariants = {
    initial: { x: 0 },
    hover: {
      x: [0, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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
            <motion.h1 
              id="hero-title" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              From raw footage to perfectly cooked videos.
            </motion.h1>
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
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <motion.figure 
              className="card overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <video controls preload="metadata" className="w-full h-auto" poster="/media/vsl-poster.jpg" aria-label="VSL demo video">
                <source src="/media/VSL_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="sr-only">VSL showcase</figcaption>
            </motion.figure>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary px-8 py-4 text-lg"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px -15px rgba(11, 37, 69, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Let's work together
            </motion.a>
            <motion.a 
              href="#work" 
              className="btn btn-secondary px-8 py-4 text-lg"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "#f1f5f9"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Portfólio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}












