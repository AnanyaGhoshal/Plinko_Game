const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;

var canvas;

var divisions = []; 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score;
var particle;
var gameState = "play";

function setup() {

  createCanvas(800,800);
  
 canvas =  createSprite(400,400,800,800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    score = 0;
         
}
 


function draw() {

  drawSprites();
  background("black");
  textSize(20)
  

  fill(255);
  textSize(30);
  text(500,15,550);
  text(500,95,550);
  text(500,175,550);
  text(500,255,550);
  text(100,335,550);
  text(100,415,550);
  text(100,495,550);
  text(200,575,550);
  text(200,655,550);
  text(200,735,550);

  Engine.update(engine);

  mousePressed();
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 if(frameCount%160===0){
   particles.push(new Particle(random(width/2-30, width/2+30),5,5));
   score++;
 }

  for (var j = 0; j < particles.length; j++) {
 
   particles[j].display();
 }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   

  
}

function mousePressed(){

  text("Score : "+score,20,30);

  if(mousePressedOver(canvas)){

  if(gameState!=="end"){

    particle = new Particle(mouseX,10,5,5);

    if(particle.body.position.x<300){
      score = score+500;
    }

    if(particle.body.position.x>301 && particle.body.position.x<600){

      score = score+100;
    }

    if(particle.body.position.x>601 && particle.body.position.x<900){
      score = score+200;
    }

    if(score===1000){
      textSize(50);
      text("GAMEOVER",280,400);
      gameState = "end";
     }

    particle.display();

    
  }


//  console.log(particle.body);


  }
}