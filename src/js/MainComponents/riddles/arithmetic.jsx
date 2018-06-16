import React from 'react';
class arithmetic extends React.Component{

    constructor(){
        super();
        this.state = {
            operators:['+', '-', '*'],
            firstNumber:'',
            lastNumber:'',
            result:'',
            currentOperator:''
        };

    }

    randomSort(){
        return this.state.operators.sort((a, b)=>{return 0.5 - Math.random();})[0];
    }

    exampleGeneration(){
        let firstNumber = Math.round(Math.random() * 10);
        this.setState({firstNumber: firstNumber});
        let lastNumber = Math.round(Math.random() * 10);
        this.setState({lastNumber: lastNumber});
        let operator = this.randomSort();
        this.setState({currentOperator: operator});
        let result = eval(`${firstNumber}${operator}${lastNumber}`);
        this.setState({result: result});
    }

    componentDidMount(){
        this.exampleGeneration();
    }

    solution(){
        if(this.refs.result.value == this.state.result){
            localStorage.setItem('riddleProperty', 'right');
            document.getElementById('arithmetic').classList.add('right');
            document.getElementById('result').classList.add('right');
            document.getElementsByTagName('button')[0].classList.add('right');
        }else{
            localStorage.setItem('riddleProperty', 'wrong');
            document.getElementById('arithmetic').classList.add('wrong');
            document.getElementById('result').classList.add('wrong');
            document.getElementsByTagName('button')[0].classList.add('wrong');
        }
        setTimeout(()=>{
            document.querySelector('#arithmetic').remove(); //удалить контейнер Насти,а не свой
        },2000);
    }

    render(){
        return <div id='arithmetic' className='arithmetic' >
            <h3>{this.state.firstNumber} {this.state.currentOperator} {this.state.lastNumber} =</h3>
            <input id='result' type="number" ref='result' />
            <button onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }
}
export default arithmetic;