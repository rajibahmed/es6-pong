import $ from 'jquery';

export default class Game{
  keys:{
    32: 'space',
    37: 'left',
    38: 'right',
    39: 'up',
    40: 'down'
  }
  constructor(canvas){
    console.log(canvas);
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;

    this.keyPressed = [];

    $(canvas).on('keyup keydown',function(e){
      var keyName = Game.keys[e.which];

      if(keyName){
        self.keyPressed[keyName] = e.type === 'keydown';
        e.preventDefault();
      }

    });
  }
  start(){
    console.log('Game starting ...');
    
  }
}
