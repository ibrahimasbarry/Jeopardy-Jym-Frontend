import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FlashcardContainer from './containers/FlashcardContainer';
import Home from './components/Home';
import './App.css';
// import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path='/' component={Home} />
            <Route path='/flashcards' component={FlashcardContainer} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
