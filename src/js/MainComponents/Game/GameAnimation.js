import {ATTACK_FIRE, ATTACK_GROUND, ATTACK_WATER, ATTACK_WIND, GAME_STATE_ATTACK, GAME_STATE_INITIAL, GAME_STATE_LOSE, GAME_STATE_WIN} from './const'

const imagePath = './assets';


const LEGS = [
    {image: require(`${imagePath}/legs/boots.png`)},
    {image: require(`${imagePath}/legs/gree-legs.png`)},
    {image: require(`${imagePath}/legs/pink-legs.png`)},
    {image: require(`${imagePath}/legs/round-legs.png`)},
    {image: require(`${imagePath}/legs/blue-legs.png`)},
    {image: require(`${imagePath}/legs/two-legs.png`)},
    {image: require(`${imagePath}/legs/yellow-legs.png`)},
];


const BODY = [
    {image: require(`${imagePath}/Body/01.png`)},
    {image: require(`${imagePath}/Body/1.2.png`)},
    {image: require(`${imagePath}/Body/1.3.png`)},
    {image: require(`${imagePath}/Body/1.4.png`)},
    {image: require(`${imagePath}/Body/1.5.png`)},
    {image: require(`${imagePath}/Body/1.6.png`)},
    {image: require(`${imagePath}/Body/1.7.png`)},
];

const HEAD = [
    {image: require(`${imagePath}/head/devil-head.png`)},
    {image: require(`${imagePath}/head/ghost.png`)},
    {image: require(`${imagePath}/head/green-head.png`)},
    {image: require(`${imagePath}/head/hood.png`)},
    {image: require(`${imagePath}/head/monster-head.png`)},
    {image: require(`${imagePath}/head/purple-head.png`)},
    {image: require(`${imagePath}/head/zombie.png`)},
];

const WEAPON = [
    {image: require(`${imagePath}/Weapon/axe.png`)},
    {image: require(`${imagePath}/Weapon/axe-grey.png`)},
    {image: require(`${imagePath}/Weapon/cudgel.png`)},
    {image: require(`${imagePath}/Weapon/silver-sword.png`)},
    {image: require(`${imagePath}/Weapon/spear.png`)},
    {image: require(`${imagePath}/Weapon/sword.png`)},
    {image: require(`${imagePath}/Weapon/thor-mjolnir.png`)},
];
let monster = [];
let monsterName = '';

function createMonster(legs, body, head, weapon) {
    let leg = legs.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let trunk = body.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let headMonster = head.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let weaponMonster = weapon.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    monster.push(leg, trunk, headMonster, weaponMonster);
    return monster;
}

createMonster(LEGS, BODY, HEAD, WEAPON);

const FIRST_NAME_MONSTER = ['Ugly', 'Stupid', 'Scary', 'Ill'];
const SECOND_NAME_MONSTER = ['Orc', 'Troll', 'Ghoul', 'Freak'];
const THIRD_NAME_MONSTER = ['Tom', 'Sasha', 'Max', 'Dany'];

function createMonsterNAme(firsName, secondName, thirdName) {
    let first = firsName.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let second = secondName.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let third = thirdName.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    return monsterName = first + ' ' + second + ' ' + third;
}

createMonsterNAme(FIRST_NAME_MONSTER, SECOND_NAME_MONSTER, THIRD_NAME_MONSTER);


const requestAnimFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        callback();
    };


function preloadImg(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        const timeoutId = setTimeout(() => {
            reject(`Can't load ${src}`)
        }, 2000);
        img.onload = function () {
            clearTimeout(timeoutId);
            resolve(img)
        };
    })
}

class Drawer {

    constructor(canvas, bgLevel1, bgLevel2, bgLevel3, bgLevel4, bgLevel5, leg, body, head, weapon, hero, cloudOne, cloudTwo, wave, wind, earthquak, fire, fist, boss, onGameStateChanged) {
        this.context = canvas.getContext('2d');
        this.leg = leg;
        this.head = head;
        this.body = body;
        this.weapon = weapon;
        this.hero = hero;
        this.cloudOne = cloudOne;
        this.cloudTwo = cloudTwo;
        this.bgLevel1 = bgLevel1;
        this.bgLevel2 = bgLevel2;
        this.bgLevel3 = bgLevel3;
        this.bgLevel4 = bgLevel4;
        this.bgLevel5 = bgLevel5;
        this.draw = this.draw.bind(this);
        this.scroll = 0;
        this.gameState = GAME_STATE_INITIAL;
        this.cloudOneAttr = {
            x: 0,
            moveRight: true
        };
        this.cloudTwoAttr = {
            x: 580,
            moveRight: true
        };
        this.headAttr = {
            y: 230,
            moveDown: true
        };
        this.heroAttr = {
            y: 290,
            moveDown: true
        };
        this.bgAttr = {
            img: bgLevel1,
            x1: 0,
            x2: -900
        };
        this.helthWidthHero = 200;
        this.helthWidthMonster = 200;
        this.wave = wave;
        this.wind = wind;

        this.earthquak = earthquak;
        this.fire = fire;
        this.fist = fist;
        this.fistX = 600;
        this.boss = boss;
        this.onGameStateChanged = onGameStateChanged;
        this.levelId = 3;
    }

    changeGameState(gameState) {
        this.gameState = gameState;
        this.onGameStateChanged(gameState)
    }

    startAttack(attackId) {
        this.changeGameState(GAME_STATE_ATTACK);
        this.attackAttrs = {
            id: attackId
        };
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
            this.drawMonsterAttack();
        }
    }

    draw() {
        this.context.clearRect(0, 0, 900, 600);
        //
        // this.context.drawImage(this.bgLevel1, this.bgAttr.x1, 0);
        // this.context.drawImage(this.bgLevel1, this.bgAttr.x2, 0);
        this.drawLevelBackgroundandAttr();

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



        this.context.drawImage(this.leg, 680, 430, 120, 100);
        this.context.drawImage(this.body, 670, 320, 140, 140);


        this.context.drawImage(this.head, 660, this.headAttr.y);
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

        this.context.drawImage(this.weapon, 780, 350, 90, 90);


        this.context.font = "30px Comic Sans MS";
        this.context.fillText(monsterName, 680, 100);
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

        // this.context.drawImage(this.boss, 350, 100, 500, 500);

        if (this.gameState === GAME_STATE_ATTACK) {
            this.drawAttack()
        }


        setTimeout(() => requestAnimFrame(this.draw), 1000 / 60);
    }

    drawAttack() {
        if (this.attackAttrs.id === ATTACK_WIND) {
            this.drawWindAttack(this.attackAttrs.drawAttrs);
            this.drawHelthBarMonster(10);
        } else if (this.attackAttrs.id === ATTACK_FIRE) {
            this.drawFireAttack(this.attackAttrs.drawAttrs)
        } else if (this.attackAttrs.id === ATTACK_GROUND) {
            this.drawEarthquakeAttack(this.attackAttrs.drawAttrs)
        } else if (this.attackAttrs.id === ATTACK_WATER) {
            this.drawWaveAttack(this.attackAttrs.drawAttrs)
        } else {
            this.drawMonsterAttack();
        }
        this.attackAttrs.drawCount -= 1;
        if (this.attackAttrs.drawCount <= 0) {
            this.changeGameState(GAME_STATE_INITIAL);
            this.attackAttrs = undefined
        }
    }

    drawLevelBackgroundandAttr() {
        if (this.levelId === 1) {
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
        } else if (this.levelId === 2) {
            this.context.drawImage(this.bgLevel2, this.bgAttr.x1, 0);
            this.context.drawImage(this.bgLevel2, this.bgAttr.x2, 0);
        } else if (this.levelId === 3) {
            this.context.drawImage(this.bgLevel3, this.bgAttr.x1, 0);
            this.context.drawImage(this.bgLevel3, this.bgAttr.x2, 0);
        } else if (this.levelId === 4) {
            this.context.drawImage(this.bgLevel4, this.bgAttr.x1, 0);
            this.context.drawImage(this.bgLevel4, this.bgAttr.x2, 0);
        } else {
            this.context.drawImage(this.bgLevel5, this.bgAttr.x1, 0);
            this.context.drawImage(this.bgLevel5, this.bgAttr.x2, 0);
        }
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

    drawMonsterAttack() {
        this.context.drawImage(this.fist, this.fistX, 350, 250, 150);
        this.fistX -= 10;
    }

    decHeroHealth() {
        this.helthWidthHero -= 100
        if (this.helthWidthHero <= 0) {
            this.changeGameState(GAME_STATE_LOSE)
        }
    }

    decMonsterHealth() {
        this.helthWidthMonster -= 100
        if (this.helthWidthHero <= 0) {
            this.changeGameState(GAME_STATE_WIN)
        }
    }

    // drawHelthBarHero(num) {
    //     this.helthWidthHero = num * 2;
    //     if (this.helthWidthHero <= 0) {
    //
    //     }
    // }
    //
    // drawHelthBarMonster(num) {
    //     this.helthWidthMonster = num * 2;
    //     if (this.helthWidthMonster <= 0) {
    //         this.levelId += 1;
    //     }
    // }
    //
    drawHealthBar(x, y, val) {
        this.context.fillRect(x, y, val, 30);

    }
}


function initDrawer(canvas, onGameStateChanged) {
    return Promise.all([
        preloadImg(require(`${imagePath}/level_BG/air.jpg`)),
        preloadImg(require(`${imagePath}/level_BG/fire.png`)),
        preloadImg(require(`${imagePath}/level_BG/ground.png`)),
        preloadImg(require(`${imagePath}/level_BG/water.png`)),
        preloadImg(require(`${imagePath}/level_BG/boss_bg.png`)),
        preloadImg(monster[0].image),
        preloadImg(monster[1].image),
        preloadImg(monster[2].image),
        preloadImg(monster[3].image),
        preloadImg(require(`${imagePath}/hero.png`)),
        preloadImg(require(`${imagePath}/cloud.png`)),
        preloadImg(require(`${imagePath}/wave.png`)),
        preloadImg(require(`${imagePath}/wind.png`)),
        preloadImg(require(`${imagePath}/earthquak.png`)),
         preloadImg(require(`${imagePath}/fire.png`)),
        preloadImg(require(`${imagePath}/fist.png`)),
        preloadImg(require(`${imagePath}/boss.png`))
    ]).then(([bgLevel1, bgLevel2, bgLevel3, bgLevel4, bgLevel5, leg, body, head, weapon, hero, cloudOne, wave, wind, earthquak, fire, fist, boss]) => {
        return new Drawer(canvas, bgLevel1, bgLevel2, bgLevel3, bgLevel4, bgLevel5, leg, body, head, weapon, hero, cloudOne, cloudOne, wave, wind, earthquak, fire, fist, boss,
            onGameStateChanged);
    })
}


export default initDrawer


