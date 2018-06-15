import React from 'react';

import './styles.css';

const SIGN_PLUS = 0;
const SIGN_MINUS = 1;
const SIGN_MULTIPLY = 2;

const EXPRESSION_MAP = {
    [SIGN_PLUS]: (num1, num2) => num1 + num2,
    [SIGN_MINUS]: (num1, num2) => num1 - num2,
    [SIGN_MULTIPLY]: (num1, num2) => num1 * num2,
};


class RiddleWindow extends React.Component {

    constructor(props) {
        super(props);
        this.num1 = Math.floor(Math.random() * 10 + 1);
        this.num2 = Math.floor(Math.random() * 10 + 1);
    }

    render() {

        return (
            <div className="riddle-window">

            </div>
        )
    }
}

export default RiddleWindow;