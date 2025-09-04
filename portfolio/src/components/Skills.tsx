import React from 'react'

export const Skills: React.FC = () => {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="space-y-8 text-center">
        <header className="space-y-2">
          <h2 id="skills-title" className="text-3xl sm:text-4xl font-semibold">Skills</h2>
          <p className="text-slate-600">Professional tools and expertise I bring to every project.</p>
        </header>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="card px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <img src="/media/Premiere_Pro_logo.png" alt="Premiere Pro logo" className="w-8 h-8 object-contain" />
                <h3 className="font-medium text-slate-900">Premiere Pro</h3>
              </div>
              <p className="text-sm text-slate-600">Professional video editing</p>
            </div>
            <div className="card px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <img src="/media/After_Effects_logo.png" alt="After Effects logo" className="w-8 h-8 object-contain" />
                <h3 className="font-medium text-slate-900">After Effects</h3>
              </div>
              <p className="text-sm text-slate-600">Motion graphics & effects</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <figure className="card overflow-hidden">
              <video controls preload="metadata" className="w-full h-auto" poster="/media/skills-poster.jpg" aria-label="Skills montage video">
                <source src="/media/Skills_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="px-4 py-3 text-sm text-slate-600 text-center">Skills showcase</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
