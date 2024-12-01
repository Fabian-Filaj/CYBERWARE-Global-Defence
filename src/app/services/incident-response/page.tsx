import React from "react";

const page = () => {
  return (
    <div>
      <div className="servicesPagesContainer">
        <div className="servicesHero text-white">
          <div className="container">
            <h1 className="pb-4">
              <span className="orangeText">Incident </span>
              Response
            </h1>
            <div className="row mx-auto align-items-center">
              <div className="col-auto">
                <div className="vertical-line"></div>
              </div>
              <div className="col">
                <h5>
                  "In the event of a breach, our expert team reacts swiftly to
                  minimize damage and restore your systems quickly."
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
            Key Feature of <span className="orangeText">Incident Response</span>
          </h1>
          <img src="/icons/servicesIcons/incident-response.svg" />
          <div className="keyFeatureContainer py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Reduce Response Time</h5>
                    <p>
                      A clear plan enables quicker identification and
                      remediation of threats, minimizing potential damage
                    </p>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Enhance Coordination</h5>
                    <p>
                      Clearly defined roles and responsibilities facilitate
                      teamwork during high-stress situations
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Ensure Compliance</h5>
                    <p>
                      Many regulations require documented incident response
                      procedures, helping organizations avoid legal
                      repercussions
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">
                      Improve Security Posture
                    </h5>
                    <p>
                      Post-incident analysis allows organizations to learn from
                      incidents and strengthen defenses against future threats
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
                  Incident Response: Overview and Best Practices
                </h5>
                <p>
                  Incident response refers to the structured approach
                  organizations use to prepare for, detect, manage, and recover
                  from cybersecurity incidents. A well-defined incident response
                  plan (IRP) is crucial for minimizing damage and ensuring a
                  swift recovery.
                </p>
              </div>

              <div>
                <h5 className="orangeText">
                  Best Practices for Effective Incident Response
                </h5>
                <p>
                  Develop a Comprehensive IRP: Ensure your IRP includes detailed
                  procedures for various types of incidents, communication
                  plans, and escalation paths for different threat levels <br />
                  Implement Continuous Monitoring: Utilize tools like SIEM
                  (Security Information and Event Management) to monitor for
                  suspicious activities 24/7 <br />
                  Conduct Regular Training: Regularly educate employees about
                  potential threats and proper reporting procedures to foster a
                  culture of security awareness within the organization
                </p>
              </div>

              <div>
                <h5 className="orangeText">Phases of Incident Response</h5>
                <p>
                  The incident response process typically involves several key
                  phases: <br />
                  Preparation: Organizations should conduct risk assessments,
                  define security policies, and establish an incident response
                  team with clearly defined roles. This phase may also include
                  employee training to promote security awareness <br />
                  Detection and Analysis: Continuous monitoring of systems helps
                  in the early detection of anomalies. Once detected, incidents
                  must be prioritized based on their potential impact. Analyzing
                  the nature and scope of the threat is crucial for an effective
                  response strategy <br />
                  Containment: Immediate actions are taken to limit the spread
                  of the incident. This may involve isolating affected systems
                  or disabling compromised accounts
                </p>
              </div>
              <div>
                <h5 className="orangeText">Conclusion </h5>
                <p>
                  A robust incident response strategy is essential for any
                  organization aiming to protect its assets from cyber threats.
                  By preparing adequately, responding effectively, and learning
                  from past incidents, organizations can significantly enhance
                  their resilience against future attacks. Implementing best
                  practices in incident response not only mitigates risks but
                  also fosters a proactive security culture within the
                  organization.
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
