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
        if(this.verificationOfTranslation()){
            document.getElementById('translator').classList.add('right');
            localStorage.setItem('riddleProperty', 'right');
            let nameOfUser = localStorage.getItem('currentUser');
            let Newscrore = JSON.parse(localStorage.getItem('users'))[nameOfUser] + 1;
            let users = JSON.parse(localStorage.getItem('users'));
            users[nameOfUser] = Newscrore;
            localStorage.setItem('users',JSON.stringify(users));
        }else{
            document.getElementById('translator').classList.add('wrong');
            localStorage.setItem('riddleProperty', 'wrong');
        }
        setTimeout(()=>{
            document.querySelector(this.props.location).remove();
        },2000);
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
            <input id='result' type="text" ref='word'/>
            <button id='submitButton' onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }

}
export default Translator;