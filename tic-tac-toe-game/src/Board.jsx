import { useState } from "react";
import { useGameContext } from "./GameContext"; // Import the custom hook to access game state
import { motion } from "framer-motion"; // Import motion for animation

const Board = ({ index }) => {
    const { board, handleCellClick, winningLine } = useGameContext(); // Access game state via the hook
    const [isFlipped, setIsFlipped] = useState(false); // Track flip state for animation
    const [showMove, setShowMove] = useState(false); // Track whether to show the move (X or O)

    const cellAnimation = {
        rotateY: isFlipped ? 180 : 0, // Rotate the cell on click
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    // Handle cell click and animation logic
    const handleClick = () => {
        if (!board[index] && !isFlipped) {
            // Start the animation of rotating the cell
            setIsFlipped(true);

            // Delay rendering the move (X or O) after rotation finishes
            setTimeout(() => {
                handleCellClick(index); // Update the board
                setShowMove(true); // Show the X or O
            }, 800); // Set timeout duration equal to the animation duration
        }
    };

    return (
        <motion.div
            className={`cell ${winningLine.includes(index) ? "winner" : ""}`}
            onClick={handleClick}
            style={{ perspective: "500px" }} // Set perspective for 3D effect
            animate={cellAnimation} // Trigger animation when clicked
            onAnimationComplete={() => setShowMove(true)} // Show the move after animation completes
        >
            {/* Render X or O with a delay */}
            {showMove && (
                <span className={`move ${board[index] === "X" ? "x" : "o"}`}>
                    {board[index]}
                </span>
            )}
        </motion.div>
    );
};

export default Board;
