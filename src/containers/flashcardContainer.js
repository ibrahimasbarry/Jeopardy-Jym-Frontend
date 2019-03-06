import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFlashcards } from '../redux/actions/flashcardActions';
// import Flashcard from '../components/Flashcard';
import Loading  from '../components/Loading';
import DrawFlashcardContainer from './DrawFlashcardContainer';

class FlashcardContainer extends Component {

    componentDidMount() {
        this.props.fetchFlashcards()
    }

    render() {
        return (
            <div>
                {this.props.flashcards.length === 0 ? <Loading /> : <DrawFlashcardContainer flashcards={this.props.flashcards} /> }   
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {flashcards: state.flashcardsReducer.flashcards} 
}

export default connect(mapStateToProps, { fetchFlashcards })(FlashcardContainer);