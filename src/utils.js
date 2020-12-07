import { Trans } from "@lingui/macro";

export const calculateNextPlayer = (board) => {
  const xMovesCount = board.filter((c) => c === "X").length;
  const oMovesCount = board.filter((c) => c === "O").length;
  return xMovesCount === oMovesCount ? "X" : "O";
};
export const calculateWinner = (board) => {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  let winner = null;
  winLines.forEach((line) => {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
    }
  });
  return winner;
};

export const defineStatus = (winner, board, nextValue) => {
  return winner ? (
    <Trans>Winner is {winner}!</Trans>
  ) : board.every(Boolean) ? (
    <Trans>Game over</Trans>
  ) : (
    <Trans>Next move: {nextValue}</Trans>
  );
};
