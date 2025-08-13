const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var tower , tower_img;
var bg_img;
var cannon;
var cannon_ball;


var angle;

function preload() {
bg_img = loadImage("./assets/background.gif");
tower_img = loadImage("./assets/tower.png")

 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);

  tower = Bodies.rectangle(159,349,160,310,options);
  World.add(world,tower);

  cannon = new Cannon(180,116,130,100,angle);

  cannon_ball = new CannonBall(cannon.x,cannon.y);
 
 
}

function draw() {
  background(189);
  image(bg_img,0,0,1200,600);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);

  push();
  imageMode(CENTER);
  image(tower_img,tower.position.x,tower.position.y,160,310);
  pop();

  cannon.display();

  cannon_ball.display();
  
   
}
