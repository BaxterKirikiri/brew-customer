import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route component={Home} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;