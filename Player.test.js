import { Player } from "./Player";

test("Player can attack another player's board successfully", () => {
  const playerOne = Player(true);
  const playerTwo = Player(true);

  playerTwo.board.placeShip(4, 0);

  playerOne.sendAttack(playerTwo.board, 2);

  expect(playerTwo.board.getShips()[0].getHits()).toStrictEqual([
    false,
    false,
    true,
    false,
  ]);
});

test("Computer can attack a random square", () => {
  const playerOne = Player(true);
  const playerTwo = Player(false);

  playerTwo.board.placeShip(4, 0);

  playerOne.sendAttack(playerTwo.board);

  const guessedBoxes = playerTwo.board.getBoard().filter((elem) => {
    return elem.beenGuessed;
  });

  expect(guessedBoxes.length).toBe(1);
});
