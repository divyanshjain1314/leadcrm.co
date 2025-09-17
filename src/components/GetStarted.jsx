import React from "react";
import rightArrow from "../assets/icons/right-arrow.svg";
import bg2 from "../assets/icons/bg-dot-2.svg";
import salesForceLogo from "../assets/images/salesforce.png";
import topRatedLogo from "../assets/images/top-rated.png";
import capterraLogo from "../assets/images/capterra.png";
import pipedriveLogo from "../assets/images/pipedrive.png";
import hubspotLogo from "../assets/images/hubspot.png";
import img1 from "../assets/images/img-1-cards.png";
import img2 from "../assets/images/img-started-2.png";
import img21 from "../assets/images/img-started-2-1.png";
import img3 from "../assets/images/img-started-3.png";
import img4 from "../assets/images/img-4-1-cards.png";
import img41 from "../assets/images/img-started-4-2.png";
import img5 from "../assets/images/img-started-5.png";
import img51 from "../assets/images/img-started-5-1.png";
import logo from "../assets/icons/logo.svg";

const GetStarted = () => {
  return (
    <section className="bg-[#EAEFFA] py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="">
        <h2 className="text-[36px] font-[600] text-[#090F4E] mb-4">
          Join Thousands of Professionals Using LeadCRM{" "}
        </h2>
        <div className="relative rounded-[12px] overflow-hidden min-h-[408px] bg-[url(/src/assets/icons/dotted-bg.svg),_linear-gradient(204.61deg,#0995C8_4.1%,#065D7D_77.57%)] bg-no-repeat bg-cover bg-center">
          <div className="absolute top-[78.2px] left-0 w-[63.46px] h-[62.33px] ">
            <img src={bg2} alt="" className="" />
          </div>
          <div className="flex justify-center pt-10 pb-5">
            <h3 className="text-[#FFFFFF] font-[600] text-[45.33px] leading-[66.87px]">
              Your LinkedIn Powerhouse for Smarter Lead Management
            </h3>
          </div>
          <div className="flex justify-center gap-4">
            <div className="w-[140.23px] h-[38.24px] flex justify-center items-center rounded-[22.02px] bg-[#FFFFFF]">
              <img src={salesForceLogo} alt="" />
            </div>
            <div className="w-[103.15px] h-[38.24px] flex justify-center items-center rounded-[22.02px] bg-[#FFFFFF]">
              <img src={hubspotLogo} alt="" />
            </div>
            <div className="w-[103.15px] h-[38.24px] flex justify-center items-center rounded-[22.02px] bg-[#FFFFFF]">
              <img src={pipedriveLogo} alt="" />
            </div>
            <div className="flex items-center justify-center w-[20px]">
              <svg
                width="3"
                height="30"
                viewBox="0 0 3 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="1.73294"
                  cy="14.9674"
                  rx="1.13333"
                  ry="14.1667"
                  fill="white"
                />
              </svg>
            </div>
            <img src={capterraLogo} alt="" />
            <img src={topRatedLogo} alt="" />
          </div>
          <div className="flex justify-between gap-4 items-end absolute bottom-0 left-0 right-0">
            {/* 1st card */}
            <div
              className="relative rounded-tr-[18.56px] bg-[#FFFFFFA1] border-2 border-l-0 border-b-0 border-[#FFFFFF] "
              style={{ backdropFilter: "blur(15.560656547546387px)" }}
            >
              <img src={img1} alt="" />
              <div className="btn-shaow-starter-section absolute bottom-[20px] right-0  bg-[#1D4841] h-[38.19px] w-[194.07px] rounded-[23.37px] flex justify-center items-center gap-2">
                <div className="flex items-center justify-center bg-[#FFFFFF] w-[21.09px] h-[21.09px] rounded-full">
                  <img src={logo} alt="" className="w-[10.69px] h-[11.97px] " />
                </div>
                <span className="text-[#FFFFFF] text-[7.98px] font-[600] font-montserrat">
                  Bulk Export to HubSpot (42 Profiles)
                </span>
              </div>
            </div>
            {/* 2nd card */}
            <div
              className="w-[259.53px] h-[167px] relative rounded-t-[18.56px] border-b-0 bg-[#FFFFFFA1] border-2 border-[#FFFFFF] "
              style={{ backdropFilter: "blur(15.560656547546387px)" }}
            >
              <img src={img2} alt="" className="w-[210.94px]" />
              <div className="absolute -right-[36%] bottom-0 inline-flex ">
                <img src={img21} alt="" />
              </div>
            </div>
            {/* 3rd card */}
            <div
              className="w-[259.53px] h-[167px] flex justify-center pt-2 px-2 relative rounded-t-[18.56px] border-b-0 bg-[#FFFFFFA1] border-2 border-[#FFFFFF] "
              style={{ backdropFilter: "blur(15.560656547546387px)" }}
            >
              <img src={img3} alt="" className="w-[240.26px]" />
            </div>
            {/* 4th card */}
            <div
              className="w-[259.53px] h-[167px] overflow-hidden flex justify-center pt-2 px-2 relative rounded-t-[18.56px] border-b-0 bg-[#FFFFFFA1] border-2 border-[#FFFFFF] "
              style={{ backdropFilter: "blur(15.560656547546387px)" }}
            >
              <div className="flex flex-col">
                <img src={img4} alt="" className="w-[240.26px]" />
                <img src={img41} alt="" className="w-[240.26px] h-auto object-fit-cover" />
              </div>
            </div>
            {/* 5th card */}
            <div
              className="w-[259.53px] overflow-hidden flex justify-center pt-2 px-2 relative rounded-tl-[18.56px] border-b-0 border-r-0 bg-[#FFFFFFA1] border-2 border-[#FFFFFF] "
              style={{ backdropFilter: "blur(15.560656547546387px)" }}
            >
              <div className="flex flex-col gap-1">
                <img src={img5} alt="" className="w-[240.26px]" />
                <img src={img51} alt="" className="w-[240.26px] h-auto object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button className="flex items-center justify-center gap-12 leading-0 bg-[#B3FC6A] text-[#000000] text-[18px] font-[600] py-3 px-8 rounded-[12px] shadow-lg transition-colors duration-300 mx-auto">
            Get Started Today <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
