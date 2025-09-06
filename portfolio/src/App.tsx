import React from 'react'
import { motion } from 'framer-motion'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useInertiaScroll } from './hooks/useInertiaScroll'

const App: React.FC = () => {
  const scrollRef = useInertiaScroll()
  
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={scrollRef}
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Header />
      <main id="main" role="main" className="container-responsive space-y-24 sm:space-y-28">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}

export default App



