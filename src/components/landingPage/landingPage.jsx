import React from 'react';

import Header from './componentsForLandingPage/header';
import GamePlay from './componentsForLandingPage/gamePlay';
import Developers from './componentsForLandingPage/developers';
import CompletedWork from './componentsForLandingPage/completedWork';

class LandingPage extends React.Component {

    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (document.querySelector('#ScrollButton')) {
                document.getElementById("ScrollButton").style.display = "block";
            }
        } else {
            if (document.querySelector('#ScrollButton')) {
                document.getElementById("ScrollButton").style.display = "none";
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

    render() {
        return <div className='landing-page'>
            <Header/>
            <GamePlay/>
            <Developers/>
            <CompletedWork/>
            <button onClick={this.topFunction} className='to-top-button' id="ScrollButton">&#8593;</button>
        </div>;
    }
}

export default LandingPage;