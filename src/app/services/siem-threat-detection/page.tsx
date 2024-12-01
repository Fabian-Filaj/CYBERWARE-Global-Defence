import React from "react";

const siemThreatDetection = () => {
  return (
    <div>
      <div className="servicesPagesContainer">
        <div className="servicesHero text-white">
          <div className="container">
            <h1 className="pb-4">
              <span className="orangeText">SIEM</span> Threat Detection &
              Response
            </h1>
            <div className="row mx-auto align-items-center">
              <div className="col-auto">
                <div className="vertical-line"></div>
              </div>
              <div className="col">
                <h5>
                  "Our 24/7 monitoring services use AI-powered tools to detect
                  and neutralize threats before they can harm your business."
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
            Key Feature of <span className="orangeText">SIEM</span>
          </h1>
          <img src="/icons/servicesIcons/SIEM.svg" />
          <div className="keyFeatureContainer py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Data Aggregation</h5>
                    <p>
                      SIEM solutions collect event data from diverse sources,
                      including user activities, endpoints, applications, and
                      security hardware like firewalls and antivirus software.
                    </p>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Event Correlation</h5>
                    <p>
                      By correlating related events, SIEM systems can identify
                      patterns that may indicate potential threats.
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Real-Time Monitoring</h5>
                    <p>
                      SIEM tools provide near-real-time analysis of security
                      alerts, enabling security teams to respond swiftly to
                      incidents.
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Automated Response</h5>
                    <p>
                      Many SIEM solutions incorporate automation features that
                      can respond to certain types of threats automatically.
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
                  Overview of SIEM in Threat Detection and Response
                </h5>
                <p>
                  Security Information and Event Management (SIEM) systems play
                  a crucial role in modern cybersecurity strategies by
                  aggregating and analyzing log data from various sources within
                  an organization's IT infrastructure. These systems are
                  designed to detect, investigate, and respond to security
                  threats in real-time, enhancing overall security posture.
                </p>
              </div>

              <div className="">
                <h5 className="orangeText">
                  Threat Detection and Response (TDR)
                </h5>
                <p>
                  Threat Detection and Response encompasses a broader strategy
                  that includes not only SIEM but also other technologies such
                  as Endpoint Detection and Response (EDR) and Threat
                  Intelligence Platforms (TIPs). The TDR process typically
                  involves:
                </p>
                <p>
                  Proactive Threat Hunting: Actively searching for potential
                  threats before they can cause damage, which requires a deep
                  understanding of normal network behavior
                </p>
                <p>
                  Incident Response: Implementing structured steps to address
                  detected threats, including identification, containment,
                  eradication, recovery, and post-incident analysis
                </p>
              </div>

              <div className="">
                <h5 className="orangeText">
                  Best Practices for Effective SIEM Implementation
                </h5>
                <p>
                  Continuous Monitoring: Organizations should implement ongoing
                  monitoring of their networks and systems to detect threats
                  early
                </p>
                <p>
                  Regular Updates: Keeping threat intelligence updated enhances
                  detection capabilities against evolving cyber threats
                </p>
                <p>
                  Multi-Layered Security Approach: Combining SIEM with other
                  security measures such as EDR and TIPs creates a more robust
                  defense against cyber attacks
                </p>
                <p>
                  Incident Response Planning: Developing a detailed incident
                  response plan ensures that organizations can react efficiently
                  to security incidents when they occur
                </p>
                <p>
                  Leverage Automation: Utilizing automated tools enhances the
                  speed and effectiveness of both threat detection and response
                  efforts
                </p>
              </div>
              <div className="">
                <h5 className="orangeText">Conclusion </h5>
                <p>
                  SIEM solutions are integral to effective threat detection and
                  response strategies in cybersecurity. By leveraging advanced
                  analytics, real-time monitoring, and automation capabilities,
                  organizations can significantly improve their ability to
                  detect and respond to cyber threats swiftly and efficiently.
                  Implementing best practices in conjunction with SIEM
                  technologies further strengthens an organization's overall
                  security framework against increasingly sophisticated cyber
                  threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default siemThreatDetection;
