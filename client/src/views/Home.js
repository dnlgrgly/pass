import React, { Component, Fragment } from "react";
import { view } from "react-stax";
import { PassCard } from "../components";
import styled from "styled-components";

const Container = styled.div`
  padding: 5vh 5vw;
  text-align: left;

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

const Heading = styled.h1`
  font-size: 3em;
  color: #222;
  font-weight: 800;
  margin-top: 15px;
`;

const Subheading = styled.h2`
  font-size: 2em;
  color: #222;
  font-weight: 800;
  margin-top: 1em;
`;

const Miniheading = styled.h2`
  font-size: 1.5em;
  color: #555;
  font-weight: 300;
`;

const VerticalDrawer = styled.div`
  margin: 0 -5vw;
  padding: 1em 5vw;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  * {
    flex-grow: 1;
    flex-shrink: 0;
  }
`;

const Image = styled.img`
  width: 30vw;
  max-width: 4cm;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Image alt="Logo" src={require("../assets/logo_trans.png")} />
        <Heading>Pass.</Heading>
        <Miniheading>
          Purchase and manage your Budapest-area tickets online with ease.
        </Miniheading>
        <Subheading>Most popular</Subheading>
        <VerticalDrawer>
          <PassCard type="private" />
          <PassCard type="pupil" />
          <PassCard type="bubi" />
        </VerticalDrawer>
      </Container>
    );
  }
}

export default view(Home);
