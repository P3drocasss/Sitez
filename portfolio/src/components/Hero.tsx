import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section id="hero" aria-labelledby="hero-title" className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              From raw footage to perfectly cooked videos.
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Top 1% video editor with over 20M+ views. I craft engaging digital experiences through talking-head videos, faceless content, and more.
            </p>
          </div>

          {/* VSL Video */}
          <div className="w-full max-w-2xl">
            <figure className="card overflow-hidden">
              <video controls preload="metadata" className="w-full h-auto" poster="/media/vsl-poster.jpg" aria-label="VSL demo video">
                <source src="/media/VSL_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="sr-only">VSL showcase</figcaption>
            </figure>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn btn-primary px-8 py-4 text-lg">
              Let's work together
            </a>
            <a href="#work" className="btn btn-secondary px-8 py-4 text-lg">
              Portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}












