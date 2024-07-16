import React from "react";
import Section from "./Section";
import whiteArrow from "../assets/images/whiteArrow.png";
import user from "../assets/images/user.png";
import panel from "../assets/images/panel.png";
import cleaning from "../assets/images/cleaning.png";

const Process = ({ scrollToContact }) => {
  return (
    <Section color="bg-indigo-900">
      <div className="flex justify-center mt-28">
        <div className="relative bg-indigo-900 w-[1060px] h-[800px] sm:h-[1825px] sm:w-11/12">
          <div>
            <div className="absolute w-[500px] sm:w-fit sm:left-2 sm:top-5 text-4xl sm:text-3xl top-10 left-12 text-white font-thin">
              Complete <br className="hidden sm:block"></br>
              <span className="font-semibold">End to End Solutions</span>
              <br></br>
              <span className="font-semibold text-cyan-600">
                The process of<br className="hidden sm:block"></br> energy
                saving
              </span>
            </div>
            <div className="absolute w-[700px] sm:top-44 sm:left-3 sm:w-fit top-[17%] left-[5%] text-[12px] text-white font-medium sm:font-normal text-lg sm:text-lg">
              Transitioning to solar energy might feel overwhelming, but we're
              here to simplify the process for you. Let us explain how it all
              works
            </div>
            <button
              className="absolute sm:top-80 sm:left-3 top-[27%] left-[5%] w-[130px] h-[40px] sm:w-[110px] sm:h-[35px] border border-white sm:rounded-2xl rounded-3xl text-xs text-white flex"
              onClick={scrollToContact}
            >
              <div className="sm:mt-[6px] sm:ml-[10px] ml-[9px] mt-[10px] sm:text-sm text-[15px]">
                Get in touch
              </div>
              <img
                src={whiteArrow}
                className="sm:h-[6px] sm:mt-[14px] sm:ml-[4px] h-[8px] mt-[15px] ml-2 w-auto"
              ></img>
            </button>
          </div>
          <div className="relative flex justify-between top-[35%] sm:top-96 mr-16 ml-16 sm:flex-col sm:justify-center sm:items-center sm:ml-0 sm:mr-0">
            <div className="relative w-[280px] h-[450px] border border-zinc-300 rounded-2xl sm:-ml-3">
              <div className="absolute top-10 left-[50px] w-[175px] h-[175px] rounded-full bg-cyan-600">
                <img
                  className="absolute top-[35%] left-[37%] w-[42px] h-auto"
                  src={user}
                />
                <div className="absolute top-[120%] left-[12%]">
                  <div className="text-2xl text-white font-semibold">
                    Personalised
                  </div>
                  <div className="text-2xl text-white font-thin ml-1">
                    Consultation
                  </div>
                  <div className="absolute top-[100%] -left-[25%] mt-6 w-[200px] text-xs text-white text-justify">
                    We will assess your address, any inquiries you have, suggest
                    the best option for you, create a personalized design &
                    assist in all the paperwork.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[280px] h-[450px] border border-zinc-300 rounded-2xl sm:-ml-3 sm:top-6">
              <div className="absolute top-10 left-[50px] w-[175px] h-[175px] rounded-full bg-cyan-600">
                <img
                  className="absolute top-[35%] left-[37%] w-[50px] h-auto"
                  src={panel}
                />
                <div className="absolute top-[120%] left-[12%]">
                  <div className="text-2xl text-white font-semibold">
                    Professional
                  </div>
                  <div className="text-2xl text-white font-thin ml-3">
                    Installation
                  </div>
                  <div className="absolute text-center top-[100%] -left-[25%] mt-6 w-[200px] text-xs text-white ">
                    Your rooftop solar system will be delivered safely,
                    installed promptly, with professionalism and attention to
                    detail & cleanliness
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[280px] h-[450px] border border-zinc-300 rounded-2xl sm:-ml-3 sm:top-12">
              <div className="absolute top-10 left-[50px] w-[175px] h-[175px] rounded-full bg-cyan-600">
                <img
                  className="absolute top-[35%] left-[35%] w-[55px] h-auto"
                  src={cleaning}
                />
                <div className="absolute top-[120%] left-[11%]">
                  <div className="text-2xl text-white font-semibold">
                    Cleanliness &
                  </div>
                  <div className="text-2xl text-white font-thin ml-1">
                    Maintenance
                  </div>
                  <div className="absolute top-[100%] -left-[25%] mt-6 w-[200px] text-xs text-white text-center">
                    We will arrange monthly deep cleanings and preventive
                    maintenance checks for your system over the next five years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Process;
