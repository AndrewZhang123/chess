import Square from "./Square";
import "./Board.css";
import {
  blackBishop,
  blackKing,
  blackKnight,
  blackPawn,
  blackQueen,
  blackRook,
  whiteBishop,
  whiteKing,
  whiteKnight,
  whitePawn,
  whiteQueen,
  whiteRook,
} from "./pieces/pieces";

const Board = () => {
  return generateBoard();
};

// generate starting board of chess game
const generateBoard = () => {
  const arr = generateSquares([]);
  initializePieces(arr);
  return renderBoard(arr);
};

// assumes arr is []. Returns 64 alternating light/dark squares with no pieces
const generateSquares = arr => {
  for (let i = 0; i < 8; i++) {
    arr.push([]);
    const lastCol = arr[arr.length - 1];
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        lastCol.push(["light", null]);
      } else {
        lastCol.push(["dark", null]);
      }
    }
  }
  return arr;
};

// takes in an empty board and initializes it w/ starting state of all chess pieces
const initializePieces = arr => {
  arr[0][0][1] = blackRook;
  arr[0][7][1] = blackRook;
  arr[0][1][1] = blackKnight;
  arr[0][6][1] = blackKnight;
  arr[0][2][1] = blackBishop;
  arr[0][5][1] = blackBishop;
  arr[0][3][1] = blackQueen;
  arr[0][4][1] = blackKing;
  for (let i = 0; i < 8; i++) {
    arr[1][i][1] = blackPawn;
  }

  arr[7][0][1] = whiteRook;
  arr[7][7][1] = whiteRook;
  arr[7][1][1] = whiteKnight;
  arr[7][6][1] = whiteKnight;
  arr[7][2][1] = whiteBishop;
  arr[7][5][1] = whiteBishop;
  arr[7][3][1] = whiteQueen;
  arr[7][4][1] = whiteKing;
  for (let i = 0; i < 8; i++) {
    arr[6][i][1] = whitePawn;
  }
};

// turns board arr into React elements for rendering
const renderBoard = arr => {
  return arr.map(row => {
    return (
      <div className="row">
        {row.map(vals => {
          return <Square color={vals[0]} piece={vals[1]}></Square>;
        })}
      </div>
    );
  });
};

export default Board;
