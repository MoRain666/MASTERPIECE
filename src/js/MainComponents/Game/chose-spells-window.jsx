import React from 'react';
import wind from './assets/riddleWindow/wind.png';
import fire from './assets/riddleWindow/fire.png';
import ground from './assets/riddleWindow/ground.png';
import water from './assets/riddleWindow/water.png';
import './styles.css';

class ChoseSpellsWindow extends React.Component {

    render() {
        return (
            <div className="riddle-window">
                <label>
                    <input type="radio" name="faceCard" value={wind}/>
                    <img src={wind} alt={wind}/>
                </label>
                <label>
                    <input type="radio" name="faceCard" value={fire}/>
                    <img src={fire} alt={fire}/>
                </label>
                <label>
                    <input type="radio" name="faceCard" value={ground}/>
                    <img src={ground} alt={ground}/>
                </label>
                <label>
                    <input type="radio" name="faceCard" value={water}/>
                    <img src={water} alt={water}/>
                </label>
            </div>
        );
    }
}

export default ChoseSpellsWindow;