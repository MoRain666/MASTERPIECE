import React from 'react';

import ChoseSpellsWindow from "./chose-spells-window"
import initDrawer from "./GameAnimation";

import openChose from "./assets/open-choose.png"
import {ATTACK_MONSTER, GAME_STATE_LOSE,} from './const'
import './styles.css';
import '../../../music/bg_music.wav'
import RiddleWindow from './RiddleWindow'


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choseSpellsWindowVisible: false,
            attackId: null,
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
        if (gameState === GAME_STATE_LOSE) {

        }
    };

    onImageClick = () => {
        this.setState((prevState) => {
            return {
                choseSpellsWindowVisible: !prevState.choseSpellsWindowVisible,
            }
        })
    };

    onAttackSelect = (attackId) => {
        this.setState({
            choseSpellsWindowVisible: false,
            attackId,
        });
    };

    onAnswer = (rightAnswer) => {
        const {attackId} = this.state;
        this.setState({attackId: null});

        if (rightAnswer) {
            this.drawer.decMonsterHealth();
            this.drawer.startAttack(attackId);
        } else {
            this.drawer.decHeroHealth();
            this.drawer.startAttack(ATTACK_MONSTER);
        }
    };


    render() {
        return (
            <div className="GamePage">
                {this.state.attackId !== null && (
                    <RiddleWindow
                        attackId={this.state.attackId}
                        onAnswer={this.onAnswer}
                    />
                )}

                {this.state.riddleWindow}
                <img src={openChose} className='OpenChooseWindow' onClick={this.onImageClick}/>
                {this.state.choseSpellsWindowVisible && (
                    <ChoseSpellsWindow
                        onAttackSelect={this.onAttackSelect}
                    />
                )}
                {/*<audio ref="audio_tag" src={music} autoPlay loop={music}/>*/}
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