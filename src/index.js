const {toLeft, toRight} = require("./directionMap");

module.exports = class MarsRover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }
  getState() {
    return {
      x: this.position.x,
      y: this.position.y,
      direction: this.direction,
    };
  }
  turnLeft() {
    this.direction = toLeft(this.direction)
  }
  turnRight() {
    this.direction = toRight(this.direction)
  }
};
