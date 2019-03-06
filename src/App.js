import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
// import logo from './logo.svg'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
        </div>
    )
  }
}

export default App;
