import React from 'react';

import {
    ATTACK_FIRE,
    ATTACK_GROUND,
    ATTACK_WATER,
    ATTACK_WIND,
} from './const';
import Arithmetic from "../riddles/arithmetic";
import Choosecolour from "../riddles/choosecolour";
import Sequence from "../riddles/sequence";
import Translator from "../riddles/translator";


class RiddleWindow extends React.Component{
 onAnswer = (rightAnswer) => {
     this.props.onAnswer(rightAnswer);
     if (rightAnswer) {
         let nameOfUser = localStorage.getItem('currentUser');
         if (nameOfUser) {
             let users = JSON.parse(localStorage.getItem('users')) || {};
             users[nameOfUser] = (users[nameOfUser] || 0) + 1;
             localStorage.setItem('users',JSON.stringify(users));
         }
     }
 };

    render(){
        if (this.props.attackId === ATTACK_WIND) {
            return (
                <Arithmetic
                    onAnswer={this.onAnswer}
                />
            )
        } else if (this.props.attackId === ATTACK_FIRE) {
            return (<Choosecolour
                onAnswer={this.onAnswer}
            />
            )
        } else if (this.props.attackId === ATTACK_GROUND) {
            return ( <Sequence
                onAnswer={this.onAnswer}
            />
            )
        } else if (this.props.attackId === ATTACK_WATER) {
            return ( <Translator
                onAnswer={this.onAnswer}
            />
            )
        }
        return null;

    }
}
export default RiddleWindow;