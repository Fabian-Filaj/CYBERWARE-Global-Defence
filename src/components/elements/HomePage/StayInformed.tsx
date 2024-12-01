import React from "react";

const stayInformed = () => {
  return (
    <div className="container my-5">
      <div className="row stayInformed">
        <div className="col-md-7">
          <h1 className="orangeText">
            Stay informed with the latest threat insights delivered directly to
            your inbox through our Newsletter.
          </h1>
        </div>
        <div className="col-md-5">
          <div className="form-content mt-3">
            <div className="form-row">
              <img src="/icons/mail.svg" alt="mail" />
              <input type="email" placeholder="Your Email Address" />
            </div>
            <hr />
            <button className="orangeButton mt-2">Join for Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stayInformed;
