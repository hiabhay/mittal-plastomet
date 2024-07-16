import React from "react";
import Section from "../components/Section";
import strokedsolar from "../assets/images/Strokedsolar.png";
import ConsultationForm from "./ConsultationForm";
const Consultation = () => {
  return (
    <Section> 
      <div className="flex justify-center max-w-full mt-24">
        <div className="relative bg-zinc-200 rounded-2xl w-[1250px] h-[600px] sm:w-11/12 sm:h-[830px] z-0">
          <div className="flex sm:flex-col">
            <img className="relative w-[680px] h-[680px] sm:w-[600px] sm:h-[500px] bottom-6 sm:bottom-0" src={strokedsolar}></img>
            <div className="absolute z-10 top-[25%] sm:top-[3%] sm:left-[7%] left-[7%] items-center justify-center sm:w-[90%]">
              <div className="text-5xl sm:text-3xl">
                Schedule a{" "}
                <span className="text-indigo-900 font-semibold">Free</span>
              </div>
              <div className="text-5xl sm:text-3xl text-indigo-900 font-semibold mt-2">
                Consultation,{" "}
                <span className="text-black font-normal">With Us</span>
              </div>
              <div className="mt-2 text-5xl sm:text-3xl text-indigo-900 font-semibold">
                Today !!
              </div>
              <div className="w-[500px] text-justify text-lg sm:text-sm mt-4 sm:w-[100%] sm:mr-4 sm:overflow-hidden">
                Discover your ideal solar solution with a complimentary
                consultation today. We specialize in recommending the best
                design, service, and maintenance for your needs
              </div>
            </div>
            <div className="relative ml-0 sm:ml-0">
            <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Consultation;
