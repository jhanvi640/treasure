var tower, towerImage, door, doorImage , doorGroup, climber , climberImage , climberGroup , ghost , ghostImage;
function preload(){
  towerImage = loadImage("tower.png")
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  ghostImage = loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600)
  tower = createSprite(300,300)
  tower.addImage("tower" , towerImage)
  tower.velocityY = 1;
  
  ghost = createSprite(200,200)
  ghost.addImage("ghost" , ghostImage)
  ghost.scale = 0.3;
  
  doorGroup = new Group()
  climberGroup = new Group()
}

function draw(){
  if(tower.y > 400){
     tower.y = 300
     }
  spawnDoor();
  drawSprites();
}

function spawnDoor(){
  if(frameCount%240===0){
  door = createSprite(200,-50) 
  door.addImage("door", doorImage)
  door.velocityY = 1;
  door.x = Math.round(random (120,400))
  doorGroup.add(door)
 
  climber = createSprite(200,10)
  climber.addImage("climber" , climberImage )
  climber.velocityY =1;
  climber.x = door.x;
  climberGroup.add(climber)
  door.lifetime = 800;
  climber.lifetime = 800;
  
   door.depth = ghost.depth ;
  ghost.depth  = ghost.depth +1;
  climber.depth = ghost.depth;
  ghost.depth = ghost.depth +1;
  }
  
}