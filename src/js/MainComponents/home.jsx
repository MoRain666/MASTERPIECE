import React from 'react';
import Header from './ComponentsForHome/header';
import GamePlay from './ComponentsForHome/GamePlay';
import StartToPlay from './ComponentsForHome/startToPlay';
import Developers from './ComponentsForHome/developers';
class Home extends React.Component{
    
    render(){
        return <div className='LandingPage'>
            <Header />
            <GamePlay />
            <StartToPlay />
            <Developers />
        </div>;
    }
}
export default Home;