
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400)

  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  console.log(ground.x)
  score = 0;
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {    
background(225);     
 
  stroke("white");
  textSize(20);
  fill("white");
     text("Score:"+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50); 
  
 
  if(ground.x <0 ){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
 
  banana();
  obstacle();

  drawSprites();


}

function banana(){
  if(frameCount%80 === 0){
    var banana = createSprite(300,120,40,10)
        banana.y = Math.round(random(120,200));
banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    banana.lifetime = 400;
    FoodGroup.add(banana);
  }
}

function obstacle(){
  if (frameCount%300 === 0){
    var obstacle = createSprite(200,308,50,50);
    obstacle.velocityX = -5;
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
  }
}



