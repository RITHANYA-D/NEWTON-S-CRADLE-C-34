class Roof {
    constructor() {
    var options = {isStatic : true};
    this.roof   = Bodies.rectangle(400,100,300,10, options);
    World.add(world, this.roof);
    }

    display() {
        rectMode(CENTER);
        rect(this.roof.position.x, this.roof.position.y, 300, 10)
    }
}
