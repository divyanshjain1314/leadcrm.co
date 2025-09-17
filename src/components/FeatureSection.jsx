import React from "react";
import adobIcon from "../assets/images/adob-express.png";
import clickIcon from "../assets/images/cursor-pointer.png";
import customIcon from "../assets/images/H38.png";
import waterfallIcon from "../assets/images/waterfall.png";

export default function FeatureSection() {
  return (
    <section className="relative bg-white py-[40px]">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-10 px-4 text-gray-800">
        {/* Feature 1 */}
        <div className="flex items-center space-x-2">
          <img
            src={adobIcon}
            alt="adobIcon"
            className="h-[58.15px] w-[58.15px]"
          />
          <span className="text-[#6C6C6C] text-[18px] font-[600]">
            Access to <span className="text-[#161616]">700M+ Contacts</span>
          </span>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center space-x-2">
          <img src={clickIcon} alt="one-click" className="h-6 w-6" />
          <span className="text-[#6C6C6C] text-[18px] font-[600]">
            <span className="text-[#161616]">One click push</span> to CRM
          </span>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center space-x-2">
          <img src={customIcon} alt="custom-field" className="h-6 w-6" />
          <span className="text-[#6C6C6C] text-[18px] font-[600]">
            <span className="text-[#161616]">Custom Field</span> Mapping
          </span>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center space-x-2">
          <img src={waterfallIcon} alt="waterfall" className="h-6 w-6" />
          <span className="text-[#6C6C6C] text-[18px] font-[600]">
            Advanced{" "}
            <span className="text-[#161616]">Waterfall Enrichment</span>
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-10 right-10 border border-[#F1F1F1]"></div>
    </section>
  );
}
