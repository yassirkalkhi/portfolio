import React from 'react';
import user from "../assets/user.jpg"
import chadcnLogo from "../assets/chadcn.png"
import materialUi from "../assets/materialui.png"
import chakra from "../assets/chakra.png"
import bootstrap from "../assets/bootstrap.png"
const Light = () => {
  return (
    <div className="absolute top-[80%] w-full h-[900px] light blur-3xl opacity-30"></div>
  );
};

const Main = () => {
  return (
    <>
      <div className="w-[100vw] h-[70vh] flex items-center justify-center flex-col ">
        <Light />
        <div className="hidden md:block">
          <p className="text-[3rem] text-white font-bold tracking-tight">Elevated online presence.</p>
        </div>
        <div className="md:hidden mt-40">
          <p className="text-[10vw] text-white font-bold tracking-tight overflow-hidden" style={{ lineHeight: 1.1 }}>Elevated online <br /> presence.</p>
        </div>

        <div className="hidden md:block">
          <p className="text-white/40 text-[1.4rem] text-center mt-5 tracking-tight">An expert way to elevate Your Online presence with</p>
          <p className="text-white/40 text-[1.4rem] text-center mt-1 tracking-tight">the Latest Web frameworks and Intelligent solutions</p>
        </div>
        <div className="w-full md:hidden text-center flex flex-col items-center">
          <p className="text-white/40 text-[4vw] mt-5 tracking-tight">An expert way to elevate <br /> Your Online presence with</p>
          <p className="text-white/40 text-[4vw] mt-1 tracking-tight">the Latest Web frameworks <br /> and Intelligent solutions  </p>
        </div>

        <div className="flex items-center gap-4 mt-5 flex-col sm:flex-row ">
        <a 
      href="mailto:yasserkalkhi@gmail.com" 
      className="bg-white rounded-lg shadow-md shadow-white/30 px-4 py-2 font-semibold hover:opacity-70 transition-all ease-linear antialiased"
    >Hire me</a>
          <button className="bg-white/40 rounded-lg text-white shadow-md shadow-white/20 px-4 py-2 font-semibold hover:opacity-70 transition-all ease-linear">Resume</button>
        </div>
      </div>

      <p className="text-white text-center text-xl font-extrabold sm:text-6xl mb-16 mt-10 mx-8 bg-gradient-to-r from-white  to-white/70 bg-clip-text text-transparent" >Innovative Solutions, Seamless Web Experiences </p>

      <div className="w-[90%] grid md:grid-cols-2 xl:grid-cols-3 grid-rows-7 
       gap-4 text-white ">
        <div className="md:row-span-2 xl:row-span-2 rounded-lg border bg-black border-white/20 bg-opacity-70 backdrop-blur-md flex items-center justify-center font-bold flex-col">
          <div className='flex items-center gap-4'>
         <img src={user} width="90" height={90} className='self-start rounded-full' alt="User" /> 
            <div className='text-[0.9rem] font-thin text-white/50'>
              <span>Yassir Kalkhi</span><br />
              <span>Fullstack Web Developer</span><br />
              <span>Not open for work <span className='font-extrabold text-red-600'> •</span></span>
            </div>
          </div>
        </div>
        <div className="md:row-span-3 xl:row-span-3 rounded-lg border bg-black border-white/20 bg-opacity-70 backdrop-blur-md flex items-center justify-center font-bold text-4xl flex-col px-4 py-6 gap-3">
          <span className='text-white text-5xl' style={{ textShadow: "0 0 5px white" }}>Stack</span>
          <div className='flex text-7xl mt-2  flex-col items-center'> 
            <div>
               <i className='bx bxl-tailwind-css text-white/80 hover:text-cyan-500 transition-all ease-linear' style={{ textShadow: "0 0 5px " }} ></i>
               <i className='bx bxl-react text-white/80 hover:text-cyan-400 transition-all ease-linear' style={{ textShadow: "0 0 5px " }}></i>
               <i className='bx bxl-firebase text-white/80 hover:text-orange-500 transition-all ease-linear'  style={{ textShadow: "0 0 5px " }}></i>
            </div>
          <div>
              <i className='bx bxl-nodejs text-white/80 hover:text-green-500 transition-all ease-linear'  style={{ textShadow: "0 0 5px " }}></i>
              <i className='bx bxl-mongodb text-white/80 hover:text-green-600 transition-all ease-linear'  style={{ textShadow: "0 0 5px " }}></i>
          </div>
          </div>
        </div>
        <div className='md:row-span-1 md:col-start-1 xl:col-start-3 xl:row-span-1 rounded-lg border border-white/20 bg-black bg-opacity-70 backdrop-blur-md  overflow-hidden'>
          <div className='flex w-full h-full flex-col  rounded overflow-hidden items-center justify-center '>
            <div className='flex items-center justify-center p-2 text-3xl'>
              <div> <i className="fa-solid fa-bolt text-white text-3xl me-2"  style={{ textShadow: "0 0 5px yellow" }}></i></div> 
                 <div className='text-3xl font-semibold'><span className='text-white' style={{ textShadow: "0 0 5px white" }}>Fast </span><span className='text-white/60'>Websites</span> </div> <div className='absolute  -right-10 bg-[radial-gradient(circle,white,black)] w-[100px] h-[200px]   blur-3xl opacity-3'></div>
            </div>
            <div className='text-white/70 text-[0.7rem] -mt-2 mb-2'>with the latest  <span className='' >Web Framworks</span></div>
               </div>
        </div>
        <div className="md:row-span-4 md:row-start-4 xl:row-span-4 xl:col-start-3 rounded-lg border border-white/20 bg-black bg-opacity-70 backdrop-blur-md flex p-4 text-white font-light overflow-hidden pt-8">
                 <div className="w-full flex flex-col items-center">
                   <div className='w-full flex text-center flex-col'>
                    <span className='text-3xl sm:text-5xl font-bold sm:font-extrabold'> <span  style={{ textShadow: "0 0 4px white" }}>Security</span> <span  style={{ textShadow: "0 0 4px white" }}>Awarness</span></span>
                    <span className='text-white/70 sm:mt-2'>over anything</span>
                  </div>
                  <div className='overflow-hidden'>
                      <i className='bx bxs-lock absolute text-8xl hover:scale-[1.05] transition-all ease-linear duration-200 text-white/40 md:top-60  left-2  -rotate-[60deg] z-50'  style={{ textShadow: "0 0 10px " }}></i>
                      <i className='bx bx-lock-alt absolute text-7xl sm:text-9xl hover:scale-[1.05] transition-all ease-linear duration-200 text-white/20 top-20 md:top-24  right-4 sm:right-0  rotate-[60deg] z-50'  style={{ textShadow: "0 0 10px " }}></i>
                      <i className='bx bxs-lock-alt text-[20rem] sm:text-[25rem]  md:text-[30rem] hover:scale-[1.05] transition-all ease-linear duration-200 -rotate-45 absolute top-32 sm:top-28 md:top-40 left-0 bottom-20 text-white/50' style={{ textShadow: "0 0 10px " }}></i>
                  </div>
                 </div>
                 
                 
        </div>
        <div className="md:row-span-2 md:row-start-4 xl:row-span-2 xl:row-start-3 rounded-lg border border-white/20 bg-black bg-opacity-70 backdrop-blur-md flex  text-white font-light px-6 py-8 ">
           
          <span className='text-2xl  text-white/70 font-bold font-[Archivo Black] leading-tigh break-words overflow-clip' >l'm  Building <span className='text-black/80 bg-white rounded-md me-1'>sleek </span>,<span className='text-black/80 bg-white rounded-md ms-1 me-1'> responsive</span> websites with modern technologies, and with a focus on creating functional and  <span className='text-black/80 bg-white rounded-md text-nowrap'> user-friendly</span> digital experiences.
          </span>  
        
        </div>
        <div className="md:row-span-2 md:col-start-2 md:row-start-6 xl:row-span-3 xl:col-start-1 xl:row-start-5 rounded-lg border border-white/20 bg-black bg-opacity-70 backdrop-blur-md flex items-center p-6  font-light">
        <div>
          <div>
              <span className='text-3xl font-extrabold' ><span className='text-6xl'  style={{ textShadow: "0 0 4px white" }}>10x Fastest</span>  <span className='text-white/70 '><br /> progress </span>  <span className='text-white/70'><span className='text-white/70'>with</span> </span> </span>
              
                 
          </div>
          <div className='flex items-center justify-start text-xl mt-4 mb-3 '  style={{ textShadow: "0 0 3px white" }}>
                
                             ChadcnUI •      
                             MaterialUI •     
                             ChakraUI •     
                          React Bootstrap  • Preline • Flowbite
                       
            </div>
        </div>
        </div>
        <div className="md:row-span-2 md:col-start-1 md:row-start-8 xl:row-span-3 xl:col-start-2 xl:row-start-4 rounded-lg border border-white/20 bg-black bg-opacity-70 backdrop-blur-md flex p-4 text-white font-light overflow-hidden">
                   <div className='flex items-center justify-center w-full h-fullrounded '>
                   <i className='bx bx-git-compare text-white/20 text-[20rem] absolute top-28 md:text-[24rem] md:top-16 xl:top-40 2xl:top-28  '></i>
                   <span className='text-5xl font-bold text-center'><span className='text-8xl'>Pro</span> <br />Version  Controle <br /> <span className='text-3xl text-white/70'>with</span> <span className='text-4xl text-white/90'>Git <span className='text-2xl text-white/70'>&</span> Github</span> </span>
                   </div>

        </div>
        <div className="md:row-span-2 md:col-start-2 md:row-start-8 xl:row-span-2 xl:col-start-3 xl:row-start-6 rounded-lg border border-white/20 bg-black bg-opacity-70 backdrop-blur-md flex p-4 text-white font-light overflow-hidden">
                   <div className='flex items-center justify-center w-full h-fullrounded '>
                   <i className='bx bx-window text-white/20 text-[20rem] absolute top-1'></i>
                   <span className='text-5xl font-bold text-center'><span className='text-5xl'>Cross Browser</span> <br /><span className='text-4xl text-white/50'> Compatibility</span> </span>
                   </div>

        </div>
      
       

      </div>
     
    </>
  );
};

export default Main;

