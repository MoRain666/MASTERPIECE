import React from 'react';
import {Redirect} from 'react-router-dom';

import './gamePageStyleSheet.css';

import ModalWindow from "../../ModalWindow";
import initDrawer from "../gameScripts/promises/initDrawer";
import openChose from "./img/open-choose.png";
import {ATTACK_MONSTER, ATTACKS, GAME_STATE_LOSE, GAME_STATE_WIN,} from '../constants';
import music from './music/bg_music.wav';
import TaskView from '../taskView/tasksView';
import LoadingScreen from "../../LoadingScreen";

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

    onAnswer = (rightAnswer) => {
        const {attackId} = this.state;
        this.setState({attackId: null});

        if (rightAnswer) {
            this.drawer.startAttack(attackId);
            setTimeout(() => {
                this.drawer.decMonsterHealth();
            }, 3000)
        } else {
            this.drawer.startAttack(ATTACK_MONSTER);
            setTimeout(() => {
                this.drawer.decHeroHealth();
            }, 3000);
        }
    };

    onAttackClick = (ind) => {
        return () => {
            this.setState({
                choseSpellsWindowVisible: false,
                attackId: ATTACKS[ind].id,
            });
        }
    };


    render() {
        if (this.state.gameEnd) {
            return <Redirect to={this.state.redirectURL}/>
        }
        return (

            <LoadingScreen>
            <div className="game-field">
                {this.state.attackId !== null && (
                    <TaskView
                        attackId={this.state.attackId}
                        onAnswer={this.onAnswer}
                    />
                )}
                {this.state.riddleWindow}
                <img src={openChose} className="open-choose-task-img" onClick={this.onImageClick}/>
                <ModalWindow
                    isOpen={this.state.choseSpellsWindowVisible}
                >
                    {ATTACKS.map((attack, ind) => {
                        return (
                            <div
                                key={ind}
                            >
                                <img
                                    onClick={this.onAttackClick(ind)}
                                    src={attack.src}
                                    className="choose-task-img"
                                    alt="choose-task-img"
                                />
                            </div>
                        )
                    }).slice(0, 4)}
                </ModalWindow>
                {<audio ref="audio_tag" src={music} autoPlay loop={music}/>}
                <canvas
                    className="canvas"
                    ref={this.setCanvas}
                    width={900}
                    height={600}
                />
            </div>
            </LoadingScreen>
        );
    }
}

export default Game;