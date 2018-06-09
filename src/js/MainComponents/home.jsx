import React from 'react';
import Header from './ComponentsForHome/header';
import GamePlay from './ComponentsForHome/GamePlay';
class Home extends React.Component{
    
    render(){
        return <div className='LandingPage'>
            {this.scroll}
            <Header />
            <GamePlay />
        </div>;
    }
}
export default Home;