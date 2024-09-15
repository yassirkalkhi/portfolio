import React, { useEffect } from 'react';
import {useState} from "react"
import { Link } from 'react-router-dom';

const Header = () => {
  const [navOpen,setNavOpen] = useState(false)
  const handleResize = ()=>{
    setNavOpen(false)
  }
  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return(()=>{
       document.removeEventListener("resize",handleResize)
    }
     
    )
  },[])
  return (
   <>
<nav className="bg-black/30 backdrop-blur-md fixed w-full z-20 top-0 start-0 p-6 sm:p-4 shadow-lg">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white " style={{fontFamily:'Gulzar'}}>ياسر</span>
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div className='hidden md:flex text-white -ms-20 text-3xl gap-3'>
        <Link to={"http://github.com/yassirkalkhi"} target='_blank'>
          <i className='bx bxl-github hover:opacity-80 transition-all ease-linear'></i>
        </Link>  
        <Link to={"https://x.com/YKalkhi"} target='_blank'> 
          <i className='bx bxl-twitter hover:opacity-80 transition-all ease-linear'></i>
        </Link>
        <Link to={"https://www.linkedin.com/in/yassir-kalkhi-83a8382b7/"} target='_blank'>
          <i className='bx bxl-linkedin-square hover:opacity-80 transition-all ease-linear'></i>
        </Link>
      </div>
  
      <button onClick={()=>{setNavOpen(!navOpen)}} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white/80 hover:text-white rounded-lg md:hidden">
        <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li>
          <Link to="/" className="block py-2 px-3 text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Home</Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">About</Link>
        </li>
        <li>
          <Link to="/services" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Contact</Link>
        </li>
        <li>
          <Link to="/contact" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Work</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className='w-full transition-all ease-linear overflow-hidden z-50' style={{height: navOpen ? "900px" : "0px"}}>
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
      <li>
        <Link to="/" className="block py-2 px-3 text-white transition-all ease-linear rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">About</Link>
      </li>
      <li>
        <Link to="#" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Services</Link>
      </li>
      <li>
        <Link to="/contact" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Contact</Link>
      </li>
    </ul>  
    <div className='flex text-white -ms-20 text-3xl gap-3'>
      <i className='bx bxl-github hover:opacity-80 transition-all ease-linear'></i>
      <i className='bx bxl-twitter hover:opacity-80 transition-all ease-linear'></i>
      <i className='bx bxl-linkedin-square hover:opacity-80 transition-all ease-linear'></i>
    </div>
  </div>
</nav>



    </>
  );
};

export default Header;
