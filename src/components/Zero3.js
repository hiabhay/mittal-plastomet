import React from "react";
import Ellipse3 from "../assets/images/Ellipse3.png";
import Section from "./Section";

const Zero3 = () => {
  return (
    <Section color="bg-cyan-600">
      <div className="w-auto h-[190px] sm:h-[280px] bg-cyan-600 relative mt-16 sm:mr-2 sm:ml-0">
        <div className="ml-24 pt-5 flex sm:ml-6 sm:flex-col">
          <div>
            <div className="text-white">03</div>
            <div className="text-4xl sm:text-4xl text-white font-semibold">
              Subsidy
              <span className="font-normal">
                <br className="hidden sm:block"></br> Assistance
              </span>
            </div>
          </div>
          <div className="w-[375px] sm:w-full sm:mt-2 sm:pr-4 sm:ml-0 sm:font-thin text-justify text-md sm:text-sm text-white ml-28 pl-1 sm:pl-0 mt-6">
            End to end paperwork handling and guidance to help you get subsidy
            and keep you away from all the hassle to make the solar installation
            process quick and seamless and ensure best delivery
          </div>
          <div className="absolute bottom-0 right-24 sm:hidden">
            <img src={Ellipse3} className="w-[200px] h-auto" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Zero3;
