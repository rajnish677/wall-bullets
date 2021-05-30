var car;
var wall;
var bullet,speed,weight,thickness;
var deformation;
function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 50, 50);
 wall=createSprite(1500, 200, 60,height/2);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
car.velocityX = speed;
wall=createSprite(1200,200,thickness,height/2)



}

function draw() {
  background(255,255,255);



function hasCollided(bullet,wall){
    bulletRightEdege=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdege>=wallLeftEdge){
        return true
    }
    return false

    if(hasCollided(bullet,wall)){
        bullet.velocityX=0;
        var dmage=0.5*weight*speed*speed/(thickness*thickness*thickness);

        if(dmage>10){
            wall.shapeColor(255,0,0)
        }
        if(dmage>10){
            wall.shapeColor(0,255,0)

        }
    }
}
  
  




  drawSprites();
}