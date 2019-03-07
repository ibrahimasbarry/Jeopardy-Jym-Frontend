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
        <div className="flashcard-container">
            <div className="flashcard" key={this.props.flashcard.id}>
                { this.state.showAnswer ? <p className="card-back">Answer:<br /> {this.props.flashcard.answer}</p> : <div className="card-front"><p>Category:<br /> {this.props.flashcard.category}</p> <p>Question:<br /> {this.props.flashcard.question}</p></div> }
            </div>
        </div>
         </ul>
         <button className="show-answer" type="button" onClick={this.handleClick}>Show Answer</button> 
            </>
        )
    }
}

export default Flashcard
