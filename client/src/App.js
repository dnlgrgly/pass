import React from 'react';
import { Router } from 'react-stax';
import './App.css';
import styled from 'styled-components';
import Home from './views/Home';
import Inspector from './views/Inspector';
import Details from './views/Details';

const Container = styled.div`
  background-color: #eee;
`;

const App = () => (
  <Container className="App">
    <Router defaultPage="home">
      <Home page="home" />
      <Inspector page="inspector" />
      <Details page="details" />
    </Router>
  </Container>
);

export default App;
