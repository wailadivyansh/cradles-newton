class Roof{
constructor(x,y,width,height){
this.body=Bodies.rectangle(x,y,width,height,{isstatic:true});
this.width=width;
this.height=height;
World.add(world,this.body);
}


display(){
Push();
rectmode(CENTER);
fill(128,128,128);
rect(this.body.position.xthis.body.position.y,this.width,this.height);
Pop();
}
}