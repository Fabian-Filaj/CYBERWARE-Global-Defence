import React from "react";

const penetrationTesting = () => {
  return (
    <div>
      <div className="servicesPagesContainer">
        <div className="servicesHero text-white">
          <div className="container">
            <h1 className="pb-4">
              <span className="orangeText">Penetration</span> Testing
            </h1>
            <div className="row mx-auto align-items-center">
              <div className="col-auto">
                <div className="vertical-line"></div>
              </div>
              <div className="col">
                <h5>
                  "Identify and eliminate vulnerabilities in your network with
                  our comprehensive penetration testing services."
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
            Key Feature of{" "}
            <span className="orangeText">Penetration Testing</span>
          </h1>
          <img src="/icons/servicesIcons/penetration-testing.svg" />
          <div className="keyFeatureContainer py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Reconnaissance</h5>
                    <p>
                      Gathering information about the target system, which may
                      include identifying network services and potential entry
                      points
                    </p>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Scanning</h5>
                    <p>
                      Using tools to discover live hosts, open ports, and
                      services running on those ports. This phase helps in
                      mapping the attack surface
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Gaining Access</h5>
                    <p>
                      Exploiting identified vulnerabilities using various tools
                      and techniques to gain unauthorized access to the system.
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Maintaining Access</h5>
                    <p>
                      Establishing a persistent presence within the target
                      environment to gather further data and assess the extent
                      of control that can be achieved
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
                  Overview of Penetration Testing
                </h5>
                <p>
                  Penetration testing, often referred to as "pentesting," is an
                  authorized simulated cyberattack on a computer system,
                  designed to evaluate its security. Unlike vulnerability
                  assessments, which merely identify potential weaknesses,
                  penetration tests actively exploit vulnerabilities to
                  demonstrate their impact and assess the overall security
                  posture of the system.
                </p>
              </div>

              <div>
                <h5 className="orangeText">Purpose and Importance</h5>
                <p>
                  The primary goal of penetration testing is to identify and
                  address security vulnerabilities before they can be exploited
                  by malicious actors. By simulating real-world attacks,
                  organizations can understand their weaknesses and implement
                  necessary defenses. Regular penetration testing is crucial for
                  maintaining robust cybersecurity measures, especially in light
                  of increasing cyber threats.
                </p>
              </div>

              <div>
                <h5 className="orangeText">Types of Penetration Testing </h5>
                <p>
                  Different types of penetration tests focus on various aspects
                  of an organization's security:
                </p>
                <p>
                  1. Web Application Testing: Evaluates web applications for
                  vulnerabilities such as SQL injection and cross-site scripting
                  (XSS).
                </p>
                <p>
                  2. Internal Network Testing: Assesses vulnerabilities from
                  within the network, simulating an insider threat.
                </p>
                <p>
                  3. External Network Testing: Identifies vulnerabilities that
                  could be exploited from outside the organization.
                </p>
                <p>
                  4. Social Engineering Testing: Tests employees' susceptibility
                  to phishing and other social engineering tactics.
                </p>
                <p>
                  5. Wireless Network Testing: Examines the security of wireless
                  networks against unauthorized access.
                </p>
              </div>
              <div>
                <h5 className="orangeText">Conclusion </h5>
                <p>
                  Penetration testing is an essential component of a
                  comprehensive cybersecurity strategy. By simulating attacks
                  and identifying vulnerabilities, organizations can take
                  proactive measures to strengthen their defenses against
                  real-world threats. Regularly scheduled penetration tests not
                  only enhance security but also ensure compliance with industry
                  regulations, ultimately protecting sensitive data and
                  maintaining trust with stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default penetrationTesting;
