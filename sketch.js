const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var ball

function setup() {
createCanvas(800,400);
 engine= Engine.create();
 world=engine.world;


 var options={
  isStatic: true

 }

 var option1={
  restitution: 1.0

 }
 ground= Bodies.rectangle(400,380,800,50,options);
 World.add(world,ground);

 console.log(ground.position.x);

 ball=Bodies.circle(200,200,50,option1)
 World.add(world,ball)
}

function draw() {
  background("yellow");
Engine.update(engine)

 rectMode(CENTER)
 rect(ground.position.x,ground.position.y, 800,50);


 circle(ball.position.x,ball.position.y,50)
}
