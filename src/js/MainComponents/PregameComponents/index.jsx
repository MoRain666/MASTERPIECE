import React from 'react';
class PreGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            aboutGame: 'Живи и пой, Анастасия, нас ждут великие дела!!!',
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

    createNewUser(){

    }

    formRender(){
        const form = <form className='PreGame-form'>
            <h3>Here a form</h3>
            <h4>First Name</h4>
            <input type="text" required/>
            <h4>Last Name</h4>
            <input type="text" required/>
            <input onClick={this.createNewUser} type="submit" value="START PLAY"/>
        </form>;
        setTimeout(()=>{
            this.setState({formRender: form});
            document.querySelector('#titles').remove();
        }, 10000)
    }
    componentDidMount(){
        this.formRender();
    }
    
    render(){
        return <div id='PreGame' className='PreGame'>
        <audio id="myAudio" src={require('../../../music/theme-song-superman.mp3')} autoPlay={this.state.isPlaying}></audio>
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