import FirstLeader from "@/components/LeadersTeam/FirstLeader";
import SecondLeader from "@/components/LeadersTeam/SecondLeader";
import ThirdLeader from "@/components/LeadersTeam/ThirdLeader";
import Link from "next/link";
import React from "react";

const CybersecuritySpecialistsSection = () => {
  return (
    <div className="cybersecuritySpecialists darkBackground py-5">
      <div className="container">
        <h1 className="orangeText text-center"> Cybersecurity Specialists</h1>

        <div className="cardContainer d-flex justify-content-around pb-5">
          <div className="row">
            <div className="col-md-4">
              {/* FirstLeader */}
              <div className="card ourPartnerCards ">
                <img
                  className="card-img-top"
                  src="./images/member/LukasSchmidt.png"
                  alt="LukasSchmidt"
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
                  src="./images/member/EmmaBrown.png"
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
                  src="./images/member/KarlMüller.png"
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
        <div className="d-flex justify-content-end">
          <Link href="/#" className="orangeText">
            <h5 className="boldText">Meet the Rest of the Team</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CybersecuritySpecialistsSection;
