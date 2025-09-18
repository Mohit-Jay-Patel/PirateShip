class CannonBall{
    constructor(x,y){
        var option={
            isStatic : true
        }
        this.radius = 30;
        this.cannon_ball = Bodies.circle(x,y,this.radius,option)
        this.ball_img = loadImage("./assets/cannonball.png");
        this.trajectory = [];
        World.add(world,this.cannon_ball);

    }

    display(){
        var pos = this.cannon_ball.position;
        push();
        imageMode(CENTER);
        image(this.ball_img,pos.x,pos.y,this.radius,this.radius);
        pop();

        if(this.cannon_ball.velocity.x > 0 && pos.x > 10 ){
            var position = [pos.x,pos.y];
            this.trajectory.push(position);

        }

        for(var i = 0; i < this.trajectory.length; i++){
            image(this.ball_img,this.trajectory[i][0],this.trajectory[i][1],5,5);
            
        }

        }

    shoot(){
        var newAngle = cannon.a - 29;
        //there are two types of unit of angle - degree and radians
        newAngle = newAngle * (3.14/180);//the newAngle is converted from degrees to radians - as vector only use radians
        //formula of conversion from degrees to radians is - angle in degrees * pi(3.14) / 180
        var velocity = p5.Vector.fromAngle(newAngle);//creates a new 2d vector object with directions set by new angle variable(newAngle)
        console.log(velocity);
        velocity.mult(0.35);//we will reduce the velocity vector by half, as the speed is too high
        Matter.Body.setStatic(this.cannon_ball,false);      
        Matter.Body.setVelocity(this.cannon_ball,{
            x : velocity.x*(180/3.14) , y : velocity.y*(180/3.14)
        });//setVelocity needs value in degree, so it is again converted to degree from radian

        
        
    }
}