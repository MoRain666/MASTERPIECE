import React from 'react';
import Header from './ComponentsForHome/header';
import GamePlay from './ComponentsForHome/GamePlay';
import Developers from './ComponentsForHome/developers';
import WhatWeDid from './ComponentsForHome/whatWeDid';
class Home extends React.Component{
    
    render(){
        return <div className='LandingPage'>
            <Header />
            <GamePlay />
            <Developers />
            <WhatWeDid />
        </div>;
    }
}
export default Home;