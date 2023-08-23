import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";



import Signup from "./components/Signup/Signup";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import LeafletMap from "./components/LeafletMap";
import Contact from "./components/Contact";

class App extends React.Component {
  state = { details: [] };

  // componentDidMount() {
  //   let data;
  //   axios
  //     .get("http://localhost:8000/user/")
  //     .then((res) => {
  //       data = res.data;
  //       this.setState({
  //         details: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div>
        {/* <h1>Data</h1>
      <hr />
      {this.state.details.map((output,id)=> (
        <div key={id}>
          <h2>{output.username}</h2>
          <h3>{output.email}</h3>
        </div>
      ))} */}

        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<LeafletMap />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        {/*<Section />*/}
      </div>
    );
  }
}

export default App;
