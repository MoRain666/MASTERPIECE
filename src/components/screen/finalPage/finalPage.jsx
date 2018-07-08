import React from 'react';
import {Redirect} from 'react-router-dom';

import winImg from './img/win.jpg';
import lostImg from './img/dead.jpg';

class FinalPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameState: this.props.location.pathname === '/win' ? 'win' : '',
            imageOFSuperman: winImg,
            redirect: ''
        };
    }

    initDialog() {
        if (this.state.gameState == 'win') {
            return <p>If there is one amazing thing that has happened this year, it's your victory. You're the best!!!</p>

        } else {
            return <h3>You lost, but do not get upset and learn from your mistakes!</h3>
        }
    }

    imgChanger() {
        if (this.state.gameState != 'win') {
            this.setState({imageOFSuperman: lostImg});
        }
    }

    toGame() {
        this.setState({redirect: 'again'});
    }

    toScore() {
        this.setState({redirect: 'score'});
    }

    componentDidMount() {
        this.imgChanger();
    }

    render() {
        if (this.state.redirect === 'again') {
            return <Redirect to='/pregame'/>
        } else if (this.state.redirect === 'score') {
            return <Redirect to='/score'/>
        }
        return <div className='finalPage'>
            {this.initDialog()}
            <img src={this.state.imageOFSuperman} alt="superman"/>
            <div className="buttonsOfFinalPage">
                <div onClick={this.toGame.bind(this)} className='againButton'/>
                <div onClick={this.toScore.bind(this)} className='scoreButton'/>
            </div>
        </div>
    }

}

export default FinalPage;

