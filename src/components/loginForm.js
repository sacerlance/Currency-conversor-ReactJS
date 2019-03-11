import React, { Component } from 'react';
import '../styles/form.css';
import firebase from 'firebase';
import useHistory from '../history';

class loginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.loginState = this.loginState.bind(this);
    this.getContent = this.loginState.bind(this);
  }

  loginState (result) {
    this.setState({ user: result.user});
    if (this.state.user) useHistory.push('/conversor');
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => this.loginState(result))
    .catch(error => console.log('Error: ' + error.code + ': ' + error.message));
  }

  render () {
    return (
      <div className='form'>
        <div className='form-top'>
          <p className='login-text'>SIGN IN</p>
        </div>
        <div className='form-bottom'>
          <button className='login-button' onClick={this.handleAuth}><p style={{color: 'white', fontSize: '13px'}}>LOGIN WITH GOOGLE</p></button>
        </div>
      </div>
    );
  }
}

export default loginForm;
