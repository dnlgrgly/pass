import React, { Component } from 'react';
import { view } from 'react-stax';

class Inspector extends Component {
  componentDidMount() {
    // this componentDidMount is only here temporarily
  }

  render() {
    return <h1>Inspector page</h1>;
  }
}

export default view(Inspector);
