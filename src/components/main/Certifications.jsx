import React from 'react'

const Certifications = () => {
  return (
    <div className="w-[99%] border border-white/10 rounded-lg p-4">
    <p className="text-white text-lg md:text-xl font-semibold mb-4">
      Certifications
    </p>
    <div className="text-white space-y-3">
      {/* Desktop Version */}
      <div className="hidden sm:flex items-center justify-between min-w-0">
        <span className="text-white/60 font-normal text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="text-white/80 font-semibold">React </span>
          (by meta)
          <i className="fa-solid fa-check ms-2 text-green-500/80"></i>
        </span>
        <span className="text-white/40 text-xs md:text-sm whitespace-nowrap">
          Aug 2024
        </span>
      </div>

      {/* Mobile Version */}
      <div className="flex sm:hidden items-center justify-between min-w-0 gap-2">
        <span className="text-white/60 font-normal text-xs truncate">
          <span className="text-white/80 font-semibold">React </span>
          <span className="text-[10px] text-white/40">(by meta)</span>
          <i className="fa-solid fa-check ms-1 text-green-500/80"></i>
        </span>
        <span className="text-white/40 text-[10px] whitespace-nowrap flex-shrink-0">
          Aug 2024
        </span>
      </div>

      {/* Desktop Version */}
      <div className="hidden sm:flex items-center justify-between min-w-0">
        <span className="text-white/60 font-normal text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="text-white/80 font-semibold">HTML5 </span>
          (by the University of Michigan)
          <i className="fa-solid fa-check ms-2 text-green-500/80"></i>
        </span>
        <span className="text-white/40 text-xs md:text-sm whitespace-nowrap">
          Jun 2024
        </span>
      </div>

      {/* Mobile Version */}
      <div className="flex sm:hidden items-center justify-between min-w-0 gap-2">
        <span className="text-white/60 font-normal text-xs truncate">
          <span className="text-white/80 font-semibold">HTML5 </span>
          <span className="text-[10px] text-white/40">
            (by UMich)
          </span>
          <i className="fa-solid fa-check ms-1 text-green-500/80"></i>
        </span>
        <span className="text-white/40 text-[10px] whitespace-nowrap flex-shrink-0">
          Jun 2024
        </span>
      </div>
    </div>
  </div>
  )
}

export default Certifications
