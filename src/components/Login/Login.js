import React, { useState } from "react";
import "./Login.css";
import { NavLink} from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   if (NavBarRef.current) {
  //     const NavBarHeight = NavBarRef.current.offsetTop;
  //     window.scrollBy(10, NavBarHeight + 800);
  //   }
  // }, []);



  const Header = (
    <div className="header-area header-transparent">
      <div className="main-header">
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

  const NavBar = (
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
                  <NavLink
                    to="/login"
                    className="btn_10 hero-btn"
                    data-animation="bounceIn"
                    data-delay=".8s"
                  >
                    Login <img src="img/icon/right-arrow.svg" alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    console.log("loginData:", loginData);
    const url = "http://localhost:8000/user/login/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.log(response.data);
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      {Header}
      {NavBar}
      <div className="login-container">
        <h1>Login</h1>
        <input
          className="login-input"
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          className="login-input"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
