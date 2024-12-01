import CybersecuritySpecialistsSection from "@/components/elements/AboutUs/CybersecuritySpecialists";
import MissionSloganSection from "@/components/elements/AboutUs/MissionSlogan";
import OurCertifications from "@/components/elements/AboutUs/OurCertifications";
import OurLocations from "@/components/elements/AboutUs/OurLocations";
import Partners from "@/components/elements/AboutUs/Partners";
import SecurityAwarenessAdvisors from "@/components/elements/AboutUs/SecurityAwarenessAdvisors";
import Testimonials from "@/components/elements/AboutUs/Testimonials";
import React from "react";

const about = () => {
  return (
    <div className="aboutPage">
      <div className="aboutPageHero d-flex align-items-center ">
        <div className="container">
          <h1 className="text-white ">
            <span className="orangeText">Protecting</span> the digital future
            through innovative cybersecurity
            <span className="orangeText"> solutions</span>
          </h1>
        </div>
      </div>
      <MissionSloganSection />
      <OurLocations />
      <Partners />
      <CybersecuritySpecialistsSection />
      <SecurityAwarenessAdvisors />
      <OurCertifications />
      <Testimonials />
    </div>
  );
};

export default about;
