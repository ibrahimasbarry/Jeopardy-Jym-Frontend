import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FlashcardContainer from '../containers/FlashcardContainer';
import CreateFlashcardContainer from '../containers/CreateFlashcardContainer';
import Home from './Home'

const NavBar = () => {
    return(
        <Router>
        <div className="routes">
        <nav className="nav">
            <Link to='/'>Home</Link>
            <Link to='/flashcards'>Jeopardy</Link>
            <Link to='/flashcards/create'>Create</Link>
        </nav>
        <hr />
            <Route exact path='/' component={Home} />
            <Route exact path='/flashcards' component={FlashcardContainer} />
            <Route exact path='/flashcards/create' component={CreateFlashcardContainer} />
        </div>
        </Router>
    )
}

export default NavBar;