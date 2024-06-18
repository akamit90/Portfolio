import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
// import image from "./assets/dp.jpg";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 fixed left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-3 py-5">
          <div className="flex items-center">
            <Link to="home"
                spy={true}
                smooth={true}
                duration={800} 
                offset={-100} >
              <h3 className="font-bold text-2xl sm:text-xl md:text-2xl cursor-pointer lg:text-3xl">
                Amit
              </h3>
            </Link>
          </div>
          <div className="hidden md:flex ml-auto">
            <ul className="flex items-center text-lg font-semibold space-x-6">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                // activeClass="active"
              >
                <li className="hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg ">
                  Home
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                activeClass="active"
              >
                <li className="hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                  About
                </li>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                activeClass="active"
              >
                <li className="hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                  Skills
                </li>
              </Link>
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                activeClass="active"
              >
                <li className="hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                  Project
                </li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                activeClass="active"
              >
                <li className="hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {!isOpen ? (
              <button className="md:hidden" onClick={toggleMenu}>
                <GiHamburgerMenu size={25} />
              </button>
            ) : (
              <button className="md:hidden" onClick={closeMenu}>
                <GiHamburgerMenu size={25} />
              </button>
            )}
          </div>

          {isOpen && (
            <div
              className="md:hidden absolute top-[73px] ml-auto w-[75%] right-0 z-10 h-[100vh] text-white"
              style={{ backgroundColor: "rgb(13, 23, 48)" }}
            >
              <ul className="flex flex-col gap-5 text-2xl font-semibold items-center justify-center">
                <Link
                  to="home"
                  spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                  activeClass="active"
                  onClick={closeMenu}
                >
                  <li className="mt-5 hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                    Home
                  </li>
                </Link>
                <Link
                  to="about"
                  spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                  activeClass="active"
                  onClick={closeMenu}
                >
                  <li className="hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                    About
                  </li>
                </Link>
                <Link
                  to="skills"
                  spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                  activeClass="active"
                  onClick={closeMenu}
                >
                  <li className="mt-0 hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                    Skills
                  </li>
                </Link>
                <Link
                  to="project"
                  spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                  activeClass="active"
                  onClick={closeMenu}
                >
                  <li className="hover:text-red-500 hover:underline hover:font-bold cursor-pointer text-base sm:text-sm md:text-base lg:text-lg">
                    Project
                  </li>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                smooth={true}
                duration={800} 
                offset={-100} 
                  activeClass="active"
                  onClick={closeMenu}
                >
                  <li className="hover:text-gray-900 cursor-pointer mb-6 text-base sm:text-sm md:text-base lg:text-lg">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </header>

      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Navbar;
