import { createContext, useContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        console.error("Error creating Game context");
        return;
    }
    return context;
}

export function GameProvider({ children }) {
    const [game, setGame] = useState({ paused: true })
    const togglePause = () => {
        setGame({ paused: !game.paused })
    }

    return (
        <GameContext.Provider value={{ game, setGame, togglePause }}>
            {children}
        </GameContext.Provider>
    )
}