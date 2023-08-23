import React, {  useState } from "react";
import "./Signup.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../Footer";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    isSupervisor: false
  });


  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };


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
                  <NavLink to="/home">
                    <img src="img/logo/MyLogo.png" alt="" />
                  </NavLink>
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
                        <NavLink to="/map">Map</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
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
                  Empowered by cutting-edge technology, we deliver an unparalleled and exceptional service experience.
                  </p>
                  <Link
                    to="/login"
                    className="btn_10 hero-btn"
                    data-animation="bounceIn"
                    data-delay=".8s"
                  >
                    Login <img src="img/icon/right-arrow.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleSignup = async () => {
    console.log("userData:", userData);
    const url = "http://localhost:8000/user/signup/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        toast.success("registered successfully");
        setTimeout(() => navigate("/login"), 2000);
      }

      if (!response.ok) {
        console.log(response.data);
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      {Header}
      {NavBar}
      <Toaster position="top-center" reverseOrder={false} />
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
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={userData.isSupervisor}
            onChange={() =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                isSupervisor: !prevUserData.isSupervisor,
              }))
            }
          />
          <span className="checkmark"></span>
          I am a supervisor
        </label>
        <button className="signup-button" onClick={handleSignup}>
          Signup
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
