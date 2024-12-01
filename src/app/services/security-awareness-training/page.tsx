import React from "react";

const page = () => {
  return (
    <div>
      <div className="servicesPagesContainer">
        <div className="servicesHero text-white">
          <div className="container">
            <h1 className="pb-4">
              <span className="orangeText">Security </span> Awareness Training
            </h1>
            <div className="row mx-auto align-items-center">
              <div className="col-auto">
                <div className="vertical-line"></div>
              </div>
              <div className="col">
                <h5>
                  "Empower your employees to recognize and respond to potential
                  cyber threats. Our comprehensive security awareness programs
                  equip your workforce with the knowledge they need to prevent
                  attacks."
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
            <span className="orangeText">Security Awareness Training</span>
          </h1>
          <img src="/icons/servicesIcons/security-awareness.svg" />
          <div className="keyFeatureContainer py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Customized Content</h5>
                    <p>
                      Tailor training materials to different roles within the
                      organization to ensure relevance and engagement
                    </p>
                  </div>
                  <hr />
                </div>
              </div>

              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">
                      Regular Training Sessions
                    </h5>
                    <p>
                      Conduct training sessions every four to six months, as
                      retention of knowledge tends to decline after this period
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">
                      Diverse Learning Methods
                    </h5>
                    <p>
                      Utilize various formats such as videos, quizzes, and
                      simulations to cater to different learning styles and keep
                      content engaging
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="col-md-3">
                <div className="keyFeatureCardContainer">
                  <div className="keyFeatureCard">
                    <h5 className="orangeText py-3">Phishing Simulations</h5>
                    <p>
                      Regularly test employees with simulated phishing attacks
                      to reinforce learning and gauge awareness levels
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
                  Security Awareness Training: Importance and Best Practices{" "}
                </h5>
                <p>
                  Security awareness training is a strategic initiative aimed at
                  educating employees about cybersecurity risks and best
                  practices. By enhancing awareness, organizations can
                  significantly reduce the likelihood of security breaches
                  caused by human error.
                </p>
              </div>

              <div>
                <h5 className="orangeText">
                  Objectives of Security Awareness Training
                </h5>
                <p>
                  Educate Employees: Teach staff about the importance of
                  cybersecurity and their role in protecting organizational
                  assets. <br />
                  Reduce Human Error: Equip employees with the knowledge to
                  recognize and respond to potential threats, thus minimizing
                  incidents caused by negligence. <br />
                  Cultivate a Cybersecurity Mindset: Foster a culture of
                  security where employees feel responsible for safeguarding
                  sensitive information.
                </p>
              </div>

              <div>
                <h5 className="orangeText">
                  Best Practices for Implementation
                </h5>
                <p>
                  Onboarding Training: Integrate security awareness training
                  into the onboarding process for new employees to establish a
                  security-first culture from the start. <br />
                  Continuous Learning: Provide ongoing education through
                  newsletters, updates on emerging threats, and refresher
                  courses throughout the year <br />
                  Positive Reinforcement: Use humor and engaging content rather
                  than fear-based tactics to improve retention and participation
                  in training programs. <br />
                  Measure Effectiveness: Implement metrics to assess the impact
                  of training, such as tracking phishing susceptibility rates
                  before and after training sessions
                </p>
              </div>
              <div>
                <h5 className="orangeText">Conclusion </h5>
                <p>
                  Security awareness training is essential for building a
                  resilient organizational culture against cyber threats. By
                  educating employees on best practices and fostering a
                  proactive approach to cybersecurity, organizations can
                  significantly mitigate risks associated with human error.
                  Regularly updated training programs that engage employees will
                  help maintain high levels of awareness and readiness against
                  evolving cyber threats.
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
