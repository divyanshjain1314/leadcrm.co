import React, { useState } from "react";
import salesIcon from "../assets/icons/linkedin-sales-user.svg";
import humanBrain from "../assets/images/human-brain.png";
import exportLogo from "../assets/images/export.png";
import dataIntegration from "../assets/images/data-integration.png";
import syncIcon from "../assets/images/sync-icon.png";
import emailIcon from "../assets/images/email-icon.png";
import filterIcon from "../assets/images/filter-icon.png";
import next from "../assets/icons/link-next.svg";
import searchFilter from "../assets/images/search-filter.png";
import veryEmail from "../assets/images/email-img.png";
import dropcontactIcon from "../assets/images/dropcontact.png";
import datagmaIcon from "../assets/images/datagma.png";
import rocketreachtIcon from "../assets/images/rocketreach.png";
import signalhireIcon from "../assets/images/signalhire.png";
import crossIcon from "../assets/icons/cross.svg";
import phoneIcon from "../assets/icons/phone-icon.svg";
import successIcon from "../assets/icons/success-icon.svg";
import downArrow from "../assets/icons/down-arrow.svg";

const tabs = [
  { label: "CRM Data Enrichment", icon: dataIntegration },
  { label: "CRM Data Sync", icon: syncIcon },
  { label: "Bulk Export & Enrichment", icon: exportLogo },
  { label: "AI Productivity", icon: humanBrain },
];

const LinkedInSales = () => {
  const [activeTab, setActiveTab] = useState("CRM Data Enrichment");
  const vendors = [
    {
      name: "DropContact",
      logo: dropcontactIcon,
      status: "Contacts Not Found",
      found: false,
    },
    {
      name: "Datagma",
      logo: datagmaIcon,
      status: "Contacts Not Found",
      found: false,
    },
    {
      name: "Rocket Reach",
      logo: rocketreachtIcon,
      status: "Contacts Not Found",
      found: false,
    },
    {
      name: "Signal Hire",
      logo: signalhireIcon,
      status: "Contacts Found",
      found: true,
    },
  ];
  return (
    <div className="bg-white p-6 py-20 font-sans relative overflow-x-hidden">
      <img src={salesIcon} alt="bot" className="absolute left-0 top-0 w-[111.35px]" />

      <div className="text-center mb-16">
        <h1 className="text-[36px] font-[600] text-[#090F4E]">
          Complete LinkedIn Sales Solutions
        </h1>
        <p className="text-[#4D4D4D] font-[400] text-[18px] mt-1">
          Everything you need for professional LinkedIn prospecting
        </p>
      </div>

      <div className=" flex flex-wrap justify-between gap-8 border-b border-[#EDEDED] pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`cursor-pointer flex items-center gap-2 px-4 py-1 text-sm transition-all font-medium relative ${
              activeTab === tab.label
                ? "text-[#090F4E]"
                : "text-[#4C4C4C] hover:text-[#090F4E]"
            }`}
          >
            <span className="text-lg">
              <img src={tab.icon} alt="" />
            </span>
            {tab.label}
            {activeTab === tab.label && (
              <div className="absolute left-0 -bottom-2 w-4/4 h-[7px] bg-[#090F4E] rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 text-[#4D4D4D] text-[22px] font-[400]">
        It’s hard to find the accurate contact data for every prospects by
        <span className="ml-2 bg-[#FFDCD4] text-[#FF4C51] px-2 py-1 rounded-[24.7px] text-[13px] font-[500]">
          Incomplete Data
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-[#F0F4FD] p-6 rounded-[12px] linked-sales-cards-shadow">
          <h2 className="text-[#262626] text-[22px] font-[600]">
            Here is how LeadCRM tackles that situation.
          </h2>
          <a
            href="#"
            className="flex items-center gap-2 text-[#097737] font-[600] text-[18px] mt-1"
          >
            Try LeadCRM Data Enrichment
            <img src={next} alt="" className="mt-1" />
          </a>

          <div className="flex justify-between gap-4 mt-10">
            <div className="bg-white rounded-[12px] w-1/2 flex flex-col gap-10 px-2 py-4">
              <div className="flex justify-center gap-2">
                <img src={emailIcon} alt="" />
                <span className="font-[600] text-[15.92px] text-[#090F4E] font-poppins">
                  Verified Email & Phone
                </span>
              </div>
              <div className="">
                <img src={veryEmail} alt="" />
              </div>
            </div>
            <div className="bg-white rounded-[12px] w-1/2 flex flex-col gap-10 px-2 py-4">
              <div className="flex justify-center gap-2">
                <img src={filterIcon} alt="" />
                <span className="font-[600] text-[15.92px] text-[#090F4E] font-poppins">
                  40+ Search Filters
                </span>
              </div>
              <div className="">
                <img src={searchFilter} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Waterfall Enrichment */}
        <div className="bg-[#F0F4FD] p-6 rounded-[12px] linked-sales-cards-shadow">
          <h2 className="text-[#4D4D4D] font-[400] text-[22px]">
            If it does not works for you! try our{" "}
            <span className="text-[#097737]">
              Advanced Waterfall Enrichment
            </span>
          </h2>

          <div className="bg-[#FFFFFF] rounded-[12px] space-y-4 mt-10 p-3 ps-10">
            {vendors.map((vendor, index) => (
              <div key={vendor.name} className={`flex items-center gap-4 ${index !== vendors.length - 1  && "mb-10"}`}
              style={{ marginLeft: (index * 37) + 'px' }}
              >
                <div className="relative flex flex-col text-[#666666] font-[400] text-[21px]">
                  <span>Vendor {index + 1}</span>
                  {index !== vendors.length - 1 && (
                    <div className="absolute -bottom-[150%] left-[40%] h-[44px]">
                      <img src={downArrow} alt="" />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 bg-[#F4EEEE] rounded-[20px] p-[8px]">
                  <img src={vendor.logo} alt="" className="w-[35px] h-[35px]" />
                  <span className="font-[400] text-[16px] text-[#111827]">
                    {vendor.name}
                  </span>
                </div>

                <div className="flex items-center gap-2 ">
                  {vendor.found ? (
                    <>
                      <div className="flex items-center bg-[#EEFFF7] rounded-[11.08px] p-[5.54px] gap-[11.08px]">
                        <img
                          src={phoneIcon}
                          alt=""
                          className="w-[26.31px] h-[26.31px]"
                        />
                        <img
                          src={successIcon}
                          alt=""
                          className="w-[13.85px] h-[13.85px]"
                        />
                      </div>
                      <div className="flex items-center bg-[#EEFFF7] rounded-[11.08px] p-[5.54px] gap-[11.08px]">
                        <img
                          src={emailIcon}
                          alt=""
                          className="w-[26.31px] h-[26.31px]"
                        />
                        <img
                          src={successIcon}
                          alt=""
                          className="w-[13.85px] h-[13.85px]"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <img src={crossIcon} alt="" />
                      </div>
                      <div>Contacts Not Found</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInSales;
