import React, { useState } from "react";

interface News {
  headline: string;
  date: string;
  title: string;
  description: string;
  details: string;
}

const ReadMoreNews = () => {
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const newsData = [
    {
      headline: "Iranian Hackers Target Infrastructure",
      date: "October 20, 2024",
      title: "Iranian Hackers Breaching Infrastructure",
      description: ` Recent reports reveal that Iranian hackers are
      infiltrating critical infrastructure organizations to
      collect credentials and network data. This information
      is being sold on cybercriminal forums, enabling further
      cyberattacks by other threat actors.`,
      details: `
      <p>Iranian hackers have been intensifying their efforts to infiltrate critical infrastructure sectors, including energy, transportation, and healthcare, exploiting vulnerabilities in outdated systems to gain unauthorized access to sensitive data. These cybercriminals have demonstrated a keen ability to identify weak points in legacy technologies, which are often neglected due to limited resources or lack of awareness.</p>
      <p>Once inside, they harvest credentials and valuable network information, which are then sold on the dark web to other malicious actors or used in more advanced attacks.</p>
      <p>The energy sector has been particularly vulnerable, with hackers targeting control systems and operational technology networks, potentially causing widespread disruptions. In the healthcare sector, attackers have exploited insufficiently secured patient databases and medical devices, leading to breaches that compromise personal health information. Similarly, in transportation, the focus has been on manipulating systems that manage logistics and scheduling, posing risks to both safety and efficiency.</p>
      <p>Authorities have linked these activities to a broader trend of state-sponsored cyber espionage, where stolen credentials and sensitive data are used not only for financial gain but also to undermine national security. Experts warn that such breaches can have cascading effects, disrupting supply chains, eroding public trust, and endangering lives.</p>`,
    },
    {
      headline: "New Vulnerabilities in Oracle Software",
      date: "October 20, 2024",
      title: "CISA Warns of Exploited Oracle Vulnerabilities",
      description: `The Cybersecurity and Infrastructure Security Agency
        (CISA) has issued a warning about two Oracle
        vulnerabilities that are currently being exploited in
        the wild. Organizations are urged to apply patches
        immediately to mitigate risks.`,
      details: `
      <p>Oracle vulnerabilities CVE-2024-12345 and CVE-2024-67890 have been identified as actively exploited flaws in Oracle WebLogic servers. These vulnerabilities allow attackers to execute remote code, giving them unauthorized access to critical systems and enabling the theft of sensitive data. The flaws are being actively targeted by advanced persistent threat (APT) groups, highlighting the urgency of addressing these weaknesses.</p>
      <p>Attackers have been exploiting these vulnerabilities to install malicious software, conduct data exfiltration, and gain a foothold within organizational networks. The impact is particularly severe in environments where WebLogic servers are integrated with legacy systems, as these configurations often lack modern security controls, making them prime targets for exploitation.</p>
      <p>Experts warn that these attacks are part of a broader trend in exploiting middleware vulnerabilities, as WebLogic servers are commonly used in enterprise environments to manage large-scale applications. A compromised WebLogic server can serve as a gateway for attackers to pivot into more sensitive areas of an organization's network, potentially affecting operations, financial systems, and customer data.</p>
      <p>To mitigate these risks, organizations are strongly encouraged to apply the latest patches provided by Oracle. Additionally, security teams should implement robust intrusion detection and prevention systems to monitor for suspicious activity. Regular vulnerability scans and penetration testing are also recommended to identify and address other potential weaknesses in the network.</p>`,
    },
    {
      headline: "Arrest of Notorious Hacker in Brazil",
      date: "October 20, 2024",
      title: "Arrest of USDoD Hacker Linked to Data Breaches",
      description: ` Brazilian authorities have arrested a notorious hacker
        known as USDoD, linked to significant breaches involving
        National Public Data and InfraGard. This operation marks
        a crucial step in combating cybercrime on an
        international scale.`,
      details: `
      <p>The notorious hacker known as USDoD was recently apprehended in a coordinated operation involving multiple international law enforcement agencies. This individual has been linked to over a dozen high-profile data breaches, making their arrest a significant milestone in the ongoing battle against cybercrime.</p>
      <p>USDoD specialized in penetrating government and corporate systems, leveraging sophisticated techniques to bypass even the most advanced security measures. Once inside, the hacker would steal sensitive data, including classified government information, financial records, and proprietary corporate assets. These stolen assets were then sold to the highest bidder on the dark web, often fetching substantial sums and enabling further malicious activities.</p>
      <p>The hacker's activities extended beyond mere data theft. Authorities discovered that USDoD had also provided tools and expertise to other cybercriminals, effectively creating a ripple effect of secondary attacks on organizations worldwide. The breaches caused by USDoD have led to financial losses, reputational damage, and compromised national security in several cases.</p>
      <p>The operation to apprehend USDoD involved meticulous coordination between agencies in multiple countries, highlighting the global nature of cybercrime and the importance of international collaboration in combating it. Investigators relied on advanced cyber forensics, tracking digital footprints across multiple networks and piecing together evidence to pinpoint the hacker's location.</p>`,
    },
    {
      headline: "Iranian Hackers Target Infrastructure",
      date: "October 20, 2024",
      title: "Iranian Hackers Breaching Infrastructure",
      description: ` Recent reports reveal that Iranian hackers are
      infiltrating critical infrastructure organizations to
      collect credentials and network data. This information
      is being sold on cybercriminal forums, enabling further
      cyberattacks by other threat actors.`,
      details: `
      <p>Iranian hackers have been intensifying their efforts to infiltrate critical infrastructure sectors, including energy, transportation, and healthcare, exploiting vulnerabilities in outdated systems to gain unauthorized access to sensitive data. These cybercriminals have demonstrated a keen ability to identify weak points in legacy technologies, which are often neglected due to limited resources or lack of awareness.</p>
      <p>Once inside, they harvest credentials and valuable network information, which are then sold on the dark web to other malicious actors or used in more advanced attacks.</p>
      <p>The energy sector has been particularly vulnerable, with hackers targeting control systems and operational technology networks, potentially causing widespread disruptions. In the healthcare sector, attackers have exploited insufficiently secured patient databases and medical devices, leading to breaches that compromise personal health information. Similarly, in transportation, the focus has been on manipulating systems that manage logistics and scheduling, posing risks to both safety and efficiency.</p>
      <p>Authorities have linked these activities to a broader trend of state-sponsored cyber espionage, where stolen credentials and sensitive data are used not only for financial gain but also to undermine national security. Experts warn that such breaches can have cascading effects, disrupting supply chains, eroding public trust, and endangering lives.</p>`,
    },
    {
      headline: "New Vulnerabilities in Oracle Software",
      date: "October 20, 2024",
      title: "CISA Warns of Exploited Oracle Vulnerabilities",
      description: `The Cybersecurity and Infrastructure Security Agency
        (CISA) has issued a warning about two Oracle
        vulnerabilities that are currently being exploited in
        the wild. Organizations are urged to apply patches
        immediately to mitigate risks.`,
      details: `
      <p>Oracle vulnerabilities CVE-2024-12345 and CVE-2024-67890 have been identified as actively exploited flaws in Oracle WebLogic servers. These vulnerabilities allow attackers to execute remote code, giving them unauthorized access to critical systems and enabling the theft of sensitive data. The flaws are being actively targeted by advanced persistent threat (APT) groups, highlighting the urgency of addressing these weaknesses.</p>
      <p>Attackers have been exploiting these vulnerabilities to install malicious software, conduct data exfiltration, and gain a foothold within organizational networks. The impact is particularly severe in environments where WebLogic servers are integrated with legacy systems, as these configurations often lack modern security controls, making them prime targets for exploitation.</p>
      <p>Experts warn that these attacks are part of a broader trend in exploiting middleware vulnerabilities, as WebLogic servers are commonly used in enterprise environments to manage large-scale applications. A compromised WebLogic server can serve as a gateway for attackers to pivot into more sensitive areas of an organization's network, potentially affecting operations, financial systems, and customer data.</p>
      <p>To mitigate these risks, organizations are strongly encouraged to apply the latest patches provided by Oracle. Additionally, security teams should implement robust intrusion detection and prevention systems to monitor for suspicious activity. Regular vulnerability scans and penetration testing are also recommended to identify and address other potential weaknesses in the network.</p>`,
    },
    {
      headline: "Arrest of Notorious Hacker in Brazil",
      date: "October 20, 2024",
      title: "Arrest of USDoD Hacker Linked to Data Breaches",
      description: ` Brazilian authorities have arrested a notorious hacker
        known as USDoD, linked to significant breaches involving
        National Public Data and InfraGard. This operation marks
        a crucial step in combating cybercrime on an
        international scale.`,
      details: `
      <p>The notorious hacker known as USDoD was recently apprehended in a coordinated operation involving multiple international law enforcement agencies. This individual has been linked to over a dozen high-profile data breaches, making their arrest a significant milestone in the ongoing battle against cybercrime.</p>
      <p>USDoD specialized in penetrating government and corporate systems, leveraging sophisticated techniques to bypass even the most advanced security measures. Once inside, the hacker would steal sensitive data, including classified government information, financial records, and proprietary corporate assets. These stolen assets were then sold to the highest bidder on the dark web, often fetching substantial sums and enabling further malicious activities.</p>
      <p>The hacker's activities extended beyond mere data theft. Authorities discovered that USDoD had also provided tools and expertise to other cybercriminals, effectively creating a ripple effect of secondary attacks on organizations worldwide. The breaches caused by USDoD have led to financial losses, reputational damage, and compromised national security in several cases.</p>
      <p>The operation to apprehend USDoD involved meticulous coordination between agencies in multiple countries, highlighting the global nature of cybercrime and the importance of international collaboration in combating it. Investigators relied on advanced cyber forensics, tracking digital footprints across multiple networks and piecing together evidence to pinpoint the hacker's location.</p>`,
    },
    {
      headline: "Iranian Hackers Target Infrastructure",
      date: "October 20, 2024",
      title: "Iranian Hackers Breaching Infrastructure",
      description: ` Recent reports reveal that Iranian hackers are
      infiltrating critical infrastructure organizations to
      collect credentials and network data. This information
      is being sold on cybercriminal forums, enabling further
      cyberattacks by other threat actors.`,
      details: `
      <p>Iranian hackers have been intensifying their efforts to infiltrate critical infrastructure sectors, including energy, transportation, and healthcare, exploiting vulnerabilities in outdated systems to gain unauthorized access to sensitive data. These cybercriminals have demonstrated a keen ability to identify weak points in legacy technologies, which are often neglected due to limited resources or lack of awareness.</p>
      <p>Once inside, they harvest credentials and valuable network information, which are then sold on the dark web to other malicious actors or used in more advanced attacks.</p>
      <p>The energy sector has been particularly vulnerable, with hackers targeting control systems and operational technology networks, potentially causing widespread disruptions. In the healthcare sector, attackers have exploited insufficiently secured patient databases and medical devices, leading to breaches that compromise personal health information. Similarly, in transportation, the focus has been on manipulating systems that manage logistics and scheduling, posing risks to both safety and efficiency.</p>
      <p>Authorities have linked these activities to a broader trend of state-sponsored cyber espionage, where stolen credentials and sensitive data are used not only for financial gain but also to undermine national security. Experts warn that such breaches can have cascading effects, disrupting supply chains, eroding public trust, and endangering lives.</p>`,
    },
    {
      headline: "New Vulnerabilities in Oracle Software",
      date: "October 20, 2024",
      title: "CISA Warns of Exploited Oracle Vulnerabilities",
      description: `The Cybersecurity and Infrastructure Security Agency
        (CISA) has issued a warning about two Oracle
        vulnerabilities that are currently being exploited in
        the wild. Organizations are urged to apply patches
        immediately to mitigate risks.`,
      details: `
      <p>Oracle vulnerabilities CVE-2024-12345 and CVE-2024-67890 have been identified as actively exploited flaws in Oracle WebLogic servers. These vulnerabilities allow attackers to execute remote code, giving them unauthorized access to critical systems and enabling the theft of sensitive data. The flaws are being actively targeted by advanced persistent threat (APT) groups, highlighting the urgency of addressing these weaknesses.</p>
      <p>Attackers have been exploiting these vulnerabilities to install malicious software, conduct data exfiltration, and gain a foothold within organizational networks. The impact is particularly severe in environments where WebLogic servers are integrated with legacy systems, as these configurations often lack modern security controls, making them prime targets for exploitation.</p>
      <p>Experts warn that these attacks are part of a broader trend in exploiting middleware vulnerabilities, as WebLogic servers are commonly used in enterprise environments to manage large-scale applications. A compromised WebLogic server can serve as a gateway for attackers to pivot into more sensitive areas of an organization's network, potentially affecting operations, financial systems, and customer data.</p>
      <p>To mitigate these risks, organizations are strongly encouraged to apply the latest patches provided by Oracle. Additionally, security teams should implement robust intrusion detection and prevention systems to monitor for suspicious activity. Regular vulnerability scans and penetration testing are also recommended to identify and address other potential weaknesses in the network.</p>`,
    },
    {
      headline: "Arrest of Notorious Hacker in Brazil",
      date: "October 20, 2024",
      title: "Arrest of USDoD Hacker Linked to Data Breaches",
      description: ` Brazilian authorities have arrested a notorious hacker
        known as USDoD, linked to significant breaches involving
        National Public Data and InfraGard. This operation marks
        a crucial step in combating cybercrime on an
        international scale.`,
      details: `
      <p>The notorious hacker known as USDoD was recently apprehended in a coordinated operation involving multiple international law enforcement agencies. This individual has been linked to over a dozen high-profile data breaches, making their arrest a significant milestone in the ongoing battle against cybercrime.</p>
      <p>USDoD specialized in penetrating government and corporate systems, leveraging sophisticated techniques to bypass even the most advanced security measures. Once inside, the hacker would steal sensitive data, including classified government information, financial records, and proprietary corporate assets. These stolen assets were then sold to the highest bidder on the dark web, often fetching substantial sums and enabling further malicious activities.</p>
      <p>The hacker's activities extended beyond mere data theft. Authorities discovered that USDoD had also provided tools and expertise to other cybercriminals, effectively creating a ripple effect of secondary attacks on organizations worldwide. The breaches caused by USDoD have led to financial losses, reputational damage, and compromised national security in several cases.</p>
      <p>The operation to apprehend USDoD involved meticulous coordination between agencies in multiple countries, highlighting the global nature of cybercrime and the importance of international collaboration in combating it. Investigators relied on advanced cyber forensics, tracking digital footprints across multiple networks and piecing together evidence to pinpoint the hacker's location.</p>`,
    },
  ];

  return (
    <div className="container readMoreSection">
      <div className="review-container">
        <div className="row">
          <div className="col-md-3 d-flex flex-column justify-content-end align-items-start">
            <h2 className="orangeText">Read More</h2>
            <hr className="underlineReadMore" />
          </div>
          <div className="col-md-9">
            <div className="relatedNewsCardContainer">
              <div className="review-row">
                {newsData.map((news, index) => (
                  <div key={index} className="review-card">
                    <div className="relatedNewsCard readMoreCard d-flex justify-content-between align-items-start">
                      <div className="content">
                        <div className="newsHeadline">{news.headline}</div>
                        <p className="newsDate">{news.date}</p>
                        <h5 className="newsTitle">{news.title}</h5>
                        <p className="newsDescription">{news.description}</p>
                        <button
                          className="orangeButton"
                          onClick={() => setSelectedNews(news)}
                        >
                          Read More
                        </button>
                      </div>
                      <img src="/icons/emptyBookmark.svg" alt="emptyBookmark" className="bookMarkIcon"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedNews && (
              <div className="selectedNewsDetails py-4">
                <hr />
                <h2 className="orangeText">{selectedNews.title}</h2>
                <p className="newsDate">{selectedNews.date}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: selectedNews.details }}
                />
                <button
                  className="orangeButton mt-3"
                  onClick={() => setSelectedNews(null)}
                >
                  Close
                </button>
                <hr />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreNews;
