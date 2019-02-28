import React, { Component } from 'react';
import Answer from './Answer'

class Flashcard extends Component {
    render() {
        return(
            <>
        <ul>
            <div key={this.props.flashcard.id}>
                <p>Category: {this.props.flashcard.category}</p>
                <p>Question: {this.props.flashcard.question}</p>
                {/* <p>Answer: {this.props.flashcard.answer}</p> */}
            
            </div>
         </ul>
         {/* <Answer a={this.props.flashcard.answer }/> */}
            </>
        )
    }
}

export default Flashcard;

