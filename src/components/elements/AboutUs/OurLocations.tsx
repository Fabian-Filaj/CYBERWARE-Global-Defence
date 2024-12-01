import React from "react";

const OurLocations = () => {
  return (
    <div className="ourLocations py-5 my-5">
      <div className="container text-white">
        <h1>
          <span className="orangeText">Our</span> Locations
        </h1>
        <div className="row mt-5">
          <div className="col-md-3">
            <h3 className="py-2">Germany</h3>
            <img src="/icons/orangePin.svg" alt="pin" />
            <div className="pt-3">Hohenzollernring No. 72 </div>
            <div>Köln</div>
            <div>50672</div>
            <hr />
          </div>
          <div className="col-md-3">
            <h3 className="py-2">North Macedonia</h3>
            <img src="/icons/orangePin.svg" alt="pin" />
            <div className="pt-3">11th October No. 25 </div>
            <div>Skopje</div>
            <div>1000</div>
            <hr />
          </div>
          <div className="col-md-3">
            <h3 className="py-2">Albania</h3>
            <img src="/icons/orangePin.svg" alt="pin" />
            <div className="pt-3">Ruga Myslym Shyri No. 37</div>
            <div>Tirana</div>
            <div>1001</div>
            <hr />
          </div>
          <div className="col-md-3">
            <h3 className="py-2">Turkey</h3>
            <img src="/icons/orangePin.svg" alt="pin" />
            <div className="pt-3">Istiklal Caddesi No. 45</div>
            <div>Istanbul</div>
            <div>34430 </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocations;
