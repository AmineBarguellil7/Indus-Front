import React from "react";

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
                        <a href="index-2.html">
                          <img src="img/logo/logo2_footer.png" alt="" />
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
                          <li className="number2">
                            <a href="#">
                              <span
                                className="__cf_email__"
                                data-cfemail="5635393822373522163537242137253e7835393b"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
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
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
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
                          <a href="#">Drone Mapping</a>
                        </li>
                        <li>
                          <a href="#"> Real State</a>
                        </li>
                        <li>
                          <a href="#">Commercial</a>
                        </li>
                        <li>
                          <a href="#">Construction</a>
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
                        All rights reserved | This template is made with{" "}
                        <i
                          className="fa fa-heart color-danger"
                          aria-hidden="true"
                        ></i>{" "}
                        by{" "}
                        <a
                          href="https://colorlib.com/"
                          target="_blank"
                          rel="nofollow noopener"
                        >
                          Colorlib
                        </a>
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
