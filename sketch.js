var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1200,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1100, 200, 60, height/2);
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));
  deformation = Math.round(0.5 * weight * speed * speed / 22500);
  car.velocityX = speed* 0.5;

}

function draw() { 
  background(0)
  textSize(30);
  text("Speed = " + speed + "kmph", 100, 60);
  text("Weight = " + weight + "kg", 400, 60);
  text("deformation value(lesser is better) = " + deformation, 100, 120);
  if (car.x - wall.x < car.width/2 + wall.width/2 &&
      wall.x - car.x < car.width/2 + wall.width/2){
      car.velocityX = 0;
      if (deformation < 100){
        car.shapeColor = "green";
      }
      if (deformation > 100 && deformation < 180){
        car.shapeColor = "yellow";
      }
      if (deformation > 180){
        car.shapeColor = "red";
      }

      }

  drawSprites();
}