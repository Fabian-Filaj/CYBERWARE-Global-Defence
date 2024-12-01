import React from "react";

const SecondLeader = () => {
  return (
    <div>
      {/* Trigger Button */}
      <button
        className="border-0 rounded-circle p-0"
        data-bs-toggle="modal"
        data-bs-target="#secondLeader"
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
        id="secondLeader"
        aria-hidden="true"
        aria-labelledby="secondLeaderLabel"
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
                      src="./images/member/member-3.jpg"
                      alt="member-3"
                    />
                    <div className="card-body slanted-edge">
                      <h5 className="card-title">Petar Ninovski</h5>
                      <p className="orangeText">Co- Founder & CXX </p>
                      <p className="card-text">
                        Petar has over 10 years of experience in cybersecurity
                        and IT consulting.
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
                  <div className="row popUpBio-container ">
                    <div className="col-md-5">
                      <div>
                        <p className="popUpBio">
                          Petar Ninovski is a visionary leader and Co-Founder of
                          CGD, with over 15 years of experience guiding
                          organizations through the complexities of digital
                          transformation and technology-driven growth. A dynamic
                          executive with expertise across strategy and
                          operational efficiency, Petar has played a pivotal
                          role in developing CGD's cybersecurity solutions. His
                          background includes advanced studies in business and
                          technology management.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div>
                        <p className="popUpBio">
                          Known for his collaborative approach, Petar works
                          closely with Fortune 500 companies and emerging tech
                          firms to create secure, scalable solutions that
                          address the unique challenges of today's digital
                          economy. He's a frequent speaker at international
                          conferences, where he shares insights on industry
                          trends, cybersecurity advancements. Committed to
                          fostering talent, Petar mentors up-and-coming
                          professionals and contributes to initiatives
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

export default SecondLeader;
