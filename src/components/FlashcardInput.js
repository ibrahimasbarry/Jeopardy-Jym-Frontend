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
        <div className="form">
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="category" placeholder="Catgeory, e.g. -ESQUE" value={this.state.category} onChange={(event) => this.handleChange(event)}/><br />
                <input type="text" name="question" placeholder="Question, e.g. Visually charming or quaint." value={this.state.question} onChange={(event) => this.handleChange(event)}/><br />
                <input type="text" name="answer" placeholder="Answer, e.g. Picturesque" value={this.state.answer} onChange={(event) => this.handleChange(event)}/>< br />
                <button className="button" type="button">Create</button>
            </form>          
        </div>
        )
    }

}
export default FlashcardInput;