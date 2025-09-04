import React from 'react'

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
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        <header className="text-center space-y-3">
          <h2 id="work-title" className="text-3xl sm:text-4xl font-semibold">Some of my work</h2>
          <p className="text-slate-600">A selection of short and long-form edits.</p>
        </header>
        
        {/* Short Videos Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center text-slate-700">Short Form Videos</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
              {shortVideos.map((video, index) => (
                <figure key={index} className="card overflow-hidden">
                  <video controls preload="metadata" className="w-full h-auto" aria-label={`Short form video ${index + 1}`}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Long Videos Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center text-slate-700">Long Form Videos</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 max-w-4xl">
              {longVideos.map((video, index) => (
                <figure key={index} className="card overflow-hidden">
                  <video controls preload="metadata" className="w-full h-auto" aria-label={`Long form video ${index + 1}`}>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="flex justify-center">
          <div className="max-w-2xl text-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Results my work can bring you</h3>
              <p className="text-slate-700">Increase engagement, retention, and conversions with professional editing tailored to your audience.</p>
            </div>
            <div className="flex justify-center">
              <img src="/media/perfomace_increase.jpg" alt="Results my work can bring you: increased performance chart" className="w-3/5 h-auto rounded-2xl shadow-soft" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}












