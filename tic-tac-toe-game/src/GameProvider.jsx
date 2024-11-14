import React, { useState } from "react";
import { GameContext } from "./GameContext"; // Import the context

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winningLine, setWinningLine] = useState([]);
    const [gameActive, setGameActive] = useState(true);

    // Handle click on a cell
    const handleCellClick = (index) => {
        if (board[index] || !gameActive) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winner = calculateWinner(newBoard);
        if (winner) {
            setWinningLine(winner.line);
            setGameActive(false);
        } else if (newBoard.every((cell) => cell)) {
            setGameActive(false); // Draw if all cells are filled and no winner
        } else {
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    };

    // Reset the game
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinningLine([]);
        setGameActive(true);
    };

    // Utility function to calculate the winner
    const calculateWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // Rows
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // Columns
            [0, 4, 8],
            [2, 4, 6], // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return { winner: board[a], line: combination };
            }
        }
        return null;
    };

    return (
        <GameContext.Provider
            value={{
                board,
                currentPlayer,
                winningLine,
                gameActive,
                handleCellClick,
                resetGame,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
