const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  groundObj = new Ground(500, 490, 1000, 15);

  leftG = new Ground(450, 350, 250, 15);
  rightG = new Ground(800, 250, 250, 15);

  var options = {
    isStatic: false,
  };
  polygon = Bodies.circle(50, 450, 20, options);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon, { x: 200, y: 300 });

  fill("lime");
  lbox1 = new Block(350, 320);
  lbox2 = new Block(390, 320);
  lbox3 = new Block(430, 320);
  lbox4 = new Block(470, 320);
  lbox5 = new Block(510, 320);
  lbox6 = new Block(550, 320);
  lbox7 = new Block(390, 270);
  lbox8 = new Block(430, 270);
  lbox9 = new Block(470, 270);
  lbox10 = new Block(510, 270);
  lbox11 = new Block(430, 220);
  lbox12 = new Block(470, 220);
  lbox13 = new Block(450, 170);

  rbox1 = new Block(700, 220);
  rbox2 = new Block(740, 220);
  rbox3 = new Block(780, 220);
  rbox4 = new Block(820, 220);
  rbox5 = new Block(860, 220);
  rbox6 = new Block(900, 220);
  rbox7 = new Block(740, 170);
  rbox8 = new Block(780, 170);
  rbox9 = new Block(820, 170);
  rbox10 = new Block(860, 170);
  rbox11 = new Block(780, 120);
  rbox12 = new Block(820, 120);
  rbox13 = new Block(800, 70);
}

function draw() {
  background("black");
  Engine.update(engine);

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();

  groundObj.display();

  rightG.display();
  leftG.display();

  fill("purple");
  lbox1.display();
  lbox2.display();
  lbox3.display();
  lbox4.display();
  lbox5.display();
  lbox6.display();
  fill("green");
  lbox7.display();
  lbox8.display();
  lbox9.display();
  lbox10.display();
  fill("red");
  lbox11.display();
  lbox12.display();
  fill("blue");
  lbox13.display();

  fill("orange");
  rbox1.display();
  rbox2.display();
  rbox3.display();
  rbox4.display();
  rbox5.display();
  rbox6.display();
  fill("pink");
  rbox7.display();
  rbox8.display();
  rbox9.display();
  rbox10.display();
  fill("lime");
  rbox11.display();
  rbox12.display();
  fill("cyan");
  rbox13.display();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body);
  }
}
