import React from "react";
import Section from "./Section";

const AboutDesc = () => {
  return (
    <Section>
      <div className="mt-12">
        <div className="relative left-[45%] sm:left-[27%] w-[300px] sm:w-[200px]">
          <div className="font-bold text-4xl">
            About<span className="text-cyan-600"> Us</span>
          </div>
          <div className="absolute -left-10 w-[300px] font-bold">
            STATE - OF - THE - ART FACILITY
          </div>
        </div>
        <div className="relative left-[17%] sm:left-[8%] sm:w-11/12 w-[900px] mt-12 text-xl sm:text-sm font-semibold text-neutral-500 text-justify sm:pr-6">
          <span className="text-black font-bold">Mittal Plastomet </span>
          Limited emerged onto the scene in 2015 in Mandideep, Madhya Pradesh,
          driven by a singular ambition: to deliver unparalleled quality to the
          market. Since its inception, MPL has undergone remarkable growth,
          specializing in the in-house manufacturing of high-quality Solar
          module Gi structures and SOLAr EPC (engineering, procurement,
          construction).
        </div>
      </div>
    </Section>
  );
};

export default AboutDesc;
