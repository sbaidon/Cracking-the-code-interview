import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';

const App = (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
        </Route>
      </Router>
  );

export default App;
