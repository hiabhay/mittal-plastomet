import React from "react";
import Section from "./Section";
import backg from "../assets/images/backg.png";

const About = () => {
  return (
    <div className="flex justify-center w-full overflow-hidden border-b pt-0 h-[852px] sm:h-[348px]">
      <div>
        <div className="w-full flex justify-center">
          <div className="w-[800px] sm:w-[350px] h-[200px] sm:h-[150px] mt-12 border border-zinc-300 rounded-2xl bg-white">
            <div className="flex">
              <div className="mt-16 sm:mt-10 w-[280px] sm:w-[100px]">
                <div className="text-5xl sm:text-3xl w-[100px] text-black font-bold ml-[30%] sm:ml-[38%]">
                  50+
                </div>
                <div className="text-sm sm:text-xs w-[100px] text-black font-semibold ml-[31%] sm:ml-[21%] mt-3">
                  Team Members
                </div>
              </div>
              <div className="w-[1px] h-[200px] bg-zinc-300"></div>
              <div className="mt-16 w-[280px] sm:mt-10">
                <div className="text-5xl sm:text-3xl w-[100px] text-cyan-600 font-bold ml-[30%] sm:ml-[22%]">
                  200+
                </div>
                <div className="text-sm sm:text-xs w-[200px] text-black font-semibold ml-[30%] sm:ml-[15%] mt-3">
                  Happy Customers
                </div>
              </div>
              <div className="w-[1px] h-[200px] bg-zinc-300"></div>
              <div className="mt-16 w-[280px] sm:mt-10">
                <div className="text-5xl sm:text-3xl w-[100px] text-black font-bold ml-[30%] sm:-ml-9">
                  50+
                </div>
                <div className="text-sm sm:text-xs w-[100px] text-black font-semibold ml-[31%] sm:-ml-12 mt-3">
                  Team Members
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-12">
          <img
            className="w-screen h-auto sm:w-full overflow-hidden relative -top-36 sm:-top-32 -z-10 object-contain"
            src={backg}
          />
        </div>
        
      </div>
    </div>
  );
};

export default About;
