import React, { Component, Fragment } from "react";
import { view } from "react-stax";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 50vw;
  height: 55vw;
  max-width: 200px;
  max-height: 220px;
  border-radius: 15px;
  box-shadow: 0 2.5px 15px #999;
  background-image: linear-gradient(to bottom right, #8e44ad, #b075c9);
  color: #fff;
  padding: 1em !important;
  margin: 0 1em 12.5px 0 !important;
`;

const Text = styled.h1`
  font-size: 1.5em;
  font-weight: 800;
`;

class PassCard extends Component {
  render() {
    return (
      <Container>
        <Text>Monthly Budapest-pass</Text>
        <Text style={{ position: 'absolute', bottom: 10 }}>
          9500 HUF
        </Text>
      </Container>
    );
  }
}

export default view(PassCard);
