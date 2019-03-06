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
            <div className="flashcard" key={this.props.flashcard.id}>
                { this.state.showAnswer ? <p className="card-back">Answer: {this.props.flashcard.answer}</p> : <><p className="card-front">Category: {this.props.flashcard.category}</p> <p className="card-front">Question: {this.props.flashcard.question}</p></> }
            </div>
         </ul>
         <button className="button" type="button" onClick={this.handleClick}>Show Answer</button> 
            </>
        )
    }
}

export default Flashcard
