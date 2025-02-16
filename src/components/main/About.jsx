import React from 'react'

const About = () => {
  return (
    <div className="w-[99%] border border-white/10 rounded-lg p-4">
              <p className="text-white text-lg md:text-xl font-semibold mb-4">
                About
              </p>
              <div className="text-white space-y-3">
                <div className="flex items-center min-w-0">
                  <i className="fa-solid fa-graduation-cap text-sm md:text-xl text-zinc-600 me-2 shrink-0"></i>
                  <span className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-white/60 font-normal">Went to </span>
                    OFPPT ISTA NTIC SAFI (still)
                  </span>
                </div>
                <div className="flex items-center min-w-0">
                  <i className="fa-solid fa-house text-sm md:text-xl text-zinc-600 me-2 shrink-0"></i>
                  <span className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-white/60 font-normal">Lives in </span>
                    Safi, Morocco
                  </span>
                </div>
                <div className="flex items-center min-w-0">
                  <i className="fa-solid fa-location-dot text-sm md:text-xl text-zinc-600 me-2 shrink-0 ms-1"></i>
                  <span className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-white/60 font-normal">From </span>
                    Safi, Morocco
                  </span>
                </div>
              </div>
            </div>
  )
}

export default About
