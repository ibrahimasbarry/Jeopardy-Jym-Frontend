import React, { Component } from 'react';

class DrawFlashcard extends Component {

    handleClick = event => {
        this.props.update();
    }

    render(){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={(event) => this.handleClick(event)}>Draw Flashcard</button>
            </div>
        )
    }
}

export default DrawFlashcard;