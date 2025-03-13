import { useState } from "react";
import "./styles.css";
function Square({ value, onclick }) {
  return (
    <button className="square" onClick={onclick}>
      {value}
    </button>
  );
}

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquare = square.slice();
    nextSquare[i] = "X";
    setSquare(nextSquare);
  }

  return (
    <div>
      <div className="board-row">
        <Square value={square[0]} onclick={() => handleClick(0)} />
        <Square value={square[1]} onclick={() => handleClick(1)} />
        <Square value={square[2]} onclick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onclick={() => handleClick(3)} />
        <Square value={square[4]} onclick={() => handleClick(4)} />
        <Square value={square[5]} onclick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onclick={() => handleClick(6)} />
        <Square value={square[7]} onclick={() => handleClick(7)} />
        <Square value={square[8]} onclick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Board />
    </div>
  );
}
