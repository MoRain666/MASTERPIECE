import React from 'react';

class Developers extends React.Component {

    render() {
        return <div id="developers-info-container" className='developers-info-container'>
            <h2>Developers</h2>
            <div className="developer-info">
                <div className='developer-info-content'>
                    <h3>Vlad Kharitonovitch</h3>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/MoRain666">
                        <img src={require('../img/developers/vlad.JPG')} alt="vlad" className='dev-foto'/>
                    </a>
                </div>
                <div className='developer-info-content'>
                    <h3>Anastasiya Novak</h3>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/anv21">
                        <img src={require('../img/developers/nastiya.jpg')} alt="nastiya" className='dev-foto'/>
                    </a>
                </div>
            </div>
            <h4>About us:</h4>
            <p>
                We are students of The Rolling Scopes and lovers of chaos and abyss!
            </p>
            <p className='quotes'>
                “When it is dark enough, you can see the stars.”
            </p>
        </div>
    }

}

export default Developers;