var movingRectangle,fixedRectangle;


function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor = "green";
  movingRectangle=createSprite(200, 150, 50, 50);
  movingRectangle.shapeColor = "green";
}

function draw() {
  background(0); 
  movingRectangle.x=World.mouseX 
  movingRectangle.y=World.mouseY
  console.log(movingRectangle.x - fixedRectangle.x);
  console.log((movingRectangle.width + fixedRectangle.width)/2);
  if(movingRectangle.x - fixedRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2 &&
  fixedRectangle.x - movingRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2 &&
  fixedRectangle.y - movingRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2 &&
  movingRectangle.y - fixedRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2
  ){
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }else{
    fixedRectangle.shapeColor = "green";
    movingRectangle.shapeColor = "green";
  }
  drawSprites();
}