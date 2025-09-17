import React from "react";
import card1Img from "../../assets/images/card1img.png";
import card2Img from "../../assets/images/card2img.png";
import card3Img from "../../assets/images/card3img.png";
import card4Img from "../../assets/images/card4img.png";
import cardsLine from "../../assets/images/unions.png"

const stepsData = [
  {
    id: 1,
    title: "Install the Extension",
    description:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    image: card1Img,
    isCustomDesign: true,
  },
  {
    id: 2,
    title: "Browse LinkedIn",
    description:
      "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    image: card2Img,
    isCustomDesign: true,
  },
  {
    id: 3,
    title: "Get Enriched Data",
    description:
      "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
    image: card3Img,
    isCustomDesign: true,
  },
  {
    id: 4,
    title: "Sync to CRM Instantly",
    description:
      "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
    image: card4Img,
    isCustomDesign: true,
  },
];

const Steps = () => {
  return (
    <div className="mt-[44px] relative flex justify-between space-x-6">
      {stepsData.map((step, index) => (
        <div key={step.id} className="relative flex-1">
          {/* Decorative line only after first card */}
          {index !== stepsData.length - 1 && (
            <div className="absolute lg:right-[-20%] right-[-30%] top-[15%] flex items-center justify-center z-0">
              <img
                src={cardsLine}
                alt="Decorative line"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Step Card */}
          <div
            className={`h-full relative flex flex-col items-center text-center z-10 ${
              step.isCustomDesign
                ? "bg-[#FFFFFF] py-4 rounded-[12px]"
                : "bg-gray-50"
            }`}
          >
            <div
              className={`${
                step.isCustomDesign
                  ? "text-[113.76px] font-[400] text-[#2D96BC] font-sriracha leading-[80%]"
                  : "text-7xl font-bold text-gray-300"
              }`}
            >
              {step.id}
            </div>
            <h3
              className={`mt-4 ${
                step.isCustomDesign
                  ? "text-[24px] font-[600] text-[#090F4E]"
                  : "text-2xl font-bold text-gray-800"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-2 ${
                step.isCustomDesign
                  ? "text-[#4C4C4C] font-[400] text-[16px] px-4"
                  : "text-gray-600"
              }`}
            >
              {step.description}
            </p>
            <div className="w-full mt-5">
              <img
                src={step.image}
                alt={step.title}
                className={`${
                  step.isCustomDesign
                    ? ""
                    : "mt-4 w-full max-w-xs rounded-lg shadow-lg"
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
