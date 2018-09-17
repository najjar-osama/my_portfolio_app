import React, { Component } from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import "./style.css";
class App extends Component {
  render() {
    return (
      <div className="loaded">
        <Nav />
        <Intro />
      </div>
    );
  }
}

export default App;
