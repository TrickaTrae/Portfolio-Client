import React, { Component } from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro />
      </div>
    );
  }
}

export default App;
