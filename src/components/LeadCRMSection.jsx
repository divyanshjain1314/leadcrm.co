import React from "react";
import WithLeadCRM from "../assets/images/with-leadcrm.png";
import withoutLeadCRM from "../assets/images/without-leadcrm.png";
import crossIcon from "../assets/icons/crossIcon.svg";
import withLeadLogo from "../assets/images/withLead-logo.png";
import biDirectionalSyncIcon from "../assets/images/biDirectionalSyncIcon.png";
import verifiedContactsIcon from "../assets/images/adob-express.png";
import crmOverlayIcon from "../assets/images/crmOverlayIcon.png";
import aiAssistanceIcon from "../assets/images/aiAssistanceIcon.png";
import saveHour from "../assets/icons/saveHour.svg";

export default function LeadCRMSection() {
  return (
    <section className="py-16 px-4 md:px-8 relative bg-white">
      <div className="">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[36px] font-[600] text-[#090F4E] mb-12">
            Every LinkedIn Prospector faces these daily challenges
          </h2>

          <div className="relative grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-8 bottom-[55%] left-1/2 w-px bg-gray-300" />
            <div className="hidden md:block absolute bottom-8 top-[55%] left-1/2 w-px bg-gray-300" />

            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-inherit py-2 text-gray-700 font-semibold ">
                VS
              </div>
            </div>

            <div className="bg-[#FFF7F8] rounded-xl shadow p-6 md:p-10 text-left">
              <div className="mb-6">
                <img
                  src={withoutLeadCRM}
                  alt="Without LeadCRM"
                  className="rounded-md w-full"
                />
              </div>
              <h3 className="text-[24px] font-[600] text-[#D24B68] mb-6">
                Without LeadCRM
              </h3>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-center gap-1">
                  <img
                    src={crossIcon}
                    alt="crossIcon"
                    className="h-[15.75px] w-[15.75px] mr-3"
                  />
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px] gap-2 flex items-center ">
                      Manual Data Entry
                      <span className="text-sm text-[#FF4C51] bg-[#FFDCD4] px-2 py-0.5 rounded-[24.7px]">
                        3+ Hours wasted daily
                      </span>
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      Copying LinkedIn contacts to CRM manually plus losing
                      conversation history
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-1">
                  <img
                    src={crossIcon}
                    alt="crossIcon"
                    className="h-[15.75px] w-[15.75px] mr-3"
                  />
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px] gap-2 flex items-center ">
                      Incomplete Data{" "}
                      <span className="text-sm text-[#FF4C51] bg-[#FFDCD4] px-2 py-0.5 rounded-[24.7px]">
                        60% Data Incomplete
                      </span>
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      LinkedIn profiles missing Email and Phones from 700M+
                      Database
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-red-500 text-xl mr-3">
                    <img
                      src={crossIcon}
                      alt="crossIcon"
                      className="h-[15.75px] w-[15.75px]"
                    />
                  </span>
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px] gap-2 flex items-center ">
                      No CRM Visibility{" "}
                      <span className="text-sm text-[#FF4C51] bg-[#FFDCD4] px-2 py-0.5 rounded-[24.7px]">
                        Zero context available
                      </span>
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      Can’t see existing CRM contacts when browsing LinkedIn
                      profiles
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-1">
                  <img
                    src={crossIcon}
                    alt="crossIcon"
                    className="h-[15.75px] w-[15.75px]  mr-3"
                  />
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px] gap-2 flex items-center ">
                      Limited Productivity{" "}
                      <span className="text-sm text-[#FF4C51] bg-[#FFDCD4] px-2 py-0.5 rounded-[24.7px]">
                        No smart assistance
                      </span>
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      Writing messages manually plus no AI assistant for reply,
                      Invite or comments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* With LeadCRM */}
            <div className="bg-white rounded-xl p-6 md:p-10 text-left with-crm-section-shadow">
              <div className="mb-6">
                <img
                  src={WithLeadCRM}
                  alt="With LeadCRM"
                  className="rounded-md w-full"
                />
              </div>
              <div className="flex items-center gap-3 text-[24px] font-[600] text-[#097737] mb-6">
                With LeadCRM
                <span className="h-[28px] w-[28px]">
                  <img
                    src={withLeadLogo}
                    alt="withLeadLogo"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="text-[13px] font-[500] py-2 px-3 rounded-[24.7px] text-[#097737] bg-[#E6FFF1]">
                  4+ Hours/day Saved
                </span>
              </div>
              <ul className="space-y-5 text-gray-700">
                <li className="flex items-center gap-1">
                  <img
                    src={biDirectionalSyncIcon}
                    alt="biDirectionalSyncIcon"
                    className="w-[40px] h-[40px] mr-3"
                  />
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px]">
                      Complete Bi-Directional Sync
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      Automatically sync contacts, messages, and notes between
                      LinkedIn and your CRM in real time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img
                    src={verifiedContactsIcon}
                    alt="verifiedContactsIcon"
                    className="w-[40px] h-[40px] mr-3"
                  />{" "}
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px]">
                      700M+ Contacts + Enrichment
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      Get verified emails and phone numbers from a vast global
                      database.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img
                    src={crmOverlayIcon}
                    alt="crmOverlayIcon"
                    className="w-[40px] h-[40px] mr-3"
                  />{" "}
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px]">
                      CRM Overlay on LinkedIn
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      See full CRM insights directly on LinkedIn profiles
                      without switching tabs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img
                    src={aiAssistanceIcon}
                    alt="aiAssistanceIcon"
                    className="w-[40px] h-[40px] mr-3"
                  />{" "}
                  <div>
                    <p className="font-[600] text-[#262626] text-[20px]">
                      AI Response + Templates + Bulk Exports
                    </p>
                    <p className="text-[16px] text-[#4C4C4C] font-[400]">
                      Save time with AI-crafted replies, pre-built templates,
                      and one-click data exports.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center">
            <div className="relative">
              <button className="bg-[#B3FC6A] text-[#000000] font-[600] text-[18px] px-6 py-3 rounded-[12px] custom-green-shadow">
                Start Using LeadCRM Now
              </button>
              <div className="">
                <div className="absolute right-[-37%] bottom-[-35%]">
                  <img
                    src={saveHour}
                    alt="saveHour"
                    className="h-full w-full"
                  />
                </div>
                <p className="font-handwriting text-[30px] font-[700] text-start absolute right-[-93%] top-[-85%] leading-[100%] text-[#1D4841] mt-3 text-sm">
                  Save 40+ hours
                  <br />
                  every Month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
