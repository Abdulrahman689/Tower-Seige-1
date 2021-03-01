class Block{
    constructor(x,y,width,height){
var options={
 isStatic:false,
 restitution: 0.1,
 friction: 0.01,
 density:0.02
}
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body)
this.x = x
this.y = y
this.width=width
this.height=height
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white")
        rect(pos.x,pos.y,this.width,this.height);
    }
}