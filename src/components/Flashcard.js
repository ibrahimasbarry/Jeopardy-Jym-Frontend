import React, { Component } from 'react'
import DrawFlashcard from './DrawFlashcard'

class Flashcard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showAnswer: false
        }
    }

    // handleClick = () => {
    //     this.setState({
    //         showAnswer: !this.state.showAnswer
    //     })
    // }

    render() {
        return(
            <>
        <ul>
        <div className="flashcard-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flashcard" key={this.props.flashcard.id}>
                <div className="card-back"><p>Answer:<br /><br /> {this.props.flashcard.answer}</p></div>
                <div className="card-front"><p>Category:<br /><br /> {this.props.flashcard.category}</p> <p>Question:<br /><br /> {this.props.flashcard.question}</p></div>
                {/* { this.state.showAnswer ? <p className="card-back">Answer:<br /><br /> {this.props.flashcard.answer}</p> : <div className="card-front"><p>Category:<br /><br /> {this.props.flashcard.category}</p> <p>Question:<br /><br /> {this.props.flashcard.question}</p></div> } */}
            </div>
        </div>
         </ul>
         {/* <button className="show-answer" type="button" onClick={this.handleClick}>Show Answer</button>  */}
         <div className="button-row" onClick={this.state.showAnswer ? this.handleClick : null } >
              <DrawFlashcard update={this.props.update} />
        </div>
            </>
        )
    }
}

export default Flashcard
