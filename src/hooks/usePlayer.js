import { useCallback, useState } from "react";

import { STAGE_WIDTH } from "../gameHelpers";

import { randomTetromino, TETROMINOS } from "../tetrominos";

export const usePlayer = () => {
  //action //selector
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });
  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 3, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);
  return [player, updatePlayerPos, resetPlayer];
};
