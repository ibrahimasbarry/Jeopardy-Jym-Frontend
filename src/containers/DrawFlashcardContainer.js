import React, { Component } from 'react';
import Flashcard from '../components/Flashcard';
import DrawFlashcard from '../components/DrawFlashcard'

class DrawFlashcardContainer extends Component {

    constructor(props){
        super(props)

        this.updateFlashcard = this.updateFlashcard.bind(this);

        this.state = {
            currentFlashcard: {}
        }
    }

    componentWillMount() {
        this.setState({
            currentFlashcard: this.getRandomFlashcard(this.props.flashcards)
        })
    }

    getRandomFlashcard(flashcard){
        let randomNum = Math.floor(Math.random() * flashcard.length);
        let fc = flashcard[randomNum];
        return(fc);
      }
    
    updateFlashcard = event => {
        this.setState({

          currentFlashcard: this.getRandomFlashcard(this.props.flashcards)
        })
    }

    render() {
        return (
          <div className="DrawnFlashcard">
            <div className="flashcardRow">
              <Flashcard flashcard={this.state.currentFlashcard} />
            </div>
            
            <div className="buttonRow">
              <DrawFlashcard update={this.updateFlashcard}/>
            </div>
          </div>
        );
    }
}

export default DrawFlashcardContainer;