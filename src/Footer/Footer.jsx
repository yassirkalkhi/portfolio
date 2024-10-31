import React from 'react'
import {Avatar , AvatarImage,AvatarFallback} from "../components/ui/avatar"

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-auto overflow-x-hidden">
      <div className="container flex flex-col items-center mx-auto px-4 py-6 sm:py-8">
        <div className="w-full md:w-[60%] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-white/90 font-semibold text-sm md:text-base text-center sm:text-left">Built by me</h3>
              <p className="text-white/60 text-xs md:text-sm text-center sm:text-left">The source code is available on GitHub.</p>
            </div>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-3 sm:gap-4">
            <a href="https://github.com/yassirkalkhi" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white/60 hover:text-white/90 transition-colors">
              <i className="fa-brands fa-github text-lg sm:text-xl"></i>
            </a>
            
            <a href="https://linkedin.com/in/yassir-kalkhi-83a8382b7/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white/60 hover:text-white/90 transition-colors">
              <i className="fa-brands fa-linkedin text-lg sm:text-xl"></i>
            </a>
            
            <a href="https://twitter.com/yassirkalkhi" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white/60 hover:text-white/90 transition-colors">
              <i className="fa-brands fa-x-twitter text-lg sm:text-xl"></i>
            </a>
            
            <a href="mailto:yasserkalkhi@g  mail.com" 
               className="text-white/60 hover:text-white/90 transition-colors">
              <i className="fa-solid fa-envelope text-lg sm:text-xl"></i>
            </a>
            
            <a href="https://discord.com/users/trapx01#8190" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white/60 hover:text-white/90 transition-colors">
              <i className="fa-brands fa-discord text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright - Optional bottom text */}
        <div className="w-full md:w-[60%] text-center mt-4 sm:mt-6">
          <p className="text-white/40 text-[10px] sm:text-xs">
            © 2024 Yassir Kalkhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer