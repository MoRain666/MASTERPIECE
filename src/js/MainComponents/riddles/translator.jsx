import React from 'react';
import { dictionary } from './dictionary';
class Translator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentWord:''
        };
    }

    solution(){
        this.props.onAnswer(this.verificationOfTranslation());
    }

    verificationOfTranslation(){
        let arrayOfTransfer = dictionary[this.state.currentWord];
        for(let i = 0; i < arrayOfTransfer.length; i++){
            if(this.refs.word.value == arrayOfTransfer[i]){
                return true;
            }else{
                continue;
            }
        }
        return false;
    }

    initRandomWorld(){
        let arrayOfWords = Object.keys(dictionary);
        let currentWord = arrayOfWords.sort(() => 0.5 - Math.random())[0];
        this.setState({currentWord: currentWord});
    }

    initEnterEvent(){
        const input = document.getElementById('result');
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                document.getElementById("submitButton").click();
            }
        });
    }

    componentDidMount(){
        this.initRandomWorld();
        this.initEnterEvent();
    }

    render(){
        return <div id='translator' className='translator'>
            <h2>Translate the word into Russian</h2>
            <div className='translatorWord'>{this.state.currentWord}</div>
            <input id='result' type="text" autoFocus ref='word'/>
            <button id='submitButton' onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }

}
export default Translator;