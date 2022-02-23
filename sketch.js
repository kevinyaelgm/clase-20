
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var roca;
var suelo2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var roca2 ={
    restitution: 3
    };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,roca2);
  World.add(world,ball);

  roca = Bodies.circle(300,10,30,ball_options);
World.add(world,roca);

  suelo2 = Bodies.rectangle(300,200,200,10,ground_options);
World.add(world,suelo2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(roca.position.x,roca.position.y,30);
  rect(suelo2.position.x,suelo2.position.y,200,10);
 
}

