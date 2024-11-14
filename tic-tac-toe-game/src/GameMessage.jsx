import React, { useContext } from "react";
import { GameContext } from "./GameContext"; // Context for managing game state

const GameMessage = () => {
    const { currentPlayer, gameActive, winner } = useContext(GameContext);

    if (gameActive) {
        return <p>Turn: {currentPlayer}</p>;
    } else if (winner) {
        return <p>{winner} wins!</p>;
    } else {
        return <p>It's a Draw!</p>;
    }
};

export default GameMessage;
