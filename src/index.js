import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
  apiKey: 'AIzaSyBN5bvDJjP6r5SRLUyatTPmRoQ348h856o',
  authDomain: 'conversor-6b813.firebaseapp.com',
  databaseURL: 'https://conversor-6b813.firebaseio.com',
  projectId: 'conversor-6b813',
  storageBucket: 'conversor-6b813.appspot.com',
  messagingSenderId: '737708231359'
});

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
