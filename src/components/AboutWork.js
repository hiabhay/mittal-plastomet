import React from "react";
import Section from "./Section";

const AboutWork = () => {
  return (
    <Section>
      <div className="border-b sm:mt-6">
        <div className="relative left-24 w-[1100px] mt-12 sm:mt-2 sm:w-[350px] sm:left-4 mb-40 sm:mb-96">
          <div className="text-xl sm:text-sm font-bold w-[200px] sm:w-11/12">
            ABOUT OUR WORK
          </div>
          <div className="font-semibold text-5xl sm:text-3xl mt-4 sm:w-11/12">
            We install the system that’s both
          </div>
          <div className="font-semibold text-5xl sm:text-4xl text-cyan-600">
            smart & efficient
          </div>
          <div className="w-[700px] sm:w-full text-justify mt-6 text-xl sm:text-sm text-neutral-500 font-semibold">
            Our approach combines cutting-edge technology with aesthetic appeal,
            providing you with a solar solution that not only
            <span className="text-neutral-800">
              {" "}
              works brilliantly but also looks great.
            </span>
          </div>
          <div className="absolute flex w-[600px] -right-10 sm:right-0 mt-12 sm:flex-col sm:w-11/12">
            <div>
              <div className="text-4xl w-[100px] sm:-ml-6 text-cyan-600 font-semibold">
                30kW
              </div>
              <div className="text-sm w-[130px] text-black font-semibold sm:-ml-6 sm:mt-2">
                Residential up to
              </div>
            </div>
            <div className="ml-8 sm:-ml-6 sm:mt-4">
              <div className="text-4xl w-[100px] font-semibold">100kW</div>
              <div className="text-sm w-[130px] text-black font-semibold sm:mt-2">
                Commercial up to
              </div>
            </div>
            <div className="ml-8 sm:-ml-6 sm:mt-4">
              <div className="text-4xl w-[100px] text-cyan-600 font-semibold">
                480kW
              </div>
              <div className="text-sm w-[130px] text-black font-semibold sm:mt-2">
                Industrial up to
              </div>
            </div>
            <div className="ml-8 sm:-ml-6 sm:mt-4">
              <div className="text-4xl w-[100px] text-cyan-600 font-semibold">
                20+
              </div>
              <div className="text-sm w-[130px] text-black font-semibold sm:mt-2">
                Outdoor Spaces
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutWork;
