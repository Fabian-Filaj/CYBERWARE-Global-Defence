import React from "react";
import SecondLeader from "../../LeadersTeam/SecondLeader";
import ThirdLeader from "../../LeadersTeam/ThirdLeader";
import Link from "next/link";
import FirstLeader from "../../LeadersTeam/FirstLeader";

const OurLeadershipTeam = () => {
  return (
    <div className="ourLeadershipTeam py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="orangeText">Our leadership team </h1>
          <p className="ourLeadershipTeam-text pt-4 text-white">
            Meet the leaders behind CGD's mission to protect businesses from
            evolving cyber threats. With deep expertise in cybersecurity and IT
            consulting, our leadership team drives innovation and ensures the
            highest standards of security for our clients. Scroll down to see 
            the faces behind our success.
          </p>
        </div>

        <div className="cardContainer d-flex justify-content-around">
          <div className="row">
            <div className="col-md-4">
              {/* FirstLeader */}
              <div className="card ourPartnerCards ">
                <img
                  className="card-img-top"
                  src="./images/member/member-2.jpg"
                  alt="member-2"
                />

                <div className="card-body slanted-edge">
                  <h5 className="card-title">Furkan Bajrami</h5>
                  <p className="orangeText">Cyber Security Expert </p>
                  <p className="card-text">
                    Furkan has over 10 years of experience in Cyber Security &
                    Menagment
                  </p>
                </div>
                <div className="leadership-wrapper">
                  <div className="leadershipTrigger">
                    <FirstLeader />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* Second Leader */}
              <div className="card ourPartnerCards">
                <img
                  className="card-img-top"
                  src="./images/member/member-3.jpg"
                  alt="member-3"
                />
                <div className="card-body  slanted-edge">
                  <h5 className="card-title">Petar Ninovski </h5>
                  <p className="orangeText"> Co- Founder & CXX</p>
                  <p className="card-text">
                    Petar has over 10 years of experience in Cyber Security & IT
                    consulting.
                  </p>
                </div>
                <div className="leadership-wrapper">
                  <div className="leadershipTrigger">
                    <SecondLeader />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* Third Leader */}
              <div className="card ourPartnerCards">
                <img
                  className="card-img-top"
                  src="./images/member/member-4.jpg"
                  alt="member-4"
                />
                <div className="card-body slanted-edge slanted-edge">
                  <h5 className="card-title">Lena Müller</h5>
                  <p className="orangeText"> Chief Technology Officer (CTO)</p>
                  <p className="card-text">
                    With over 12 year of experience in cybersecurity and
                    technology development.
                  </p>
                </div>
                <div className="leadership-wrapper">
                  <div className="leadershipTrigger">
                    <ThirdLeader />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link href="/#" className="orangeText mt-5 ">
            <h5 className="boldText">Meet the Rest of the Team</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurLeadershipTeam;
