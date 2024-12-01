import FirstLeader from "@/components/LeadersTeam/FirstLeader";
import SecondLeader from "@/components/LeadersTeam/SecondLeader";
import React from "react";

const Partners = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="orangeText">OurPartners</h1>
        <p className="boldText pt-4">
          Here's a glimpse into the expertise driving CGD's security solutions:
        </p>
      </div>

      <div className="cardContainer d-flex justify-content-around pb-5">
        <div className="row pb-5 partners">
          <div className="col-md-6">
            {/* Card */}
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
          <div className="col-md-6">
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
        </div>
      </div>
    </div>
  );
};

export default Partners;
