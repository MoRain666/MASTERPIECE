import React from 'react';

import {ENTER_KEY} from "../../../constants";

class ChooseColor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shapes: [
                {image: require('./ImgChooseColourTask/aquamarine.png'), name: 'aquamarine'},
                {image: require('./ImgChooseColourTask/black.png'), name: 'black'},
                {image: require('./ImgChooseColourTask/blue.png'), name: 'blue'},
                {image: require('./ImgChooseColourTask/green.png'), name: 'green'},
                {image: require('./ImgChooseColourTask/purple.png'), name: 'purple'},
                {image: require('./ImgChooseColourTask/red.png'), name: 'red'}
            ],
        };
        this.CurrentShape = this.state.shapes.sort(() => 0.5 - Math.random())[0];
        this.CurrentShapeName = this.CurrentShape.name;
    }

    initEnterEvent = (inputEl) => {
        this.resultInput = inputEl;
        if (this.resultInput) {
            this.resultInput.addEventListener("keyup", function (event) {
                if (event.keyCode === ENTER_KEY) {
                    document.getElementById("submitButton").click();
                }
            });
        }
    };

    solution = () => {
        this.props.onAnswer(this.resultInput.value === this.CurrentShapeName);
    };

    render() {
        return <div id='choosecolor' className='choose-color'>
            <h3>What is the color of this figure?</h3>
            <img src={this.CurrentShape.image}/>
            <input id='result' type="text" ref={this.initEnterEvent} autoFocus/>
            <button id='submitButton' onClick={this.solution}>Submit</button>
        </div>
    }
}

export default ChooseColor;