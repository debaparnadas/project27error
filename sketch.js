
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, ground;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		roof = new Roof(300,450,300,30);
		bobObject1 = new Bob(200,650,50);
		bobObject2 = new Bob(250,650,50);
		bobObject3 = new Bob(300,650,50);
		bobObject4 = new Bob(350,650,50);
		bobObject5 = new Bob(400,650,50);
		ground = new Roof(0,750,1600,20);
		rope1 = new Rope(bobObject1.body,roof.body);
		rope2 = new Rope(bobObject2.body,roof.body);
		rope3 = new Rope(bobObject3.body,roof.body);
		rope4 = new Rope(bobObject4.body,roof.body);
		rope5 = new Rope(bobObject5.body,roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  //displaying the bodies
	roof.display();
 	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}



