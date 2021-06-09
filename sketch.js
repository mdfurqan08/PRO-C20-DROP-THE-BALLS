                                  //PRO-C20: DROP THE BALLS//
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var plane;

var poly;
var block1;
var block2;
var ro1;
var ro2;
var ro3;
var angle1 = 90;
var angle2 = 90;
var angle3 = 90;
var poly;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.6,
    frictionAir:0.02}


  var ball2_options = {
    restitution: 0.6,
    frictionAir:0.02}
  

  var ball3_options = {
    restitution: 0.6,
    frictionAir:0.02}
  

  var ball4_options = {
    restitution: 0.6,
    frictionAir:0.02}
  

  var ball5_options = {
    restitution: 0.6,
    frictionAir:0.03}
  
   
   var plane_options ={
     isStatic: true}
   
  
  var block1_options={
    isStatic: true }
 

  var block2_options={
    isStatic: true}
  

  var ro1_options={
    isStatic: true}


  var ro2_options={
    isStatic: true}

  var ro3_options={
    isStatic: true}


  fill("orange");
  
  ball = Bodies.circle(200,10,10,ball_options);
  World.add(world,ball);


  ball2 = Bodies.circle(200,10,10,ball2_options);
  World.add(world,ball2);


  ball3 = Bodies.circle(200,10,10,ball3_options);
  World.add(world,ball3);


  ball4 = Bodies.circle(200,10,10,ball4_options);
  World.add(world,ball4);


  ball5 = Bodies.circle(200,10,10,ball5_options);
  World.add(world,ball5);


  block1 = Bodies.rectangle(290,270,90,10,block1_options);
  World.add(world,block1);
  

  block2 = Bodies.rectangle(90,270,90,10,block2_options);
  World.add(world,block2);


  ro1 = Bodies.rectangle(200,140,140,20,ro1_options);
  World.add(world,ro1);
  

  ro2 = Bodies.rectangle(200,140,140,20,ro2_options);
  World.add(world,ro2);


  ro3 = Bodies.rectangle(200,140,140,20,ro3_options);
  World.add(world,ro3);
  
  plane = Bodies.rectangle(200,390,400,20,plane_options);
  World.add(world,plane);


  ellipseMode(RADIUS);
  
}


function draw() 
{
  
  background(51);
  
  Engine.update(engine);

rectMode(CENTER);

  Matter.Body.rotate(ro1,angle1)
  push();
  translate(ro1.position.x,ro1.position.y);
  rotate(angle1);
  rect(0,0,140,20);
  pop();
  angle1 += 0.2;

  Matter.Body.rotate(ro2,angle2)
  push();
  translate(ro2.position.x,ro2.position.y);
  rotate(angle2);
  rect(0,0,140,20);
  pop();
  angle2 += 0.1;

  Matter.Body.rotate(ro3,angle3)
  push();
  translate(ro3.position.x,ro3.position.y);
  rotate(angle3);
  rect(0,0,140,20);
  pop();
  angle3 += 0.3;

  ellipse(ball.position.x,ball.position.y,10);

  ellipse(ball2.position.x,ball2.position.y,10);

  ellipse(ball3.position.x,ball3.position.y,10);

  ellipse(ball4.position.x,ball4.position.y,10);

  ellipse(ball5.position.x,ball5.position.y,10);

  rect(plane.position.x,plane.position.y,400,20);

  rect(block1.position.x,block1.position.y,100,20);

  rect(block2.position.x,block2.position.y,100,20);

  

}