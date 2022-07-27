const Ship = (len, start, horizontal = true) => {
  const length = len;
  const posistionArray = [];

  if (horizontal) {
    for (let i = 0; i < len; i++) {
      const pos = {
        square: start + i,
        hit: false,
      };
      posistionArray.push(pos);
    }
  } else {
    for (let i = 0; i < len; i++) {
      const pos = {
        square: start + i * 10,
        hit: false,
      };
      posistionArray.push(pos);
    }
  }

  const getLength = () => {
    return length;
  };

  const getPositionArray = () => {
    const tempArray = posistionArray.map(({ square }) => {
      return square;
    });
    return tempArray;
  };

  const getHits = () => {
    const tempArray = posistionArray.map(({ hit }) => {
      return hit;
    });
    return tempArray;
  };

  const hit = (position) => {
    posistionArray.forEach((elem) => {
      if (elem.square === position) {
        elem.hit = true;
      }
    });
  };

  const isSunk = () => {
    return posistionArray.every(({ hit }) => hit === true);
  };

  return { getLength, getPositionArray, hit, getHits, isSunk };
};

export { Ship };
