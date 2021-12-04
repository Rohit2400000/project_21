var ball;
var groundObj
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world


function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new Ground(width/2,670,width,20);
	leftSide=new Ground(500,600,20,120);
	rightSide=new Ground(700,600,20,120);
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:0.5
	}

	ball=Matter.Bodies.circle(100,100,20, ball_options) 
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
   Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipseMode(RADIUS)	
  ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:5,y:5},{x:15,y:5})
	}
}

