import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-white pt-4">
      <div className="footer-container">
        <div className="footer-left">
          <div className="certificates">
            <img
              src="/images/logo.svg"
              alt="Cyberware Global Defense Logo"
              className="footer-logo"
            />
            <div className="certificates-row">
              <img
                src="/images/certifications/certification-1.svg"
                alt="ISO Certificate 1"
              />
              <img
                src="/images/certifications/certification-2.svg"
                alt="ISO Certificate 2"
              />
            </div>
            <img
              src="/images/certifications/certification-3.svg"
              alt="Cyber Alliance"
            />
          </div>
        </div>
        <div className="certificatesLine"></div>
        <div className="footer-middle">
          <div className="footer-row">
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="/services/siem-threat-detection">
                    SIEM - 24/7 Threat Monitoring
                  </a>
                </li>
                <li>
                  <a href="/services/penetration-testing">
                    Penetration Testing
                  </a>
                </li>
                <li>
                  <a href="/services/incident-response">Incident Management</a>
                </li>
                <li>
                  <a href="/services/network-security">
                    Compliance & Risk Management
                  </a>
                </li>
                <li>
                  <a href="/services/security-awareness-training">
                    Security Awareness Training
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>About Us</h4>
              <ul>
                <li> Mission Statement</li>
                <li>Our Story</li>
                <li>Our Expertise</li>
                <li>Partnerships</li>
              </ul>
            </div>
            <div>
              <h4>Team</h4>
              <ul>
                <li>Co-Founder & CXX</li>
                <li>Cybersecurity Specialists</li>
                <li>Security Awareness Advisors</li>
              </ul>
            </div>
          </div>
          <div className="footer-row">
            <div>
              <h4>Our Values</h4>
              <ul>
                <li>Innovation</li>
                <li>Trust</li>
                <li>Excellence</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div>
              <h4>Industries We Serve</h4>
              <ul>
                <li>
                  <a href="/industries">Finance</a>
                </li>
                <li>
                  <a href="/industries">Healthcare</a>
                </li>
                <li>
                  <a href="/industries">Government</a>
                </li>
                <li>
                  <a href="/industries">Retail</a>
                </li>
                <li>
                  <a href="/industries">eGame</a>
                </li>
                <li>
                  <a href="/industries">Education</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-right mt-3">
          <h2>
            Contact <span className="orangeText">Us</span>
          </h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <label>
              <input type="checkbox" /> I would like to receive the newsletter.
            </label>
            <button className="orangeButton">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <img src="/images/Maps.png" alt="Map" />
          <p>
            <span>
              <img src="/icons/location.svg" alt="location" />
            </span>
            Berlin, Germany
          </p>
          <p>
            <span>
              <img src="/icons/phone.svg" alt="phone" />
            </span>
            00011222333
          </p>
          <p>
            <span>
              <img src="/icons/mail.svg" alt="mail" />
            </span>
            info@cybergd.com
          </p>
        </div>
      </div>
      <div className="footer-bottom bg-white pt-3">
        <p>
          <a href="#">Legal Notice</a>
          <a href="#">Data Protection</a>
          <a href="#">Terms of Use</a>
        </p>
        <p className="text-dark">© Cyberware Global Defense</p>
      </div>
    </footer>
  );
};

export default Footer;
