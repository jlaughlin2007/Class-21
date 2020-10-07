var fixedRect, movingRect;
var gameObject1,gameObject2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(1050,1050,40,60);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;
  gameObject1.velocityX = -2;
  gameObject1.velocityY = -2; 
  gameObject2 = createSprite(50,50,40,60);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;
  gameObject2.velocityX = 2;
  gameObject2.velocityY = 2;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(gameObject1,gameObject2);

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  drawSprites();
}
