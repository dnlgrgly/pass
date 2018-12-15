import React, { Component, Fragment } from "react";
import { view } from "react-stax";
import styled from "styled-components";
import PropTypes from "prop-types";
import colorPresets from "./colorPresets";
import iconPresets from "./iconPresets";

const Container = styled.div`
  position: relative;
  width: 50vw;
  height: 55vw;
  max-width: 180px;
  max-height: 198px;
  border-radius: 15px;
  box-shadow: 0 2.5px 15px #999;
  background-image: ${({ type }) =>
    `linear-gradient(to bottom right, ${colorPresets[type][0]}, ${
      colorPresets[type][1]
    })`};
  color: #fff;
  padding: 1.25em !important;
  margin: 0 1em 0 0 !important;
  transition: all 0.2s ease-in-out;
  :hover {
    margin-top: -0.5em !important;
    box-shadow: ${({ type }) => `0 5px 2.5px ${colorPresets[type][1]}`};
    transition: all 0.1s ease-in-out;
  }
`;

const Text = styled.h1`
  font-size: 1.5em;
  font-weight: 800;
`;

const Image = styled.img`
  width: 3em;
  max-width: 2cm;
  margin-bottom: 0.5vw !important;
`;
class PassCard extends Component {
  getIcon(type) {
    switch (type) {
      case "private":
        return require("../assets/person.png");
      case "business":
        return require("../assets/person.png");
      case "pupil":
        return require("../assets/person.png");
      case "student":
        return require("../assets/person.png");
      case "bubi":
        return require("../assets/bubi.png");
      default:
        return require("../assets/person.png");
    }
  }
  render() {
    const { type } = this.props;

    return (
      <Container type={type}>
        <Image alt="Logo" src={this.getIcon(type)} />
        <Text>Monthly Budapest-pass</Text>
        <Text style={{ position: "absolute", bottom: 15 }}>9500 HUF</Text>
      </Container>
    );
  }
}

PassCard.propTypes = {
  type: PropTypes.oneOf(["private", "business", "pupil", "student", "bubi"])
    .isRequired
};

export default view(PassCard);
