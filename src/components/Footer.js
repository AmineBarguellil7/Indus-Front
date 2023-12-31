import React from "react";
import { NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <div className="footer-wrapper">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-logo mb-35">
                        <NavLink to="/home">
                          <img src="img/logo/logo_footer.png" alt="" />
                        </NavLink>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p>
                          Pioneering technology fused with unparalleled service excellence
                          </p>
                        </div>
                        <ul className="footer-social">
                          <li>
                            <a href="https://www.instagram.com/?hl=fr">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/amine-barguellil-ba3050236/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="https://www.youtube.com/">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offset-xl-1 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Navigation</h4>
                      <ul>
                        <li>
                          <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/map">Map</NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Services</h4>
                      <ul>
                        <li>
                          <NavLink to="/map">Map</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>
                        Copyright &copy;
                        <script
                          data-cfasync="false"
                          src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                        ></script>
                        <script>
                          document.write(new Date().getFullYear());
                        </script>{" "}
                        All rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-model-box">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-btn">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Searching key....."
            />
          </form>
        </div>
      </div>

      <div id="back-top">
        <a className="wrapper" title="Go to Top" href="#">
          <div className="arrows-container">
            <div className="arrow arrow-one"></div>
            <div className="arrow arrow-two"></div>
          </div>
        </a>
      </div>
    </>
  );
}
