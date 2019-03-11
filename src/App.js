import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import useHistory from './history';
import Home from './components/home.js';
import Conversor from './components/conversor.js';
import './App.css';
import statusService from './services/statusService';

class App extends Component {
  constructor () {
    super();
    this.status = new statusService();
    this.state = {
      status: null
    };
  }

  render () {
    return (
      <Router history={useHistory} forceRefresh>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/conversor' component={Conversor} />
        </Switch>
      </Router>
    );
  }
}

export default App;
