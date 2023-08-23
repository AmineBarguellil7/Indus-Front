import React from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
      <div>
        <div className="footer-wrapper">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-logo mb-35">
                        <a href="index-2.html">
                          <img src="img/logo/logo_footer.png" alt="" />
                        </a>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p>
                            Duis aute irure dolor inasfa reprehenderit in
                            voluptate velit esse cillum
                          </p>
                        </div>
                        <ul className="mb-20">
                          <li className="number">
                            <a href="#">10 (87) 738-3940</a>
                          </li>
                        </ul>

                        <ul className="footer-social">
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://bit.ly/sai4ull">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#">
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
                          <a href="#">Map</a>
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
  );
}
