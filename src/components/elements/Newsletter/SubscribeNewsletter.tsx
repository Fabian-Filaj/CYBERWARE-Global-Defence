import React from "react";

const SubscribeNewsletter = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-7">
            <h2 className="boldText">
              <span className="orangeText">
                Still haven't subscribed to our Newsletter?
              </span>
              <br />
              Sign Up today and stay informed about online security and all the
              ways you can protect yourself or your business.
            </h2>
          </div>
          <div className="col-md-5">
            <div className="form-content mt-3">
              <div className="form-row">
                <img src="/icons/mail.svg" alt="mail" />
                <input type="email" placeholder="Your Email Address" />
              </div>
              <hr />
              <button className="orangeButton mt-2">Join for free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
