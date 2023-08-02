import React from "react";

export default function NavBar() {
  return (
    <div className="slider-area">
      <div className="slider-active dot-style">
        <div className="single-slider slider-height hero-overly slider-bg1 d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="hero-caption text-center">
                  <h1 data-animation="fadeInUp" data-delay=".4s">
                    Best technology and awesome service we offer
                  </h1>
                  <p data-animation="fadeInUp" data-delay=".4s">
                    Ullamcorper fringi tortor consec adipis elit sed do eiusmod
                    tempor.
                  </p>
                  <a
                    href="services.html"
                    className="btn_10 hero-btn"
                    data-animation="bounceIn"
                    data-delay=".8s"
                  >
                    Check Our Services{" "}
                    <img src="img/icon/right-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
