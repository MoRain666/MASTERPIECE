import React from 'react';

import {
    ATTACK_FIRE,
    ATTACK_GROUND,
    ATTACK_WATER,
    ATTACK_WIND,

} from '../constants';
import Arithmetic from "./tasks/taskArithmetic/arithmetic";
import ChooseColour from "./tasks/taskChooseColour/choosecolour";
import Sequence from "./tasks/taskSequence/sequence";
import Translator from "./tasks/taskTranslator/translator";


class TasksView extends React.Component{
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
            return (<ChooseColour
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
export default TasksView;