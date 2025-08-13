class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.a = angle;
        this.cannon_top = loadImage("./assets/canon.png");
        this.cannon_base = loadImage("./assets/cannonBase.png");
    }

    display(){
        console.log(this.a);
        
        if(keyIsDown(RIGHT_ARROW) && this.a<70){
            this.a += 1;
        }
        if(keyIsDown(LEFT_ARROW) && this.a>-30){
            this.a -= 1;
        }

        push();
        //translate(this.x,this.y);
        rotate(this.a);
        imageMode(CENTER);
        image(this.cannon_top,this.x,this.y,this.w,this.h);
        pop();

        image(this.cannon_base,70,27,200,200);
        noFill();
        

    }
}