import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FlashcardContainer from '../containers/FlashcardContainer';
import CreateFlashcardContainer from '../containers/CreateFlashcardContainer';
import Home from './Home'

const NavBar = () => {
    return(
        <Router>
        <div className="routes">
        <ul className="nav">
            <li className="nav-link"><Link to='/'>Home</Link></li>
            <li className="nav-link"><Link to='/flashcards'>Jeopardy</Link></li>
            <li className="nav-link"><Link to='/flashcards/create'>Create</Link></li>
        </ul>
        <hr />
            <Route exact path='/' component={Home} />
            <Route exact path='/flashcards' component={FlashcardContainer} />
            <Route exact path='/flashcards/create' component={CreateFlashcardContainer} />
        </div>
        </Router>
    )
}

export default NavBar;