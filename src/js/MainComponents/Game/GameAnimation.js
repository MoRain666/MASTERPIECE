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

function createMonster(legs, body, head, weapon) {
    let leg = legs.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let trunk = body.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let headMonster = head.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let weaponMonster = weapon.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    monster.push(leg, trunk, headMonster, weaponMonster);
    return monster;
}

createMonster(LEGS, BODY, HEAD, WEAPON);


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

    constructor(canvas, bg, leg, body, head, weapon, hero, cloudOne, cloudTwo, wave, wind, earthquak) {
        this.context = canvas.getContext('2d');
        this.leg = leg;
        this.head = head;
        this.body = body;
        this.weapon = weapon;
        this.hero = hero;
        this.cloudOne = cloudOne;
        this.cloudTwo = cloudTwo;
        this.draw = this.draw.bind(this);
        this.speed = 1;
        this.scroll = 0;
        this.imageData = {};
        this.directionCloud = true;
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
            img: bg,
            x1: 0,
            x2: -900
        };
        this.helthWidthHero = 200;
        this.helthWidthMonster = 200;
        this.wave = wave;
        this.waveWidth = 400;
        this.waveX = 0;
        this.wind = wind;
        this.windX = 630;
        this.earthquak = earthquak;
    }

    draw() {
        this.context.clearRect(0, 0, 900, 600);

        this.context.drawImage(this.bgAttr.img, this.bgAttr.x1, 0);
        this.context.drawImage(this.bgAttr.img, this.bgAttr.x2, 0);
        this.bgAttr.x1 += 1;
        if (this.bgAttr.x1 >= 900) {
            this.bgAttr.x1 = -900;
        }
        this.bgAttr.x2 += 1;
        if (this.bgAttr.x2 >= 900) {
            this.bgAttr.x2 = -900;
        }

        this.context.fillRect(30,30,this.helthWidthHero,30);
        this.context.fillRect(670,30,this.helthWidthMonster,30);

        this.context.fillStyle = '#AB0000';

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

        setTimeout(() => requestAnimFrame(this.draw), 1000 / 60);
    }

    drawWindAttack() {
        this.context.drawImage(this.wind, this.windX, 250, 200, 270);
        if (this.windX >= 640) {
            this.windX = 620;
        } else {
            this.windX += 5;
        }
    }

    drawWaveAttack() {
        this.context.drawImage(this.wave, this.waveX, 340, this.waveWidth, 270);
        if (this.waveX >= 900) {
            this.waveX = -200;
        } else {
            this.waveX += 5;
        }
    }

    drawEarthquakeAttack() {
        this.context.drawImage(this.earthquak, 640, 450, 200, 210);
    }

    drawHelthBarHero(num) {
        this.helthWidthHero -= num*2;
        if (this.helthWidthHero <= 0) {

        }
    }

    drawHelthBarMonster(num) {
        this.helthWidthMonster -= num*2;
        if (this.helthWidthMonster <= 0) {

        }
    }
}


function initDrawer(canvas) {
    return Promise.all([
        preloadImg(require(`${imagePath}/level_BG/air.jpg`)),
        preloadImg(monster[0].image),
        preloadImg(monster[1].image),
        preloadImg(monster[2].image),
        preloadImg(monster[3].image),
        preloadImg(require(`${imagePath}/hero.png`)),
        preloadImg(require(`${imagePath}/cloud.png`)),
        preloadImg(require(`${imagePath}/wave.png`)),
        preloadImg(require(`${imagePath}/wind.png`)),
        preloadImg(require(`${imagePath}/earthquak.png`))
    ]).then(([bg, leg, body, head, weapon, hero, cloudOne, wave, wind, earthquak]) => {
        return new Drawer(canvas, bg, leg, body, head, weapon, hero, cloudOne, cloudOne, wave, wind, earthquak);
    })
}


export default initDrawer


