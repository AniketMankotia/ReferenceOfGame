var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var bullet, bulletImg;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg =  loadImage("assets/zombie.png");
  bulletImg = loadImage("assets/bullet.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//creating the player sprite
   player = createSprite(displayWidth-1150,displayheight-400, 50, 50);
   player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0);

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
  bullet = createSprite(100,400,5,5);
  bullet.addImage(bulletImg);
  bullet.velocityX = 8;
  bullet.scale = 5;
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  player.addImage(shooter_shooting);
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg);
}

spawnZombies();

drawSprites();

}

function spawnZombies(){
  if(frameCount % 400 === 0){
    zombie = createSprite(windowWidth+10,400,40,40);
    zombie.y = Math.round(random(windowHeight-200,windowHeight-400));
    zombie.velocityX = -8;
    zombie.addImage(zombieImg);
    zombie.scale = 0.15;
    zombie.lifetime = 400;
  }
}
