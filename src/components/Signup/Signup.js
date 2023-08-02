import React, { useEffect, useRef, useState} from "react";
import axios from "axios";
import "./Signup.css";
import Header from "../Header";


const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const NavBarRef=useRef();


  useEffect(() => {
    if (NavBarRef.current) {
      const NavBarHeight =NavBarRef.current.offsetTop;
      window.scrollBy(10,NavBarHeight+800);
    }
  }, []);


  const NavBar = (
    <div className="slider-area" ref={NavBarRef} >
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

  

  const handleSignup = () => {
    axios
      .post("http://localhost:8000/user/", userData)
      .then((response) => {
        console.log("User signed up successfully!");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <div>
      <Header />
      {NavBar}
      <div className="signup-container">
        <h1>Signup</h1>
        <input
          className="signup-input"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          className="signup-input"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          className="signup-input"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button className="signup-button" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
