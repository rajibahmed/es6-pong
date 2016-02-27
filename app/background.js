export default class Background {
  constructor(context, h, w){
    this.context = context;
    this.height = h;
    this.width = w;
  }
  draw(){
    console.log('drawing bg');
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, 300, 300);
  }
}
