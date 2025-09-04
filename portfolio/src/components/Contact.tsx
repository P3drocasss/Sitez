import React from 'react'

export const Contact: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 id="contact-title" className="text-3xl sm:text-4xl font-semibold">Let's work together</h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Ready to transform your raw footage into engaging content that converts? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>
        
        <div className="space-y-6">
          <a 
            href="https://x.com/Emystylez_x" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary px-12 py-4 text-lg inline-flex items-center gap-3 hover:scale-105 transition-transform"
            aria-label="Contact me on X (Twitter) to discuss your project"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Get in touch on X
          </a>
          
          <p className="text-slate-600 text-sm">
            DM me on X (Twitter) to discuss your video editing needs
          </p>
        </div>
      </div>
    </section>
  )
}