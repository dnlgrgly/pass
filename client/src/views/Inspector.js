import React, { Component } from 'react';
import { view } from 'react-stax';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';
import Logo from '../assets/logo_trans.png';
import inspectorStore from '../stores/inspector';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const readerStyle = {
  height: '100vw',
  width: '100vw',
  display: 'flex',
};

const Miniheading = styled.h2`
  font-size: 1em;
  color: #555;
  font-weight: 300;
  margin-left: 5px;
`;

const Image = styled.img`
  width: 30vw;
  max-width: 4cm;
  margin-left: 5px;
`;

class Inspector extends Component {
  handleScan = (data) => {
    if (data) alert(data);
    inspectorStore.value = data;
  };

  handleErr = (err) => {
    inspectorStore.value = err;
  };

  render() {
    return (
      <Container>
        <Image alt="Logo" src={Logo} />
        <Miniheading>Scan the QR code or touch the NFC device or card to the inspector device.</Miniheading>
        <QrReader
          style={readerStyle}
          onError={this.handleErr}
          onScan={this.handleScan}
          facingMode="enviroment"
        />
      </Container>
    );
  }
}

export default view(Inspector);
