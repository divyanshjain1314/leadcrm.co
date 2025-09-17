import React from "react";
import backgroundImage from "../assets/images/section1-bg.png";
import linesImage from "../assets/images/lines.png";
import rocketIcon from "../assets/icons/rocket-icon.svg";
import lineIcon from "../assets/icons/line-icon.svg";
import HubSpot from "../assets/icons/HubSpot.svg";
import Salesforce from "../assets/icons/Salesforce.svg";
import Pipedrive from "../assets/icons/Pipedrive.svg";
import browserIcon from "../assets/icons/browser-icon.svg";
import starIcon from "../assets/icons/star.svg";
import shareIcon from "../assets/icons/share.svg";
import chromeLogo from "../assets/icons/chrome-logo.svg";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0 opacity-[46%] bg-cover bg-no-repeat bg-center text-center"
        style={{ backgroundImage: `url(${linesImage})` }}
      ></div>

      <div className="relative max-w-6xl mx-auto text-whit py-10 px-6">
        <div className="inline-block border border-[#9ACCFF] bg-white rounded-[20px] px-4 py-2.5 mb-4">
          <div className="w-auto flex items-center justify-center gap-2 text-[#63657E] text-[13.62px] font-[400]">
            <img
              src={rocketIcon}
              alt="Select Icon"
              className="w-[20px] h-[20px]"
            />
            Thousands of Professionals using LeadCRM
          </div>
        </div>

        <div className="relative pb-1">
          <h1 className="text-[#121212] text-[58px] font-[600] leading-tight mb-4">
            LinkedIn CRM Integration
            <br />
            Capture, Sync and Enrich in
            <span className="relative pb-4 text-[#2D96BC]">
              Both Ways
              <div className="absolute bottom-0 right-[-40px] flex justify-end">
                <img
                  src={lineIcon}
                  alt="line Icon"
                  className="w-[309px] h-auto"
                />
              </div>
            </span>
          </h1>
        </div>

        <p className="text-[19px] text-[#363636] max-w-4xl font-[600] mx-auto mb-8">
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on LinkedIn profiles. Complete bi-directional integration
          with HubSpot, Salesforce, and Pipedrive.
        </p>

        <div className="inline-flex py-3 px-5 rounded-[20px] justify-center items-center gap-4 mb-8 bg-gradient-lead">
          <span className="text-sm text-[#2E2E2E] text-[22px] font-[500]">
            Works with
          </span>
          <img src={HubSpot} alt="HubSpot" className="h-[60px] w-[60px]" />
          <img src={Pipedrive} alt="Pipedrive" className="h-[60px] w-[60px]" />
          <img
            src={Salesforce}
            alt="Salesforce"
            className="h-[60px] w-[60px]"
          />
        </div>

        <div className="flex justify-center items-center gap-15 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-[6.67px]">
              <img src={browserIcon} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={starIcon}
                  alt={`Star ${index + 1}`}
                  className="w-[14.31px] h-[14.31px]"
                />
              ))}
            </div>
            <span className="text-[14.31px] font-[500] text-[#090F4E] ">
              5/5
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-[6.67px]">
              <img src={shareIcon} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={starIcon}
                  alt={`Star ${index + 1}`}
                  className="w-[14.31px] h-[14.31px]"
                />
              ))}
            </div>
            <span className="text-[14.31px] font-[500] text-[#090F4E] ">
              5/5
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <div className="flex justify-between items-center gap-10 bg-[#373737] p-[12px] rounded-[13px]  shadow">
            <a
              href="#"
              className="flex flex-col items-baseline text-[#FFFFFF] font-[500] text-[16px]"
            >
              <span className="text-[#E4E4E4] text-[12px] font-[400]">
                Available in
              </span>{" "}
              Chrome Web Store
            </a>
            <div className="w-[34px] h-[34px] flex justify-center items-center bg-white rounded-full">
              <img src={chromeLogo} alt="chromeLogo" />
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#B3FC6A] px-6 py-3 rounded-[13px] shadow">
            <a
              href="#"
              className=" text-[#242424] text-[18px]  font-[600]  leading-0"
            >
              Get a Free Trial Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
