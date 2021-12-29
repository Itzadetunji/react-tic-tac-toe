import React ,{useState} from "react";
import {calculateWinner} from "../helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext? "X" : "0";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historypoint[stepNumber];
    const squares = [...current];
    // Return if won or occupied
    if(winner || squares[i]) return;
    //select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => {
    history.map((_step, move) => {
      const destination = move ?
    })
  }

  return (
    <>
      <h1>React Ric-Tac-Toe with hooks</h1>\
      <Board squares={history[stepNumber]} onClick={handleClick}/>
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
      </div>
    </>
  )
};

export default Game;