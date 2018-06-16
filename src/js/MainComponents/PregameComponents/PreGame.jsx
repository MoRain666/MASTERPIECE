import React from 'react';
import superman_music from '../../../music/supermen-glavnaya-tema.ogg';
import { Redirect } from 'react-router-dom';
import scarry_music from '../../../music/Scary-horror-music.mp3';
class PreGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            aboutGame: '4340 A.D. ... As a result of the eruption of the megavolcano YellowStone, ' +
            'the Poles ice caps have melted. Europe, once rich and ' +
            'powerful, has turned into a chain of islands. One of them, ' +
            'according to the scientists forecasts, will soon sink to the bottom.' +
            'But what about the people?... Save yourself, people!... Flee to other ' +
            'islands! But no one is waiting for you there ... To save, take over the ' +
            'children will get enough food, and you will find peace. The fate of ' +
            'the humanity depends on you! And ... may power be with you!',
            isPlaying: true,
            formRender: '',
            scaryContainer: '',
            information: 'Do you think it`s your fate??? Let`s try to see!',
            redirect: false
        };
    }

    togglePlay(){
        const myAudio = document.querySelector('#myAudio');
        const audioButton = document.querySelector('.audioButton');
        if (this.state.isPlaying){
            myAudio.pause();
            this.setState({isPlaying: false});
            audioButton.classList.add('PreGame-PauseButton');
            audioButton.classList.remove('PreGame-PlayButton');
        }else{
            myAudio.play();
            this.setState({isPlaying: true});
            audioButton.classList.add('PreGame-PlayButton');
            audioButton.classList.remove('PreGame-PauseButton');
        }
    }

    reloadPageForAutoPlay(){
        window.onload = function() {
            if (!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }
    createNewUser(){
        let users;
        if(localStorage.length  > 0){
             users = JSON.parse(localStorage.getItem('users'));
        }else{
             users = {};
        }
        let nameOfUser = `${document.getElementById("FirstName").value } ${document.getElementById("LastName").value}`;
        users[`${nameOfUser}`] = 0;
        let serialObject = JSON.stringify(users);
        localStorage.setItem('users', serialObject);
        localStorage.setItem('currentUser', nameOfUser);
        const forDelete = document.querySelector('#about-container');
        forDelete.remove();
        this.scarryContainerInit();
        setTimeout(()=>{this.typeWriter('#scarryContainer')},5000);
        document.querySelector('#myAudio').src = scarry_music;
    }

    typeWriter(selector) {
        let i = 0;
        let txt = this.state.information;
        let speed = 200;
        function writer(){
            const container = document.querySelector(selector);
            if (i < txt.length) {
                container.textContent += txt.charAt(i);
                i++;
                setTimeout(writer, speed);
            }
        }
        writer();
        this.setRedirect();
    }

    setRedirect(){
        setTimeout(()=>{
            this.setState({redirect: true});
        },20000);
    }
    scarryContainerInit(){
        const container = <div id='scarryContainer' className='scarryContainer'>
            {this.state.informtion}
        </div>;

        this.setState({scaryContainer: container});
    }

    formRender(){
        const form = <form onSubmit={this.createNewUser.bind(this)} className='PreGame-form'>
            <h3>What's your name, young hero?</h3>
            <h4>First Name</h4>
            <input id='FirstName' type="text" required />
            <h4>Last Name</h4>
            <input id='LastName' type="text" required />
            <input className='button' value='NEXT' type='submit'/>
        </form>;
        setTimeout(()=>{
            this.setState({formRender: form});
            document.querySelector('#titles').remove();
        }, 50000)
    }

    componentDidMount(){
        this.formRender();
        this.reloadPageForAutoPlay();
    }

    render(){
        if (this.state.redirect === true) {
            return <Redirect to='/game' />
          }
        return <div id='PreGame' className='PreGame'>
        <audio id="myAudio" src={superman_music} autoPlay></audio>
        <button className='audioButton PreGame-PlayButton' onClick={this.togglePlay.bind(this)}></button>
            <div id='about-container' className="about-container">
                <img src={require('../../../img/PreGame/supermanFly.gif')} alt=""/>
                <div id="titles">
                    <div id="titlecontent">
	                    <p>{this.state.aboutGame}</p>
                    </div>
                </div>
                {this.state.formRender}
            </div>
            {this.state.scaryContainer}
        </div>
    }
}
export default PreGame;