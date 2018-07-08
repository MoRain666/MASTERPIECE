import {LEGS, BODY, HEAD, WEAPON} from "./monsterParts";
import preloadImg from '../promises/imgPreloader';

function createMonster() {
    let leg = LEGS.sort(() => 0.5 - Math.random())[0];
    let body = BODY.sort(() => 0.5 - Math.random())[0];
    let head = HEAD.sort(() => 0.5 - Math.random())[0];
    let weapon = WEAPON.sort(() => 0.5 - Math.random())[0];

    return Promise.all([
        preloadImg(leg),
        preloadImg(body),
        preloadImg(head),
        preloadImg(weapon),
    ]).then(([leg, body, head, weapon]) => ({
        leg, body, head, weapon
    }))
}

export default createMonster
