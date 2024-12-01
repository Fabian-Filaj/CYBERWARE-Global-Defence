"use client";

import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import MegaMenu from "../MegaMenu";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header>
      {/* Top Section */}
      <div className="top-section bg-white">
        {/* Logo */}
        <div>
          <img src="/images/logo.svg" alt="CYBERWARE Global Defence Logo" />
        </div>

        <div className="rightSection">
          <Link href="/contact" className="link">
            <span className="text-dark rightSection-plan-support">
              Emergency Response Plan
            </span>
          </Link>

          <Link href="/contact" className="link">
            <span className="text-dark rightSection-plan-support">Support</span>
          </Link>

          {/* Search Icon */}
          <div>
            <img className="seachIcon" src="/icons/search.svg" alt="search" />
          </div>

          {/* Language Dropdown */}
          <LanguageSelector />

          {/* Hamburger Menu */}
          <div
            className="hamburgerMenuIcon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src="/icons/hamburgerMenu.svg" alt="hamburgerMenu" />
          </div>
        </div>
      </div>

      {/* Hamburger Menu Dropdown */}
      {menuOpen && (
        <nav className="hamburger-menu">
          <ul>
            <li>
              <Link href="/" className="nav-link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <div className="services-dropdown nav-link">
              <div className="nav-link">
                Services <img src="/icons/arrow_down.svg" alt="arrow" />
              </div>
              {/* Mega Menu */}
              <MegaMenu />
            </div>
            <li>
              <Link href="/industries" className="nav-link" onClick={handleLinkClick}>
                Industries
              </Link>
            </li>
            <li>
              <Link href="/partnership" className="nav-link" onClick={handleLinkClick}>
                Partnership
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="nav-link" onClick={handleLinkClick}>
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="nav-link" onClick={handleLinkClick}>
                Newsletter
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Bottom Section (Hidden on smaller screens) */}
      <nav className="bottom-section">
        <div className="d-flex gap-4">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About Us
          </Link>

          <div className="services-dropdown nav-link">
            <div className="nav-link">
              Services <img src="/icons/arrow_down.svg" alt="arrow" />
            </div>
            {/* Mega Menu */}
            <MegaMenu />
          </div>

          <Link href="/industries" className="nav-link">
            Industries
          </Link>
          <Link href="/partnership" className="nav-link">
            Partnership
          </Link>
        </div>

        <div className="d-flex gap-4">
          <Link href="/contact" className="nav-link contactLink">
            <span className="contactText text-decoration-none">Contact</span>
          </Link>
          <Link href="/jobs" className="nav-link">
            Jobs
          </Link>
          <Link href="/newsletter" className="nav-link">
            Newsletter
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
