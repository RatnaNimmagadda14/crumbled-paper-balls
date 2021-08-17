
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   gnd=new Ground(800,680,1500,20)
 left=new Ground(1000,600,20,200)
 right=new Ground(1300,600,20,200)
      
 var ball_options={
	 isStatic:false,
	 restitution:0.5,
	 density:1
 }
  ball=Bodies.circle(250,100,20,ball_options)
  World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  gnd.display()
  left.display()
  right.display()
  drawSprites();
 ellipse(ball.position.x,ball.position.y,20)
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(ball,ball.position,{x:70,y:-70})
}
}


