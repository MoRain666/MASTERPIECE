import React from 'react';
class arithmetic extends React.Component{

    constructor(props){
        super(props);
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
    initEnterEvent(){
        const input = document.getElementById('result');
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
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
        // if(this.refs.result.value == this.state.result){
        //     localStorage.setItem('riddleProperty', 'right');
        //     document.getElementById('arithmetic').classList.add('right');
        //     document.getElementById('result').classList.add('right');
        //     document.getElementsByTagName('button')[0].classList.add('right');
        //     let nameOfUser = localStorage.getItem('currentUser');
        //     let Newscrore = JSON.parse(localStorage.getItem('users'))[nameOfUser] + 1;
        //     let users = JSON.parse(localStorage.getItem('users'));
        //     users[nameOfUser] = Newscrore;
        //     localStorage.setItem('users',JSON.stringify(users));
        // }else{
        //     localStorage.setItem('riddleProperty', 'wrong');
        //     document.getElementById('arithmetic').classList.add('wrong');
        //     document.getElementById('result').classList.add('wrong');
        //     document.getElementsByTagName('button')[0].classList.add('wrong');
        // }
        // setTimeout(()=>{
        //     document.querySelector('#arithmetic').remove(); //удалить контейнер Насти,а не свой
        // },2000);
    }

    render(){
        return <div id='arithmetic' className='arithmetic' >
            <h3>{this.state.firstNumber} {this.state.currentOperator} {this.state.lastNumber} =</h3>
            <input id='result' type="number" ref='result' />
            <button id='submitButton' onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }
}
export default arithmetic;