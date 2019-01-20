import React, { Component } from 'react';
import { view, params } from 'react-stax';
import styled, { keyframes } from 'styled-components';
import colorPresets from '../assets/colorPresets';
import LogoIcon from '../assets/logo_trans.png';
import ticketStore from '../stores/ticket';

import PersonIcon from '../assets/person.png';

const Container = styled.div`
  padding: 3.5vh 5vw;
  text-align: center;

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

const Logo = styled.img`
  width: 30vw;
  max-width: 4cm;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 800;
  margin: 0.5em 0;
`;

const onShow = keyframes`
  from {
    margin-top: 10px;
    opacity: 0;
  }

  to {
    margin-top: 0;
    opacity: 1;
  }
`;

const Card = styled.div`
  position: relative;
  width: 80vw;
  height: 50vh;
  border-radius: 15px;
  box-shadow: 0 5px 20px #888;
  background-image: ${({ type }) => `linear-gradient(to bottom right, ${colorPresets[type][0]}, ${colorPresets[type][1]})`};
  color: #fff;
  padding: 1.25em !important;
  margin: 1em 1em 0 0 !important;
  animation: ${onShow} 1s ease-in-out 1;
  transition: all 0.1s ease-in-out;
  text-align: center;
  :hover {
    box-shadow: '0 1px 5px #999';
  }
`;

const Image = styled.img`
  width: 30vw;
  margin: 0.5em 0;
`;

const getIcon = type => {
  switch (type) {
    case 'private':
      return PersonIcon;
    case 'business':
      return PersonIcon;
    case 'pupil':
      return PersonIcon;
    case 'student':
      return PersonIcon;
    default:
      return PersonIcon;
  }
};

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

class Details extends Component {
  state = {};

  componentDidMount() {
    const { id } = params;
    const type = ticketStore.getTypeById(id);
    this.setState({ id, type });
  }

  render() {
    const { type } = this.state;
    if (!type) { return null; }
    return (
      <Container>
        <Logo alt="Logo" src={LogoIcon} />
        <Card type={ticketStore.getType(type)}>
          <Title style={{ fontSize: '1.25em', textTransform: 'uppercase' }}>
            {new Date().toLocaleString()}
          </Title>
          <Image alt="Logo" src={getIcon(type)} />
          <Title>
            {type.name.en}
          </Title>
          <Title style={{ fontSize: '2.5em' }}>
            {new Date().addDays(30).toLocaleString()}
          </Title>
        </Card>
      </Container>
    );
  }
}

export default view(Details);
