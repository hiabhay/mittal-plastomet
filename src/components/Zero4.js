import React from "react";
import Ellipse4 from "../assets/images/Ellipse4.png";
import Section from "./Section";

const Zero4 = () => {
  return (
    <Section color="bg-cyan-600">
      <div className="w-auto h-[190px] sm:h-[280px] bg-cyan-600 relative mt-16 sm:mr-2 sm:ml-2">
        <div className="ml-24 pt-5 flex sm:ml-6 sm:flex-col">
          <div>
            <div className="text-white">04</div>
            <div className="text-4xl sm:text-4xl text-white font-semibold">
              5 Year
              <span className="font-normal">
                <br className="hidden sm:block"></br> Maintenance
              </span>
            </div>
          </div>
          <div className="w-[375px] sm:w-full sm:mt-2 sm:pr-4 sm:ml-0 sm:font-thin text-justify text-md sm:text-sm text-white ml-24 pl-2 sm:pl-0 pt-6">
            Monthly deep cleaning, health checks and repairs included. Your
            solar system is our responsibility. We ensure efficiency and
            effectiveness of the system for you
          </div>
          <div className="absolute bottom-0 right-24 sm:hidden">
            <img src={Ellipse4} className="w-[200px] h-auto" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Zero4;
