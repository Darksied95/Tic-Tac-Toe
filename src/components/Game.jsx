import { useState } from "react";

import Board from "./Board";
import { calculateWinner } from "./../helpers";

const Game = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [xIsNext, seXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = () => {};
  const jumpTo = () => {};
  const renderMoves = () => {};

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
