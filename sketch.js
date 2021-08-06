const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;  

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
 
function preload(){}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,800,20);
 
  for (var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var i=75; i<=width; i=i+50){
    plinkos.push(new Plinko(i,75));
  }

  for (var i=50; i<=width-10 ; i=i+50){
    plinkos.push(new Plinko(i,175));
  }

  for (var i=75; i<=width; i=i+50){
    plinkos.push(new Plinko(i,275));
  }

  for (var i=50; i<=width-10; i = i + 50){
    plinkos.push(new Plinko(i,375));
  }
}

function draw() {
  strokeWeight(5);
  stroke("yellow");
  background("pink");
  Engine.update(engine);

  for (var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  for (var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }

  ground.display();

  drawSprites();
}