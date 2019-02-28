import React, { Component } from 'react';

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
        <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="category" value={this.state.category} onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="question" value={this.state.question} onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="answer" value={this.state.answer} onChange={(event) => this.handleChange(event)}/>
                <button>Create</button>
            </form>

    
            
        </div>
        )
    }

}
export default FlashcardInput;