import React from "react";
import Board from "./Board"; // Import the Board component

const BoardGrid = () => {
    return (
        <div className="board">
            {[...Array(9)].map((_, index) => (
                <Board key={index} index={index} /> // Render 9 cells for the Tic-Tac-Toe board
            ))}
        </div>
    );
};

export default BoardGrid;
