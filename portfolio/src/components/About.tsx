import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  }

  return (
    <motion.section 
      id="about" 
      aria-labelledby="about-title" 
      className="py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Profile Image - Left Side */}
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <div className="relative">
              <motion.img 
                src="/media/Profile_picture.avif" 
                alt="Portrait of Nnaemeka Emmanuel" 
                className="w-64 h-64 object-cover rounded-full shadow-2xl ring-2 ring-white/30" 
                loading="lazy" 
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
            {/* Name below image */}
            <div className="text-center mt-4">
              <motion.h3 
                className="text-2xl font-bold text-slate-900"
                whileHover={{ 
                  scale: 1.05,
                  color: "#0b2545",
                  transition: { duration: 0.2 }
                }}
              >
                Nnaemeka Emmanuel
              </motion.h3>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div className="flex-1 space-y-4 text-center lg:text-left" variants={itemVariants}>
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.h2 
                id="about-title" 
                className="text-3xl lg:text-4xl font-bold text-slate-900"
                whileHover={{
                  x: [0, -2, 2, -1, 1, 0],
                  transition: { duration: 0.3 }
                }}
              >
                About
              </motion.h2>
              <motion.div 
                className="w-16 h-0.5 bg-primary rounded-full mx-auto lg:mx-0"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
            
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.p 
                className="text-lg text-slate-700 font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Who am I? Why work with me?
              </motion.p>
              <motion.p 
                className="text-base text-slate-600 leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                I am a professional Video Editor with more than 2 years of working in Video Editing. I specialize in crafting Talking head and faceless videos content that convert into sales, and clients for business owners, entrepreneurs and coaches.
              </motion.p>
              <motion.p 
                className="text-base text-slate-600 leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                With a passion for creativity and a keen eye for detail, I bring a fresh and innovative approach to every project. My goal is to deliver exceptional results that exceed your expectations, ensuring that your vision is brought to life in the digital world.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
