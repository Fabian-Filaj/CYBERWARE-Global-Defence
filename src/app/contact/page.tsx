import React from "react";

const ContactPage = () => {
  return (
    <div className="contactPage text-white">
      <h3 className="py-5 text-center boldText">
        Your Cybersecurity Experts - Securing the Future Today
      </h3>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="orangeText">Contact Us</h1>
            <h4 className="boldText">
              We are here to help you secure you future
            </h4>
            <div className="contactData pt-4">
              <p>
                <span>Email: </span> info@cyberg.com
              </p>
              <p>
                <span>Phone: </span> +49 123 456 789
              </p>
              <p>
                <span>Address: </span> Street, Berlin Germany
              </p>
            </div>
            <div className="whatNext">
              <h3 className="boldText">
                What happens next?
              </h3>
              <p>
                <span>
                  <img src="/icons/number1.svg" alt="number1" />
                </span>
                We'll review your cybersecurity needs.
              </p>
              <p className="py-3 ">
                <span>
                  <img src="/icons/number2.svg" alt="number2" />
                </span>
                You'll receive a customized security proposal
              </p>
              <p>
                <span>
                  <img src="/icons/number3.svg" alt="number3" />
                </span>
                Once approved, we'll implement the solutions and support you
              </p>
            </div>
          </div>
          {/* form */}
          <div className="col-md-6 pb-3">
            <form className="contactForm">
              <label htmlFor="name">Full name </label>
              <input
                type="text"
                className="form-control mb-3"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">Email address </label>
              <input
                type="email"
                className="form-control mb-3"
                id="email"
                name="email"
                placeholder="Your Email Adress"
                required
              />

              <label htmlFor="number">Telephone number </label>
              <input
                type="number"
                className="form-control mb-3"
                id="number"
                name="number"
                placeholder="Your phone number"
              />

              <label htmlFor="country">Select your country</label>
              <select
                id="country"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Your country</option>
                <option>Germany</option>
                <option>Turkey</option>
                <option>Albania</option>
                <option>Macedonia</option>
              </select>

              <label htmlFor="message">Send us a Message </label>
              <textarea
                name="message"
                id="message"
                className="form-control mb-3"
                required
              />
              <button className="orangeButton w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
