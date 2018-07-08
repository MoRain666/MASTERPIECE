import React from 'react';

import { Redirect } from 'react-router-dom';

import supermanMusic from './music/supermen-glavnaya-tema.ogg';
import scaryMusic from './music/Scary-horror-music.mp3';
import { SPEED_PREGAME_TEXT, TIME_FOR_REDIRECT_TO_FORM, TIME_FOR_REDIRECT_TO_GAME, TIME_TO_START_PREGAME_TEXT } from '../Game/constants';

class IntroductionView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutGame: '4340 A.D. ... As a result of the eruption of the megavolcano YellowStone, ' +
            'the Poles ice caps have melted. Europe, once rich and ' +
            'powerful, has turned into a chain of islands. One of them, ' +
            'according to the scientists forecasts, will soon sink to the bottom. ' +
            'But what about the people?... Save yourself, people!... Flee to other ' +
            'islands! But no one is waiting for you there ... To save, take over the ' +
            'children will get enough food, and you will find peace. The fate of ' +
            'the humanity depends on you! And ... may power be with you!',
            isPlaying: true,
            formRender: '',
            pregameContainer: '',
            information: 'Do you think it`s your fate??? Let`s try to see!',
            redirect: false
        };

        this.form = <form onSubmit={this.createNewUser.bind(this)} className='intro-view-form'>
            <h3>What's your name, young hero?</h3>
            <h4>First Name</h4>
            <input id='FirstName' type='text' required/>
            <h4>Last Name</h4>
            <input id='LastName' type='text' required/>
            <input className='button' value='NEXT' type='submit'/>
        </form>;
    }

    togglePlay() {
        const AUDIO = document.querySelector('#audio');
        const AUDIO_BUTTON = document.querySelector('.audioButton');
        if (this.state.isPlaying) {
            AUDIO.pause();
            this.setState({isPlaying: false});
            AUDIO_BUTTON.classList.add('intro-view-pause-button');
            AUDIO_BUTTON.classList.remove('intro-view-play-button');
        } else {
            AUDIO.play();
            this.setState({isPlaying: true});
            AUDIO_BUTTON.classList.add('intro-view-play-button');
            AUDIO_BUTTON.classList.remove('intro-view-pause-button');
        }
    }

    reloadPageForAutoPlay() {
        window.onload = function () {
            if (!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }

    createNewUser() {
        let users;
        if (localStorage.length > 0) {
            users = JSON.parse(localStorage.getItem('users'));
        } else {
            users = {};
        }
        let nameOfUser = `${document.getElementById('FirstName').value } ${document.getElementById('LastName').value}`;
        users[`${nameOfUser}`] = 0;
        let serialObject = JSON.stringify(users);
        localStorage.setItem('users', serialObject);
        localStorage.setItem('currentUser', nameOfUser);
        const forDelete = document.querySelector('#intro-view-main-container');
        forDelete.remove();
        this.pregameContainerInit();
        setTimeout(() => {
            this.typeWriter('#pregame-container')
        }, TIME_TO_START_PREGAME_TEXT);
        document.querySelector('#audio').src = scaryMusic;
    }

    typeWriter = (selector) => {
        let currentChar = 0;
        let txt = this.state.information;

        function writer() {
            const container = document.querySelector(selector);
            if (currentChar < txt.length) {
                container.textContent += txt.charAt(currentChar);
                currentChar++;
                setTimeout(writer, SPEED_PREGAME_TEXT);
            }
        }

        writer();
        this.setRedirect();
    }

    setRedirect() {
        setTimeout(() => {
            this.setState({redirect: true});
        }, TIME_FOR_REDIRECT_TO_GAME);
    }

    pregameContainerInit() {
        const container = <div id='pregame-container' className='pregame-container' />
        this.setState({pregameContainer: container});
    }

    formRender() {
        setTimeout(() => {
            if (document.querySelector('#game-story-container')) {
                this.skipInfo();
            }
        }, TIME_FOR_REDIRECT_TO_FORM)
    }

    skipInfo() {
        this.setState({formRender: this.form});
        document.querySelector('#game-story-container').remove();
        document.querySelector('#intro-view-skip-button').remove();
    }

    componentDidMount() {
        this.formRender();
        this.reloadPageForAutoPlay();
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to='/game'/>
        }

        return <div id='PreGame' className='introduction-view'>
            <audio id='audio' src={supermanMusic} autoPlay/>
            <button className='audioButton intro-view-play-button' onClick={this.togglePlay.bind(this)}/>
            <div onClick={this.skipInfo.bind(this)} id='intro-view-skip-button'
                 className='intro-view-skip-button'/>
            <div id='intro-view-main-container' className='intro-view-main-container'>
                <img src={require('./img/supermanFly.gif')} alt='supermanFly'/>
                <div id='game-story-container' className='game-story-container'>
                    <div id='game-story-text' className='game-story-text'>
                        <p>{this.state.aboutGame}</p>
                    </div>
                </div>
                {this.state.formRender}
            </div>
            {this.state.pregameContainer}
        </div>
    }
}

export default IntroductionView;