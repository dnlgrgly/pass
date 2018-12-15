import React, { Component } from "react";
import { Router } from "react-stax";
import "./App.css";
import Home from "./views/Home";
import Inspector from "./views/Inspector";
import styled from "styled-components";
import img from "./assets/bg.png";

const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-color: #eee;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Router defaultPage="/">
          <Home page="/" />
          <Inspector page="inspector" />
        </Router>
      </Container>
    );
  }
}

export default App;
