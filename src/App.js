import React, { Component } from "react";
import Intro from "./components/Intro";
import "./style.css";
class App extends Component {
  render() {
    return (
      <div className="loaded">
        <Intro />
      </div>
    );
  }
}

export default App;
