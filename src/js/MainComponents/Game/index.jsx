import React from 'react';
import { Redirect } from 'react-router-dom';


import ChoseSpellsWindow from "./chose-spells-window";
import initDrawer from "./GameAnimation";

import openChose from "../../../img/assetsForGame/open-choose.png";
import {ATTACK_MONSTER, GAME_STATE_LOSE, GAME_STATE_WIN,} from './const';
import '../../../css/Game/styles.css';
import music from '../../../music/bg_music.wav';
import RiddleWindow from './RiddleWindow';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choseSpellsWindowVisible: false,
            attackId: null,
            gameEnd: false,
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
        if (gameState === GAME_STATE_LOSE || gameState === GAME_STATE_WIN) {
            this.setState({
                redirectURL: gameState === GAME_STATE_WIN ? '/win' : '/lost',
                gameEnd: true
            });
        }

    };

    onImageClick = () => {
        this.setState((prevState) => {
            return {
                choseSpellsWindowVisible: !prevState.choseSpellsWindowVisible,
            };
        });
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
            this.drawer.startAttack(attackId);
            setTimeout(() => {
                this.drawer.decMonsterHealth();
            }, 2000)
        } else {
            this.drawer.startAttack(ATTACK_MONSTER);
            setTimeout(() => {
                this.drawer.decHeroHealth();
            }, 2000);
        }
    };


    render() {
        if (this.state.gameEnd) {
            return <Redirect to={this.state.redirectURL} />
        }
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
                {<audio ref="audio_tag" src={music} autoPlay loop={music}/>}
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