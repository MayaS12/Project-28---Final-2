class Stone{

    constructor(x,y){

        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        
        this.body = Bodies.circle(x,y,30/2,options); 
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }

    display(){
        
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
        pop();

    }

}