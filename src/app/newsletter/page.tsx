"use client";

import ReadMoreNews from "@/components/elements/Newsletter/ReadMoreNews";
import SubscribeNewsletter from "@/components/elements/Newsletter/SubscribeNewsletter";
import React, { useState } from "react";

const newsletter = () => {
  const [selectedNews, setSelectedNews] = useState({
    title: "Summary",
    date: "October 20, 2024",
    content: `
      Phishing attacks have become increasingly sophisticated, leveraging social engineering tactics
      and advanced technology to deceive individuals and organizations. This report examines the latest
      trends in phishing, highlights notable case studies, and provides actionable prevention strategies
      to safeguard your digital assets.`,
    details: `
      In this report, we delve deep into the evolution of phishing attacks over the past decade, examining
      the tactics used by attackers, their primary targets, and the psychological methods used to exploit
      human vulnerabilities. Through detailed case studies and expert insights, we provide actionable advice
      on how organizations can stay ahead of these threats.`,
  });

  const relatedNews = [
    {
      headline: "Iranian Hackers Target Critical Infrastructure",
      date: "October 20, 2024",
      title: "Iranian Hackers Breaching Critical Infrastructure",
      content: `
        Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations
        to collect credentials and network data.`,
      details: `
        <p>Iranian hackers have been intensifying their efforts to infiltrate critical infrastructure sectors, including energy, transportation, and healthcare, exploiting vulnerabilities in outdated systems to gain unauthorized access to sensitive data. These cybercriminals have demonstrated a keen ability to identify weak points in legacy technologies, which are often neglected due to limited resources or lack of awareness.</p>
        <p>Once inside, they harvest credentials and valuable network information, which are then sold on the dark web to other malicious actors or used in more advanced attacks.</p>
        <p>The energy sector has been particularly vulnerable, with hackers targeting control systems and operational technology networks, potentially causing widespread disruptions. In the healthcare sector, attackers have exploited insufficiently secured patient databases and medical devices, leading to breaches that compromise personal health information. Similarly, in transportation, the focus has been on manipulating systems that manage logistics and scheduling, posing risks to both safety and efficiency.</p>
        <p>Authorities have linked these activities to a broader trend of state-sponsored cyber espionage, where stolen credentials and sensitive data are used not only for financial gain but also to undermine national security. Experts warn that such breaches can have cascading effects, disrupting supply chains, eroding public trust, and endangering lives.</p>
        <p>Organizations are being urged to act swiftly, prioritizing system updates, patching vulnerabilities, and implementing advanced threat detection technologies. Additionally, employee training programs and regular security audits are being recommended as essential measures to combat these evolving threats. By strengthening their cybersecurity posture, businesses and institutions can mitigate the risks posed by increasingly sophisticated attacks and protect critical infrastructure from exploitation.</p>`,
    },
    {
      headline: "New Vulnerabilities in Oracle Software",
      date: "October 20, 2024",
      title: "CISA Warns of Exploited Oracle Vulnerabilities",
      content: `
        The Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning about two Oracle
        vulnerabilities that are currently being exploited.`,
      details: `
        <p>Oracle vulnerabilities CVE-2024-12345 and CVE-2024-67890 have been identified as actively exploited flaws in Oracle WebLogic servers. These vulnerabilities allow attackers to execute remote code, giving them unauthorized access to critical systems and enabling the theft of sensitive data. The flaws are being actively targeted by advanced persistent threat (APT) groups, highlighting the urgency of addressing these weaknesses.</p>
        <p>Attackers have been exploiting these vulnerabilities to install malicious software, conduct data exfiltration, and gain a foothold within organizational networks. The impact is particularly severe in environments where WebLogic servers are integrated with legacy systems, as these configurations often lack modern security controls, making them prime targets for exploitation.</p>
        <p>Experts warn that these attacks are part of a broader trend in exploiting middleware vulnerabilities, as WebLogic servers are commonly used in enterprise environments to manage large-scale applications. A compromised WebLogic server can serve as a gateway for attackers to pivot into more sensitive areas of an organization's network, potentially affecting operations, financial systems, and customer data.</p>
        <p>To mitigate these risks, organizations are strongly encouraged to apply the latest patches provided by Oracle. Additionally, security teams should implement robust intrusion detection and prevention systems to monitor for suspicious activity. Regular vulnerability scans and penetration testing are also recommended to identify and address other potential weaknesses in the network.</p>
        <p>Organizations should also focus on educating employees about cybersecurity best practices, as human error remains a key factor in enabling successful attacks. By combining technical measures with ongoing training and awareness programs, businesses can significantly reduce their exposure to these and other emerging threats.</p>`,
    },
    {
      headline: "Arrest of Notorious Hacker in Brazil",
      date: "October 20, 2024",
      title: "Arrest of USDoD Hacker Linked to Major Data Breaches",
      content: `
        Brazilian authorities have arrested a notorious hacker known as USDoD, linked to significant breaches.`,
      details: `
        <p>The notorious hacker known as USDoD was recently apprehended in a coordinated operation involving multiple international law enforcement agencies. This individual has been linked to over a dozen high-profile data breaches, making their arrest a significant milestone in the ongoing battle against cybercrime.</p>
        <p>USDoD specialized in penetrating government and corporate systems, leveraging sophisticated techniques to bypass even the most advanced security measures. Once inside, the hacker would steal sensitive data, including classified government information, financial records, and proprietary corporate assets. These stolen assets were then sold to the highest bidder on the dark web, often fetching substantial sums and enabling further malicious activities.</p>
        <p>The hacker's activities extended beyond mere data theft. Authorities discovered that USDoD had also provided tools and expertise to other cybercriminals, effectively creating a ripple effect of secondary attacks on organizations worldwide. The breaches caused by USDoD have led to financial losses, reputational damage, and compromised national security in several cases.</p>
        <p>The operation to apprehend USDoD involved meticulous coordination between agencies in multiple countries, highlighting the global nature of cybercrime and the importance of international collaboration in combating it. Investigators relied on advanced cyber forensics, tracking digital footprints across multiple networks and piecing together evidence to pinpoint the hacker’s location.</p>
        <p>This arrest is being hailed as a landmark achievement in the fight against cybercrime, as it underscores the effectiveness of joint efforts in tackling highly skilled and elusive adversaries. Authorities have urged organizations to remain vigilant, emphasizing that while this is a significant victory, the broader threat landscape continues to evolve rapidly. Strengthened cybersecurity measures, regular audits, and cooperation with law enforcement are crucial steps in mitigating future risks.</p>`,
    },
  ];

  return (
    <div>
      <div className="newsLetterHero boldText">
        <div className="container">
          <h3 className="boldText">Phishing Attacks and Prevention Strategies.</h3>
          <h1 className="boldText">The Evolving Landscape of Phishing Attacks: What You Need to Know</h1>
          <div className="d-flex gap-5 pt-3">
            <p>{selectedNews.date}</p>
            <p className="orangeText">By: Cybersecurity Insights Team</p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row pb-5">
          {/* Related News */}
          <div className="col-md-3">
            <h3 className="orangeText">Related News</h3>
            <hr className="newsHr" />
            {relatedNews.map((news, index) => (
              <div
                key={index}
                className="relatedNewsCard d-flex justify-content-between align-items-start"
              >
                <div className="content">
                  <div className="newsHeadline">{news.headline}</div>
                  <p className="newsDate">{news.date}</p>
                  <h5 className="newsTitle">{news.title}</h5>
                  <p className="newsDescription">{news.content}</p>
                  <button
                    className="orangeButton"
                    onClick={() =>
                      setSelectedNews({
                        title: news.title,
                        date: news.date,
                        content: news.content,
                        details: news.details,
                      })
                    }
                  >
                    See More
                  </button>
                </div>
                <img src="/icons/emptyBookmark.svg" alt="emptyBookmark" />
              </div>
            ))}

            <div>
              {/* Want to become a Contributor */}
              <h3 className="orangeText pt-5">Want to become a Contributor</h3>
              <hr className="newsHr" />
              <form className="wantToBecomeAContributer text-white">
                <input
                  type="email"
                  className="form-control mb-3 text-center"
                  id="mail"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  className="form-control mb-3 text-center"
                  placeholder="Tell us Something About Yourself "
                  required
                />
                <button className="orangeButton">Send</button>
              </form>
            </div>
          </div>

          {/* Col */}
          <div className="col-md-1"></div>
          {/* Main Content */}
          <div className="col-md-8">
            <div className="mainContent">
              <hr className="newsHr" />
              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.content}</p>
              <h5 className="boldText">Details</h5>
              <div dangerouslySetInnerHTML={{ __html: selectedNews.details }} />

              <hr className="newsHr" />
              <h2>Introduction</h2>
              <p>
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
              <h2>Key Trends in Phishing Attacks</h2>
              <p className="boldText">1. Spear Phishing Campaigns</p>
              <p>
                Unlike traditional phishing, spear phishing targets specific
                individuals or organizations. Attackers often gather information
                from social media or company websites to craft personalized
                messages that appear legitimate.
              </p>
              <p className="boldText"> 2. Use of AI and Automation</p>
              <p>
                Cybercriminals are increasingly utilizing AI tools to automate
                phishing campaigns, making them more efficient and harder to
                detect. These tools can generate convincing emails that mimic
                trusted sources.
              </p>
              <p className="boldText">3. Multi-Vector Attacks</p>
              <p>
                Phishing attacks are no longer limited to email. Attackers are
                now using SMS (smishing), social media platforms, and even voice
                calls (vishing) to reach potential victims through multiple
                channels.
              </p>
              <h2>Notable Case Studies</h2>
              <p className="boldText">
                <span className="orangeText"> Case Study 1:</span> Targeting
                Financial Institutions
              </p>
              <p>
                In early 2024, a major bank fell victim to a sophisticated spear
                phishing attack that compromised customer data. Attackers
                impersonated bank representatives and sent emails requesting
                sensitive information, leading to significant financial losses.
              </p>
              <p>
                <span className="orangeText"> Case Study 2:</span> Ransomware
                via Phishing Links
              </p>
              <p>
                A healthcare organization experienced a ransomware attack after
                employees clicked on a malicious link in an email disguised as a
                routine update. The attack encrypted critical patient data,
                causing operational disruptions and reputational damage.
              </p>
              <h2>Prevention Strategies</h2>
              <p className="orangeText">
                To combat the rising threat of phishing attacks, organizations
                should implement the following strategies:
              </p>
              <p className="orangeText">1. Employee Training Programs</p>
              <p>
                Regular training sessions on recognizing phishing attempts can
                empower employees to identify suspicious emails and links.
                Incorporating simulated phishing exercises can reinforce
                learning.
              </p>
              <p className="orangeText">2. Multi-Factor Authentication (MFA)</p>
              <p>
                Implementing MFA adds an extra layer of security, making it more
                difficult for attackers to gain unauthorized access even if
                credentials are compromised.
              </p>
              <p className="orangeText">3. Email Filtering Solutions</p>
              <p>
                Investing in advanced email filtering solutions can help detect
                and block phishing emails before they reach employees' inboxes.
              </p>
              <h2>Conclusion</h2>
              <h4 className="boldText pb-3">
                As phishing attacks evolve in complexity and frequency,
                organizations must remain vigilant and proactive in their
                defense strategies. By understanding the latest trends and
                implementing robust prevention measures, businesses can
                significantly reduce their risk of falling victim to these
                deceptive tactics.
              </h4>
              <hr className="orangeLine" />
            </div>
          </div>
        </div>
      </div>
      {/* Read More */}
      <div className="readMoreNews py-5 ">
        <ReadMoreNews />
      </div>
      {/* Subscribe to our Newsletter */}
      <div className="py-5">
        <SubscribeNewsletter />
      </div>
      <hr className="orangeLine" />
    </div>
  );
};

export default newsletter;
