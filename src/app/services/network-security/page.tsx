import React from "react";

const page = () => {
  return (
    <div>
      <div className="servicesPagesContainer">
        <div className="servicesHero text-white">
          <div className="container">
            <h1 className="pb-4">
              <span className="orangeText">Network </span> Security
            </h1>
            <div className="row mx-auto align-items-center">
              <div className="col-auto">
                <div className="vertical-line"></div>
              </div>
              <div className="col">
                <h5>
                  "We offer end-to-end network security solutions, optimizing
                  your infrastructure while securing it against unauthorized
                  access."
                </h5>
              </div>
            </div>
            <button className="orangeButton mt-5">Get a demo</button>
          </div>
        </div>
      </div>
      {/* Key Feature */}
      <div className="keyFeature">
        <div className="container text-white text-center pt-5">
          <h1 className="pb-3">
            Key Feature of <span className="orangeText">Network Security</span>
          </h1>
          <img src="/icons/servicesIcons/network.svg" />
          <div className="keyFeatureContainer py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Perform Regular Audits</h5>
                    <p>
                      Conduct thorough network audits to identify
                      vulnerabilities and assess the overall security posture.
                    </p>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">
                      Implement Data Loss Prevention (DLP)
                    </h5>
                    <p>
                      DLP strategies help monitor and control data transfers
                      across the network to prevent unauthorized access or data
                      breaches
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Educate Employees</h5>
                    <p>
                      Regular training on security awareness helps employees
                      recognize phishing attempts and social engineering
                      tactics, reducing the risk of human error
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Secure Routers</h5>
                    <p>
                      Regular training on security awareness helps employees
                      recognize phishing attempts and social engineering
                      tactics, reducing the risk of human error
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="overviewContainer mx-auto text-center">
              <div>
                <h5 className="orangeText pt-5">
                  Network Security: Best Practices and Strategies
                </h5>
                <p>
                  Network security encompasses a range of measures designed to
                  protect the integrity, confidentiality, and availability of
                  computer networks and data. As cyber threats evolve,
                  organizations must adopt robust strategies to safeguard their
                  networks against unauthorized access, misuse, or damage.
                </p>
              </div>

              <div>
                <h5 className="orangeText">
                  Key Components of Network Security
                </h5>
                <p>
                  Physical Security: Protects physical assets such as servers,
                  routers, and switches from unauthorized access. This includes
                  using locks, surveillance cameras, and controlled access to
                  facilities. <br />
                  Technical Security: Involves the use of hardware and software
                  technologies to protect data in transit and at rest. This
                  includes firewalls, intrusion detection systems (IDS), and
                  encryption protocols. <br />
                  Administrative Security: Focuses on policies and procedures
                  that govern user behavior and access controls. This includes
                  user authentication processes and compliance with security
                  policies.
                </p>
              </div>

              <div>
                <h5 className="orangeText">
                  Best Practices for Network Security
                </h5>
                <p>
                  Secure Routers: Change default passwords on routers, relocate
                  them to secure areas, and implement additional security
                  measures such as video surveillance to prevent unauthorized
                  access. <br />
                  Use SIEM Solutions: Aggregate network data in a Security
                  Information and Event Management (SIEM) system to analyze
                  real-time alerts and historical data for potential threats.
                  <br />
                  Establish Access Controls: Implement strict access management
                  policies to regulate who can access sensitive information
                  based on their roles within the organization. <br />
                  Network Segmentation: Divide the network into segments based
                  on trust levels to contain potential breaches and limit the
                  spread of threats across the network.
                </p>
              </div>
              <div>
                <h5 className="orangeText">Conclusion </h5>
                <p>
                  Implementing these best practices is essential for maintaining
                  a secure network environment. Organizations must remain
                  vigilant against emerging threats by continuously updating
                  their security measures, educating employees, and leveraging
                  advanced technologies like SIEM systems. By fostering a
                  culture of security awareness and proactive defense,
                  organizations can significantly reduce their risk exposure in
                  an increasingly complex cyber landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
