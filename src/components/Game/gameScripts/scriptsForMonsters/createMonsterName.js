import {FIRST_NAME_MONSTER, SECOND_NAME_MONSTER, THIRD_NAME_MONSTER} from './monsterNameParts'

function createMonsterName() {
    let first = FIRST_NAME_MONSTER.sort(() => 0.5 - Math.random())[0];
    let two = SECOND_NAME_MONSTER.sort(() => 0.5 - Math.random())[0];
    let third = THIRD_NAME_MONSTER.sort(() => 0.5 - Math.random())[0];

    return Promise.all([
        first, two, third
    ]).then(([first, two, third]) => ({
        first, two, third
    }))
}

export default createMonsterName
