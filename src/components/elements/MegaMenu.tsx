import Link from "next/link";
import React from "react";

const MegaMenu = () => {
  return (
    <div>
      <div className="dropdown-content">
        <div className="mega-menu-container">
          {/* SIEM Threat Detection & Response */}
          <div className="service-column">
            <img
              src="/icons/megaMenuIcons/SIEM-Threat-Detection.svg"
              alt="SIEM-Threat-Detection"
            />
            <p className="boldText pt-2">SIEM Threat Detection & Response</p>
            <hr className="megaMenuHr" />
            <p>
              Our 24/7 monitoring services use AI-powered tools to detect and
              neutralize threats before they can harm your business
            </p>
            <hr className="megaMenuHr" />
            <ul>
              <li>Define Security Goals</li>
              <hr className="megaMenuHr" />
              <li>Select a SIEM Tool</li>
              <hr className="megaMenuHr" />
              <li>Establish Data Sources</li>
              <hr className="megaMenuHr" />
              <li>Normalize Data</li>
              <hr className="megaMenuHr" />
              <li>Create Detection Rules</li>
              <hr className="megaMenuHr" />
              <li>Implement Incident Response Procedures</li>
              <hr className="megaMenuHr" />
              <li>Review and Update Regularly</li>
              <hr className="megaMenuHr" />
            </ul>
            <Link
              href="/services/siem-threat-detection"
              className="explore-button"
            >
              SIEM Threat Detection
              <span>
                <img
                  src="/icons/megaMenuIcons/dropDownArrow.svg"
                  alt="dropDownArrow"
                />
              </span>
            </Link>
          </div>
          {/* Penetration Testing */}
          <div className="service-column">
            <img
              src="/icons/megaMenuIcons/Penetration-Testing.svg"
              alt="SIEM-Threat-Detection"
            />
            <p className="boldText pt-2"> Penetration Testing</p>
            <hr className="megaMenuHr" />
            <p>
              Identify and eliminate vulnerabilities in your network with our
              comprehensive penetration testing services.
            </p>
            <hr className="megaMenuHr" />
            <ul>
              <li>Pre-Engagement Interactions</li>
              <hr className="megaMenuHr" />
              <li>Reconnaissance</li>
              <hr className="megaMenuHr" />
              <li>Scanning</li>
              <hr className="megaMenuHr" />
              <li>Vulnerability Assessment</li>
              <hr className="megaMenuHr" />
              <li>Exploitation</li>
              <hr className="megaMenuHr" />
              <li>Post-Exploitation</li>
              <hr className="megaMenuHr" />
              <li>Reporting</li>
              <hr className="megaMenuHr" />
            </ul>
            <Link
              href="/services/penetration-testing"
              className="explore-button"
            >
              Penetration Testing
              <span>
                <img
                  src="/icons/megaMenuIcons/dropDownArrow.svg"
                  alt="dropDownArrow"
                />
              </span>
            </Link>
          </div>
          {/* Incident-Response*/}
          <div className="service-column">
            <img
              src="/icons/megaMenuIcons/Incident-Response.svg"
              alt="Incident-Response"
            />
            <p className="boldText">Incident-Response</p>
            <hr className="megaMenuHr" />
            <p>
              In the event of a breach, our expert team reacts swiftly to
              minimize damage and restore your systems quickly
            </p>
            <hr className="megaMenuHr" />
            <ul>
              <li>Preparation</li>
              <hr className="megaMenuHr" />
              <li>Detection and Analysis</li>
              <hr className="megaMenuHr" />
              <li>Prioritization</li>
              <hr className="megaMenuHr" />
              <li>Containment</li>
              <hr className="megaMenuHr" />
              <li>Eradication</li>
              <hr className="megaMenuHr" />
              <li>Recovery</li>
              <hr className="megaMenuHr" />
              <li>Post-Incident Review</li>
              <hr className="megaMenuHr" />
            </ul>
            <Link href="/services/incident-response" className="explore-button">
              Incident Responce
              <span>
                <img
                  src="/icons/megaMenuIcons/dropDownArrow.svg"
                  alt="dropDownArrow"
                />
              </span>
            </Link>
          </div>
          {/* Network Security */}
          <div className="service-column">
            <img
              src="/icons/megaMenuIcons/Network-Security.svg"
              alt="Network Security"
            />
            <p className="boldText pt-2">Network Security</p>
            <hr className="megaMenuHr" />
            <p>
              We offer end-to-end network security solutions, optimizing your
              infrastructure while securing it against unauthorized access
            </p>
            <hr className="megaMenuHr" />
            <ul>
              <li>Perform a Network Audit</li>
              <hr className="megaMenuHr" />
              <li>Deploy Security Devices</li>
              <hr className="megaMenuHr" />
              <li>Establish Strong Access Controls</li>
              <hr className="megaMenuHr" />
              <li>Update Security Software</li>
              <hr className="megaMenuHr" />
              <li>Secure Network Hardware</li>
              <hr className="megaMenuHr" />
              <li>Implement Network Segmentation</li>
              <hr className="megaMenuHr" />
              <li>Establish a Maintenance System</li>
              <hr className="megaMenuHr" />
            </ul>
            <Link href="/services/network-security" className="explore-button">
              Network Security
              <span>
                <img
                  src="/icons/megaMenuIcons/dropDownArrow.svg"
                  alt="dropDownArrow"
                />
              </span>
            </Link>
          </div>
          {/* Security Awareness Training */}
          <div className="service-column">
            <img
              src="/icons/megaMenuIcons/Securit-Awarenes-Training.svg"
              alt="Security Awareness Training"
            />
            <p className="boldText pt-2">Security Awareness Training</p>
            <hr className="megaMenuHr" />
            <p>
              Empower your employees to recognize and respond to potential cyber
              threats. Our comprehensive security awareness programs equip your
              workforce with the knowledge they need to prevent attacks
            </p>
            <hr className="megaMenuHr" />
            <ul>
              <li>Assess Organizational Needs</li>
              <hr className="megaMenuHr" />
              <li>Get Buy-In from Leadership</li>
              <hr className="megaMenuHr" />
              <li>Develop a Tailored Training Program</li>
              <hr className="megaMenuHr" />
              <li>Implement Training Delivery Methods</li>
              <hr className="megaMenuHr" />
              <li>Conduct Regular Training Sessions</li>
              <hr className="megaMenuHr" />
              <li>Evaluate and Measure Effectiveness</li>
              <hr className="megaMenuHr" />
            </ul>
            <Link
              href="/services/security-awareness-training"
              className="explore-button"
            >
              Security Awareness Training
              <span>
                <img
                  src="/icons/megaMenuIcons/dropDownArrow.svg"
                  alt="dropDownArrow"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
