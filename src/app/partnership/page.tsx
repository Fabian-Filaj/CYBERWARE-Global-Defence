import HappyCustomers from "@/components/elements/HomePage/HappyCustomers";
import Link from "next/link";
import React from "react";

const partnership = () => {
  return (
    <div>
      <div className="partnership pt-5">
        <div className="container">
          <div className="partnershipHero text-center text-white">
            <h1>
              Meet Our <span className="orangeText">Partners</span> &
              <span className="orangeText"> Collaborations</span>
            </h1>
            <h5>
              At Cyberware Global Defense, we are proud to collaborate with the
              following industry leaders and organizations to provide the best
              cybersecurity solutions to our clients:
            </h5>
          </div>

          {/* Partnership Cards */}
          <div className="partnershipCards">
            {/* Brainster Partnership */}
            <div className="brainsterPartnership">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                  <img
                    className="w-100"
                    src="/images/partnership/partnership-brainster-1.png"
                    alt="partnership-brainster-1"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="w-100"
                    src="/images/partnership/partnership-brainster-2.png"
                    alt="partnership-brainster-2"
                  />
                </div>
              </div>
              <h1 className="pt-4">
                Parntership with <span className="orangeText">Brainster</span>
              </h1>
              <p>
                Our partnership with Brainster enables us to recruit and train
                the next generation of cybersecurity professionals. Together, we
                bring fresh ideas and cutting-edge solutions to the forefront of
                cyber defense. By combining Brainster's forward-thinking
                education programs with our industry expertise, we are building
                a stronger, more resilient cybersecurity workforce. This
                collaboration ensures that our team stays ahead of emerging
                threats, equipped with the skills and knowledge to protect
                businesses and individuals in an ever-evolving digital
                landscape."
              </p>
            </div>

            {/* Microsoft Partnership */}
            <div className="microsoftPartnership text-white mt-5">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                  <img
                    className="w-100"
                    src="/images/partnership/partnership-microsoft.png"
                    alt="partnership-microsoft"
                  />
                </div>
                <div className="col-md-6 p-4">
                  <h1>
                    Parntership with
                    <span className="orangeText"> Microsoft</span>
                  </h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur. Tristique dignissim
                    dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut
                    convallis ac neque tristique faucibus integer. Amet donec
                    maecenas vitae sollicitudin neque mauris etiam. Nibh dictum
                    id ut vestibulum mattis neque cursus. Tortor eleifend
                    egestas et lorem. Enim nisi non parturient malesuada sed.
                    Scelerisque massa amet ut diam amet aliquam pulvinar
                    aliquet. Lectus urna pellentesque eget lorem sed phasellus
                    eget diam. Fermentum orci interdum ornare libero velit at
                    pellentesque.
                  </p>
                </div>
              </div>
            </div>

            {/* Salesforce IQ Partnership */}
            <div className="saleforceIQPartnership text-white mt-5">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 p-4">
                  <h1>
                    Parntership with
                    <span className="orangeText"> Salesforce IQ</span>
                  </h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur. Tristique dignissim
                    dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut
                    convallis ac neque tristique faucibus integer. Amet donec
                    maecenas vitae sollicitudin neque mauris etiam. Nibh dictum
                    id ut vestibulum mattis neque cursus. Tortor eleifend
                    egestas et lorem. Enim nisi non parturient malesuada sed.
                    Scelerisque massa amet ut diam amet aliquam pulvinar
                    aliquet. Lectus urna pellentesque eget lorem sed phasellus
                    eget diam. Fermentum orci interdum ornare libero velit at
                    pellentesque.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    className="w-100"
                    src="/images/partnership/partnership-saleforceIQ.png"
                    alt="partnership-Salesforce-IQ"
                  />
                </div>
              </div>
            </div>

            {/* Azure Partnership */}
            <div className="azurePartnership mt-5">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                  <img
                    className="w-100"
                    src="/images/partnership/partnership-brainster-1.png"
                    alt="partnership-azure"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="w-100"
                    src="/images/partnership/partnership-azure.png"
                    alt="partnership-azure"
                  />
                </div>
              </div>
              <h1 className="pt-4">
                Parntership with <span className="orangeText">Azure</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tristique dignissim
                dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut
                convallis ac neque tristique faucibus integer. Amet donec
                maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id
                ut vestibulum mattis neque cursus. Tortor eleifend egestas et
                lorem. Enim nisi non parturient malesuada sed. Scelerisque massa
                amet ut diam amet aliquam pulvinar aliquet. Lectus urna
                pellentesque eget lorem sed phasellus eget diam. Fermentum orci
                interdum ornare libero velit at pellentesque.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center py-5">
            <Link href="/#" className="orangeText">
              <h5 className="boldText">View All Partners </h5>
            </Link>
          </div>
        </div>
        <hr className="orangeLine" />

        {/* Partnership Testimonials */}
        <div className="container py-5">
          <div className="partnershipTestimonials">
            <div className="row">
              <div className="col-md-8">
                <div className="left-review-partnership text-white">
                  <img
                    src="/images/happy-customers/customer-3.png"
                    alt="customer-3"
                    className="customer-img"
                  />
                  <hr className="customer-line" />
                  <div className="review-content">
                    <h2 className="boldText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                      sit amet sapien fringilla, mattis ligula consectetur,
                      ultrices mauris. Maecenas vitae mattis tellus.
                    </h2>
                    <div className="review-footer">
                      <h2 className="orangeText ">
                        — Emma W.
                        <span>
                          <img
                            src="/icons/stars.svg"
                            alt="stars"
                            className="stars-img"
                          />
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-white">
                <HappyCustomers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default partnership;
