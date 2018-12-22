import React, { Component } from "react";
import { view } from "react-stax";
import QrReader from "react-qr-reader";
import qrcodeStore from "../stores/qrcode";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const readerStyle = {
  height: "100vw",
  width: "100vw",
  display: "flex",
  justifyContent: "center"
};

class Inspector extends Component {
  handleScan = data => {
    data && alert(data)
    qrcodeStore.value = data;
  };
  handleErr = err => {
    qrcodeStore.value = err;
  };
  render() {
    return (
      <Container>
        <QrReader
          style={readerStyle}
          onError={this.handleErr}
          onScan={this.handleScan}
          facingMode="environment"
        />
      </Container>
    );
  }
}

export default view(Inspector);
