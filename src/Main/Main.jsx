import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const Main = () => {
  return (
    <main className="flex flex-col items-center text-start  pt-20 ">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] text-start">
        <p
          className="text-white text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"
          style={{ textShadow: "0px 0px 2px rgba(255, 255, 255, 0.7)" }}
        >
          Where Vision Meets Innovation
        </p>
        <h1 className="text-md ms-1 my-2  text-white/60">
          Innovative Solutions, Seamless Web Experiences
        </h1>
      </div>
      <div className="w-[90%] sm:w-[80%] md:w-[70%] h-auto rounded-lg border border-white/10 mt-8 mb-8">
        <div className="flex w-full justify-between rounded border-b border-white/10">
          {/* Left side - Profile */}
          <div className="flex w-full sm:w-[40%] md:w-[40%] lg:w-[35%] xl:w-[26%] items-center gap-2 p-4 md:gap-4">
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
              <AvatarImage src="../assets/user.jpg" alt="Profile picture" />
              <AvatarFallback>YK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 md:gap-1 min-w-0">
              <h1 className="text-white/80 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                Yassir Kalkhi
              </h1>
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Right side - Status */}
          <div className="flex items-center gap-2 p-3 sm:p-4 border-white/10">
            <div className="hidden sm:flex flex-col items-end">
              <p className="text-white/80 text-xs sm:text-sm md:text-base font-medium">
                Student at OFPPT
              </p>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white/60 text-[10px] sm:text-xs md:text-sm">
                    Currently studying
                  </span>
                </span>
                <span className="text-white/40 text-[10px] sm:text-xs md:text-sm">
                  • 2023-2025
                </span>
              </div>
            </div>
            {/* Mobile Version */}
            <div className="sm:hidden flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white/60 text-[10px] whitespace-nowrap">
                Student
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[80%] flex flex-col  md:flex-row ">
          <div className="w-full md:w-[50%]  flex flex-col items-center gap-6 p-4">
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
          </div>

          <div className="w-full flex flex-col items-center md:w-[50%]  md:border-l border-white/10  gap-6 p-4">
            <div className="w-[99%] border border-white/10 rounded-lg p-4">
              <p className="text-white text-lg md:text-xl font-semibold mb-4">
                Technologies
              </p>
              <div className="text-white space-y-3">
                <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                  <i className="fa-brands fa-react text-sm md:text-2xl text-white/90 me-3 shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                      React JS
                    </p>
                    <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                      JavaScript Front End Library
                    </p>
                  </div>
                </div>
                <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                  <i class="bx bxl-tailwind-css text-sm md:text-2xl text-white/90 scale-125 me-3 shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                      Tailwindcss
                    </p>
                    <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                      utility-first CSS framework
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
                  <i class="bx bxl-mongodb  text-sm md:text-2xl scale-125 text-white/90 me-3 shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                      Mongo DB
                    </p>
                    <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                      The world's most popular document database
                    </p>
                  </div>
                </div>
                <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
                  <i class="bx bxl-firebase  text-sm md:text-2xl scale-125 text-white/90 me-3 shrink-0"></i>
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
            <div className="w-[99%] border border-white/10 rounded-lg p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <p className="text-white/80 text-sm sm:text-lg md:text-xl font-semibold text-center sm:text-left">
                  10X Workflow With
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Avatar className="border border-white/80 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 scale-125">
                    <AvatarImage
                      src="./icons/shadcn.png"
                      alt="Shadcn UI"
                      className="grayscale"
                    />
                    <AvatarFallback className="text-[10px] sm:text-xs">
                      SC
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border border-white/80 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 scale-125">
                    <AvatarImage
                      src="./icons/flowbite.png"
                      alt="Flowbite UI"
                      className="grayscale"
                    />
                    <AvatarFallback className="text-[10px] sm:text-xs">
                      FB
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border border-white/80 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 scale-125">
                    <AvatarImage
                      src="./icons/chakra.png"
                      alt="Chakra UI"
                      className="grayscale"
                    />
                    <AvatarFallback className="text-[10px] sm:text-xs">
                      CH
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border border-white/80 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 scale-125">
                    <AvatarImage
                      src="./icons/materialUI.svg"
                      alt="Material UI"
                      className="grayscale"
                    />
                    <AvatarFallback className="text-[10px] sm:text-xs">
                      MU
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
