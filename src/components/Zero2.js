import React from 'react'
import Section from './Section'
import Ellipse2 from "../assets/images/Ellipse2.png";

const Zero2 = () => {
  return (
    <Section color="bg-cyan-600">
        <div className="w-auto h-[190px] sm:h-[280px] bg-cyan-600 relative mt-16 sm:mr-2 sm:ml-0">
          <div className="ml-24 pt-3 flex sm:ml-6 sm:flex-col">
            <div>
              <div className="text-white">02</div>
              <div className="text-4xl sm:text-4xl text-white font-semibold">
                Manufacturing
                <span className="font-normal">
                  <br className="hidden sm:block"></br> Plus
                </span>
              </div>
            </div>
            <div className="w-[370px] sm:w-full sm:mt-2 sm:pr-4 sm:ml-0 sm:font-thin text-justify text-md sm:text-sm text-white ml-24">
              We take pride in our in-house structure manufacturing, which
              guarantees the highest quality and timely delivery while offering
              the best prices. By managing the entire manufacturing process
              internally, we maintain strict quality control standards, ensuring
              that every component meets our rigorous specifications.
            </div>
            <div className="absolute bottom-0 right-24 sm:hidden">
              <img src={Ellipse2} className="w-[200px] h-auto" />
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Zero2