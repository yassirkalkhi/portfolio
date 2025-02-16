import React from 'react'

const Educations = () => {
  return (
    <div className="w-[99%] border border-white/10 rounded-lg p-3 sm:p-4">
    {/* Education Timeline */}
    <p className="text-white text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
      Education Timeline
    </p>
    <div className="relative space-y-5 sm:space-y-6">
      {/* Timeline Line */}
      <div className="absolute left-[7px] sm:left-2.5 top-2 h-[calc(100%-16px)] w-[2px] bg-white/10"></div>

      {/* Timeline Items */}
      <div className="relative flex items-start pl-6 sm:pl-8">
        <div className="absolute left-1 top-[7px] h-[10px] w-[10px] sm:h-3 sm:w-3 rounded-full border-2 bg-green-500 bg-background"></div>
        <div className="flex-1 min-w-0">
          {" "}
          {/* min-w-0 enables text truncation */}
          <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
            <p className="text-white/80 font-medium truncate">
              OFPPT ISTA NTIC SAFI
            </p>
            <span className="text-white/40 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
              2023 - Present
            </span>
          </div>
          <p className="text-white/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1 truncate">
            Full Stack Development
          </p>
        </div>
      </div>

      <div className="relative flex items-start pl-6 sm:pl-8">
        <div className="absolute left-1 top-[7px] h-[10px] w-[10px] sm:h-3 sm:w-3 rounded-full border-2 border-white/20 bg-background/70"></div>
        <div className="flex-1 min-w-0">
          {" "}
          {/* min-w-0 enables text truncation */}
          <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
            <p className="text-white/80 font-medium truncate">
              High School Diploma
            </p>
            <span className="text-white/40 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
              2022 - 2023
            </span>
          </div>
          <p className="text-white/60 text-xs mt-1">Science </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Educations
