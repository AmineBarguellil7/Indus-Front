import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


const DrawControl = () => {
  const map = useMap();

  useEffect(() => {
    const drawControl = new L.Control.Draw({
      draw: {
        marker: true,
        circle: false,
        circlemarker: false,
        polyline: false,
        polygon: {
          showArea: true,
          allowIntersection: false,
          drawError: {
            color: "#e1e100",
            message: "<strong>Draw Error</strong> (because of intersecting)",
          },
          shapeOptions: {
            color: "#97009c",
          },
        },
      },
    });

    map.addControl(drawControl);

    const handlePolygonDrawn = (e) => {
      const layer = e.layer;
      const latlngs = layer.getLatLngs();
      let polygonData = {
        location: [],
      };

      for (var i = 0; i < latlngs[0].length; i++) {
        var lat = latlngs[0][i].lat;
        var lng = latlngs[0][i].lng;
        polygonData.location.push([lng, lat]);
      }
      let firstLatLng = latlngs[0][0];
      polygonData.location.push([firstLatLng.lng, firstLatLng.lat]);

      console.log(polygonData);

      sendDataToServer(polygonData);
    };

    const sendDataToServer = async (polygonData) => {
      if (polygonData) {
        try {
          await fetch("http://localhost:8000/polygone/create_polygon/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(polygonData),
          });
        } catch (error) {
          // Error handling...
        }
      }
    };

    map.on(L.Draw.Event.CREATED, handlePolygonDrawn);

    return () => {
      map.removeControl(drawControl);
      map.off(L.Draw.Event.CREATED, handlePolygonDrawn);
    };
  }, [map]);

  return null; // No need to render anything for this component
};

const LeafletMap = () => {

  
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
  

  const position = [51.505, -0.09];

  
  return (
    <div>
      {Header}
      {NavBar}
      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "400px",
          width: "100%",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DrawControl/>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
