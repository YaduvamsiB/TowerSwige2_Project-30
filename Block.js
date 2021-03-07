class Block {
  constructor(x, y, width, height) {
    var options = { isStatic: false };

    this.body = Bodies.rectangle(x, y, 40, 50, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    if (this.body.speed < 3) {
      push();
      rectMode(CENTER);
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0, 0, 40, 50);
      pop();
    } else {
      this.visibility = this.visibility - 5;
      World.remove(world, this.body);
      push();
      tint(255, this.visibility);
      pop();
    }
  }
}
