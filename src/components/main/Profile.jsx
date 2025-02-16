import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";


const Profile = () => {
  return (
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
  )
}

export default Profile
