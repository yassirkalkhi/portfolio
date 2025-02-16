import React from 'react'

const NativeLanguages = () => {
  return (
    <div className="w-[99%] border border-white/10 rounded-lg p-4">
    <p className="text-white text-lg md:text-xl font-semibold mb-4">
      Native Languages
    </p>
    <div className="text-white space-y-3">
    <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
        <i className="fa-brands fa-python text-xs md:text-2xl  text-white/90 me-3 shrink-0"></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            Python
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          general-purpose, versatile, and powerful programming language
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
      <i className='bx bxl-javascript text-sm md:text-2xl text-white/90 scale-125 me-3 shrink-0'></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            JavaScript
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          High-level, interpreted programming language
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
      <i className='bx bxl-typescript text-sm md:text-2xl text-white/90 scale-125 me-3 shrink-0'></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            TypeScript
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          JavaScript with syntax for types
          </p>
        </div>
      </div>
    <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
      <i className='bx bxl-php text-sm md:text-2xl text-white/90 scale-125 me-3 shrink-0'></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
           PHP
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Hypertext Preprocessor
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
        <i className="fa-solid fa-database text-xs md:text-2xl  text-white/90 me-3 shrink-0"></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            SQL
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Structured Query Language 
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NativeLanguages
