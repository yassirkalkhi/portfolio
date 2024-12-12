import React ,{useEffect} from "react";
import { useActiveLink } from "../Context/ActiveLinkContext";
import { Button } from "../components/ui/button";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";



const Header = () => {
  const {wichLink,setLink} = useActiveLink()
  return (
    <header className="flex items-center justify-center w-full   py-5 ">
      <div className="container h-full flex justify-between items-center px-4 md:px-16">
        <div className="flex items-center gap-6">
          <div className="logo text-white font-semibold">@yasserkalkhi</div>
          <nav className="hidden md:flex text-white/60 gap-6 text-sm font-medium">
            <Link to="/home"  style={wichLink === "home"?   {color:"white"} : {}}>Home</Link>
            <Link to="/work" style={wichLink === "work"?   {color:"white"} : {}}>Work</Link>
            <Link to="/resume" style={wichLink === "resume"?   {color:"white"} : {}}>Resume</Link>
          </nav>
        </div>
        <div className="flex gap-4 h-full items-center justify-center">
          <div className="hidden sm:block">
            <Modal btnVariant="outline"/>
          </div>
          <ul className="flex text-white/90 text-xl gap-4">
            <li>
              <a href="https://x.com/yassirkalkhi" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/yassirkalkhi" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yassir-kalkhi-83a8382b7/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black text-white w-[300px] sm:w-[400px] border-white/20"
            >
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/home" className="text-white/60 hover:text-white">
                  Home
                </Link>
               
                <Link to="/work" className="text-white/60 hover:text-white">
                  Work
                </Link>
                <Link to="/resume" className="text-white/60 hover:text-white">
                  Resume
                </Link>
             <Modal btnVariant="" />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
