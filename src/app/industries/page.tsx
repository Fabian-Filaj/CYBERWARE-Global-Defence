import React from "react";

const industries = () => {
  return (
    <div>
      <div className="industriesHero ">
        <div className="container text-white">
          <h1>
            Industries We<span className="orangeText"> Protect</span>
          </h1>
          <h5 className="pt-4">
            We continuously enhance our services to adapt to the ever-changing
            cyber landscape. Our commitment is to provide top-tier solutions to
            protect your data and operations, regardless of your industry.
          </h5>
        </div>
      </div>
      {/* industries cards*/}
      <div className="industriesCardWrapper container py-5">
        <div className="industriesCard">
          <img src="/icons/industriesCards/Healthcare.svg" alt="Healthcare" />
          <h1>Healthcare</h1>
          <p>
            Cyber services in the health sector are crucial for protecting
            sensitive patient data and ensuring the integrity of healthcare
            systems. The healthcare industry faces significant cybersecurity
            challenges, including outdated software, inadequate network
            protections, and a lack of employee training, making it a prime
            target for cybercriminals. Common threats include ransomware
            attacks, phishing schemes, and vulnerabilities in Internet of
            Medical Things (IoMT) devices. Effective cybersecurity measures must
            include robust data protection protocols, regular security audits,
            and comprehensive employee training to foster awareness.
            Additionally, implementing advanced technologies like threat
            intelligence can help healthcare organizations anticipate and
            mitigate risks. As the sector continues to evolve, prioritizing
            cybersecurity is essential to safeguard patient safety and maintain
            trust in healthcare services.
          </p>
          <button className="orangeButton">See More</button>
        </div>

        <div className="industriesCard">
          <img src="/icons/industriesCards/eGame.svg" alt="eGame" />
          <h1>eGame</h1>
          <p>
            Cyber services for the eGaming industry are increasingly vital due
            to a surge in cyber threats, including Distributed Denial-of-Service
            (DDoS) attacks, data breaches, and account fraud. Recent reports
            indicate a staggering increase in bot activity and web attacks, with
            a 94% rise in web attacks from Q1 2023 to Q1 2024, particularly
            during major gaming events. The industry also faces challenges from
            social engineering tactics and malware, which can compromise player
            data and disrupt gameplay. Effective cybersecurity measures must
            include robust encryption protocols, real-time threat intelligence,
            and regular security audits to protect sensitive information and
            maintain player trust. Additionally, fostering a culture of security
            awareness among developers and gamers is essential to mitigate risks
            and ensure a safe gaming environment. As the landscape evolves,
            prioritizing cybersecurity will be crucial for safeguarding both
            players and the integrity of gaming platforms.
          </p>
          <button className="orangeButton">See More</button>
        </div>

        <div className="industriesCard">
          <img src="/icons/industriesCards/Education.svg" alt="Education" />
          <h1>Education</h1>
          <p>
            Cyber services for the education sector are increasingly vital as
            institutions face a growing array of cyber threats, including
            ransomware, phishing, and data breaches. Educational organizations
            are attractive targets due to their vast amounts of sensitive data,
            limited budgets, and often outdated security systems. Recent
            statistics indicate a staggering increase in cyberattacks, with a
            300% rise reported in the past year alone. Effective cybersecurity
            measures must include comprehensive policies, regular training for
            staff and students, and the implementation of advanced technologies
            like multi-factor authentication (MFA) and Security Information and
            Event Management (SIEM) systems. Additionally, fostering a culture
            of cybersecurity awareness is essential to mitigate risks and
            protect both educational integrity and student safety in an
            increasingly digital learning environment.
          </p>
          <button className="orangeButton">See More</button>
        </div>

        <div className="industriesCard">
          <img src="/icons/industriesCards/Retail.svg" alt="Retail" />
          <h1>Retail</h1>
          <p>
            Cyber services in the retail sector are essential for protecting
            sensitive customer data and maintaining trust in an increasingly
            digital marketplace. Retailers face significant cybersecurity
            challenges, including data breaches, phishing attacks, and
            point-of-sale (POS) intrusions, driven by the vast amounts of
            personal and financial information they handle. Effective measures
            include adhering to the Payment Card Industry Data Security Standard
            (PCI DSS), implementing strong encryption protocols, and conducting
            regular security audits to identify vulnerabilities. Additionally,
            retailers should invest in advanced technologies like artificial
            intelligence for threat detection and foster a culture of security
            awareness among employees. As cyber threats continue to evolve,
            prioritizing cybersecurity is critical for safeguarding customer
            information and ensuring business continuity in the retail industry.
          </p>
          <button className="orangeButton">See More</button>
        </div>

        <div className="industriesCard">
          <img src="/icons/industriesCards/Finance.svg" alt="Finance" />
          <h1>Finance</h1>
          <p>
            Cyber services for the finance sector are crucial for protecting
            sensitive data, ensuring regulatory compliance, and mitigating
            evolving cyber threats. Financial institutions face significant
            challenges, including safeguarding vast amounts of personal
            information, adhering to strict regulations like GDPR and PCI DSS,
            and defending against sophisticated attacks such as ransomware and
            phishing. Essential cybersecurity solutions include Web Application
            Firewalls (WAF) to protect web applications, DDoS protection to
            maintain service availability, anti-fraud measures to detect online
            fraud, Identity and Access Management (IAM) to control user access,
            and Security Information and Event Management (SIEM) systems for
            real-time security analysis. Best practices such as regular security
            audits, employee training on cybersecurity awareness, incident
            response planning, leveraging advanced technologies like AI for
            threat detection, and ensuring third-party vendors meet stringent
            security standards are vital for maintaining a robust security
            posture in the finance sector.
          </p>
          <button className="orangeButton">See More</button>
        </div>

        <div className="industriesCard">
          <img src="/icons/industriesCards/Government.svg" alt="Government" />
          <h1>Government</h1>
          <p>
            Cyber services for the government sector are essential for
            safeguarding sensitive data and maintaining public trust amid rising
            cyber threats. Governments manage vast amounts of critical
            information, making them prime targets for cyberattacks, including
            ransomware, phishing, and advanced persistent threats. Effective
            cybersecurity strategies involve a multi-faceted approach that
            includes ensuring whole-of-government readiness, enabling rapid
            operational responses, and fostering collaboration with the
            cybersecurity community. Key measures include implementing robust
            security policies, conducting regular audits, and utilizing
            technologies like multi-factor authentication and Security
            Information and Event Management (SIEM) systems. Additionally,
            training employees on cybersecurity awareness and developing
            incident response plans are crucial for minimizing risks. As the
            digital landscape evolves, governments must prioritize cybersecurity
            to protect national security, public safety, and citizen privacy.
          </p>
          <button className="orangeButton">See More</button>
        </div>
      </div>
      <hr className="orangeLine" />
      {/* Discuss Your Security Needs */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-7">
            <h1 className="boldText pb-3">
              Not sure if we cover your industry?
            </h1>
            <h5 className="orangeText fw-normal">
              Cyber threats are constantly evolving, and every industry faces
              unique challenges. If you don't see your sector listed or want to
              learn more about how we can tailor our solutions to your specific
              needs, we're here to help. Contact us today, and let's discuss how
              we can protect your business
            </h5>
          </div>
          <div className="col-md-5">
            <div className="form-content mt-3">
              <div className="form-row">
                <img src="/icons/mail.svg" alt="mail" />
                <input type="email" placeholder="Your Email Address" />
              </div>
              <hr />
              <button className="orangeButton mt-2">
                Discuss Your Security Needs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default industries;
