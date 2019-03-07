import React, { Component } from 'react';

class DrawFlashcard extends Component {

    handleClick = event => {
        this.props.update();
    }

    render(){
        return(
            <div className="draw-container">
                <button className="draw-card" type="button" onClick={(event) => this.handleClick(event)}>Draw Flashcard</button>
            </div>
        )
    }
}

export default DrawFlashcard;