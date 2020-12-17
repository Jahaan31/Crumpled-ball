var ground,ball,side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400,680,800,40);
	ball = new Ball(200,100,56);

	side1 = new Bin(600,585,190,150);
	//side2 = new Bin(500,585,0,0);
	//side3 = new Bin(700,585,0,0);
  
}


function draw() {
background("white");

ball.display();
ground.display();
side1.display();
//side2.display();
//side3.display();
 
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.applyForce(ball.body, ball.body.position, {x:100, y: -160})
}	
}



