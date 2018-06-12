import React from 'react';
import Header from './ComponentsForHome/header';
import GamePlay from './ComponentsForHome/GamePlay';
import Developers from './ComponentsForHome/developers';
import WhatWeDid from './ComponentsForHome/whatWeDid';
class Home extends React.Component{

    scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("SrollButton").style.display = "block";
        } else {
            document.getElementById("SrollButton").style.display = "none";
        }
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction.bind(this));
    }

    render(){
        return <div className='LandingPage'>
            <Header />
            <GamePlay />
            <Developers />
            <WhatWeDid />
            <button onClick={this.topFunction.bind(this)} className='ToTop' id="SrollButton">Top</button>
        </div>;
    }
}
export default Home;