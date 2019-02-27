import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFlashcards } from '../redux/actions/flashcardActions';

class FlashcardContainer extends Component {

    componentDidMount() {
        this.props.fetchFlashcards()
    }

    render() {
        if (this.props.flashcards.length === 0) {
            return <h1>Loading...</h1>
          }
        return (
            <div>
                <ul>
                    {this.props.flashcards.map(flashcard => (
                        <div>
                            <p>Category: {flashcard.category}</p>
                            <p>Question: {flashcard.question}</p>
                            <p>Answer: {flashcard.answer}</p>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {flashcards: state.flashcardsReducer.flashcards} 
}

export default connect(mapStateToProps, { fetchFlashcards })(FlashcardContainer);