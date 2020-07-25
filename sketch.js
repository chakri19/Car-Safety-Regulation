//global variables
var wall, car;
var weight, speeed;

function setup() {
  createCanvas(1600,400);

  //speed and weight will be randomized
  speed = random(55,98);
  weight = random(400,1500)

  //assigning properties to the car and wall
  car = createSprite(40, 200, 50, 50);
  wall = createSprite(1350,200,50,height/2);

  //giving velocity to the car
  car.velocityX = speed;
}

function draw() {

  background("black");
  
  //color of wall will be blue
  wall.shapeColor = "blue";

  //condition if the car collides with wall
  if (wall.x - car.x<(car.width+wall.width/2)){
    //car will stop and deform variable will activate using formula
    car.velocityX = 0;
    var deform = 0.5*weight*speed*speed/22500;
    //car will be red if deform is too high
    if (deform>180){
      car.shapeColor = "red";
    }
    //car will be yellow if deform is average
    if (deform<180&&deform>100){
      car.shapeColor = "yellow";
    }
    //car will be green if deform is good
    if (deform<100){
      car.shapeColor = "green";
    }
  }
  
  drawSprites();
}