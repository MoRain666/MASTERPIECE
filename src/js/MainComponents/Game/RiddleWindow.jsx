import React from 'react';

import {
    ATTACK_FIRE,
    ATTACK_GROUND,
    ATTACK_MONSTER,
    ATTACK_WATER,
    ATTACK_WIND,
    GAME_STATE_INITIAL,
    ARITHMETIC,
    CHOOSE_COLOUR,
    SEQUENCE,
    TRANSLATOR
} from './const'
import Arithmetic from "../riddles/arithmetic";
import Choosecolour from "../riddles/choosecolour";
import Sequence from "../riddles/sequence";
import Translator from "../riddles/translator";


class RiddleWindow extends React.Component{

    render(){
        if (this.props.attackId === ATTACK_WIND) {
            return (
                <Arithmetic
                    onAnswer={this.props.onAnswer}
                />
            )
        } else if (this.props.attackId === ATTACK_FIRE) {
            return (<Choosecolour
                onAnswer={this.props.onAnswer}
            />
            )
        } else if (this.props.attackId === ATTACK_GROUND) {
            return ( <Sequence
                onAnswer={this.props.onAnswer}
            />
            )
        } else if (this.props.attackId === ATTACK_WATER) {
            return ( <Translator
                onAnswer={this.props.onAnswer}
            />
            )
        }
        return null;

    }
}
export default RiddleWindow;