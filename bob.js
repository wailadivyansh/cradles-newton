class Bob{


    constructor(x,y){
        var options={
isstatic:false,
restitution:1,
friction:0,
density:7.8,
}
this.bodies=bodies.circle(x,y,25,options);
World.add(World,this.body);
    }




display(){
push();
ellipseMode(RADIUS);
fill(254,0,255);
ellipse(this.body.position.xthis.body.position.y,25,25);
Pop();
}
}
