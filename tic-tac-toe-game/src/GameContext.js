// src/GameContext.js
import { createContext, useContext } from "react";

// Create the context for the game
export const GameContext = createContext();

// Custom hook to use the GameContext
export const useGameContext = () => useContext(GameContext);
