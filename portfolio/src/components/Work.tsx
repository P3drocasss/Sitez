import React from 'react'
import { motion } from 'framer-motion'

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const videoVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      }
    }
  }

  const sectionVariants = {
    hidden: { y: 60, opacity: 0 },
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
      id="work" 
      aria-labelledby="work-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        <motion.header className="text-center space-y-3" variants={sectionVariants}>
          <h2 
            id="work-title" 
            className="text-3xl sm:text-4xl font-semibold"
          >
            Some of my work
          </h2>
          <motion.p 
            className="text-slate-600"
            variants={sectionVariants}
          >
            A selection of short and long-form edits.
          </motion.p>
        </motion.header>
        
        {/* Short Videos Grid */}
        <motion.div className="space-y-6" variants={sectionVariants}>
          <h3 
            className="text-xl font-semibold text-center text-slate-700"
          >
            Short Form Videos
          </h3>
          <div className="flex justify-center">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
              variants={containerVariants}
            >
              {shortVideos.map((video, index) => (
                <figure 
                  key={index} 
                  className="card overflow-hidden"
                >
                  <video controls preload="metadata" className="w-full h-auto" aria-label={`Short form video ${index + 1}`}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Long Videos Grid */}
        <motion.div className="space-y-6" variants={sectionVariants}>
          <h3 
            className="text-xl font-semibold text-center text-slate-700"
          >
            Long Form Videos
          </h3>
          <div className="flex justify-center">
            <motion.div 
              className="grid grid-cols-2 gap-x-6 gap-y-8 max-w-4xl"
              variants={containerVariants}
            >
              {longVideos.map((video, index) => (
                <figure 
                  key={index} 
                  className="card overflow-hidden"
                >
                  <video controls preload="metadata" className="w-full h-auto" aria-label={`Long form video ${index + 1}`}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Results Section */}
        <motion.div className="flex justify-center" variants={sectionVariants}>
          <div className="max-w-2xl text-center space-y-6">
            <motion.div className="space-y-3" variants={sectionVariants}>
              <h3 
                className="text-2xl font-semibold"
              >
                Results my work can bring you
              </h3>
              <motion.p 
                className="text-slate-700"
                variants={sectionVariants}
              >
                Increase engagement, retention, and conversions with professional editing tailored to your audience.
              </motion.p>
            </motion.div>
            <div className="flex justify-center">
              <img 
                src="/media/perfomace_increase.jpg" 
                alt="Results my work can bring you: increased performance chart" 
                className="w-3/5 h-auto rounded-2xl shadow-soft" 
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}












