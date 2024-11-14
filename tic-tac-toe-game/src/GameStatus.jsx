import React from "react";
import { useGameContext } from "./GameContext"; // Import custom hook

const GameStatus = () => {
    const { currentPlayer, gameActive, winningLine } = useGameContext(); // Access the context state

    return (
        <div className="status">
            {gameActive ? (
                <h2>Next player: {currentPlayer}</h2>
            ) : (
                <h2>
                    {winningLine.length > 0
                        ? `Player ${currentPlayer === "X" ? "O" : "X"} wins!`
                        : "It's a Draw!"}
                </h2>
            )}
        </div>
    );
};

export default GameStatus;
