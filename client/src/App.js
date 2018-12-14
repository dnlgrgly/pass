import React, { Component } from "react";
import { Router } from "react-stax";
import "./App.css";
import Home from "./views/Home";
import Inspector from "./views/Inspector";
// import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router defaultPage="/">
          <Home page="/" />
          <Inspector page="inspector" />
        </Router>
      </div>
    );
  }
}

export default App;
