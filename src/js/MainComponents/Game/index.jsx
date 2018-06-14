import React from 'react';

import ChoseSpellsWindow from './chose-spells-window';
import initDrawer  from "./GameAnimation";
import './styles.css';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            GameState: 'menu'
        };
    }

    setCanvas = (el) => {
        if (el) {
            initDrawer(el)
                .then((drawer) => {
                    this.drawer = drawer;
                    this.drawer.draw();
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    };

    render(){
        return (
            <div className="GamePage">
                <ChoseSpellsWindow />
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