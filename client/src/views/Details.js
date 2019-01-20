import React, { Component } from 'react';
import { view, params } from 'react-stax';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PassCard } from '../components';
import Logo from '../assets/logo_trans.png';
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

const Heading = styled.h1`
  font-size: 3em;
  color: #222;
  font-weight: 800;
  margin-top: 0;
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

class Details extends Component {
  state = {};

  componentDidMount() {
    const { id } = params;
    const type = ticketStore.getTypeById(id);
    this.setState({ id, type });
  }

  render() {
    const { id, type } = this.state;
    return (
      <Container>
        <Image alt="Logo" src={Logo} />
        <Heading>Pass.</Heading>
        {type && <PassCard mini {...type} key={id} passType={ticketStore.getType(type)} />}
      </Container>
    );
  }
}

export default view(Details);
