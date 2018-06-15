import React from 'react';
import superman_music from '../../../music/supermen-glavnaya-tema.ogg';
class PreGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            aboutGame: '4340 year from the birth of Christ.',
            isPlaying: true,
            formRender: ''
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

    }

    formRender(){
        const form = <form className='PreGame-form'>
            <h3>Here a form</h3>
            <h4>First Name</h4>
            <input type="text" required/>
            <h4>Last Name</h4>
            <input type="text" required/>
            <input onClick={this.createNewUser} type="submit" value="NEXT"/>
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
        return <div id='PreGame' className='PreGame'>
        <audio id="myAudio" src={superman_music} autoPlay></audio>
            <button className='audioButton PreGame-PlayButton' onClick={this.togglePlay.bind(this)}></button>
            <img src={require('../../../img/PreGame/supermanFly.gif')} alt=""/>
            <div id="titles">
                <div id="titlecontent">
	                <p>{this.state.aboutGame}</p>
                </div>
            </div>
            {this.state.formRender}
        </div>
    }
}
export default PreGame;