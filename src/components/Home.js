import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function Home() {
  const [isUserConnected, setIsUserConnected] = useState(false);

  useEffect(() => {
    const checkUserConnection = async () => {
      try {
        const accessToken = localStorage.getItem("access_token"); 
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };
    
        const response = await fetch(
          "http://localhost:8000/user/is-user-connected/",
          { headers }
        );
    
        const data = await response.json();
        if (data.status === "A regular user is connected") {
          setIsUserConnected(true);
        }
      } catch (error) {
        setIsUserConnected(false);
      }
    };    

    checkUserConnection();
  }, []);

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
                        {isUserConnected ? (
                          <NavLink to="/map">Map</NavLink>
                        ) : (
                          <NavLink to="/login">Map</NavLink>
                        )}
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

  return (
    <div>
      {Header}
      <NavBar />
      <Footer />
    </div>
  );
}
