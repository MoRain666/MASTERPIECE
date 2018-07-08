export const ATTACK_WIND = '1';
export const ATTACK_FIRE = '2';
export const ATTACK_GROUND = '3';
export const ATTACK_WATER = '4';
export const ATTACK_MONSTER = '5';

export const GAME_STATE_INITIAL = '6';
export const GAME_STATE_ATTACK = '7';
export const GAME_STATE_WIN = '8';
export const GAME_STATE_LOSE = '9';

export const ARITHMETIC = '8';
export const CHOOSE_COLOUR = '9';
export const SEQUENCE = '10';
export const TRANSLATOR = '11';

export const ATTACKS = [
    {src: require('./mainGameView/img/tasks/wind.png'), id: ATTACK_WIND},
    {src: require('./mainGameView/img/tasks/fire.png'), id: ATTACK_FIRE},
    {src: require('./mainGameView/img/tasks/ground.png'), id: ATTACK_GROUND},
    {src: require('./mainGameView/img/tasks/water.png'), id: ATTACK_WATER},
    {id: ATTACK_MONSTER}
];

export const ENTER_KEY = 13;
// export const INPUT_FIELD = document.getElementById('result');

export const SPEED_PREGAME_TEXT = 200;
export const TIME_FOR_REDIRECT_TO_FORM = 45000;
export const TIME_FOR_REDIRECT_TO_GAME = 17000;
export const TIME_TO_START_PREGAME_TEXT = 1000;