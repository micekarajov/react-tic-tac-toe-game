import React from "react";
import { GameProvider } from "./GameProvider"; // Import the GameProvider
import GameStatus from "./GameStatus";
import ResetButton from "./ResetButton";
import BoardGrid from "./BoardGrid";

import "./App.css";

function App() {
    return (
        <GameProvider>
            <div className="game-container">
                <GameStatus />
                <BoardGrid />
                <ResetButton />
            </div>
        </GameProvider>
    );
}

export default App;
