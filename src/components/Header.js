import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {



  return (
    <div className="header-area header-transparent">
      <div className="main-header">
        <div className="header-top d-none d-sm-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="d-flex justify-content-between flex-wrap align-items-center">
                  <div className="header-info-left">
                    <ul>
                      <li>+10 (78) 675-9064</li>
                      <li>
                        <a
                          href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="5d29383e35333231323a241d343339282e292f24733e3230"
                        >
                          [email&#160;protected]
                        </a>
                      </li>
                      <li>Sun - Fri (10AM - 7PM)</li>
                    </ul>
                  </div>
                  <div className="header-info-right d-none d-md-block">
                    <ul className="header-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-instagram"></i>
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
          </div>
        </div>
        <div className="header-bottom  header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index-2.html">
                    <img src="img/logo/MyLogo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10">
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <NavLink to="/home">Home</NavLink>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="project.html">Projects</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog_details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <div className="nav-search search-switch">
                          <i className="ti-search"></i>
                        </div>
                      </li>
                      <li>
                        <div className="header-right-btn f-right  ml-15">
                          <NavLink to="/SignUp" className="header-btn">
                          SignUp
                          </NavLink>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
