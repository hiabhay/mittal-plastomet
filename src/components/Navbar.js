import React, { useEffect, useState } from "react";
import Frame from "../assets/images/Logo.png";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import Section from "./Section";
import Aos from "aos";
import "aos/dist/aos.css";
import NavHam from "../assets/images/NavHam.png";
import indigoArrow from "../assets/images/indigoArrow.png";
import whiteCross from "../assets/images/whiteCross.png";
import whiteArrow from "../assets/images/whiteArrow.png";

const Navbar = ({ source, scrollToContact, scrollToServices, scrollToProcess, scrollToAbout }) => {
  const handleButtonClick = () => {
    const isHomepage = window.location.pathname === "/";

    if (isHomepage) {
      scrollToContact();
    } else {
      // Set a flag in local storage
      localStorage.setItem("scrollToContact", "true");
      window.location.href = "/";
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (source === "hero") {
      Aos.init({ duration: 500 });
    }
  }, [source]);

  const normalizePath = (path) => path.replace(/\/$/, "");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Services", action: scrollToServices },
    { label: "Process", action: scrollToProcess },
    { label: "About Us", action: scrollToAbout },
    // { label: "Contact Us", action: scrollToContact }
  ];

  return (
    <Section>
      <div
        className={`z-auto flex justify-between items-center p-4 sm:pb-0 relative ${
          isOpen
            ? "bg-cyan-600 transition-all duration-100 ease-in-out mb-1"
            : "bg-white"
        }`}
      >
        {/* Branding */}
        <div className="pb-2">
          <Link to="/">
            <button className="flex items-center ml-12 sm:ml-2">
              <img
                src={isOpen ? Frame : Frame}
                alt="Logo"
                className={`w-8 h-auto ${isOpen ? "mt-1" : ""}`}
              />
              <h1
                className={`font-bold pl-2 text-xl text-indigo-900 ${
                  isOpen ? "text-white" : "visible"
                }`}
              >
                Mittal Plastomet Ltd.
              </h1>
            </button>
          </Link>
        </div>

        {/* Navbar Menu */}
        <div className="sm:hidden items-center absolute left-[65%] flex">
          {navItems.map((item, index) => (
            <button key={item.label} onClick={item.action} className="mr-6 relative">
              <div
                className={`text-lg tracking-tight font-semibold text-neutral-400`}
                data-aos={source === "hero" ? "zoom-in-up" : ""}
                data-aos-duration={
                  source === "hero" ? `${500 + index * 100}` : ""
                }
                style={{
                  position: "relative",
                  paddingBottom: "0.1rem",
                }}
              >
                {item.label}
              </div>
            </button>
          ))}

          <button className="pt-0 ml-4" onClick={scrollToContact}>
            <div className="w-[120px] h-10 px-5 py-4 bg-cyan-600 rounded-[51px] shadow-md shadow-slate-400 justify-center items-center inline-flex hover:shadow-none">
              <div className="text-white font-medium text-sm pb-[2px]">
                Contact Us
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="pt-0 ml-4 md:hidden xl:hidden 2xl:hidden"
          onClick={toggleMenu}
        >
          <img src={isOpen ? whiteCross : NavHam} alt="Menu" />
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`z-30 md:hidden xl:hidden 2xl:hidden w-auto bg-cyan-600 transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } -mt-1`}
      >
        <div className="text-white flex">
          <div className="ml-6 mt-16 mb-12">
            <button onClick={scrollToServices}>
              <div className="font-bold text-2xl w-auto mb-8">Services</div>
            </button>
            <br/>
            <button onClick={scrollToProcess}>
              <div className="font-bold text-2xl w-auto mb-8">Process</div>
            </button>
            <br/>
            <button onClick={scrollToAbout}>
              <div className="font-bold text-2xl w-auto mb-8">About Us</div>
            </button>
          </div>
          <div className="absolute right-[25%] mb-16 mt-16">
            <a href="" target="blank">
              <div className="font-thin text-xl w-auto mb-2">Behance</div>
            </a>
            <a href="" target="blank">
              <div className="font-thin text-xl w-auto mb-2">Instagram</div>
            </a>
            <a href="" target="blank">
              <div className="font-thin text-xl w-auto mb-2">Dribble</div>
            </a>
            <a href="" target="blank">
              <div className="font-thin text-xl w-auto mb-2">LinkedIn</div>
            </a>
            <a href="" target="blank">
              <div className="font-thin text-xl w-auto mb-2">Facebook</div>
            </a>
            <button>
              <div className="font-thin text-xl w-auto mb-2">Contact Us</div>
            </button>
          </div>
        </div>
        <div className="h-[270px] bg-indigo-900 w-auto text-white">
          <div className="w-[300px] relative top-[15%] left-[5%] text-4xl font-semibold">
            Save Electricity
          </div>
          <div className="w-[350px] relative top-[18%] left-[5%] text-4xl font-semibold">
            & Cut Cost
          </div>
          <div className="w-[200px] relative top-[30%] left-[5%]">
            <button className="w-[140px] h-[40px] rounded-3xl text-white border border-white flex" onClick={scrollToContact}>
              <div className="mt-[4px] ml-4">Get in touch</div>
              <img className="mt-[13px] ml-2 w-[17px] h-auto" src={whiteArrow} />
            </button>
          </div>
          <div className="relative w-[200px] top-[40%] left-[5%] flex">
            <div className="w-auto text-white opacity-50">India</div>
            <div className="w-auto text-white opacity-50 ml-4">USA</div>
          </div>
        </div>
      </div>
      
    </Section>
  );
};

export default Navbar;




