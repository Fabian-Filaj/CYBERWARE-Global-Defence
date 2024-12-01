import React from "react";

const ThirdLeader = () => {
  return (
    <div>
      {/* Trigger Button */}
      <button
        className="border-0 rounded-circle p-0"
        data-bs-toggle="modal"
        data-bs-target="#thirdLeader"
      >
        <img
          className="arrowForward"
          src="./icons/forward_arrow.svg"
          alt="arrowForward"
        />
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="thirdLeader"
        aria-hidden="true"
        aria-labelledby="thirdLeaderLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            {/* Modal Body */}
            <div className="modal-body">
              <div className="row align-items-center">
                {/* Left Side: Image and Info */}
                <div className="col-md-1"></div>
                <div className="col-md-3">
                  <div className="card ourPartnerCards-PopUp">
                    <img
                      className="card-img-top"
                      src="./images/member/member-4.jpg"
                      alt="member-4"
                    />
                    <div className="card-body slanted-edge">
                      <h5 className="card-title">Lena Müller</h5>
                      <p className="orangeText">
                        Chief Technology Officer (CTO)
                      </p>
                      <p className="card-text">
                        With over 12 year of experience in cybersecurity and
                        technology development.
                      </p>
                    </div>
                    <div className="leadership-wrapper">
                      <div className="leadershipTrigger">
                        {/* Back Button */}
                        <button
                          className="border-0 p-0 btn-back rounded-circle"
                          data-bs-dismiss="modal"
                        >
                          <img
                            className="backArrow"
                            src="./icons/back_arrow.svg"
                            alt="back_arrow"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rightSideOrange col-md-8">
                  {/* Right Side: Bio */}
                  <h3>Bio</h3>
                  <div className="row popUpBio-container">
                    <div className="col-md-5">
                      <div>
                        <p>
                          Lena Müller, Chief Technology Officer at CGD, brings
                          over 12 years of expertise in leading technology
                          innovation and managing complex IT infrastructures.
                          With a background in computer engineering and a
                          Master's in Information Security, Lena is recognized
                          for her approach to driving secure, scalable solutions
                          for global clients. Her deep knowledge of cloud
                          computing, AI, and data privacy has been instrumental
                          in CGD's success in delivering forward-thinking
                          cybersecurity strategies.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div>
                        <p>
                          Lena's career includes collaborations with
                          multinational corporations and tech startups, where
                          she has built resilient technology ecosystems to
                          support business growth and mitigate digital risks.
                          Passionate about fostering inclusive and innovative
                          tech teams, she champions in technology and frequently
                          shares her insights on cybersecurity and leadership at
                          industry events. Through her work, Lena remains
                          committed to empowering organizations to leverage
                          technology safel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdLeader;
