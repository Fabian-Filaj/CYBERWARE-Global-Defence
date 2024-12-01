import Link from "next/link";
import React from "react";

const Certification = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src="/icons/certification.svg"
            alt="ISO-Certification"
            className="certificationImg"
          />
        </div>
        <div className="col-md-7 boldText cetificationText">
          <h1 className=" orangeText pb-4">ISO Certification</h1>
          <h5 className="lh-base boldText">
            At <span className="orangeText">CYBERWARE Global Defense</span> , we
            are proud to be ISO certified, demonstrating our commitment to the
            highest standards of cybersecurity. Our certification reflects our
            dedication to protecting your data and ensuring robust security
            practices across all operations. Trust us to safeguard your digital
            assets with proven excellence.
          </h5>
          <hr className="certificationLines" />
          <p className="aligned-text">
            ISO/IEC 27000 — Information security management systems
            <span className="right_arrow">
              <img src="/icons/right_arrow.svg" alt="right_arrow" />
            </span>
          </p>

          <hr className="certificationLines" />
          <p className="aligned-text">
            ISO/IEC 27001 — Information technology - Security Techniques -
            Information security management
            <span>
              <img src="/icons/right_arrow.svg" alt="right_arrow" />
            </span>
          </p>

          <hr className="certificationLines" />
          <p className="aligned-text">
            ISO/IEC 27002 — Code of practice for information security controls
            <span>
              <img src="/icons/right_arrow.svg" alt="right_arrow" />
            </span>
          </p>
          <hr className="certificationLines" />

          <div className="certificationBtn">
            <Link href={"/about"}>
              <button className="orangeButton mt-4">
                See All Certifications
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
