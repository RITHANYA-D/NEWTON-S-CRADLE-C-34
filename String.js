class String {
    constructor(body1, body2, point1) {
    var options = {
        bodyA  : body1,
        bodyB  : body2,
        pointA : {x: point1, y:0}
    };
    this.String = Constraint.create(options);
    this.point1 = point1;
    World.add(world, this.String);
    }

    display() {
      var pointA = this.String.bodyA.position;
      var pointB = this.String.bodyB.position;
      fill("white");
      line(pointA.x + this.point1, pointA.y, pointB.x, pointB.y);
    }
}