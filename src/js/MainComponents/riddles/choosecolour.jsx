import React from 'react';

class ChooseColor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shapes: [
                {image: require('../Game/assets/chosecolorriddle/aquamarine.png'), name: 'aquamarine'},
                {image: require('../Game/assets/chosecolorriddle/black.png'), name: 'black'},
                {image: require('../Game/assets/chosecolorriddle/blue.png'), name: 'blue'},
                {image: require('../Game/assets/chosecolorriddle/green.png'), name: 'green'},
                {image: require('../Game/assets/chosecolorriddle/purple.png'), name: 'purple'},
                {image: require('../Game/assets/chosecolorriddle/red.png'), name: 'red'}
            ],
        };
        this.CurrentShape = this.state.shapes.sort(() => 0.5 - Math.random())[0];
        this.CurrentShapeName = this.CurrentShape.name;
    }

    initEnterEvent(){
        const input = document.getElementById('result');
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                document.getElementById("submitButton").click();
            }
        });
    }

    solution() {
        this.props.onAnswer(this.refs.result.value === this.CurrentShapeName);

        // if (this.refs.result.value === this.CurrentShapeName) {
        //     this.props.onAnswer(true);
        //     localStorage.setItem('riddleProperty', 'right');
        //     document.getElementById('choosecolor').classList.add('right');
        //     document.getElementById('result').classList.add('right');
        //     document.getElementsByTagName('button')[0].classList.add('right');
        //     let nameOfUser = localStorage.getItem('currentUser');
        //     let Newscrore = JSON.parse(localStorage.getItem('users'))[nameOfUser] + 1;
        //     let users = JSON.parse(localStorage.getItem('users'));
        //     users[nameOfUser] = Newscrore;
        //     localStorage.setItem('users', JSON.stringify(users));
        // } else {
        //     this.props.onAnswer(false);
        //     localStorage.setItem('riddleProperty', 'wrong');
        //     document.getElementById('choosecolor').classList.add('wrong');
        //     document.getElementById('result').classList.add('wrong');
        //     document.getElementsByTagName('button')[0].classList.add('wrong');
        // }

    }

    componentDidMount(){
        this.initEnterEvent();
    }

    render() {
        return <div id='choosecolor' className='choosecolor'>
            <h3>What is the color of this figure?</h3>
            <img src={this.CurrentShape.image}/>
            <input id='result' type="text" ref='result'/>
            <button id='submitButton' onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }
}

export default ChooseColor;