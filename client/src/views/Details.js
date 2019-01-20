import React, { Component } from 'react';
import { view, params } from 'react-stax';
import styled from 'styled-components';
import { PassCard } from '../components';
import LogoIcon from '../assets/logo_trans.png';
import ticketStore from '../stores/ticket';

const Container = styled.div`
  padding: 3.5vh 5vw;
  text-align: left;

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

const Heading = styled.h1`
  font-size: 2.5em;
  color: #222;
  font-weight: 800;
  margin: 10px 0;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #444;
  font-weight: 400;
  margin-top: 1em;
`;

const Detail = styled.h2`
  font-size: 2em;
  color: #222;
  font-weight: 800;
`;

class Details extends Component {
  state = {};

  componentDidMount() {
    const { id } = params;
    const type = ticketStore.getTypeById(id);
    this.setState({ id, type });
  }

  render() {
    const { id, type } = this.state;
    if (!type) { return null; }
    return (
      <Container>
        <Logo alt="Logo" src={LogoIcon} />
        <Heading>Ticket details</Heading>
        <PassCard mini {...type} key={id} passType={ticketStore.getType(type)} />
        <Title>validity</Title>
        <Detail>{new Date().toDateString()}</Detail>
        <Title>validity over Budapest border:</Title>
        <Detail>{`${type.limitDist} km`}</Detail>
        <Title>only valid with</Title>
        <Detail>{type.validWith.en}</Detail>
      </Container>
    );
  }
}

export default view(Details);
