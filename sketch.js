let goundSprite, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world,engine;

let bottom, right, left;
let paperBall, dustbin; 

function preload()
{
	dustbin = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 400);
	
    

	engine = Engine.create();
	world = engine.world;
	paperBall = new Paper(130,330);
	
	bottom = new Dustbin(810,345,200,20); 

	right = new Dustbin(900,285,20,100);
	
	left = new Dustbin(720,285,20,100); 

	ground = new Ground(800, 350, 1000, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  paperBall.display();

  bottom.display();
  right.display();
  left.display();
  
  image(dustbin, 700,245,230,150);
}

function keyPressed() {
	
	if(keyCode === UP_ARROW) {0
		
		Matter.Body.setStatic(paperBall.body, false);
		
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:4,y:-4});
	}
}

