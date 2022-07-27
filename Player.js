import { Gameboard } from "./Gameboard.js";

const Player = (human = true) => {
  const board = Gameboard();
  const isHuman = human;

  const computerAttack = (opponentBoard) => {
    let invalid = true;
    let currentGuess = Math.floor(Math.random() * 100);
    while (invalid) {
      if (!opponentBoard.getBoard()[currentGuess].beenGuessed) {
        invalid = false;
      } else {
        currentGuess = Math.floor(Math.random() * 100);
      }
    }
    return currentGuess;
  };

  const sendAttack = (opponentBoard, coord) => {
    // I don't like having no real determination of the computer needing to exist... if that makes sense.
    coord = coord || computerAttack(opponentBoard);
    opponentBoard.recieveAttack(coord);
  };
  return { sendAttack, board, isHuman };
};

export { Player };
