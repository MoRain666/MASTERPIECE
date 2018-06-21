import React from 'react';

class ChooseColor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shapes: [
                {image: require('../../../img/assetsForGame/chosecolorriddle/aquamarine.png'), name: 'aquamarine'},
                {image: require('../../../img/assetsForGame/chosecolorriddle/black.png'), name: 'black'},
                {image: require('../../../img/assetsForGame/chosecolorriddle/blue.png'), name: 'blue'},
                {image: require('../../../img/assetsForGame/chosecolorriddle/green.png'), name: 'green'},
                {image: require('../../../img/assetsForGame/chosecolorriddle/purple.png'), name: 'purple'},
                {image: require('../../../img/assetsForGame/chosecolorriddle/red.png'), name: 'red'}
            ],
        };
        this.CurrentShape = this.state.shapes.sort(() => 0.5 - Math.random())[0];
        this.CurrentShapeName = this.CurrentShape.name;
    }

    initEnterEvent(){
        const enter = 13;
        const input = document.getElementById('result');
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === enter) {
                document.getElementById("submitButton").click();
            }
        });
    }

    solution() {
        this.props.onAnswer(this.refs.result.value === this.CurrentShapeName);
    }

    componentDidMount(){
        this.initEnterEvent();
    }

    render() {
        return <div id='choosecolor' className='choosecolor'>
            <h3>What is the color of this figure?</h3>
            <img src={this.CurrentShape.image}/>
            <input id='result' type="text" ref='result' autoFocus />
            <button id='submitButton' onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }
}

export default ChooseColor;