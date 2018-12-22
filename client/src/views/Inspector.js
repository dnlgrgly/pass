import React, { Component } from 'react';
import { view } from 'react-stax';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';
import inspectorStore from '../stores/inspector';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const readerStyle = {
  height: '100vw',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
};

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
        <QrReader
          style={readerStyle}
          onError={this.handleErr}
          constraints={{ torch: true }}
          onScan={this.handleScan}
          facingMode="environment"
        />
      </Container>
    );
  }
}

export default view(Inspector);
