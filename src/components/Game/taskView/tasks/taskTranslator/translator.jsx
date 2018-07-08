import React from 'react';

import { DICTIONARY } from './dictionary';
import { ENTER_KEY } from "../../../constants";

class Translator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentWord:''
        };
    }

    solution = () =>{
        this.props.onAnswer(this.verificationOfTranslation());
    };

    verificationOfTranslation(){
        let arrayOfTransfer = DICTIONARY[this.state.currentWord];
        for(let i = 0; i < arrayOfTransfer.length; i++){
            if(this.wordInput.value == arrayOfTransfer[i]){
                return true;
            }
        }
        return false;
    }

    initRandomWorld(){
        let arrayOfWords = Object.keys(DICTIONARY);
        let currentWord = arrayOfWords.sort(() => 0.5 - Math.random())[0];
        this.setState({currentWord: currentWord});
    }

    initEnterEvent = (inputEl) => {
        this.wordInput = inputEl;
        if (this.wordInput) {
            this.wordInput.addEventListener("keyup", function (event) {
                if (event.keyCode === ENTER_KEY) {
                    document.getElementById("submitButton").click();
                }
            });
        }
    };

    componentDidMount(){
        this.initRandomWorld();
    }

    render(){
        return <div id='translator' className='translator'>
            <h2>Translate the word into Russian</h2>
            <div className='translatorWord'>{this.state.currentWord}</div>
            <input id='result' type="text" autoFocus ref={this.initEnterEvent}/>
            <button id='submitButton' onClick={this.solution}>Submit</button>
        </div>
    }

}
export default Translator;