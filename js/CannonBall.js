class CannonBall{
    constructor(x,y){
        var option={
            isStatic : true
        }
        this.radius = 30;
        this.cannon_ball = Bodies.circle(x,y,this.radius,option)
        this.ball_img = loadImage("./assets/cannonball.png");
        World.add(world,this.cannon_ball);

    }

    display(){
        var pos = this.cannon_ball.position;
        push();
        imageMode(CENTER);
        image(this.ball_img,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}