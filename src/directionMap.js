const { Direction } = require("./consts");
const map = {
  [Direction.North]: {
    left: Direction.West,
    right: Direction.East,
  },
  [Direction.West]: {
    left: Direction.South,
    right: Direction.North,
  },
  [Direction.East]: {
    left: Direction.North,
    right: Direction.South,
  },
  [Direction.South]: {
    left: Direction.East,
    right: Direction.West,
  },
};
function toLeft(direction) {
  return map[direction].left;
}
function toRight(direction) {
  return map[direction].right;
}

exports.toLeft = toLeft;
exports.toRight = toRight;
