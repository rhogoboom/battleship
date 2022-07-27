import { Gameboard } from "./Gameboard";

test("gameboard initializes with a list of length 100", () => {
  expect(Gameboard().getBoard().length).toBe(100);
});

test("Gameboard has a method, placeShip, that takes 2 parameters, length and coordinate, and will place a ship on the coordinates if a valid choice", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(3, 0);
  expect(testBoard.getBoard()[0].occupied).toBe(true);
});

test("placeShip will not place a ship out of bounds horizontally", () => {
  const errorTest = () => {
    const testBoard = Gameboard();
    testBoard.placeShip(3, 9);
  };
  expect(errorTest).toThrow("Out of bounds");
});

test("placeShip will not place a ship out of bounds vertically", () => {
  const errorTest = () => {
    const testBoard = Gameboard();
    testBoard.placeShip(3, 71, false);
  };
  expect(errorTest).toThrow("Out of bounds");
});

test("placeShip will not place a in a range that is already occupied horizontally", () => {
  const errorTest = () => {
    const testBoard = Gameboard();
    testBoard.placeShip(3, 0);
    testBoard.placeShip(3, 2);
  };
  expect(errorTest).toThrow("Tried to place ship in an occupied square");
});

test("placeShip will not place a in a range that is already occupied horizontally", () => {
  const errorTest = () => {
    const testBoard = Gameboard();
    testBoard.placeShip(3, 15);
    testBoard.placeShip(3, 5, false);
  };
  expect(errorTest).toThrow("Tried to place ship in an occupied square");
});

test("Gameboard has a method, recieveAttack, that takes 1 parameter, coordinate, and will register a hit on the correct ship if hit", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(3, 0);
  testBoard.recieveAttack(2);

  expect(testBoard.getShips()[0].getHits()).toStrictEqual([false, false, true]);
});

test("Gameboard has a method, recieveAttack, that takes 1 parameter, coordinate, and will record a miss if no ship exists in position", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(3, 0);
  testBoard.recieveAttack(15);

  expect(testBoard.getMisses()).toStrictEqual([15]);
});
test("Gameboard has a method, allSunk, that will report if all ships are sunk", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(3, 5);
  testBoard.recieveAttack(5);
  testBoard.recieveAttack(6);
  testBoard.recieveAttack(7);

  expect(testBoard.allSunk()).toBe(true);
});

test("Gameboard has a method, allSunk, that will report if all ships are sunk", () => {
  const testBoard = Gameboard();
  testBoard.placeShip(3, 5);
  testBoard.placeShip(4, 20);

  testBoard.recieveAttack(5);
  testBoard.recieveAttack(6);
  testBoard.recieveAttack(7);

  testBoard.recieveAttack(20);
  testBoard.recieveAttack(21);
  testBoard.recieveAttack(22);
  testBoard.recieveAttack(23);

  expect(testBoard.allSunk()).toBe(true);
});
