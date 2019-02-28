import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FlashcardContainer from './containers/FlashcardContainer';
import CreateFlashcardContainer from './containers/CreateFlashcardContainer';
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
            <Route exact path='/flashcards' component={FlashcardContainer} />
            <Route exact path='/flashcards/create' component={CreateFlashcardContainer} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
