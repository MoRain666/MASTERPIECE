import preloadImg from './imgPreloader';
import createMonster from '../scriptsForMonsters/createMonster';
import createMonsterName from '../scriptsForMonsters/createMonsterName';
import Drawer from '../animationAndLogic/gameAnimation';

function initDrawer(canvas, onGameStateChanged) {
    return Promise.all([
        createMonster(),
        createMonsterName(),
        preloadImg(require(`./img/level_BG/air.jpg`)),
        preloadImg(require(`./img/level_BG/fire.png`)),
        preloadImg(require('./img/level_BG/ground.png')),
        preloadImg(require(`./img/level_BG/water.png`)),
        preloadImg(require(`./img/level_BG/boss_bg.png`)),
        preloadImg(require(`./img/character/hero.png`)),
        preloadImg(require(`./img/additionalImg/cloud.png`)),
        preloadImg(require(`./img/attack/wave.png`)),
        preloadImg(require(`./img/attack/wind.png`)),
        preloadImg(require(`./img/attack/groundAttack.png`)),
        preloadImg(require(`./img/attack/fire.png`)),
        preloadImg(require(`./img/attack/fist.png`)),
        preloadImg(require(`./img/character/boss.png`))
    ]).then(([monster, monsterName, bgLevel1, bgLevel2, bgLevel3, bgLevel4, bgLevel5, hero, cloud, wave, wind, earthquak, fire, fist, boss]) => {
        return new Drawer(canvas, monster, monsterName, bgLevel1, bgLevel2, bgLevel3, bgLevel4, bgLevel5, hero, cloud, wave, wind, earthquak, fire, fist, boss,
            onGameStateChanged);
    })
}

export default initDrawer