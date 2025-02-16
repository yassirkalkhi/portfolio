import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

const XXWorkFlow = () => {
  return (
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
  )
}

export default XXWorkFlow
