var bg, bgImg
var shooter_shooting, shooterImg
var player
var zombie,zombieImg
 function preload(){
bgImg=loadImage("assets/bg.jpeg");
shooterImg= loadImage("assets/shooter_2.png");
shooter_shooting = loadImage("assets/shooter_3.png");
zombieImg=loadImage("assets/zombie.png")
    
 }

 function setup(){
   createCanvas(windowWidth, windowHeight);
   bg = createSprite(displayWidth/2 -20, displayHeight/2 -40, 20,20);
   bg.addImage(bgImg);
   bg.scale = 1.1;
   

   player= createSprite(displayWidth-1150,displayHeight-300,50,50 );
   player.addImage(shooterImg);
   player.scale = 0.3;


   zombie = createSprite(1150,800,50,50);
   zombie.addImage(zombieImg);
   zombie.scale = 0.2;



 }

 function draw(){
    background(0) ;
   if(keyDown ("UP_ARROW" )|| touches.length>0){
    player.y=player.y-30;
   }

   if(keyDown ("DOWN_ARROW" )|| touches.length>0){
    player.y=player.y+30;
   }

  if(keyWentDown("space")){
     player.addImage(shooter_shooting);
    
  }
    
  else if(keyWentUp("space")){
    player.addImage(shooterImg);
    
    
  }
                     

   drawSprites();
 }




    


 
 