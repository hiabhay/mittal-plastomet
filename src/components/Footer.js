import React from "react";
import Section from "./Section";
import Strokedsolar from "../assets/images/Strokedsolar.png";
import logo from "../assets/images/Logo.png";
import indigoArrow from "../assets/images/indigoArrow.png";
import linkedin from "../assets/images/linkedin.png";
import insta from "../assets/images/insta.png";
import fb from "../assets/images/fb.png";

const Footer = ({ scrollToContact }) => {
  return (
    <Section color="bg-white">
      <div className="relative mt-20 sm:w-full">
        <div className="flex justify-center">
          <div className="relative w-screen sm:w-full h-[500px] sm:h-[550px] bg-zinc-100 rounded-2xl border overflow-hidden">
            <img
              src={Strokedsolar}
              className="absolute inset-0 w-[800px] sm:top-20 h-auto object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={logo}
                className="absolute top-4 w-[50px] h-auto"
                alt="Logo"
              />
              <div className="absolute top-12 font-bold text-2xl sm:text-lg text-indigo-900">
                Mittal Plastomet Ltd.{" "}
              </div>
              <div className="absolute sm:top-20 top-24 font-bold text-6xl sm:text-4xl text-black">
                Save <span className="text-cyan-600">Electricity</span>
              </div>
              <button
                className="absolute sm:w-[130px] sm:h-[40px] w-[180px] h-[50px] sm:top-44 flex rounded-3xl border border-indigo-900"
                onClick={scrollToContact}
              >
                <div className="font-semibold text-2xl sm:text-[17px] mt-[7px] sm:mt-[2.5px] ml-3 sm:ml-[8px] text-indigo-900">
                  Get in touch
                </div>
                <img
                  className="mt-5 sm:mt-[15px] ml-1 sm:ml-[4px] h-2"
                  src={indigoArrow}
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute z-10 sm:bottom-32 bottom-16 sm:w-full sm:flex-col sm:justify-center sm:items-center">
          <div className="flex ml-40 sm:-mb-16 sm:pl-2 sm:ml-0 sm:w-full sm:flex-col sm:justify-center sm:items-center">
            <div className="text-cyan-600 sm:mb-4 text-xl sm:text-sm font-bold uppercase leading-[30px] tracking-tight">
              Follow
              <div className="flex sm:-ml-2 -ml-[0.5px]">
                <img
                  className="w-auto h-[18px] sm:h-[20px]"
                  src={linkedin}
                ></img>
                <img
                  className="w-auto h-[18px] sm:h-[20px] ml-2"
                  src={insta}
                ></img>
                <img
                  className="w-auto h-[18px] sm:h-[20px] ml-2"
                  src={fb}
                ></img>
              </div>
            </div>
            <div className="text-cyan-600 text-xl sm:text-sm font-bold uppercase leading-[30px] tracking-tight ml-24 sm:ml-0 sm:mt-3 sm:pb-3">
              Contact
              <div className="text-indigo-900 text-sm font-semibold sm:-mt-1 sm:-ml-6">
                +91-9630144980
              </div>
            </div>
            <div className="text-cyan-600 text-xl sm:text-sm font-bold uppercase leading-[30px] tracking-tight ml-24 sm:ml-28 sm:mt-3">
              Office
              <div className="text-indigo-900 text-sm w-[270px] sm:w-auto font-semibold sm:-ml-24">
                Bawaria Kalan Opp. Axis Bank | bhopal
              </div>
            </div>
            <div className="text-cyan-600 text-xl sm:text-sm font-bold uppercase leading-[30px] tracking-tight ml-24 sm:ml-16 sm:mt-8">
              Manufacturing
              <div className="text-indigo-900 text-sm font-semibold sm:-mt-1 sm:-ml-16">
                satlapur Industrial Area, Mandideep
              </div>
            </div>
          </div>
          <div className="absolute bg-black w-[1100px] sm:w-11/12 sm:hidden border border-zinc-300 left-32 top-16"></div>
          <div className="absolute left-40 sm:left-8 mt-4 sm:mt-24 flex">
            <div className="text-sm text-neutral-500">Services</div>
            <div className="text-sm text-neutral-500 ml-12 sm:ml-8">
              Process
            </div>
            <div className="text-sm text-neutral-500 ml-12 sm:ml-8 sm:w-[75px]">
              About Us
            </div>
            <div className="text-sm text-neutral-500 ml-12 sm:ml-0 sm:w-[75px]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
