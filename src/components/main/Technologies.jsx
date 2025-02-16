import React from 'react'

const Technologies = () => {
  return (
    <div className="w-[99%] border border-white/10 rounded-lg p-4">
                  <p className="text-white text-lg md:text-xl font-semibold mb-4">
                    Technologies
                  </p>
                  <div className="text-white space-y-3">
                    <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 ps-2 hover:bg-white/5 transition-colors gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"  className="w-[30px] md:w-[35px]">
                        <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
                          <circle cx="90" cy="90" fill="black" r="90"></circle>
                        </mask>
                        <g mask="url(#mask0)">
                          <circle cx="90" cy="90" data-circle="true" fill="transparent" r="90"></circle>
                          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"></path>
                          <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54"></rect>
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5">
                            <stop stopColor="white"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875">
                            <stop stopColor="white"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="min-w-0">
                        <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          NextJS
                        </p>
                        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        The React Framework for the Web
                        </p>
                      </div>
                    </div>
                   
                    <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                    <i className='bx bxl-redux text-sm md:text-2xl text-white/90 scale-125 me-3 shrink-0'></i>
                      <div className="min-w-0">
                        <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          Redux  & RTK
                        </p>
                        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        State management library
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center min-w-0 border gap-2 border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                    <div className="flex -space-x-6">
                      <i className="fa-brands fa-bootstrap  text-xs md:text-xl text-white/70 -rotate-12 me-3 shrink-0"></i>
                      <i className="bx bxl-tailwind-css  text-sm md:text-2xl text-white/90 scale-125 rotate-12 me-3 shrink-0"></i>
                    </div>
                      
                      <div className="min-w-0">
                        <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          Tailwindcss & Bootstrap
                        </p>
                        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                          utility-first CSS  & component-based CSS  frameworks
                        </p>
                      </div>
                    </div>
                 
                    <div className="flex items-center gap-2 min-w-0 border border-white/10 rounded-lg p-3 ps-2 hover:bg-white/5 transition-colors">
                    <div className="flex -space-x-4">
                      <i className="fa-brands fa-node-js  text-sm md:text-2xl text-white/70 -rotate-12 me-3 shrink-0"></i>
                      <i className="flex  justify-center text-[0.6rem] md:text-[1rem] mt-1 font-extralight text-black  rotate-12 me-3 shrink-0 bg-white/80 rounded-full w-4 h-4 md:w-6  md:h-6">ex</i>
                    </div>
                      <div className="min-w-0">
                        <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          NodeJs & Express
                        </p>
                        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                          JavaScript runtime & web application framework
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                      <i className="fa-brands fa-laravel text-sm md:text-2xl text-white/90 me-3 shrink-0"></i>
                      <div className="min-w-0">
                        <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          Laravel
                        </p>
                        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                          PHP Framwork
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                      <i className="bx bxl-mongodb  text-sm md:text-2xl scale-125 text-white/90 me-3 shrink-0"></i>
                      <div className="min-w-0">
                        <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          MongoDB
                        </p>
                        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                          The world's most popular document database
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                      <i className="bx bxl-firebase  text-sm md:text-2xl scale-125 text-white/90 me-3 shrink-0"></i>
                      <div className="min-w-0">
                        <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          FireBase
                        </p>
                        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                          web app development platform
                        </p>
                      </div>
                    </div>
                
                  </div>
                </div>
  )
}

export default Technologies
