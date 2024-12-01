import Link from "next/link";
import React from "react";

const ServicesHomepage = () => {
  return (
    <div className="servicesHomepage py-5 text-white">
      <div className="container">
        <h1 className="orangeText text-center">Services</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="servicesHomepageCard">
              <img src="/icons/servicesIcons/SIEM.svg" alt="SIEM" />
              <h5>SIEM Threat Detection & Response</h5>
              <p className="py-3">
                Our 24/7 monitoring services use AI-powered tools to detect and
                neutralize threats before they can harm your business
              </p>
              <Link href={"/services/siem-threat-detection"}>
                <button className="orangeButton">See More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="servicesHomepageCard">
              <img
                src="/icons/servicesIcons/penetration-testing.svg"
                alt="penetration-testing"
              />
              <h5>Penetration Testing </h5>
              <p className="py-3">
                Identify and eliminate vulnerabilities in your network with our
                comprehensive penetration testing services
              </p>
              <Link href={"/services/penetration-testing"}>
                <button className="orangeButton">See More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="servicesHomepageCard">
              <img
                src="/icons/servicesIcons/incident-response.svg"
                alt="incident-response"
              />
              <h4>Incident Response</h4>
              <p className="py-3">
                In the event of a breach, our expert team reacts swiftly to
                minimize damage and restore your systems quickly
              </p>
              <Link href={"/services/incident-response"}>
                <button className="orangeButton">See More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="servicesHomepageCard">
              <img
                src="/icons/servicesIcons/network.svg"
                alt="network-security"
              />
              <h5>Network Security</h5>
              <p className="py-3">
                We offer end-to-end network security solutions, optimizing your
                infrastructure while securing it against unauthorized access
              </p>
              <Link href={"/services/network-security"}>
                <button className="orangeButton">See More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="servicesHomepageCard">
              <img src="/icons/servicesIcons/security-awareness.svg" alt="security-awareness" />
              <h5>Security Awareness Training</h5>
              <p className="py-3">
                Empower your employees to recognize the potential
                cyber threats. Our comprehensive security awareness programs
                equip your workforce.
              </p>
              <Link href={"/services/security-awareness-training"}>
                <button className="orangeButton">See More</button>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="servicesHomepageCard">
              <img src="/icons/servicesIcons/vulnerability-managment.svg" alt="SIEM" />
              <h5>Vulnerability Managment</h5>
              <p className="py-3">
                Our 24/7 monitoring services use AI-powered tools to detect and
                neutralize threats before they can harm your business
              </p>
              <Link href={"/services/siem-threat-detection"}>
                <button className="orangeButton">See More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomepage;
