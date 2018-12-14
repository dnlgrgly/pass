import React, { Component, Fragment } from 'react';
import { view } from 'react-stax'

class Home extends Component {
    render() {
        return(<h1>Welcome there! This is going to be the home page of the app.</h1>)
    }
}

export default view(Home)