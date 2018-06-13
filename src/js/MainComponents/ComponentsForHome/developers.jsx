import React from 'react';
class Developers extends React.Component{
    render(){
        return <div id='about' className='LandingPage-about'>
            <h2>Developers</h2>
            <div className="LandingPage-about-developers">
                <div className='LandingPage-about-developer-content'>
                    <h3>Vlad Kharitonovitch</h3>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/MoRain666">
                        <img src={require('../../../img/LandingPage/developers/Влад.JPG')} alt="man"/>
                    </a>
                </div>
                <div className='LandingPage-about-developer-content'>
                    <h3>Anastasiya Novak</h3>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/anv21">
                        <img src={require('../../../img/LandingPage/developers/Настя.jpg')} alt="woman"/>
                    </a>
                </div>
            </div>
            <h4>About us:</h4>
            <p className="LandingPage-about-us">
                We are students of The Rolling Scopes and lovers of chaos and abyss!
            </p>
            <p>
                “When it is dark enough, you can see the stars.”
            </p>
        </div>
    }
}
export default Developers;