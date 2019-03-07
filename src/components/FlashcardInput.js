import React, { Component } from 'react';
// import FlashcardForm from './FlashcardForm';

class FlashcardInput extends Component {

    constructor() {
        super()

        this.state = {
            question: '',
            answer: '',
            category: ''
        }
    }

    handleChange(event) {
        this.setState({
           [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createFlashcard({flashcard: this.state});
        this.setState({
            question: '',
            answer: '',
            category: ''
        });
    }

    render() {
        return (
        <div className="form-container">
        <div className="form">
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <p>Create your own Jeopardy card:</p>
                <input type="text" name="category" className="input" placeholder="Catgeory: e.g. -ESQUE" value={this.state.category} onChange={(event) => this.handleChange(event)}/><br />
                <input type="text" name="question" className="input" placeholder="Question: e.g. Visually charming or quaint." value={this.state.question} onChange={(event) => this.handleChange(event)}/><br />
                <input type="text" name="answer" className="input" placeholder="Answer: e.g. Picturesque" value={this.state.answer} onChange={(event) => this.handleChange(event)}/>< br />
                <button className="create-card" type="button">Create Card</button>
            </form>  
        </div>        
        </div>
        )
    }

}
export default FlashcardInput;