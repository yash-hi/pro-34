  class Monster{
  constructor(x, y,width,height) {
  var options = {
//'isStatic':true,
  'restitution':0.8,
  'frictionAir':0.1
  }
  this.width=width;
  this.height=height;
  this.image = loadImage("Monster-01.png");
  this.body = Bodies.rectangle(x,y,width,height, options);
  World.add(world, this.body);
  }
  display(){
  push();
  translate(this.body.position.x,this.body.position.y);
  imageMode(CENTER);
  image(this.image,550,0,this.width,this.height);
  pop();
  }
  }