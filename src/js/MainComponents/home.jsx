import React from 'react';
import Header from './ComponentsForHome/header';
import GamePlay from './ComponentsForHome/GamePlay';
import Developers from './ComponentsForHome/developers';
import WhatWeDid from './ComponentsForHome/whatWeDid';
class Home extends React.Component{

    scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if(document.querySelector('#SrollButton')){
                document.getElementById("SrollButton").style.display = "block";
            }
        } else {
            if(document.querySelector('#SrollButton')){
                document.getElementById("SrollButton").style.display = "none";
            }
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
            <span></span>
            <GamePlay />
            <span></span>
            <Developers />
            <WhatWeDid />
            <button onClick={this.topFunction} className='ToTop' id="SrollButton">&#8593;</button>
        </div>;
    }
}
export default Home;