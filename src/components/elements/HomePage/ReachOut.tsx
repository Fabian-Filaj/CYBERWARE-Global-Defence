"use client";

import React, { useState } from "react";

const ReachOut = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmit = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="py-5">
      <div className="reachOutSection-container d-flex justify-content-center text-center position-relative">
        <div className="middleLine"></div>
        <div className="reachOutSection darkBackground ">
          <h5 className="text-light boldText">
            Reach out to our team at CGD, and we'll help <br />
            you protect your digital future.
          </h5>
          <div className="form pt-3">
            <label htmlFor="email"></label>
            <input
              className="text-center boldText"
              type="email"
              id="email"
              placeholder="Email Address"
            />
            <button className="orangeButton boldText" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {isPopupVisible && (
            <div className="popup-message">
              Thank you for reaching out! We'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
