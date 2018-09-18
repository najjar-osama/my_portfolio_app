import React, { Component } from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Section from "./components/Section";
import "./style.css";
class App extends Component {
  render() {
    return (
      <div className="loaded">
        <Nav />
        <Intro />
        <Section />
      </div>
    );
  }
}

export default App;
