import React, { Component } from 'react';
import loginScreenView from './loginScreen.jsx';

class loginScreen extends Component {
  render () {
    return (loginScreenView.getScreen(this));
  }
}

export default loginScreen;
