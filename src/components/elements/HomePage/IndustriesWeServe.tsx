import Link from "next/link";
import React from "react";

const IndustriesWeServeSecion = () => {
  return (
    <div className="text-center pt-4 pb-5">
      <h1 className="orangeText">Industries We Serve</h1>
      <p className="pb-4 pt-2 boldText">
        Protecting Critical Industries with Cutting-Edge Cybersecurity Solutions
      </p>

      <div className="IndustriesWeServeIcons boldText position-relative">
        <div className="icon-row position-relative">
          <div className="line-across"></div>
          <div className="icon-wrapper">
            <Link href={"/industries"}>
              <img src="/icons/industriesWeServe/finance.svg" alt="finance" />
            </Link>
            <p>Finance</p>
          </div>
          <div className="icon-wrapper">
            <Link href={"/industries"}>
              <img
                src="/icons/industriesWeServe/healthcare.svg"
                alt="healthcare"
              />
            </Link>
            <p>Healthcare</p>
          </div>
          <div className="icon-wrapper">
            <Link href={"/industries"}>
              <img
                src="/icons/industriesWeServe/goverment.svg"
                alt="government"
              />
            </Link>
            <p>Government</p>
          </div>
          <div className="icon-wrapper">
            <Link href={"/industries"}>
              <img src="/icons/industriesWeServe/retail.svg" alt="retail" />
            </Link>
            <p>Retail</p>
          </div>
          <div className="icon-wrapper">
            <Link href={"/industries"}>
              <img src="/icons/industriesWeServe/eGame.svg" alt="eGame" />
            </Link>
            <p>eGame</p>
          </div>
          <div className="icon-wrapper">
            <Link href={"/industries"}>
              <img
                src="/icons/industriesWeServe/education.svg"
                alt="education"
              />
            </Link>
            <p>Education</p>
          </div>
        </div>
      </div>
      <Link href={"/industries"}>
        <button className="orangeButton mb-5">Get Started</button>
      </Link>
    </div>
  );
};

export default IndustriesWeServeSecion;
