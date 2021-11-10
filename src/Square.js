import { useState } from "react";
import "./Square.css";
const Square = props => {
  const [piece, setPiece] = useState(props.piece);
  // if piece is null <img> is blank
  return (
    <div className={props.color === "light" ? "light" : "dark"}>
      <img src={piece}></img>
    </div>
  );
};

export default Square;
