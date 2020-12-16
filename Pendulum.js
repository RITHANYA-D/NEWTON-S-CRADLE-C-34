class Pendulum {
    constructor(x, y) {
    var options = {
        frictionAir : 0.005,
        density     : 0.5,
    };
    this.pendulum = Bodies.circle(x, y, 25, options);
    World.add(world, this.pendulum);
    }

    display() {
      fill("black"); 
      stroke("white");
      ellipse(this.pendulum.position.x, this.pendulum.position.y, 50, 50);
    }
}