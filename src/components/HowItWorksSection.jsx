import React from "react";
import Steps from "./work-card/Steps";
import ballIcon from "../assets/images/Ball.png"

const HowItWorksSection = () => {
  return (
    <section className="relative bg-white font-sans">
      <div className="bg-[#EAEFFA] rounded-[15px] py-[44px]">
        <div
          className="absolute left-0 right-0 top-[20px] bottom-[20px]"
          style={{ background: "url(/src/assets/images/lines-1.png)" }}
        ></div>
        <div
          className="absolute inset-0 rounded-[20px]"
          style={{ background: "url(/src/assets/images/lines-3.png)" }}
        ></div>
        <div className="container mx-auto px-6">
          <h2 className="text-[36px] font-[600] text-[#090F4E]">
            How it Works
          </h2>
          <p className="mt-2 text-[16px] font-[400] text-[#4C4C4C]">
            From setup to success in{" "}
            <span className="font-[600] text-[#4C4C4C]">4 simple steps</span>
          </p>
          <Steps />
          <button className="mt-16 bg-[#B3FC6A] text-[#1A1A1A] text-[18px] font-[600] py-3 px-8 rounded-[12px] shadow-lg transition-colors duration-300 flex items-center mx-auto">
            Try LeadCRM Now
            <span className="ml-2 text-xl">&rarr;</span>
          </button>
        </div>
      </div>
      <div className="absolute right-4 -bottom-16">
        <img src={ballIcon} alt="" />
      </div>
    </section>
  );
};

export default HowItWorksSection;
