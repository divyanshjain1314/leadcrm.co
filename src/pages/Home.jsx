import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import LeadCRMSection from "../components/LeadCRMSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import LinkedInSales from "../components/LinkedInSales";
import SupportedLeadCRM from "../components/SupportedLeadCRM";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="">
        <HeroSection />
        <FeatureSection />
        <LeadCRMSection />
        <HowItWorksSection />
        <TestimonialCarousel />
        <LinkedInSales />
        <SupportedLeadCRM />
        <GetStarted />
        <div className="w-full h-[150px] bg-white"></div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
