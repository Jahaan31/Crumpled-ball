class Ball{
    constructor(x,y,r){
    
        var options={
            density:0.4
        }

    this.body = Bodies.circle(x,y,r,options);
    
    this.r = r;
    
    this.balli = loadImage("paper.png");  

    World.add(world, this.body);
    }
    display(){
        imageMode(RADIUS);
        image(this.balli,this.body.position.x, this.body.position.y, this.r, this.r);
    }
    
    }