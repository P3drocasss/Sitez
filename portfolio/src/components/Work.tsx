import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const shortVideos = [
  { src: '/media/short_video1.mp4' },
  { src: '/media/short_video2.mp4' },
  { src: '/media/short_video3.mp4' },
]

const longVideos = [
  { src: '/media/long_video1.mp4' },
  { src: '/media/long_video2.mp4' },
  { src: '/media/long_video3.mp4' },
  { src: '/media/long_video4.mp4' },
]

export const Work: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const videoVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  }

  const sectionVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
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
      id="work" 
      aria-labelledby="work-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        <motion.header className="text-center space-y-3" variants={sectionVariants}>
          <motion.h2 
            id="work-title" 
            className="text-3xl sm:text-4xl font-semibold"
            whileHover={{
              scale: 1.05,
              x: [0, -1, 1, -1, 1, 0],
              transition: { duration: 0.3 }
            }}
          >
            Some of my work
          </motion.h2>
          <motion.p 
            className="text-slate-600"
            variants={sectionVariants}
          >
            A selection of short and long-form edits.
          </motion.p>
        </motion.header>
        
        {/* Short Videos Grid */}
        <motion.div className="space-y-6" variants={sectionVariants}>
          <motion.h3 
            className="text-xl font-semibold text-center text-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Short Form Videos
          </motion.h3>
          <div className="flex justify-center">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
              variants={containerVariants}
            >
              {shortVideos.map((video, index) => (
                <motion.figure 
                  key={index} 
                  className="card overflow-hidden"
                  variants={videoVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0 25px 50px -15px rgba(2, 6, 23, 0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <video controls preload="metadata" className="w-full h-auto" aria-label={`Short form video ${index + 1}`}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Long Videos Grid */}
        <motion.div className="space-y-6" variants={sectionVariants}>
          <motion.h3 
            className="text-xl font-semibold text-center text-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Long Form Videos
          </motion.h3>
          <div className="flex justify-center">
            <motion.div 
              className="grid grid-cols-2 gap-x-6 gap-y-8 max-w-4xl"
              variants={containerVariants}
            >
              {longVideos.map((video, index) => (
                <motion.figure 
                  key={index} 
                  className="card overflow-hidden"
                  variants={videoVariants}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: index % 2 === 0 ? 3 : -3,
                    rotateX: 3,
                    boxShadow: "0 25px 50px -15px rgba(2, 6, 23, 0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <video controls preload="metadata" className="w-full h-auto" aria-label={`Long form video ${index + 1}`}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Results Section */}
        <motion.div className="flex justify-center" variants={sectionVariants}>
          <div className="max-w-2xl text-center space-y-6">
            <motion.div className="space-y-3" variants={sectionVariants}>
              <motion.h3 
                className="text-2xl font-semibold"
                whileHover={{ 
                  scale: 1.05,
                  color: "#0b2545"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Results my work can bring you
              </motion.h3>
              <motion.p 
                className="text-slate-700"
                variants={sectionVariants}
              >
                Increase engagement, retention, and conversions with professional editing tailored to your audience.
              </motion.p>
            </motion.div>
            <div className="flex justify-center">
              <motion.img 
                src="/media/perfomace_increase.jpg" 
                alt="Results my work can bring you: increased performance chart" 
                className="w-3/5 h-auto rounded-2xl shadow-soft" 
                loading="lazy"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -15px rgba(2, 6, 23, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}












