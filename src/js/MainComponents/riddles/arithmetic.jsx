import React from 'react';
class Arithmetic extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            operators: ['+', '-', '*'],
            firstNumber: '',
            lastNumber: '',
            result: '',
            currentOperator: ''
        };

    }

    randomSort(){
        return this.state.operators.sort((a, b)=>{return 0.5 - Math.random();})[0];
    }

    exampleGeneration(){
        let firstNumber = Math.round(Math.random() * 10);
        let lastNumber = Math.round(Math.random() * 10);
        let operator = this.randomSort();
        let result = eval(`${firstNumber}${operator}${lastNumber}`);
        this.setState({firstNumber: firstNumber});
        this.setState({currentOperator: operator});
        this.setState({lastNumber: lastNumber});
        this.setState({result: result});
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

    componentDidMount(){
        this.exampleGeneration();
        this.initEnterEvent();
    }

    solution(){
        this.props.onAnswer(this.refs.result.value.toString() === this.state.result.toString());
    }

    render(){
        return <div id='arithmetic' className='arithmetic' >
            <h3>{this.state.firstNumber} {this.state.currentOperator} {this.state.lastNumber} =</h3>
            <input id='result' type="number" ref='result' autoFocus />
            <button id='submitButton' onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }
}
export default Arithmetic;