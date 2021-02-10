class Rope{
constructor(body1,body2,offsetx,offsety){
this.offsetX=ofsetX;
this.offsetY=ofsetY;

var op={
    bodyA:body1,
    bodyB:body2,
pointB:{x:this.offsetx,y:this.offsety}
}
this.rope=Matter.constraint.create(op);
World.add(world,this.rope);
}
display(){
var point1=this.rope.bodyA.position;
var point2=this.rope.bodyB.position;

strokeweight(2);

var Anchor1X=point1.X;
var Anchor1Y=point1.Y;

var Anchor2X=point2.X+this.offsetX;
var Anchor2Y=point2.Y;this.offsety;

line(Anchor1x,Anchor1Y,Anchor2X,Anchor2Y);
}
}