import React, { Component, Fragment } from "react";
import { view } from "react-stax";
import styled from "styled-components";
import PropTypes from "prop-types";
import colorPresets from "./colorPresets";

const Container = styled.div`
  position: relative;
  width: 50vw;
  height: 55vw;
  max-width: 180px;
  max-height: 198px;
  border-radius: 15px;
  box-shadow: 0 2.5px 15px #999;
  background-image: ${({ colorPresets, type }) =>
    `linear-gradient(to bottom right, ${colorPresets["business"][0]}, ${
      colorPresets["business"][1]
    })`};
  color: #fff;
  padding: 1.25em !important;
  margin: 0 1em 12.5px 0 !important;
`;

const Text = styled.h1`
  font-size: 1.5em;
  font-weight: 800;
`;

class PassCard extends Component {
  render() {
    const { type } = this.props;

    return (
      <Container colorPresets={colorPresets} type={type}>
        <Text>Monthly Budapest-pass</Text>
        <Text style={{ position: "absolute", bottom: 10 }}>9500 HUF</Text>
      </Container>
    );
  }
}

PassCard.propTypes = {
  type: PropTypes.oneOf(["private", "business", "pupil", "student", "bubi"])
    .isRequired
};

export default view(PassCard);
