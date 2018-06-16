import React from 'react';

import ChoseSpellsWindow from "./chose-spells-window"
import initDrawer from "./GameAnimation";
import openChose from "./assets/open-choose.png"
import {GAME_STATE_INITIAL} from './const'
import './styles.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choseSpellsWindowVisible: true,
        };
    }

    setCanvas = (el) => {
        if (el) {
            initDrawer(el, this.onGameStateChanged)
                .then((drawer) => {
                    this.drawer = drawer;
                    this.drawer.draw();
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    };

    onGameStateChanged = (gameState) => {
        this.setState({
            choseSpellsWindowVisible: gameState === GAME_STATE_INITIAL,
        })
    };

    onAttackSelect = (attackId) => {
        this.drawer.startAttack(attackId);
    };

    render() {
        return (
            <div className="GamePage">
                <img src={openChose} className='OpenChooseWindow'/>
                {this.state.choseSpellsWindowVisible && (
                    <ChoseSpellsWindow
                        onAttackSelect={this.onAttackSelect}
                    />
                )}
                <canvas
                    className="canvas"
                    ref={this.setCanvas}
                    width={900}
                    height={600}
                />
            </div>

        );
    }
}

export default Game;