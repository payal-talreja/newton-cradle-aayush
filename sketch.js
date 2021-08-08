const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;//Create multiple bobs, mulitple ropes varibale here

var engine,world;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
   
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	var op2={
		isStatic:false,
		friction:0,
		density:0.8
		}
    bob1 = Bodies.circle(325, 380, 20,op2);
	World.add(world, bob1);
	rope1=new rope(bob1,roof,-80,0);
	
	World.add(world,rope1);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  rope1.display();//call display() to show ropes here

  
 ellipse(bob1.position.x,bob1.position.y,20);//create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
