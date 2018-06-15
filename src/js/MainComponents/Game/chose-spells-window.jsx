import React from 'react';

import './styles.css';

import {ATTACK_FIRE, ATTACK_GROUND, ATTACK_WATER, ATTACK_WIND, ATTACK_MONSTER} from './const'


const ATTACKS = [
    {src: require('./assets/riddleWindow/wind.png'), id: ATTACK_WIND},
    {src: require('./assets/riddleWindow/fire.png'), id: ATTACK_FIRE},
    {src: require('./assets/riddleWindow/ground.png'), id: ATTACK_GROUND},
    {src: require('./assets/riddleWindow/water.png'), id: ATTACK_WATER},
    {id: ATTACK_MONSTER}
];


class ChoseSpellsWindow extends React.Component {

    onAttackClick = (ind) => {
        return () => {
            this.props.onAttackSelect(ATTACKS[ind].id)
        }
    };

    render() {

        return (
            <div className="spells-window">
                {ATTACKS.map((attack, ind) => {
                    return (
                        <div
                            key={ind}
                        >
                            <img
                                onClick={this.onAttackClick(ind)}
                                src={attack.src}
                            />
                        </div>
                    )
                }).slice(0, 4)}
            </div>
        );

    }
}

export default ChoseSpellsWindow;