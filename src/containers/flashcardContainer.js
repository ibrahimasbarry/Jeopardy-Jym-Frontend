import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFlashcards } from '../redux/actions/flashcardActions';

class FlashcardContainer extends Component {
    state = {
        flashcards: []
    }

    componentDidMount() {
        this.props.fetchFlashcards()
    }

    render() {
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
    return { flashcards: state.flashcards }
}

// const mapDispatchToProps = dispatch => {
//     return { fetchFlashcards: flashcards => dispatch({ type: 'FETCH_FLASHCARDS', flashcards})}
// }

export default connect(mapStateToProps, { fetchFlashcards })(FlashcardContainer);