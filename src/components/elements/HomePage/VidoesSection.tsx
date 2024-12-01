import React from "react";

const VidoeoSection = () => {
  return (
    <div className="container vidoeoSection ">
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <div className="vidoeoSectionLeftSide">
              <h1 className="orangeText pt-5">
                "Always On Guard: Your 24/7 Online Security Solution for
                Unmatched Protection"
              </h1>
              <div className="d-flex pt-5">
                <button className="exploreOurServicesBtn mx-2">
                  Explore our Services
                </button>
                <button className="orangeButton mx-2">Book a demo</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center my-5">
              <div className="video-container mx-auto">
                <img className="video" src="/video.gif" alt="video" />
                <hr className="orangeLine"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidoeoSection;
