import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="heroSection d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="orangeText text-left">Your Cybersecurity Experts</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="text-left text-white">Securing The Future Today</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="mainHeader text-white">
              Tailored, <span className="orangeText">AI-driven solutions </span>
              to protect
            </h1>
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-auto dynamic-layout">
            <h1 className="mainHeader text-white">your business</h1>
          </div>
          <div className="col-auto dynamic-layout">
            <div className="vertical-line"></div>
          </div>
          <div className="col dynamic-layout">
            <p className="text-white quote-text">
              "Protecting the digital future through innovative cybersecurity
              solutions, we empower businesses to safeguard their assets, ensure
              compliance, and maintain trust in an increasingly connected
              world."
            </p>
          </div>

          {/* Alternate layout for phones */}
          <div className="phone-layout text-center">
            <h1 className="mainHeader text-white mb-3">your business</h1>
            <hr className="underlineHero" />
            <p className="text-white quote-text">
              "Protecting the digital future through innovative cybersecurity
              solutions, we empower businesses to safeguard their assets, ensure
              compliance, and maintain trust in an increasingly connected
              world."
            </p>
          </div>
        </div>

        <div className=" d-flex homeHeroButtons justify-content-center pt-5 ">
          <Link href={"/contact"}>
            <button className="freeConsultationBtn m-3">
              <span className="me-3">
                <img src="./images/member/member-1.png" alt="member-1" />
              </span>
              Free Consultation
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="orangeButton m-3 ">Get Started Today</button>
          </Link>
        </div>

        {/*  Industries Short Links  */}
        <div className="pt-5">
          <div className="pt-5 d-flex justify-content-between">
            <Link href={"/industries"} className="industriesShortLinks">
              <div>Finance</div>
            </Link>
            <Link href={"/industries"} className="industriesShortLinks">
              <div>Healthcare</div>
            </Link>
            <Link href={"/industries"} className="industriesShortLinks">
              <div>Government</div>
            </Link>
            <Link href={"/industries"} className="industriesShortLinks">
              <div>Retail</div>
            </Link>
            <Link href={"/industries"} className="industriesShortLinks">
              <div>Education</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
