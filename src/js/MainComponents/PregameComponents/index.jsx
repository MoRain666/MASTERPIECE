import React from 'react';
class PreGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            aboutGame: 'Живи и пой, Анастасия, нас ждут великие дела!!!',
            isPlaying: true,
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
    
    render(){
        return <div className='PreGame'>
        <audio id="myAudio" src={require('../../../music/theme-song-superman.mp3')} autoPlay="true"></audio>
            <button className='audioButton PreGame-PlayButton' onClick={this.togglePlay.bind(this)}></button>
            <div id="titles">
                <div id="titlecontent">
	                <p>{this.state.aboutGame}</p>
                </div>
            </div>
        </div>
    }
}
export default PreGame;