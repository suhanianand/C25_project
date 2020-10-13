
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage= loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.

	ground= new Ground(400,680,800,10);
	paper= new Paper(60,670,20);
	Engine.run(engine);
	//dustbin1 =  new Dustbin(650,600,220,150);
	dustbin2 =  new Dustbin(650,670,200,10);
    dustbin3 = new Dustbin(550,625,10,100);
    dustbin4 = new Dustbin(750,625,10,100);
	
  
}


function draw() {
  rectMode(CENTER);
  background("#81D4FA");
  text(mouseX + ' '+mouseY, mouseX, mouseY);
  
  	paper.display();
	ground.display();
	//dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	dustbin4.display();
	image(dustbinImage,650,560, 245,240);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-75})
	}
}

