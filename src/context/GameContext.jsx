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
    const [message, setMessage] = useState("");
    const [game, setGame] = useState(
        {
            paused: true,
            isCollided: false
        }
    )

    const [stats, setStats] = useState({
        level: 1,
        lives: 3,
        parts: 0,
        partIcon: "",
        message: ""
    })

    const togglePause = () => {
        setGame({ ...game, paused: !game.paused, isCollided: false })
    }



    const addLive = () => {
        setStats({ ...stats, lives: stats.lives + 1 })
    }

    const removeLive = () => {
        setStats({ ...stats, lives: stats.lives - 1 })
    }

    const addPart = () => {
        setStats({ ...stats, parts: stats.parts + 1 })
    }

    const setPartIcon = (partIcon) => {
        setStats({ ...stats, partIcon: partIcon })
    }


    return (
        <GameContext.Provider value={{ game, stats, message, setGame, togglePause, addLive, removeLive, addPart, setPartIcon, setMessage, setStats }}>
            {children}
        </GameContext.Provider>
    )
}