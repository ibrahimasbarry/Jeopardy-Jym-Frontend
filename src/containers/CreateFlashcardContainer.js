import React, { Component } from 'react';
import FlashcardInput from '../components/FlashcardInput';
import { connect } from 'react-redux';
import { createFlashcard } from '../redux/actions/flashcardActions';

class CreateFlashcardContainer extends Component {
    render() {
        return(
            <div>
                <FlashcardInput createFlashcard={this.props.createFlashcard} />
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {flashcards: state.flashcardsReducer.flashcards} 
}

export default connect(mapStateToProps, { createFlashcard })(CreateFlashcardContainer);