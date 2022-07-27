import { Ship } from "./Ship";

test("ship includes a length", () => {
  const testShip = Ship(3, 2);
  expect(testShip.getLength()).toBe(3);
});

test("ship includes an array of the positions it occupies", () => {
  const testShip = Ship(3, 2);
  expect(testShip.getPositionArray()).toStrictEqual([2, 3, 4]);
});

test("ship includes an array of the positions it occupies if placed vertically", () => {
  const testShip = Ship(3, 2, false);
  expect(testShip.getPositionArray()).toStrictEqual([2, 12, 22]);
});

test("ship had a method, hit, that takes a position and marks it as hit", () => {
  const testShip = Ship(3, 2, false);
  testShip.hit(2);
  expect(testShip.getHits()).toStrictEqual([true, false, false]);
});

test("ship had a method, hit, that takes a position and marks it as hit", () => {
  const testShip = Ship(3, 2, false);
  testShip.hit(15);
  expect(testShip.getHits()).toStrictEqual([false, false, false]);
});

test("ship had a method, isSunk, that returns false if no positions are hit", () => {
  const testShip = Ship(3, 2, false);
  expect(testShip.isSunk()).toBe(false);
});

test("ship had a method, isSunk, that returns false if some positions are hit", () => {
  const testShip = Ship(3, 2, false);
  testShip.hit(2);
  expect(testShip.isSunk()).toBe(false);
});

test("ship had a method, isSunk, that returns true if all positions are hit", () => {
  const testShip = Ship(3, 2, false);
  testShip.hit(2);
  testShip.hit(12);
  testShip.hit(22);
  expect(testShip.isSunk()).toBe(true);
});
