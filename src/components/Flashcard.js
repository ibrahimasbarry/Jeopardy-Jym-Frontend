import React, { Component } from 'react'

class Flashcard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showAnswer: false
        }
    }

    handleClick = () => {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    render() {
        return(
            <>
        <ul>
            <div key={this.props.flashcard.id}>
                { this.state.showAnswer ? <p>Answer: {this.props.flashcard.answer}</p> : <><p>Category: {this.props.flashcard.category}</p> <p>Question: {this.props.flashcard.question}</p></> }
            </div>
         </ul>
         <button type="button" onClick={this.handleClick}>Show Answer</button> 
            </>
        )
    }
}

export default Flashcard
