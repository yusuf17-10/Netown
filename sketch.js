
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

var ground;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
  
	bob1 = new Bob (100,220,15,15);
	bob2 = new Bob (130,220,15,15);
	bob3 = new Bob (160,220,15,15);
	bob4 = new Bob (190,220,15,15);
	bob5 = new Bob (220,220,15,15);
	ground = new Ground (160,100,150,10);
    rope=new Chain(bob1.body,ground.body,2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   rope.display();

   ground.display();
    
    
  
  
 
}



