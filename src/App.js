import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route />
          <Route />
          <Route />
        </div>
      </Router>
    );
  }
}

export default App;
