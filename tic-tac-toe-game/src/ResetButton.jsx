import React from "react";
import { useGameContext } from "./GameContext"; // Import custom hook

const ResetButton = () => {
    const { resetGame } = useGameContext(); // Access the resetGame function from the context

    return (
        <button className="reset-button" onClick={resetGame}>
            Restart Game
        </button>
    );
};

export default ResetButton;
