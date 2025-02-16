import React from 'react'

const Platforms = () => {
  return (
    <div className="w-[99%] border border-white/10 rounded-lg p-4">
    <p className="text-white text-lg md:text-xl font-semibold mb-4">
      Tools & Platforms
    </p>
    <div className="text-white space-y-3">
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors gap-1">
      <i className="fa-brands fa-docker text-sm md:text-2xl text-white/90 me-3 shrink-0"></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            Docker
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Accelerated Container Application Development
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border gap-2 border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
      <img src="../../public/icons/jira.png" alt="" className="w-6 md:w-8 scale-75"/>
      <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
          Jira 
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Project management software
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 ps-4 hover:bg-white/5 transition-colors">
        <i className="fa-brands fa-git-alt text-sm md:text-3xl text-white/90 me-3 shrink-0"></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
             Git
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Distributed Version Control System
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 ps-4 hover:bg-white/5 transition-colors">
        <i className="fa-brands fa-github text-sm md:text-2xl text-white/90 me-3 shrink-0"></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
             Github
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
           Build and ship software on a single, collaborative platform ... 
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 ps-4 hover:bg-white/5 transition-colors">
      <i className='fa-brands fa-gitlab text-sm md:text-2xl text-white/90  me-4 shrink-0 scale-95'></i>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            Gitlab
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          DevSecOps platform (SAST/DAST/SCA - IaC - CI/CD Pipelines)
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors gap-2">
      <img src="../../public/icons/vercel.png" alt="" className="w-6 md:w-9 scale-75"/>
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
          Vercel
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Develop. Preview. Ship.
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border gap-2 border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
      <img src="../../public/icons/sonarqube.png" alt="" className="w-6 md:w-8 scale-75 "/>
      <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
           SonarQube
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Continuous Code Quality
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border gap-2 border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors">
      <img src="../../public/icons/jenkins.png" alt="" className="w-6 md:w-8 scale-95"/>
      <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
         Jenkins
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          Automation server
          </p>
        </div>
      </div>
      <div className="flex items-center min-w-0 border border-white/10 rounded-lg p-3 hover:bg-white/5 transition-colors gap-3">
      <img src="../../public/icons/mysql.png" alt="" className="w-6 md:w-8" />
        <div className="min-w-0">
          <p className="text-white/80 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
            MySql
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
        Relational Database Management System
          </p>
        </div>
      </div>
    
    </div>
  </div>
  )
}

export default Platforms
