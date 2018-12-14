import React, { Component, Fragment } from "react";
import { view } from "react-stax";
import styled from "styled-components";
import img from '../assets/bg.png'

const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 30vw;
  background-color: #eee;
  padding: 5vh 5vw;
  text-align: left;

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #222;
  font-weight: 800;
`;

const Subheading = styled.h2`
  font-size: 28px;
  color: #444;
  font-weight: 400;
`;

const Image = styled.img`
  width: 30vw;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Image alt="Logo" src={require("../assets/logo_trans.png")} />
        <Heading>Pass.</Heading>
        <Subheading>
          Purchase your Budapest-area tickets and passes with ease.
        </Subheading>
      </Container>
    );
  }
}

export default view(Home);
