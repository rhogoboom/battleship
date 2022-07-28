const UI = () => {
  const initialLoad = () => {
    const rootNode = document.querySelector(".root");
    const boards = document.querySelectorAll(".board");
    boards.forEach((board) => {
      createBoard(board);
    });
  };

  const createBoard = (board) => {
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      row.className = "board-row";
      row.style.width = board.scrollWidth;
      row.style.height = board.scrollHeight;

      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("board-cell");
        row.appendChild(cell);
      }
      board.appendChild(row);
    }
  };

  return { initialLoad };
};

export { UI };
