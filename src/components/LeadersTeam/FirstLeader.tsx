import React from "react";

const FirstLeader = () => {
  return (
    <div>
      {/* Trigger Button */}
      <button
        className="border-0 rounded-circle p-0"
        data-bs-toggle="modal"
        data-bs-target="#firstLeader"
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
        id="firstLeader"
        aria-hidden="true"
        aria-labelledby="firstLeaderLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            {/* Modal Body */}
            <div className="modal-body">
              <div className="row align-items-center ">
                {/* Left Side: Image and Info */}
                <div className="col-md-1"></div>
                <div className="col-md-3 ">
                  <div className="card ourPartnerCards-PopUp">
                    <img
                      className="card-img-top"
                      src="./images/member/member-2.jpg"
                      alt="member-2"
                    />
                    <div className="card-body slanted-edge">
                      <h5 className="card-title">Furkan Bajrami</h5>
                      <p className="orangeText">Cyber Security Expert </p>
                      <p className="card-text">
                        Furkan has over 10 years of experience in Cyber Security
                        & Menagment
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
                        <p >
                          Furkan Bajrami is a cyber security expert with over a
                          decade of experience in safeguarding organizations
                          from digital threats. He holds a Master's degree in
                          Cyber Security from Stanford University and
                          certifications such as Certified Information Systems
                          Security Professional (CISSP) and Certified Ethical
                          Hacker (CEH). Furkan has collaborated with Fortune 500
                          companies to develop robust security frameworks and
                          incident response strategies, specializing in network
                          security.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div>
                        <p>
                          Passionate about education, Furkan frequently speaks
                          at industry conferences and conducts workshops to
                          raise awareness about cyber threats and best practices
                          for online safety. As an active member of several
                          professional organizations, he contributes to research
                          initiatives aimed at advancing the field, believing
                          that effective cyber defense relies on empowering
                          individuals and organizations to take proactive
                          measures against potential threats.
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

export default FirstLeader;
