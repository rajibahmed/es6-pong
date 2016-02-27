import Game from './app/game.js';

let canvas = document.getElementById('main_canvas');

let game = new Game(canvas);

game.start();
