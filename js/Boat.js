class Boat{
    constructor(x,y,width,height,boatpos){
        var rect_option = {
            friction : 1,
            restitution : 0.01,
            density : 1            
        }
        this.body = Bodies.rectangle(x,y,width,height,rect_option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

        this.image = loadImage("./assets/boat.png");
        this.boat_position = boatpos;
        }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.boat_position,this.width,this.height);
        pop();
        

    }
    remove(i){
        setTimeout(
            ()=>{
                Matter.World.remove(world,boats[i].body);
                delete boats[i]; 
            },2000
        );
    }
}