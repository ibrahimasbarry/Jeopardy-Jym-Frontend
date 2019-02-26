import React, { component } from 'react';
import { connect } from 'react-redux';
import { fetchFlashcards } from '../redux/actions/flashcardActions';

class flashcardContainer extends Component {
    state = {
        flashcards = []
    }

    componentDidMount() {
        this.props.fetchFlashcards()
    }

    render() {
        return (
            
        )
    }
}