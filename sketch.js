const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var tower , tower_img;
var bg_img;
var cannon;
var cannon_ball;
var balls = [];
var boat;
var boats = [];


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

  cannon = new Cannon(178,112,130,100,angle);

  

  
 
 
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

  
  
  


  showBoats()
   
  for(var i = 0; i < balls.length ; i++){
    showCannonBall(balls[i]);
    collision_of_boat_ball(i);
  }

   cannon.display();
   
   
}

function keyPressed(){
  if(keyCode == DOWN_ARROW){

    cannon_ball = new CannonBall(cannon.x,cannon.y);
    balls.push(cannon_ball);
}
}

function showCannonBall(ball){

  if(ball){
    ball.display();
  }

}

function collision_of_boat_ball(ball_index){
  for(var i = 0;i < boats.length;i++){
    if(balls[ball_index] !== undefined && boats[i] !== undefined){
      console.log(balls[ball_index].body + "In ball index");
      var detect_collision = Matter.SAT.collides(balls[ball_index].body , boats[i].body);
      

      if(detect_collision.collided){
        boats[i].remove(i);

        //Matter.World.remove(world,balls[ball_index].body);
        //delete balls[ball_index];
        }

    }
  }

}

function keyReleased(){
  if(keyCode == DOWN_ARROW){
      console.log("hi");
    balls[balls.length - 1].shoot();
  }


}

function showBoats(){
  if(boats.length > 0){
    if(boats[boats.length - 1] === undefined ||
       boats[boats.length - 1].body.position.x < width - 300){
        var position = [-20,-40,-60,-80,-100,-110];
        var random_pos = random(position);
        console.log(random_pos);
        boat = new Boat(width+40,height-85,170,170,random_pos);
        boats.push(boat);
       }
      
    for(var i = 0; i < boats.length ; i++){
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0});
        boats[i].display();
      }
    }   
   
  }
  else{
    boat = new Boat(width+40,height-85,170,170,-60);
    boats.push(boat);
  }
}