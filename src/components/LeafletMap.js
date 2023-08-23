import { MapContainer, TileLayer, useMap, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import "./css/LeafletMap.css"



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

  return null;
};

const LeafletMap = () => {
  const [polygons, setPolygons] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const mapContainer = document.querySelector(".map-container");
      if (mapContainer) {
        const mapRect = mapContainer.getBoundingClientRect();
        if (mapRect.top <= 0) {
          setHeaderVisible(false);
        } else {
          setHeaderVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  useEffect(() => {
    const fetchPolygons = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/polygone/get-all-polygons/"
        );
        const data = await response.json();
        setPolygons(data);
      } catch (error) {
        console.error("Error fetching polygons:", error);
      }
    };

    fetchPolygons();
  }, []);

  return (
    <div>
      {headerVisible && <div>{Header}</div>}
      {NavBar}
      <div className="map-container">
      <h2 className="map-title">Consult the Map</h2>
      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "400px",
          width: "100%",
          marginTop: "100px",
          marginBottom: "100px",
        }}
        className="map-container"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DrawControl />
        {!polygons ? (
          <p>Loading polygons...</p>
        ) : (
          <>
            {console.log("Polygons:", polygons)}
            {polygons.map((polygon) => {
              const geometryString = polygon.fields.polygon;
              const coordinatesMatch = geometryString.match(/\(\(([^)]+)\)\)/);
              if (!coordinatesMatch) {
                console.warn(
                  "Invalid coordinates format for polygon:",
                  polygon
                );
                return null; // Skip rendering this polygon
              }
              const coordinatesString = coordinatesMatch[1];
              const coordinatesArray = coordinatesString
                .split(", ")
                .map(function (coord) {
                  const [lng, lat] = coord.split(" ");
                  return [parseFloat(lat), parseFloat(lng)];
                });

              return (
                <Polygon
                  key={polygon.pk} // Use the primary key as the key
                  positions={coordinatesArray}
                  color="#97009c"
                >
                  <Popup>{polygon.fields.name}</Popup>
                </Polygon>
              );
            })}
          </>
        )}
      </MapContainer>
      <button className="logout-button">Logout</button>
      </div>
      <Footer />
    </div>
  );
};

export default LeafletMap;
