import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleResize = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rtvufom', 'template_787ritj', e.target, 'vNKcGGKnn8tpJb8ro')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        // Optionally, you can close the modal or reset the form here
        setIsModalOpen(false);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };


  return (
    <>
      <nav className="bg-black/30 backdrop-blur-md fixed w-full z-20 top-0 start-0 p-6 sm:p-4 shadow-lg">
        <div className="max-w-screen-xl h-[2vh] sm:h-[6vh] flex flex-wrap items-center justify-between mx-auto p-1 sm:p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white " style={{ fontFamily: 'Gulzar' }}>ياسر</span>
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

            <button onClick={() => { setNavOpen(!navOpen) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white/80 hover:text-white rounded-lg md:hidden">
              <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
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
                <Link onClick={toggleModal} className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Contact</Link>
              </li>
              <li>
                <Link to="/work" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Work</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full transition-all ease-linear overflow-hidden z-50' style={{ height: navOpen ? "900px" : "0px" }}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">About</Link>
            </li>
            <li>
              <Link onClick={toggleModal} className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Contact</Link>
            </li>
            <li>
              <Link to="/work" className="block py-2 px-3 text-white/70 hover:text-white transition-all ease-linear rounded md:bg-transparent md:p-0">Work</Link>
            </li>
          </ul>
          <div className='flex text-white -ms-20 text-3xl gap-3'>
            <i className='bx bxl-github hover:opacity-80 transition-all ease-linear'></i>
            <i className='bx bxl-twitter hover:opacity-80 transition-all ease-linear'></i>
            <i className='bx bxl-linkedin-square hover:opacity-80 transition-all ease-linear'></i>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <div
          id="hs-focus-management-modal"
          className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-labelledby="hs-focus-management-modal-label"
        >
          <div className="bg-white shadow-sm rounded-xl sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 id="hs-focus-management-modal-label" className="font-bold text-black">
                Contact me
              </h3>
              <button
                type="button"
                className="w-8 h-8 inline-flex justify-center items-center gap-x-2 rounded-full"
                onClick={toggleModal}
              >
                <span className="sr-only">Close</span>
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <form onSubmit={sendEmail}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  className="py-3 px-4 block w-full border rounded-lg text-black"
                  placeholder="YourEmail@example.com"
                  autoFocus
                />
                <br />
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message" 
                  className="py-3 px-4 block w-full border rounded-lg text-black"
                  placeholder="Type your message here"
                ></textarea>
                <br />
                <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-black text-white focus:outline-none"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
