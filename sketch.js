const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Body       = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var pendulum1 ,pendulum2, pendulum3, pendulum4, pendulum5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {

	createCanvas(800, 655);

	engine = Engine.create();
	world  = engine.world;

  roof = new Roof();

  pendulum1  = new Pendulum(300, 300);
  pendulum2  = new Pendulum(350, 300);
  pendulum3  = new Pendulum(400, 300);
  pendulum4  = new Pendulum(450, 300);
  pendulum5  = new Pendulum(500, 300);

  rope1 = new String(roof.roof, pendulum1.pendulum, -100);
  rope2 = new String(roof.roof, pendulum2.pendulum, -50);
  rope3 = new String(roof.roof, pendulum3.pendulum, 0);
  rope4 = new String(roof.roof, pendulum4.pendulum, +50);
  rope5 = new String(roof.roof, pendulum5.pendulum, +100);

	Engine.run(engine);
  
}


function draw() {

  background("black");

  //roof.display();
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  fill("white");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

//function keyPressed () {
  //if (keyCode === UP_ARROW) {
     // Matter.Body.applyForce(pendulum1.pendulum, pendulum1.pendulum.position, {x:-50, y:-50});
  //}
//
//}

function mouseDragged () {
  Matter.Body.setPosition(pendulum5.pendulum, {x: mouseX, y:mouseY});
}