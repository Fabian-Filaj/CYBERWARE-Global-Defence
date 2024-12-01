import React from "react";

const WhoWeAreSection = () => {
  return (
    <div className="whoWeAreSection py-5 ">
      <div className="container text-center w-50">
        <h2 className="orangeText py-3">Who We Are</h2>
        <p className="text-white">
          At Cyberware Global Defense (CGD), we are committed to protecting the
          digital future through innovative solutions that safeguard businesses
          from evolving cyber threats. Our expert team combines cutting-edge
          technology with a proactive approach to cybersecurity, ensuring that
          your organization remains secure, compliant, and resilient in the face
          of emerging challenges.
        </p>

        <div className="whoWeAreIconsContainer d-flex justify-content-center pt-3">
          <div className="whoWeAreIcons text-start px-4 py-2">
            <img
              src="./icons/handshake.svg"
              alt="handshake"
              className="iconImage"
            />
            <div>
              <div className="text-white">Trusted by over</div>
              <div className="orangeText">100+ Organisations</div>
            </div>
          </div>
          <div className="whoWeAreIcons mx-4 text-start px-4 py-2">
            <img src="./icons/globe.svg" alt="globe" className="iconImage" />
            <div>
              <div className="text-white">Across</div>
              <div className="orangeText">50+ Countries</div>
            </div>
          </div>
          <div className="whoWeAreIcons text-start px-4 py-2">
            <img src="./icons/tech.svg" alt="tech" className="iconImage" />
            <div>
              <div className="text-white">Use 100%</div>
              <div className="orangeText">Innovative Technology</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
