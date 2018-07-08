import {
    ATTACK_FIRE,
    ATTACK_GROUND,
    ATTACK_WATER,
    ATTACK_WIND,
    GAME_STATE_ATTACK,
    GAME_STATE_INITIAL,
    GAME_STATE_LOSE,
    GAME_STATE_WIN
} from '../../constants';
import createMonster from '../scriptsForMonsters/createMonster'
import createMonsterName from '../scriptsForMonsters/createMonsterName'

const requestAnimFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        callback();
    };

class Drawer {

    constructor(canvas, monster, monsterName, bgLevel1, bgLevel2, bgLevel3, bgLevel4, bgLevel5, hero, cloud, wave, wind, earthquak, fire, fist, boss, onGameStateChanged) {
        this.context = canvas.getContext('2d');
        this.draw = this.draw.bind(this);
        this.gameState = GAME_STATE_INITIAL;
        this.levelId = 1;
        this.bgLevel1 = bgLevel1;
        this.bgLevel2 = bgLevel2;
        this.bgLevel3 = bgLevel3;
        this.bgLevel4 = bgLevel4;
        this.bgLevel5 = bgLevel5;
        this.bgAttr = {
            img: bgLevel1,
            x1: 0,
            x2: -900
        };
        this.hero = hero;
        this.heroAttr = {
            y: 290,
            moveDown: true
        };
        this.cloudOne = cloud;
        this.cloudOneAttr = {
            x: 0,
            moveRight: true
        };
        this.cloudTwo = cloud;
        this.cloudTwoAttr = {
            x: 580,
            moveRight: true
        };
        this.headAttr = {
            y: 230,
            moveDown: true
        };
        this.boss = boss;
        this.bossAttr = {
            y: 160,
            moveDown: true
        };
        this.helthWidthHero = 200;
        this.helthWidthMonster = 200;
        this.wave = wave;
        this.wind = wind;
        this.earthquak = earthquak;
        this.fire = fire;
        this.fist = fist;
        this.onGameStateChanged = onGameStateChanged;
        this.monster = monster;
        this.monsterName = `${monsterName.first} ${monsterName.two} ${monsterName.third}`;
        this.bossLevel = false;
    }

    draw() {
        this.context.clearRect(0, 0, 900, 600);

        this.drawLevelBackground();

        this.bgAttr.x1 += 1;
        if (this.bgAttr.x1 >= 900) {
            this.bgAttr.x1 = -900;
        }
        this.bgAttr.x2 += 1;
        if (this.bgAttr.x2 >= 900) {
            this.bgAttr.x2 = -900;
        }

        this.drawHealthBar(30, 30, this.helthWidthHero);
        this.drawHealthBar(670, 30, this.helthWidthMonster);

        this.context.fillStyle = '#AB0000';
        this.context.font = "26px anton";
        this.context.fillText(this.monsterName, 680, 100);
        this.context.fillText(localStorage.getItem('currentUser'), 30, 100);

        this.context.drawImage(this.hero, 65, this.heroAttr.y, 180, 230);
        if (this.heroAttr.moveDown) {
            this.heroAttr.y += 0.2;
            if (this.heroAttr.y >= 300) {
                this.heroAttr.moveDown = false;
            }
        } else {
            this.heroAttr.y -= 0.2;
            if (this.heroAttr.y <= 280) {
                this.heroAttr.moveDown = true;
            }
        }

        if (this.bossLevel) {
            this.drawBoss();
        } else {
            this.drawMonster();
        }

        if (this.gameState === GAME_STATE_ATTACK) {
            this.drawAttack()
        }

        setTimeout(() => requestAnimFrame(this.draw), 1000 / 60);
    }

    drawMonster() {
        this.context.drawImage(this.monster.leg, 680, 430, 120, 100);
        this.context.drawImage(this.monster.body, 670, 320, 140, 140);

        this.context.drawImage(this.monster.head, 660, this.headAttr.y);
        if (this.headAttr.moveDown) {
            this.headAttr.y += 0.3;
            if (this.headAttr.y >= 240) {
                this.headAttr.moveDown = false;
            }
        } else {
            this.headAttr.y -= 0.3;
            if (this.headAttr.y <= 220) {
                this.headAttr.moveDown = true;
            }
        }

        this.context.drawImage(this.monster.weapon, 780, 350, 90, 90);
    }

    drawBoss() {
        this.context.drawImage(this.boss, 450, this.bossAttr.y, 450, 450);
        if (this.bossAttr.moveDown) {
            this.bossAttr.y += 0.5;
            if (this.bossAttr.y >= 180) {
                this.bossAttr.moveDown = false;
            }
        } else {
            this.bossAttr.y -= 0.5;
            if (this.bossAttr.y <= 150) {
                this.bossAttr.moveDown = true;
            }
        }
    }

    changeGameState(gameState) {
        this.gameState = gameState;
        this.onGameStateChanged(gameState)
    }

    startAttack(attackId) {
        this.attackAttrs = {
            id: attackId
        };
        this.changeGameState(GAME_STATE_ATTACK);
        if (attackId === ATTACK_WIND) {
            this.attackAttrs.drawCount = 70;
            this.attackAttrs.drawAttrs = {
                x: 570,
                sprite: this.wind,
            }
        } else if (attackId === ATTACK_FIRE) {
            this.attackAttrs.drawCount = 80;
            this.attackAttrs.drawAttrs = {
                x: 600,
                y: 0,
                sprite: this.fire,
            }
        } else if (attackId === ATTACK_GROUND) {
            this.attackAttrs.drawCount = 50;
            this.attackAttrs.drawAttrs = {
                y: 0,
                x: 400,
                sprite: this.earthquak,
            }
        } else if (attackId === ATTACK_WATER) {
            this.attackAttrs.drawCount = 30;
            this.attackAttrs.drawAttrs = {
                x: 0,
                sprite: this.wave,
            }
        } else {
            this.attackAttrs.drawCount = 25;
            this.attackAttrs.drawAttrs = {
                x: 600,
                sprite: this.fist,
            }
        }
    }

    drawAttack() {
        if (this.attackAttrs.id === ATTACK_WIND) {
            this.drawWindAttack(this.attackAttrs.drawAttrs);
        } else if (this.attackAttrs.id === ATTACK_FIRE) {
            this.drawFireAttack(this.attackAttrs.drawAttrs)
        } else if (this.attackAttrs.id === ATTACK_GROUND) {
            this.drawEarthquakeAttack(this.attackAttrs.drawAttrs)
        } else if (this.attackAttrs.id === ATTACK_WATER) {
            this.drawWaveAttack(this.attackAttrs.drawAttrs)
        } else {
            this.drawMonsterAttack(this.attackAttrs.drawAttrs);
        }
        this.attackAttrs.drawCount -= 1;
        if (this.attackAttrs.drawCount <= 0) {
            this.changeGameState(GAME_STATE_INITIAL);
            this.attackAttrs = undefined
        }
    }

    drawLevelBackground() {
        if (this.levelId === 1) {
            this.drawAirBackground();
        } else if (this.levelId === 2) {
            this.drawFireBackground();
        } else if (this.levelId === 3) {
            this.drawGroundBackground();
        } else if (this.levelId === 4) {
            this.drawWaterBackground();
        } else {
            this.drawBossBackground();
        }
    }

    drawAirBackground() {
        this.context.drawImage(this.bgLevel1, this.bgAttr.x1, 0);
        this.context.drawImage(this.bgLevel1, this.bgAttr.x2, 0);
        this.context.drawImage(this.cloudOne, this.cloudOneAttr.x, 420, 300, 230);
        if (this.cloudOneAttr.moveRight) {
            this.cloudOneAttr.x += 0.3;
            if (this.cloudOneAttr.x >= 10) {
                this.cloudOneAttr.moveRight = false;
            }
        } else {
            this.cloudOneAttr.x -= 0.3;
            if (this.cloudOneAttr.x <= 0) {
                this.cloudOneAttr.moveRight = true;
            }
        }

        this.context.drawImage(this.cloudTwo, this.cloudTwoAttr.x, 420, 300, 230);
        if (this.cloudTwoAttr.moveRight) {
            this.cloudTwoAttr.x += 0.5;
            if (this.cloudTwoAttr.x >= 590) {
                this.cloudTwoAttr.moveRight = false;
            }
        } else {
            this.cloudTwoAttr.x -= 0.5;
            if (this.cloudTwoAttr.x === 570) {
                this.cloudTwoAttr.moveRight = true;
            }
        }
    }

    drawFireBackground() {
        this.context.drawImage(this.bgLevel2, this.bgAttr.x1, 0);
        this.context.drawImage(this.bgLevel2, this.bgAttr.x2, 0);
    }

    drawGroundBackground() {
        this.context.drawImage(this.bgLevel3, this.bgAttr.x1, 0);
        this.context.drawImage(this.bgLevel3, this.bgAttr.x2, 0);
    }

    drawWaterBackground() {
        this.context.drawImage(this.bgLevel4, this.bgAttr.x1, 0);
        this.context.drawImage(this.bgLevel4, this.bgAttr.x2, 0);
    }

    drawBossBackground() {
        this.context.drawImage(this.bgLevel5, this.bgAttr.x1, 0);
        this.context.drawImage(this.bgLevel5, this.bgAttr.x2, 0);
    }

    drawWindAttack(attrs) {
        this.context.drawImage(attrs.sprite, attrs.x, 200, 300, 370);

        if (attrs.x >= 570) {
            attrs.x = 550;
        } else {
            attrs.x += 5;
        }
    }

    drawFireAttack(attrs) {
        this.context.drawImage(attrs.sprite, attrs.x, attrs.y, 300, 600);

        if (attrs.y >= 600) {
            attrs.y = 0;
        } else {
            attrs.y += 15;
        }
    }

    drawEarthquakeAttack(attrs) {
        this.context.drawImage(attrs.sprite, attrs.x, attrs.y, 600, 550);

        if (attrs.y >= 130) {
            attrs.y = 130;
        } else {
            attrs.y += 30;
        }
    }

    drawWaveAttack(attrs) {
        this.context.drawImage(attrs.sprite, attrs.x, 100, 700, 570);

        if (attrs.x >= 900) {
            attrs.x = -200;
        } else {
            attrs.x += 30;
        }
    }

    drawMonsterAttack(attrs) {
        this.context.drawImage(attrs.sprite, attrs.x, 350, 250, 150);

        if (attrs.x <= -200) {
            attrs.x = 600;
        } else {
            attrs.x -= 30;
        }
    }

    decHeroHealth() {
        this.helthWidthHero -= 40;
        if (this.helthWidthHero <= 0) {
            this.changeGameState(GAME_STATE_LOSE);
        }
    }

    decMonsterHealth() {
        this.helthWidthMonster -= 40;
        if (this.helthWidthMonster <= 0) {
            this.levelId += 1;
            if (this.levelId > 5) {
                this.changeGameState(GAME_STATE_WIN);
            } else if (this.levelId === 5) {
                this.bossLevel = true;
                this.helthWidthMonster = 200;
                this.helthWidthHero = 200;
            } else {
                this.helthWidthMonster = 200;
                this.helthWidthHero = 200;
                createMonster().then(monster => this.monster = monster);
                createMonsterName().then(monsterName => this.monsterName = `${monsterName.first} ${monsterName.two} ${monsterName.third}`);
            }
        }
    }

    drawHealthBar(x, y, val) {
        this.context.fillRect(x, y, val, 30);
    }
}

 export default Drawer
