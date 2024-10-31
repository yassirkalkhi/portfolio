import React from 'react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion'; // If you're using framer-motion

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#09090b] px-4">
      <div className="text-center space-y-6">
        <div className="relative">
          <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-bold text-white/5 select-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl text-white/80 font-medium">
            Page Not Found
          </p>
        </div>

        <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>

        <div className="pt-4">
          <a href="/" className="inline-block">
            <Button 
              variant="outline" 
              className="group  relative px-6 py-2 text-sm sm:text-base  overflow-hidden transition-all duration-300
                         border-white/20  bg-white hover:bg-white/80"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="fa-solid fa-arrow-left text-xs sm:text-sm"></i>
                Back to Home
              </span>
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-4 pt-8 text-white/40 text-xs sm:text-sm">
          <a href="/work" className="hover:text-white/60 transition-colors">Projects</a>
          <span>•</span>
          <a href="/home" className="hover:text-white/60 transition-colors">Contact</a>
          <span>•</span>
          <a href="https://github.com/yassirkalkhi" target='_blank' className="hover:text-white/60 transition-colors">
            GitHub
          </a>
        </div>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
        <div className="absolute left-0 top-0 -z-10 h-full w-full 
                      [background:radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]
                      opacity-20" />
      </div>
    </div>
  );
};

export default NotFound;