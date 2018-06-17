import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
class sequence extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
            trueSequence:''
        };
    }

    onSortEnd({oldIndex, newIndex}){
        this.setState({
          items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    }

    arraysIdentical(a, b) {
        let i = a.length;
        if (i != b.length) return false;
        while (i--) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    onInitStateItems(){
        let randomNumber = Math.floor(Math.random() * 50);
        let arrayOfNumbers = [];
        for(let i = 0; i < 6; i++){
            arrayOfNumbers.push(randomNumber + i);
        }
        let trueArray = arrayOfNumbers.slice(0, arrayOfNumbers.length);
        this.setState({trueSequence: trueArray});
        arrayOfNumbers.sort(function(a, b){return 0.5 - Math.random();});
        this.setState({items: arrayOfNumbers});
    }

    solution(){
        this.props.onAnswer(this.arraysIdentical(this.state.items, this.state.trueSequence));

        // if(this.arraysIdentical(this.state.items, this.state.trueSequence)){
        //     document.getElementById('sequence').classList.add('right');
        //     localStorage.setItem('riddleProperty', 'right');
        //     let nameOfUser = localStorage.getItem('currentUser');
        //     let Newscrore = JSON.parse(localStorage.getItem('users'))[nameOfUser] + 1;
        //     let users = JSON.parse(localStorage.getItem('users'));
        //     users[nameOfUser] = Newscrore;
        //     localStorage.setItem('users',JSON.stringify(users));
        // }else{
        //     document.getElementById('sequence').classList.add('wrong');
        //     localStorage.setItem('riddleProperty', 'wrong');
        // }
        // setTimeout(()=>{
        //     document.querySelector('#sequence').remove(); //удалить контейнер Насти,а не свой
        // },2000);
    }

    componentDidMount(){
        this.onInitStateItems();
    }

    render(){
        const SortableItem = SortableElement(({value}) => <div>{value}</div>);
        const SortableList = SortableContainer(({items}) => {
            return (
              <ul className='sortableList'>
                {items.map((value, index) => (
                  <SortableItem key={`item-${index}`} index={index} value={value} />
                ))}
              </ul>
            );
          });
        return <div id='sequence' className='sequence'>
            <h2>Restore the correct sequence</h2>
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd.bind(this)} />
            <button onClick={this.solution.bind(this)}>Submit</button>
        </div>
    }

}
export default sequence;