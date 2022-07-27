import { Ship } from "./Ship.js";

const Gameboard = () => {
  const board = [];
  const ships = [];
  const misses = [];
  for (let i = 0; i < 100; i++) {
    board.push({
      occupied: false,
      beenGuessed: false,
    });
  }

  const getBoard = () => {
    return board;
  };

  const placeShip = (len, coord, horizontal = true) => {
    if (validateChoice(len, coord, horizontal, board)) {
      const newShip = Ship(len, coord, horizontal);
      newShip.getPositionArray().forEach((pos) => {
        board[pos].occupied = true;
      });
      ships.push(newShip);
    }
  };

  const validateChoice = (len, coord, horizontal) => {
    //Check if out of bounds
    if (
      horizontal &&
      Math.floor((coord + len) / 10) !== Math.floor(coord / 10)
    ) {
      throw new Error("Out of bounds");
    } else if (!horizontal && coord + len * 10 > 100) {
      throw new Error("Out of bounds");
    }
    //Check if any squares already occupied

    if (horizontal) {
      for (let i = 0; i < len; i++) {
        let currentPos = coord + i;
        let testBoard = getBoard();
        if (testBoard[currentPos].occupied) {
          throw new Error("Tried to place ship in an occupied square");
        }
      }
    } else {
      for (let i = 0; i < len; i++) {
        let currentPos = coord + i * 10;
        let testBoard = getBoard();

        if (testBoard[currentPos].occupied) {
          throw new Error("Tried to place ship in an occupied square");
        }
      }
    }
    return true;
  };

  const getShips = () => {
    return ships;
  };
  const getMisses = () => {
    return misses;
  };

  const recieveAttack = (coord) => {
    if (getBoard()[coord].beenGuessed) {
      return;
    }
    board[coord].beenGuessed = true;
    const currentShips = getShips();
    const hitShip = currentShips.filter((elem) => {
      return elem.getPositionArray().includes(coord);
    });
    if (hitShip.length > 0) {
      hitShip[0].hit(coord);
    } else {
      misses.push(coord);
    }
  };

  const allSunk = () => {
    return getShips().every((ship) => {
      return ship.isSunk();
    });
  };

  return { getBoard, placeShip, recieveAttack, getShips, getMisses, allSunk };
};

export { Gameboard };
