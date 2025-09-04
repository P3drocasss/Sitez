import React from 'react'

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src="/media/Profile_picture.avif" 
                alt="Portrait of Nnaemeka Emmanuel" 
                className="w-64 h-64 object-cover rounded-full shadow-2xl ring-2 ring-white/30" 
                loading="lazy" 
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
            {/* Name below image */}
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-slate-900">Nnaemeka Emmanuel</h3>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="space-y-3">
              <h2 id="about-title" className="text-3xl lg:text-4xl font-bold text-slate-900">
                About
              </h2>
              <div className="w-16 h-0.5 bg-primary rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-lg text-slate-700 font-medium">
                Who am I? Why work with me?
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                I am a professional Video Editor with more than 2 years of working in Video Editing. I specialize in crafting Talking head and faceless videos content that convert into sales, and clients for business owners, entrepreneurs and coaches.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                With a passion for creativity and a keen eye for detail, I bring a fresh and innovative approach to every project. My goal is to deliver exceptional results that exceed your expectations, ensuring that your vision is brought to life in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
