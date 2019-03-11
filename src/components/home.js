import React, { Component } from 'react';
import Form from '../components/loginForm.js';
import '../styles/home.css';

class Home extends Component {
  render () {
    return (
      <div className='backgroundImage'>
        <div className='form-container'>
          <Form />
        </div>
      </div>
    );
  }
}

export default Home;
