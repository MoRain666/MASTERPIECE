import React from 'react';
class Developers extends React.Component{
    render(){
        return <div id='about' className='LandingPage-about'>
            <h2>Developers</h2>
            <div className="LandingPage-about-developers">
                <div className='LandingPage-about-developer-content'>
                    <h3>Vlad Kharitonovitch</h3>
                    <img src={require('../../../img/LandingPage/developers/Влад.JPG')} alt="man"/>
                    <a href="https://github.com/MoRain666">
                    <img src={require('../../../img/LandingPage/GitHub-Mark-32px.png')} alt="github"/>
                    </a>
                </div>
                <div className='LandingPage-about-developer-content'>
                    <h3>Anastasiya Novak</h3>
                    <img src={require('../../../img/LandingPage/developers/Настя.jpg')} alt="man"/>
                    <a href="https://github.com/anv21">
                        <img src={require('../../../img/LandingPage/GitHub-Mark-32px.png')} alt="github"/>
                    </a>
                </div>
            </div>
        </div>
    }
}
export default Developers;