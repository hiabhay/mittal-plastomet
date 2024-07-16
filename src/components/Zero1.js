import React from 'react'
import Section from './Section'
import Ellipse1 from "../assets/images/Ellipse1.png";

const Zero1 = () => {
  return (
    <Section color="bg-cyan-600">
        <div className="w-auto h-[190px] sm:h-[280px] bg-cyan-600 relative sm:mr-2 sm:ml-0">
          <div className="ml-24 pt-3 flex sm:ml-6 sm:flex-col">
            <div>
              <div className="text-white">01</div>
              <div className="text-4xl sm:text-4xl text-white font-semibold">
                Insurance<span className="font-normal"><br className="hidden sm:block"></br> Inclusive</span>
              </div>
            </div>
            <div className="w-[375px] sm:w-full sm:mt-2 sm:pr-4 sm:ml-0 sm:font-thin text-justify text-md sm:text-sm text-white ml-24 pl-3 sm:pl-0">
              We prioritize the safety, security, and insurance of your solar
              plant both during installation and after it has been commissioned.
              Insurance not only protects against potential damages during
              installation but also covers any unforeseen issues that may arise
              after the system is operational
            </div>
            <div className="absolute bottom-0 right-24 sm:hidden">
              <img src={Ellipse1} className="w-[200px] h-auto" />
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Zero1