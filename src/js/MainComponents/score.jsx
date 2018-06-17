import React from 'react';
import { Redirect } from 'react-router-dom';
class Score extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        };
    }

    initScoreTable(){
        let objectOfUsers = JSON.parse(localStorage.getItem('users'));
        let sortable = [];
        for (let vehicle in objectOfUsers) {
            sortable.push([vehicle, objectOfUsers[vehicle]]);
        }
        sortable.sort((a, b) => {
            return b[1] - a[1];
        });
        const listOfUsers = sortable.map((value, key)=>{
            return <tr key={key}>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
            </tr>;
        });

        return <table>
            <tr>
                <th>Full Name</th>
                <th>Number of riddles</th>
            </tr>
            {listOfUsers}
        </table>
    }

    toHome(){
        this.setState({redirect: true});
    }
    
    render(){
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        return <div className='score'>
            <div className="scoreContent">
                <h3>Here are the top of best superman!</h3>
                {this.initScoreTable()}
                <div onClick={this.toHome.bind(this)} className="toHomeButton">Home</div>
            </div>
        </div>
    }
}
export default Score;