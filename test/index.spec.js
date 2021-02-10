const MarsRover = require("../src/index");
const Position = require("../src/position");
const { Direction } = require("../src/consts");

describe("marsrover", () => {
  test("初始化北方向", () => {
    const marsRover = new MarsRover(new Position(0, 0), Direction.North);
    expect(marsRover.getState()).toEqual({
      x: 0,
      y: 0,
      direction: Direction.North,
    });
  });

  test("初始化南方向", () => {
    const marsRover = new MarsRover(new Position(1, 0), Direction.East);
    expect(marsRover.getState()).toEqual({
      x: 1,
      y: 0,
      direction: Direction.East,
    });
  });
});

describe("Directions", () => {
  describe("向左转", () => {
    test("向左转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.North);
      marsRover.turnLeft();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.West,
      });
    });
    test("向左转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.West);
      marsRover.turnLeft();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.South,
      });
    });
    test("向左转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.East);
      marsRover.turnLeft();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.North,
      });
    });
    test("向左转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.South);
      marsRover.turnLeft();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.East,
      });
    });
  });
  describe("向右转", () => {
    test("向右转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.North);
      marsRover.turnRight();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.East,
      });
    });
    test("向右转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.West);
      marsRover.turnRight();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.North,
      });
    });
    test("向右转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.East);
      marsRover.turnRight();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.South,
      });
    });
    test("向右转", () => {
      const marsRover = new MarsRover(new Position(1, 0), Direction.South);
      marsRover.turnRight();
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.West,
      });
    });
  })
});
