import React, { Component } from 'react'

class FlashcardInput extends Component {

    constructor() {
        super()

        this.state = {
            question: '',
            answer: '',
            category: '',
            message: false
        }
    }

    handleChange(event) {
        this.setState({
           [event.target.name]: event.target.value,
        });
    }  

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createFlashcard({flashcard: this.state});
        this.setState({
            question: '',
            answer: '',
            category: '',
            message: !this.state.message
        });
    }

    render() {
        return (
        <>
        <div className="message-container"> 
            {this.state.message ? 'Card successfully created!' : ''}
        </div>
        <div className="form-container">
        <div className="form">
            <form onSubmit={this.handleSubmit}>
            <p>Create your own Jeopardy card:</p>
                <input type="text" name="category" className="input" placeholder="Catgeory: e.g. -ESQUE" value={this.state.category} onChange={(event) => this.handleChange(event)} required /><br />
                <input type="text" name="question" className="input" placeholder="Question: e.g. Visually charming or quaint." value={this.state.question} onChange={(event) => this.handleChange(event)} required /><br />
                <input type="text" name="answer" className="input" placeholder="Answer: e.g. Picturesque" value={this.state.answer} onChange={(event) => this.handleChange(event)} required />< br />
                <button className="create-card" type="submit">Create Card</button>
            </form>  
        </div>        
        </div>
        </>
        )
    }

}
export default FlashcardInput;