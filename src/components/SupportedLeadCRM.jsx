import React from "react";
// import dashedvcr from "../assets/icons/dashed-vector-center-right.svg";
// import dashedvcl from "../assets/icons/dashed-vector-center-left.svg";
// import dashedvt from "../assets/icons/dashed-vector-top.svg";
// import dashedvb from "../assets/icons/dashed-vector-bottom.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import messageIcon from "../assets/icons/message.svg";
import companyIcon from "../assets/icons/company.svg";
import contactIcon from "../assets/icons/contact.svg";
import logoIcon from "../assets/icons/logo.svg";

import Pipedrive from "../assets/icons/Pipedrive.svg";
import Salesforce from "../assets/icons/Salesforce.svg";
import HubSpot from "../assets/icons/HubSpot.svg";
import zohoLogo from "../assets/images/zoho.png";
import CollaborationIcon from "../assets/icons/coll.svg";

const btn = (props) => {
  const classNames = `${
    props.type === "primary"
      ? "bg-[#EFFBFF] border-[#0195CF] text-[#0195CF]"
      : props.type === "success"
      ? "bg-[#DFFFEC] border-[#21844A] text-[#21844A]"
      : "bg-[#FFEBE6] border-[#FF7A59] text-[#FF7A59]"
  }`;
  const dotColor = `${
    props.type === "primary"
      ? "bg-[#009BD6]"
      : props.type === "success"
      ? "bg-[#21844A]"
      : "bg-[#FF7A59]"
  }`;
  return (
    <div
      className={`inline-flex flex-col items-center ${
        props.dotgap ? props.dotgap : "gap-2"
      }`}
    >
      <button
        type="button"
        className={`${classNames} font-[500] text-[12.09px] flex justify-center items-center h-[31.46px] px-[8.23px] ] border rounded-[24.7px] leading-0`}
        style={props.btnStyle}
      >
        {props.name}
      </button>
      <span className={`w-[9px] h-[9px] ${dotColor} rounded-full`}></span>
    </div>
  );
};

const SupportedLeadCRM = () => {
  const supportedCRMs = [
    { name: "Conversations", icon: messageIcon },
    { name: "Contacts", icon: contactIcon },
    { name: "Companies", icon: companyIcon },
  ];
  const btnStyle = {
    boxShadow: "0px 38.15px 79.48px 0px #110C2E26",
  };
  return (
    <section className="relative bg-white py-16 px-6 md:px-8 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#112c57] mb-4">
          Our Supported LeadCRM
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          LeadCRM provides Native Integrations with popular CRM tools to make
          the most out of your LinkedIn prospecting. We don't want you to miss
          any revenue opportunity on the internet!
        </p>
      </div>
      <div className="relative flex justify-between items-center flex-wrap">
        <div className="flex flex-col space-y-24 z-1 h-full min-w-[150px]">
          {supportedCRMs.map((crm) => (
            <div
              key={crm.name}
              className="relative flex flex-col items-center gap-4"
            >
              <div className="bg-white w-[100px] h-[100px] flex justify-center items-center rounded-full border border-[#91E1FF]">
                <img
                  src={crm.icon}
                  alt="icon"
                  className="w-[41.67px] h-[37.97px] "
                />
              </div>
              <div className="absolute flex gap-2 items-center -bottom-[30px]">
                <p className="text-sm font-medium text-[#0A1E3F]">
                  <img src={linkedinIcon} alt="" />
                </p>
                <div className="font-[600] text-[#343434] text-[16px]">
                  {crm.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="z-1 h-full ml-[40%] xl:ml-0">
          <div className="w-[134.37px] h-[134.37px] rounded-full flex justify-center items-center bg-[#E5FAFF] border border-[#E5E5E5]">
            <img
              src={logoIcon}
              alt="logo"
              className="w-[95.52px] h-[95.52px]"
            />
          </div>
        </div>

        <div className="z-1 h-full">
          <div className="flex flex-col gap-[30px] bg-[#EAEFFA] p-[14px] rounded-[26px] ">
            <img src={HubSpot} alt="HubSpot" className="h-[100px] w-[100px]" />
            <img
              src={Pipedrive}
              alt="Pipedrive"
              className="h-[100px] w-[100px]"
            />
            <img
              src={Salesforce}
              alt="Salesforce"
              className="h-[100px] w-[100px]"
            />
            <div className="w-[100px] h-[100px] rounded-full border border-[#CCCCCC] flex justify-center items-center">
              <img
                src={zohoLogo}
                alt="zohoLogo"
                className="h-auto w-[66.17px]"
              />
            </div>
          </div>
        </div>

        {/* Dashed border */}
        {/* top */}
        <div
          className="absolute bottom-[50%] left-[30px] z-0"
          style={{ width: "50%", maxWidth: "50%" }}
        >
          <svg
            viewBox="0 0 606 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            className="h-[200px]"
          >
            <path
              d="M606 187H527.49C495.739 187 465.874 171.921 447.023 146.372L370.477 42.6281C351.626 17.0787 321.761 2 290.01 2H0"
              stroke="#1E80A5"
              stroke-opacity="0.21"
              stroke-width="3"
              stroke-dasharray="14 14"
            />
          </svg>
        </div>
        {/* bottom */}
        <div
          className="absolute top-[51.0%] left-[30px] z-0"
          style={{ width: "50%", maxWidth: "50%" }}
        >
          <svg
            viewBox="0 0 606 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            className="h-[200px] scale-y-[-1]"
          >
            <path
              d="M606 187H527.49C495.739 187 465.874 171.921 447.023 146.372L370.477 42.6281C351.626 17.0787 321.761 2 290.01 2H0"
              stroke="#1E80A5"
              stroke-opacity="0.21"
              stroke-width="3"
              stroke-dasharray="14 14"
            />
          </svg>
        </div>
        {/* center left */}
        <div
          className="absolute top-[50%] left-[30px] z-0"
          style={{ width: "50%", maxWidth: "50%" }}
        >
          <svg
            viewBox="0 0 604 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.27"
              d="M0 2H135H266H432H603.5"
              stroke="#1E80A5"
              stroke-width="3"
              stroke-dasharray="14 14"
            />
          </svg>
        </div>
        {/* center right */}
        <div
          className="absolute top-[50%] right-0 z-0"
          style={{ width: "50%", maxWidth: "50%" }}
        >
          <svg
            viewBox="0 0 607 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M606.5 2H471.5H340.5H0"
              stroke="#1E80A5"
              stroke-opacity="0.21"
              stroke-width="3"
              stroke-dasharray="14 14"
            />
          </svg>
        </div>

        {/* btns */}

        <div className="absolute z-2 left-[200px] top-[18px]">
          {btn({ name: "Conversations", type: "primary", btnStyle })}
        </div>
        <div className="absolute z-2 left-[170px] top-[42%]">
          {btn({ name: "First Name", type: "primary", btnStyle })}
        </div>
        <div className="absolute z-2 left-[350px] top-[42%]">
          {btn({ name: "Last Name", type: "primary", btnStyle })}
        </div>
        <div className="absolute z-2 left-[200px] bottom-[52px]">
          {btn({ name: "Company Employees", type: "primary", btnStyle })}
        </div>
        <div className="absolute z-2 left-[422px] top-[64%]">
          {btn({ name: "Website", type: "primary", btnStyle })}
        </div>

        {/* Right side of buttons */}
        <div className="absolute z-2 right-[36%] top-[36%]">
          {btn({
            name: "Employees",
            type: "primary",
            dotgap: "gap-10",
            btnStyle,
          })}
        </div>
        <div className="absolute z-2 right-[32.5%] top-[37.5%]">
          {btn({ name: "Website", type: "success", dotgap: "gap-8", btnStyle })}
        </div>
        <div className="absolute z-2 right-[25.8%] top-[39%]">
          {btn({
            name: "Conversations",
            type: "danger",
            dotgap: "gap-6",
            btnStyle,
          })}
        </div>
        <div className="absolute z-2 right-[20.7%] top-[40.5%]">
          {btn({
            name: "Last Name",
            type: "danger",
            dotgap: "gap-4",
            btnStyle,
          })}
        </div>
        <div className="absolute z-2 right-[16%] top-[42%]">
          {btn({
            name: "First Name",
            type: "danger",
            dotgap: "gap-2",
            btnStyle,
          })}
        </div>
      </div>
      <div className="mt-[100px]">
        <button className=" bg-[#B3FC6A] text-[#000000] text-[18px] font-[600] py-3 px-8 rounded-[12px] shadow-lg transition-colors duration-300 flex items-center mx-auto">
          Lets Integrate your CRM Now!
        </button>
      </div>
      <div className="absolute right-0 -bottom-[38px]  h-[153px]">
        <img src={CollaborationIcon} alt="collaboration" />
      </div>
    </section>
  );
};

export default SupportedLeadCRM;
